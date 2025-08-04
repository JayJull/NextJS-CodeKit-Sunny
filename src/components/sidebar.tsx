'use client';
import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { MenuItem } from '../types';
import { cn } from '../lib/utils';
import Badge from './badge';

interface SidebarProps {
  menuItems: {
    title: string;
    items: MenuItem[];
  }[];
  activeItem?: string;
  onMenuClick?: (item: MenuItem) => void;
  className?: string;
}

const Sidebar = ({ menuItems, activeItem, onMenuClick, className }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const isActive = activeItem === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              onMenuClick?.(item);
            }
          }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm rounded-lg transition-colors",
            depth > 0 && "ml-6",
            isActive 
              ? "bg-blue-50 text-blue-700 font-medium" 
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {/* Icon */}
          <span className={cn("w-5 h-5 flex-shrink-0", isActive && "text-blue-600")}>
            {item.icon}
          </span>

          {/* Label */}
          <span className="flex-1">{item.label}</span>

          {/* Badge */}
          {item.badge && (
            <Badge variant="info" size="sm">
              {item.badge}
            </Badge>
          )}

          {/* Expand/Collapse Arrow */}
          {hasChildren && (
            <span className="w-4 h-4 text-gray-400">
              {isExpanded ? <ChevronDown /> : <ChevronRight />}
            </span>
          )}
        </button>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children?.map(child => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn("w-64 bg-white border-r border-gray-200 h-full overflow-y-auto", className)}>
      <div className="p-4">
        {menuItems.map((section, index) => (
          <div key={index} className={cn("space-y-1", index > 0 && "mt-8")}>
            {/* Section Title */}
            <div className="px-3 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {section.title}
              </h3>
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              {section.items.map(item => renderMenuItem(item))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;