import React from 'react';
import { Calendar, BarChart3, ClipboardList } from 'lucide-react';

interface NavProps {
  activeView: 'daily' | 'weekly' | 'trigger' | 'summary';
  onViewChange: (view: 'daily' | 'weekly' | 'trigger' | 'summary') => void;
}

export function Navigation({ activeView, onViewChange }: NavProps) {
  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => onViewChange('daily')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
          activeView === 'daily'
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200'
            : 'text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
        }`}
      >
        <BarChart3 className="w-4 h-4" />
        <span className="text-sm font-medium">Today</span>
      </button>
      <button
        onClick={() => onViewChange('weekly')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
          activeView === 'weekly'
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200'
            : 'text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">Weekly</span>
      </button>
      <button
        onClick={() => onViewChange('summary')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
          activeView === 'summary'
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200'
            : 'text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
        }`}
      >
        <ClipboardList className="w-4 h-4" />
        <span className="text-sm font-medium">Summary</span>
      </button>
    </div>
  );
}