import React from 'react';
import { Level } from '../../types/levels';

export function LevelTracker({ value, onChange, label, icon: Icon }: Level) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-200">
          {label}
        </span>
        <span className="ml-auto text-lg font-bold text-purple-800 dark:text-purple-100">
          {value}
        </span>
      </div>
      
      <div className="space-y-2">
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-purple-200 dark:bg-purple-900/30 rounded-lg appearance-none cursor-pointer accent-purple-600 dark:accent-purple-400"
        />
        
        <div className="flex justify-between px-1">
          <span className="text-xs text-purple-600 dark:text-purple-300">Low</span>
          <span className="text-xs text-purple-600 dark:text-purple-300">High</span>
        </div>
      </div>
    </div>
  );
}