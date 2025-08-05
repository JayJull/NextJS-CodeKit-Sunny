import React from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: string;
  children?: MenuItem[];
}

interface AppSidebarProps {
  menuItems: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ menuItems, onItemClick }) => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = React.useState<string[]>([]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const findActiveParent = (items: MenuItem[], path: string): string[] => {
      const parents: string[] = [];

      const search = (menuItems: MenuItem[], parentId?: string) => {
        for (const item of menuItems) {
          if (item.href === path && parentId) {
            parents.push(parentId);
          }
          if (item.children) {
            search(item.children, item.id);
          }
        }
      };

      search(items);
      return parents;
    };

    const activeParents = findActiveParent(menuItems, pathname);
    setOpenItems((prev) => [...new Set([...prev, ...activeParents])]);
  }, [pathname, menuItems]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(theme === "dark" ? "light" : "dark");

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const isActive = (item: MenuItem): boolean => {
    return pathname === item.href;
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isItemActive = isActive(item);
    const isOpen = openItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    if (level === 0 && item.label === "GENERAL") {
      return (
        <SidebarGroup key={item.id}>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2 transition-colors duration-300 ease-in-out">
            {item.label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.children?.map((child) => renderMenuItem(child, 1))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      );
    }

    if (hasChildren && level === 0) {
      return (
        <SidebarGroup key={item.id}>
          <SidebarGroupLabel className="text-sm font-medium text-sidebar-foreground px-3 py-2 transition-colors duration-300 ease-in-out">
            {item.label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.children?.map((child) => renderMenuItem(child, 1))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      );
    }

    if (hasChildren && level === 1) {
      return (
        <SidebarMenuItem key={item.id}>
          <Collapsible open={isOpen} onOpenChange={() => toggleItem(item.id)}>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="menu-item flex items-center gap-3 px-3 py-2 w-full hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground transition-all duration-300 ease-in-out">
                <span className="flex items-center justify-center w-5 h-5 text-muted-foreground transition-colors duration-300 ease-in-out">
                  {item.icon}
                </span>
                <span className="flex-1 text-left text-sm font-medium">
                  {item.label}
                </span>
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className={`badge text-xs px-2 py-0.5 transition-all duration-300 ease-in-out ${
                      item.badge === "New"
                        ? "bg-primary/10 text-primary"
                        : "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
                <div
                  className={`icon-rotate transition-transform duration-200 ease-in-out ${
                    isOpen ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-colors duration-300 ease-in-out" />
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="transition-all duration-300 ease-in-out">
              <SidebarMenuSub>
                {item.children?.map((child) => (
                  <SidebarMenuSubItem key={child.id}>
                    <SidebarMenuSubButton
                      asChild
                      isActive={isActive(child)}
                      className={`menu-item flex items-center gap-3 pr-3 py-2 text-sm hover:bg-sidebar-accent transition-all duration-300 ease-in-out ${
                        isActive(child)
                          ? "active bg-sidebar-primary/10 text-sidebar-primary border-r-2 border-sidebar-primary"
                          : "text-muted-foreground hover:text-sidebar-foreground"
                      }`}
                    >
                      <Link
                        href={child.href || "#"}
                        onClick={() => onItemClick?.(child)}
                        className="flex items-center gap-3 w-full text-left"
                      >
                        <span className="flex items-center justify-center w-5 h-5 transition-colors duration-300 ease-in-out">
                          {child.icon}
                        </span>
                        <span>{child.label}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuItem key={item.id}>
        <SidebarMenuButton
          asChild
          isActive={isItemActive}
          className={`menu-item flex items-center gap-3 px-3 py-2 text-sm hover:bg-sidebar-accent transition-all duration-300 ease-in-out ${
            isItemActive
              ? "active bg-sidebar-primary/10 text-sidebar-primary border-r-2 border-sidebar-primary"
              : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
          }`}
        >
          <Link
            href={item.href || "#"}
            onClick={() => onItemClick?.(item)}
            className="flex items-center gap-3 w-full text-left"
          >
            <span className="flex items-center justify-center w-5 h-5 text-muted-foreground transition-colors duration-300 ease-in-out">
              {item.icon}
            </span>
            <span className="flex-1 font-medium">{item.label}</span>
            {item.badge && (
              <Badge
                variant={item.badge === "New" ? "default" : "secondary"}
                className={`badge text-xs px-2 py-0.5 transition-all duration-300 ease-in-out ${
                  item.badge === "New"
                    ? "bg-primary/10 text-primary"
                    : "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
                }`}
              >
                {item.badge}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar-background transition-all duration-300 ease-in-out">
      <SidebarHeader className="p-4 border-sidebar-border transition-colors duration-300 ease-in-out">
        <div className="flex items-center gap-3">
          <div className="logo-container">
            <Image src={"/logo/logo.png"} alt="Sunny" width={30} height={30} />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground transition-colors duration-300 ease-in-out">
            Sunny
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <div className="space-y-1">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </SidebarContent>

      <div className="p-4 border-sidebar-border transition-colors duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground transition-colors duration-300 ease-in-out">
            © {new Date().getFullYear()} Stellarrize
          </p>
          <Button
            variant="ghost"
            size="icon"
            className={`theme-toggle-btn h-10 w-10 text-sidebar-foreground transition-all duration-300 ease-in-out hover:bg-sidebar-accent ${
              isTransitioning ? "animate-spin" : ""
            }`}
            onClick={toggleTheme}
            disabled={isTransitioning}
          >
            {mounted ? (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sun
                    className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
                      theme === "dark"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                  <Moon
                    className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
                      theme === "light"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-75"
                    }`}
                  />
                </div>
              </div>
            ) : null}
          </Button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
