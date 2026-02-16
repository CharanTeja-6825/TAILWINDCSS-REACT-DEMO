/**
 * TailwindLab - An interactive documentation page with a "sandbox" feel.
 * Shows Typography, Flexbox vs Grid, with live code previews.
 */
export default function TailwindLab() {
  return (
    <section id="tailwind-lab" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Tailwind Lab
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        An interactive sandbox exploring Tailwind CSS utilities.
      </p>

      {/* ── Typography Section ── */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Typography
        </h3>

        <div className="space-y-4 mb-4">
          {/* Font Weight */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Font Weight
            </p>
            <div className="space-y-1">
              <p className="font-light text-gray-900 dark:text-white">
                font-light (300)
              </p>
              <p className="font-normal text-gray-900 dark:text-white">
                font-normal (400)
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                font-medium (500)
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                font-semibold (600)
              </p>
              <p className="font-bold text-gray-900 dark:text-white">
                font-bold (700)
              </p>
              <p className="font-extrabold text-gray-900 dark:text-white">
                font-extrabold (800)
              </p>
            </div>
            <pre className="mt-3 rounded bg-gray-900 p-3 text-xs text-green-400 overflow-x-auto">
{`<p class="font-light">font-light (300)</p>
<p class="font-normal">font-normal (400)</p>
<p class="font-medium">font-medium (500)</p>
<p class="font-semibold">font-semibold (600)</p>
<p class="font-bold">font-bold (700)</p>
<p class="font-extrabold">font-extrabold (800)</p>`}
            </pre>
          </div>

          {/* Tracking (Letter Spacing) */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Tracking (Letter Spacing)
            </p>
            <div className="space-y-1">
              <p className="tracking-tighter text-gray-900 dark:text-white">
                tracking-tighter (-0.05em)
              </p>
              <p className="tracking-tight text-gray-900 dark:text-white">
                tracking-tight (-0.025em)
              </p>
              <p className="tracking-normal text-gray-900 dark:text-white">
                tracking-normal (0em)
              </p>
              <p className="tracking-wide text-gray-900 dark:text-white">
                tracking-wide (0.025em)
              </p>
              <p className="tracking-wider text-gray-900 dark:text-white">
                tracking-wider (0.05em)
              </p>
              <p className="tracking-widest text-gray-900 dark:text-white">
                tracking-widest (0.1em)
              </p>
            </div>
            <pre className="mt-3 rounded bg-gray-900 p-3 text-xs text-green-400 overflow-x-auto">
{`<p class="tracking-tighter">tracking-tighter (-0.05em)</p>
<p class="tracking-tight">tracking-tight (-0.025em)</p>
<p class="tracking-normal">tracking-normal (0em)</p>
<p class="tracking-wide">tracking-wide (0.025em)</p>
<p class="tracking-wider">tracking-wider (0.05em)</p>
<p class="tracking-widest">tracking-widest (0.1em)</p>`}
            </pre>
          </div>

          {/* Leading (Line Height) */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Leading (Line Height)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded bg-gray-50 dark:bg-gray-700 p-3">
                <p className="leading-tight text-sm text-gray-900 dark:text-white">
                  <span className="font-semibold">leading-tight (1.25)</span> —
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum at diam.
                </p>
              </div>
              <div className="rounded bg-gray-50 dark:bg-gray-700 p-3">
                <p className="leading-normal text-sm text-gray-900 dark:text-white">
                  <span className="font-semibold">leading-normal (1.5)</span> —
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum at diam.
                </p>
              </div>
              <div className="rounded bg-gray-50 dark:bg-gray-700 p-3">
                <p className="leading-loose text-sm text-gray-900 dark:text-white">
                  <span className="font-semibold">leading-loose (2)</span> —
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum at diam.
                </p>
              </div>
            </div>
            <pre className="mt-3 rounded bg-gray-900 p-3 text-xs text-green-400 overflow-x-auto">
{`<p class="leading-tight">leading-tight (1.25)</p>
<p class="leading-normal">leading-normal (1.5)</p>
<p class="leading-loose">leading-loose (2)</p>`}
            </pre>
          </div>
        </div>
      </div>

      {/* ── Flexbox vs Grid Section ── */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Flexbox vs Grid
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Flexbox Example */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-semibold">
              Flexbox Layout
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex-1 min-w-[80px] rounded-lg bg-brand-500 p-4 text-center text-white text-sm font-medium">
                Flex 1
              </div>
              <div className="flex-1 min-w-[80px] rounded-lg bg-brand-600 p-4 text-center text-white text-sm font-medium">
                Flex 2
              </div>
              <div className="flex-1 min-w-[80px] rounded-lg bg-brand-700 p-4 text-center text-white text-sm font-medium">
                Flex 3
              </div>
            </div>
            <pre className="rounded bg-gray-900 p-3 text-xs text-green-400 overflow-x-auto">
{`<div class="flex flex-wrap gap-3">
  <div class="flex-1 min-w-[80px]">Flex 1</div>
  <div class="flex-1 min-w-[80px]">Flex 2</div>
  <div class="flex-1 min-w-[80px]">Flex 3</div>
</div>

/* flex: items share space equally
   flex-wrap: wraps to next line on small screens
   min-w-[80px]: arbitrary min-width via bracket notation
   gap-3: 0.75rem gap between items */`}
            </pre>
          </div>

          {/* Grid Example */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-semibold">
              Grid Layout
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="col-span-2 rounded-lg bg-purple-500 p-4 text-center text-white text-sm font-medium">
                col-span-2 (full width)
              </div>
              <div className="rounded-lg bg-purple-600 p-4 text-center text-white text-sm font-medium">
                Col 1
              </div>
              <div className="rounded-lg bg-purple-700 p-4 text-center text-white text-sm font-medium">
                Col 2
              </div>
            </div>
            <pre className="rounded bg-gray-900 p-3 text-xs text-green-400 overflow-x-auto">
{`<div class="grid grid-cols-2 gap-3">
  <div class="col-span-2">Full width</div>
  <div>Col 1</div>
  <div>Col 2</div>
</div>

/* grid grid-cols-2: 2-column grid
   col-span-2: element spans both columns
   gap-3: 0.75rem gap between cells */`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
