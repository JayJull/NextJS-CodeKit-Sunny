'use client';
import { UserListItemProps } from '../types';
import { cn } from '../lib/utils';

const UserListItem = ({
  avatar,
  name,
  subtitle,
  rightContent,
  actions,
  onClick,
  className
}: UserListItemProps) => {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 transition-all",
        onClick && "hover:bg-gray-50 hover:shadow-sm cursor-pointer",
        className
      )}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {name}
            </h3>
            {subtitle && (
              <p className="text-sm text-gray-500 truncate mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Content */}
          {rightContent && (
            <div className="flex-shrink-0 ml-4">
              {rightContent}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      {actions && (
        <div className="flex-shrink-0 ml-4">
          {actions}
        </div>
      )}
    </Component>
  );
};

export default UserListItem;