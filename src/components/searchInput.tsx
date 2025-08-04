'use client';
import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { SearchInputProps } from '../types';
import { cn } from '../lib/utils';

const SearchInput = ({
  placeholder = "Search...",
  value: controlledValue,
  onSearch,
  onClear,
  onChange,
  className,
  autoFocus = false
}: SearchInputProps) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  const handleClear = () => {
    const newValue = '';
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
    onClear?.();
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">        
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus={autoFocus}
          className={cn(
            "w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-lg",
            "focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",
            "placeholder:text-gray-400 text-sm transition-colors"
          )}
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchInput;