import { cn } from "../lib/utils";

interface BadgeProps {
  variant?: "success" | "info" | "warning" | "error" | "default";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

const Badge = ({
  variant = "default",
  size = "sm",
  children,
  className,
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const variants = {
    success: "bg-green-100 text-green-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    default: "bg-gray-100 text-gray-800",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

export default Badge;
