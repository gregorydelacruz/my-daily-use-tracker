import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CounterProps {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  Icon: LucideIcon;
}

export function Counter({ label, count, onIncrement, onDecrement, Icon }: CounterProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          <span className="text-sm font-medium text-purple-700 dark:text-purple-200">{label}</span>
        </div>
        <span className="text-xl font-bold text-purple-800 dark:text-purple-100">{count}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onDecrement}
          className="flex-1 flex items-center justify-center gap-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-300 rounded-md py-2.5 transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          onClick={onIncrement}
          className="flex-1 flex items-center justify-center gap-1 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-600 dark:text-green-300 rounded-md py-2.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}