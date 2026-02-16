import CodeSnippet from './CodeSnippet';

/**
 * Cards - Showcases various card patterns including hover effects,
 * glassmorphism, and dark mode variants.
 */
export default function Cards() {
  const cards = [
    {
      title: 'Performance',
      description:
        'Tailwind purges unused CSS at build time, resulting in tiny production bundles.',
      icon: '⚡',
    },
    {
      title: 'Developer Experience',
      description:
        'Utility classes co-locate styling with markup, reducing context switching.',
      icon: '🛠️',
    },
    {
      title: 'Responsive Design',
      description:
        'Mobile-first breakpoint system makes responsive layouts effortless.',
      icon: '📱',
    },
  ];

  return (
    <section id="cards" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Cards
      </h2>

      {/* Standard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Glassmorphism Card */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Glassmorphism Card
      </h3>
      <div className="relative rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 p-8 mb-8">
        <div className="absolute inset-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            Frosted Glass Effect
          </h3>
          <p className="text-white/80 text-sm">
            This card uses <code className="text-brand-200">backdrop-blur-md</code>,{' '}
            <code className="text-brand-200">bg-white/10</code>, and{' '}
            <code className="text-brand-200">border-white/20</code> to create a
            frosted glass appearance.
          </p>
        </div>
        {/* Spacer to maintain height */}
        <div className="invisible p-6">
          <h3 className="text-xl font-bold mb-2">Frosted Glass Effect</h3>
          <p className="text-sm">Placeholder for sizing</p>
        </div>
      </div>

      <CodeSnippet
        code={`<!-- Hover + Group pattern -->
<div class="group rounded-xl border border-gray-200
  dark:border-gray-700 bg-white dark:bg-gray-800
  p-6 shadow-sm hover:shadow-lg hover:scale-105
  transition-all duration-300">
  <h3 class="group-hover:text-brand-600
    dark:group-hover:text-brand-400
    transition-colors duration-300">
    Title
  </h3>
</div>

<!-- Glassmorphism -->
<div class="border border-white/20 bg-white/10
  backdrop-blur-md rounded-xl p-6">
  Frosted glass content
</div>`}
        explanation={`• "group" + "group-hover:" lets the title change color when hovering anywhere on the card.
• "hover:scale-105" slightly enlarges the card on hover with "transition-all duration-300".
• "backdrop-blur-md" blurs the background behind the element for a glassmorphism effect.
• "bg-white/10" sets a 10% opacity white background. The "/" syntax controls opacity.
• "border-white/20" creates a subtle semi-transparent border.`}
      />
    </section>
  );
}
