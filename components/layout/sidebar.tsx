"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  children?: MenuItem[];
}

interface SidebarProps {
  menuItems: MenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

function SidebarItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (hasChildren && item.children?.some(child => pathname === child.href));

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-auto p-0",
              level === 0 ? "mb-1" : "mb-0"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                level > 0 && "ml-6 pl-2"
              )}
            >
              <div className="flex items-center gap-3 flex-1">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.children?.map((child) => (
            <SidebarItem key={child.id} item={child} level={level + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link href={item.href || "#"} className={cn("block", level === 0 ? "mb-1" : "mb-0")}>
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
          pathname === item.href
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          level > 0 && "ml-6 pl-2"
        )}
      >
        {item.icon}
        <span className="text-sm font-medium">{item.label}</span>
      </div>
    </Link>
  );
}

export function Sidebar({ menuItems, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <SidebarItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}