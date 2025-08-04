import { StatsCardPops } from '../types';
import { cn } from '../lib/utils';

const StatsCard = ({ 
  icon, 
  value, 
  label, 
  iconColor = "text-blue-600", 
  valuePrefix = "",
  iconBg = "bg-blue-100"
}: StatsCardPops) => {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      return val.toLocaleString('id-ID');
    }
    return val;
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", iconBg)}>
        <span className={cn("w-6 h-6", iconColor)}>
          {icon}
        </span>
      </div>

      {/* Value */}
      <div className="mb-2">
        <span className="text-2xl font-bold text-gray-900">
          {valuePrefix}{formatValue(value)}
        </span>
      </div>

      {/* Label */}
      <div className="text-sm text-gray-600">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;