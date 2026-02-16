import { HiPaintBrush, HiRocketLaunch, HiPuzzlePiece, HiSquares2X2, HiArrowPath, HiMoon } from 'react-icons/hi2';
import CodeSnippet from './CodeSnippet';

/**
 * FeatureCard - An advanced component demonstrating Tailwind utility patterns.
 *
 * **`group-hover:`** — The container has the `group` class. When hovering the
 * card, child elements with `group-hover:` respond (e.g., the icon changes color
 * and the card scales up).
 *
 * **`transition-all duration-300`** — Smoothly animates *all* animatable
 * properties (transform, color, shadow, etc.) over 300 ms.
 *
 * **`backdrop-blur-md` / glassmorphism** — Blurs content behind the element,
 * combined with `bg-white/10` and `border-white/20` for a frosted-glass look.
 *
 * **Responsive grid** — `grid-cols-1` on mobile switches to `lg:grid-cols-3`
 * on large screens, following a mobile-first breakpoint approach.
 */
export default function FeatureCard() {
  const features = [
    {
      icon: <HiPaintBrush className="h-7 w-7 text-pink-500" />,
      title: 'Custom Theming',
      description:
        'Extend colors, spacing, and fonts in tailwind.config.js to match any brand.',
    },
    {
      icon: <HiRocketLaunch className="h-7 w-7 text-orange-500" />,
      title: 'Zero Runtime',
      description:
        'Tailwind generates CSS at build time — no JavaScript bundle overhead.',
    },
    {
      icon: <HiPuzzlePiece className="h-7 w-7 text-green-500" />,
      title: 'Plugin Ecosystem',
      description:
        'Add forms, typography, and animation plugins with a single install.',
    },
    {
      icon: <HiSquares2X2 className="h-7 w-7 text-blue-500" />,
      title: 'Design Tokens',
      description:
        'Spacing, color, and typography scales keep your UI mathematically consistent.',
    },
    {
      icon: <HiArrowPath className="h-7 w-7 text-teal-500" />,
      title: 'Reusability',
      description:
        'Compose utilities into component classes with @apply or React components.',
    },
    {
      icon: <HiMoon className="h-7 w-7 text-indigo-500" />,
      title: 'Dark Mode',
      description:
        'Toggle between light and dark themes with the dark: variant.',
    },
  ];

  return (
    <section id="feature-cards" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Feature Cards
      </h2>

      {/* Responsive grid: 1 col mobile → 2 cols md → 3 cols lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* Icon reacts to parent hover */}
            <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>

            {/* Decorative gradient that appears on hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <CodeSnippet
        code={`<!-- Responsive grid: mobile-first -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <!-- Feature card with group hover + glassmorphism -->
  <div class="group relative overflow-hidden
    rounded-2xl border border-white/20
    bg-white/80 dark:bg-gray-800/60
    backdrop-blur-md p-6
    hover:shadow-xl hover:scale-105
    transition-all duration-300">

    <!-- Icon scales + rotates on parent hover -->
    <div class="group-hover:scale-125 group-hover:rotate-6
      transition-transform duration-300">
      <Icon />
    </div>

    <!-- Title color changes on parent hover -->
    <h3 class="group-hover:text-brand-600
      dark:group-hover:text-brand-400
      transition-colors duration-300">
      Title
    </h3>
  </div>
</div>`}
        explanation={`• "group" on the card container enables "group-hover:" on any descendant.
• "group-hover:scale-125 group-hover:rotate-6" makes the icon grow and tilt when hovering the card.
• "backdrop-blur-md" creates the glassmorphism effect by blurring content behind the card.
• "bg-white/80" sets an 80% opaque white background so blurred content shows through.
• "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" is the mobile-first responsive grid.
• "transition-all duration-300" animates every property change over 300ms for a polished feel.`}
      />
    </section>
  );
}
