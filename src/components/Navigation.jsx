import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import CodeSnippet from './CodeSnippet';

/**
 * Navigation - Showcases a responsive navigation bar with a mobile menu toggle,
 * dark mode switch, and active-link styling.
 */
export default function Navigation({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const links = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'forms', label: 'Forms' },
    { id: 'feature-cards', label: 'Feature Cards' },
    { id: 'tailwind-lab', label: 'Tailwind Lab' },
  ];

  return (
    <section id="navigation" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Navigation
      </h2>

      {/* Navbar Demo */}
      <nav className="rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 mb-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
              TW Gallery
            </span>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 px-4 py-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <CodeSnippet
        code={`<!-- Responsive nav: hidden on mobile, flex on md+ -->
<div class="hidden md:flex items-center gap-1">
  <button class="rounded-lg px-3 py-1.5 text-sm
    hover:bg-gray-100 dark:hover:bg-gray-700
    transition-colors duration-200">
    Link
  </button>
</div>

<!-- Mobile menu: visible only below md -->
<div class="md:hidden border-t px-4 py-2">
  ...
</div>

<!-- Dark mode toggle -->
<button class="text-gray-600 dark:text-gray-300
  hover:bg-gray-100 dark:hover:bg-gray-700">
  {darkMode ? '☀️' : '🌙'}
</button>`}
        explanation={`• "hidden md:flex" hides on mobile and shows as flexbox on medium+ screens (mobile-first approach).
• "md:hidden" shows the mobile menu only below the md breakpoint.
• "dark:" variants apply when the "dark" class is on <html>, enabling theme toggling.
• "transition-colors duration-200" ensures smooth color transitions on hover.`}
      />
    </section>
  );
}
