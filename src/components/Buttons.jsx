import CodeSnippet from './CodeSnippet';

/**
 * Buttons - Showcases various Tailwind button styles including hover states,
 * focus rings, disabled states, and group utilities.
 */
export default function Buttons() {
  return (
    <section id="buttons" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Buttons
      </h2>

      {/* Primary / Secondary / Outline */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors duration-200">
          Primary
        </button>

        <button className="rounded-lg bg-gray-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-colors duration-200">
          Secondary
        </button>

        <button className="rounded-lg border-2 border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors duration-200">
          Outline
        </button>

        <button
          disabled
          className="rounded-lg bg-gray-300 dark:bg-gray-700 px-6 py-2.5 text-sm font-semibold text-gray-500 dark:text-gray-400 cursor-not-allowed"
        >
          Disabled
        </button>
      </div>

      {/* Group hover button */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Group Hover Button
        </h3>
        <button className="group flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 transition-all duration-300">
          <span>Hover me</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <CodeSnippet
        code={`<!-- Primary Button -->
<button class="rounded-lg bg-brand-600 px-6 py-2.5
  text-sm font-semibold text-white shadow-sm
  hover:bg-brand-500
  focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-brand-600
  transition-colors duration-200">
  Primary
</button>

<!-- Group Hover: arrow moves on button hover -->
<button class="group flex items-center gap-2 ...">
  <span>Hover me</span>
  <svg class="group-hover:translate-x-1 transition-transform duration-300">
    ...
  </svg>
</button>`}
        explanation={`• "group" on the parent lets child elements react to the parent's hover state via "group-hover:".
• "focus-visible:outline" shows focus rings only for keyboard navigation, not mouse clicks.
• "transition-colors duration-200" smoothly animates the background color change.
• "dark:" variants swap colors when dark mode is active on the <html> element.`}
      />
    </section>
  );
}
