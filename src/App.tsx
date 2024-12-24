import React from 'react';
import HabitDashboard from './components/HabitDashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <HabitDashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;