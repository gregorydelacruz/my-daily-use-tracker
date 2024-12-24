import React, { useState } from 'react';
import { Title } from './Title';
import { DailyQuote } from './DailyQuote';
import { DailyCounter } from './DailyCounter';
import { StreakCounter } from './StreakCounter';
import { WeeklyView } from './WeeklyView';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';
import { TriggerView } from './views/TriggerView';
import { DailySummary } from './summary/DailySummary';

type View = 'daily' | 'weekly' | 'trigger' | 'summary';

function HabitDashboard() {
  const [activeView, setActiveView] = useState<View>('daily');

  const renderView = () => {
    switch (activeView) {
      case 'trigger':
        return <TriggerView onBack={() => setActiveView('daily')} />;
      case 'weekly':
        return <WeeklyView />;
      case 'summary':
        return <DailySummary />;
      default:
        return <DailyCounter onUseIncrement={() => setActiveView('trigger')} />;
    }
  };

  return (
    <div className="min-h-screen px-2 py-4">
      <div className="max-w-[320px] mx-auto">
        <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-4 transition-colors">
          <ThemeToggle />
          <Title />
          {activeView !== 'trigger' && activeView !== 'summary' && (
            <>
              <DailyQuote />
              <StreakCounter streak={0} />
            </>
          )}
          
          <div className="mb-6">
            {renderView()}
          </div>

          {activeView !== 'trigger' && (
            <div className="pt-2 border-t border-purple-100 dark:border-gray-700">
              <Navigation 
                activeView={activeView} 
                onViewChange={setActiveView} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HabitDashboard;