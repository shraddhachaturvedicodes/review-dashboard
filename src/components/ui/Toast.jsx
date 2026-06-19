import { useEffect } from 'react'

/*
 * Toast component
 * @param {string} message - text to display
 * @param {string} type - 'success' | 'error' | 'info' (default: 'info')
 * @param {boolean} isVisible - controls visibility
 * @param {function} onDismiss - called automatically after duration elapses
 * @param {number} duration - time in ms before auto-dismiss (default: 3000)
 */
function Toast({ message, type = 'info', isVisible, onDismiss, duration = 3000 }) {
  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => onDismiss(), duration)
    return () => clearTimeout(timer)
  }, [isVisible, duration, onDismiss])

  if (!isVisible) return null

  const typeStyles = {
    success: { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', color: '#166534', icon: '✓' },
    error: { backgroundColor: '#fef2f2', borderColor: '#fecaca', color: '#991b1b', icon: '⚠️' },
    info: { backgroundColor: '#fff7ed', borderColor: '#fed7aa', color: '#c2410c', icon: 'ℹ️' },
  }

  const style = typeStyles[type]

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border shadow-lg animate-fade-in"
      style={{ backgroundColor: style.backgroundColor, borderColor: style.borderColor }}
    >
      <span>{style.icon}</span>
      <span className="text-sm font-medium" style={{ color: style.color }}>{message}</span>
    </div>
  )
}

export default Toast