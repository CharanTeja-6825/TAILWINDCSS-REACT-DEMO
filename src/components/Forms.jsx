import CodeSnippet from './CodeSnippet';

/**
 * Forms - Showcases Tailwind form patterns including peer-based validation
 * feedback, focus states, and responsive layouts.
 */
export default function Forms() {
  return (
    <section id="forms" className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Forms
      </h2>

      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Contact Form
        </h3>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Email field with peer validation */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="peer block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-colors duration-200 invalid:border-red-500 invalid:focus:ring-red-500/20"
            />
            <p className="mt-1 hidden text-xs text-red-500 peer-invalid:block">
              Please enter a valid email address.
            </p>
          </div>

          {/* Message textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agree"
              className="mt-0.5 h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-brand-600 focus:ring-brand-500"
            />
            <label
              htmlFor="agree"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <CodeSnippet
        code={`<!-- Peer validation: shows error when input is invalid -->
<input type="email"
  class="peer ... invalid:border-red-500
    invalid:focus:ring-red-500/20" />
<p class="hidden peer-invalid:block text-xs text-red-500">
  Please enter a valid email address.
</p>

<!-- Focus ring with brand color -->
<input class="focus:border-brand-500
  focus:ring-2 focus:ring-brand-500/20
  focus:outline-none transition-colors duration-200" />`}
        explanation={`• "peer" marks the input as a reference element. Sibling elements use "peer-invalid:" to react to it.
• "peer-invalid:block" shows the error message only when the peer input fails validation.
• "invalid:border-red-500" applies a red border when the native HTML validation fails.
• "focus:ring-2 focus:ring-brand-500/20" adds a subtle ring with 20% opacity of the brand color.
• "placeholder-gray-400 dark:placeholder-gray-500" styles placeholder text differently per theme.`}
      />
    </section>
  );
}
