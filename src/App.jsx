import { useState, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import DarkModeProvider from './context/DarkModeContext';
import Navigation from './components/Navigation';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Forms from './components/Forms';
import FeatureCard from './components/FeatureCard';
import TailwindLab from './pages/TailwindLab';

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl mb-4 bg-white dark:bg-gray-800 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors duration-200"
      >
        {title}
        <HiChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

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

          {/* TailwindCSS Description */}
          <section className="mb-8 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950 p-6">
            <h2 className="text-xl font-bold text-brand-700 dark:text-brand-300 mb-3">
              What is Tailwind CSS?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
              Tailwind CSS is a utility-first CSS framework that provides low-level utility classes
              to build custom designs directly in your markup. Instead of writing custom CSS or using
              pre-built component libraries, you compose styles using small, single-purpose classes
              like <code className="bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono">flex</code>,{' '}
              <code className="bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono">pt-4</code>,{' '}
              <code className="bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono">text-center</code>, and{' '}
              <code className="bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono">rotate-90</code>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              It offers a mobile-first responsive design system, built-in dark mode support,
              and tree-shakes unused styles for optimal production builds. Tailwind is highly
              customizable through its configuration file and supports plugins for forms,
              typography, and animations.
            </p>
          </section>

          {/* Navigation */}
          <Navigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          {/* Component Sections - Collapsible */}
          <main className="space-y-2">
            <CollapsibleSection title="Buttons" defaultOpen>
              <Buttons />
            </CollapsibleSection>

            <CollapsibleSection title="Cards">
              <Cards />
            </CollapsibleSection>

            <CollapsibleSection title="Forms">
              <Forms />
            </CollapsibleSection>

            <CollapsibleSection title="Feature Cards">
              <FeatureCard />
            </CollapsibleSection>

            <CollapsibleSection title="Tailwind Lab">
              <TailwindLab />
            </CollapsibleSection>
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
