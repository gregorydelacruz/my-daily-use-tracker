import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useHabitStore } from '../../stores/habitStore';
import { triggerOptions, TriggerType } from '../../types';

interface TriggerViewProps {
  onBack: () => void;
}

export function TriggerView({ onBack }: TriggerViewProps) {
  const { records, updateRecord, updateTriggerStats } = useHabitStore();
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const record = records[dateStr] || { 
    drinks: 0, 
    uses: 0,
    trigger: undefined
  };

  const handleTriggerSelect = (triggerId: TriggerType) => {
    updateRecord(dateStr, {
      ...record,
      trigger: triggerId
    });
    updateTriggerStats(triggerId);
    onBack();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-100">
          What triggered your use?
        </h2>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          <span className="text-sm text-purple-700 dark:text-purple-200">
            Understanding your triggers helps identify patterns
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {triggerOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleTriggerSelect(option.id)}
            className={`text-left p-4 rounded-lg transition-colors ${
              record.trigger === option.id
                ? 'bg-purple-200 dark:bg-purple-900/50 text-purple-800 dark:text-purple-100'
                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
            }`}
          >
            <div className="font-medium mb-1">{option.label}</div>
            <div className="text-sm opacity-80">{option.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}