import { useState, useRef } from 'react';
import DarkModeProvider from './context/DarkModeContext';
import Navigation from './components/Navigation';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Forms from './components/Forms';
import FeatureCard from './components/FeatureCard';
import TailwindLab from './pages/TailwindLab';

function App() {
  const [activeSection, setActiveSection] = useState('buttons');
  const mainRef = useRef(null);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={mainRef}>
          {/* Header */}
          <header className="pt-8 pb-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Tailwind Design System Gallery
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              A showcase of Tailwind CSS patterns, utilities, and best practices.
            </p>
          </header>

          {/* Navigation */}
          <Navigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          {/* Component Sections */}
          <main>
            <Buttons />
            <Cards />
            <Forms />
            <FeatureCard />
            <TailwindLab />
          </main>

          {/* Footer */}
          <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with React + Vite + Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
