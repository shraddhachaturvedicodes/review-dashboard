/**
 * Button component
 * @param {string} variant - 'primary' | 'secondary' | 'outline' (default: 'primary')
 * @param {string} size - 'sm' | 'md' | 'lg' (default: 'md')
 * @param {boolean} disabled - disables the button and dims it (default: false)
 * @param {function} onClick - click handler
 * @param {node} children - button label/content
 */
function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {
  const baseStyles = 'font-semibold rounded-full transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variantStyles = {
    primary: 'text-white hover:opacity-90',
    secondary: 'hover:opacity-80',
    outline: 'border bg-transparent hover:bg-stone-50',
  }

  const variantColors = {
    primary: { backgroundColor: '#e8682a' },
    secondary: { backgroundColor: '#1a3a2a', color: 'white' },
    outline: { borderColor: '#1a1a1a', color: '#1a1a1a' },
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      style={variantColors[variant]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button