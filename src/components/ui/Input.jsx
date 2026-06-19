/*
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
        <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#8a7a6a' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all"
        style={{
          borderColor: error ? '#dc2626' : '#e8e0d4',
          backgroundColor: '#fdf8f4',
        }}
      />
      {error && (
        <p className="text-xs mt-1" style={{ color: '#dc2626' }}>{error}</p>
      )}
    </div>
  )
}

export default Input