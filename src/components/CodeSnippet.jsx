/**
 * CodeSnippet - Renders a code block showing Tailwind classes used in examples
 * with an explanation of each class.
 *
 * @param {{ code: string, explanation: string }} props
 */
export default function CodeSnippet({ code, explanation }) {
  return (
    <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm">
      <pre className="overflow-x-auto text-gray-800 font-mono whitespace-pre-wrap">
        {code}
      </pre>
      {explanation && (
        <p className="mt-2 text-gray-500 text-xs leading-relaxed">
          {explanation}
        </p>
      )}
    </div>
  );
}
