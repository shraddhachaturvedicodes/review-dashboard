/**
 * Input component
 * @param {string} label - label text shown above the input
 * @param {string} placeholder - placeholder text
 * @param {string} type - input type, e.g. 'text', 'email', 'password' (default: 'text')
 * @param {string} value - controlled value
 * @param {function} onChange - change handler
 * @param {string} error - error message; shows red border + message below input if present
 */
function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <div>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-[#8a7a6a] dark:text-stone-400">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all bg-[#fdf8f4] dark:bg-stone-700 text-[#1a1a1a] dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 ${
          error ? 'border-red-600' : 'border-[#e8e0d4] dark:border-stone-600'
        }`}
      />
      {error && (
        <p className="text-xs mt-1 text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export default Input