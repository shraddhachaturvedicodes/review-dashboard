/*
 * Loader component
 * @param {string} variant - 'spinner' | 'skeleton' (default: 'spinner')
 * @param {string} size - 'sm' | 'md' | 'lg' (default: 'md', spinner only)
 */
function Loader({ variant = 'spinner', size = 'md' }) {
  if (variant === 'skeleton') {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-4 rounded-md" style={{ backgroundColor: '#e8e0d4', width: '80%' }} />
        <div className="h-4 rounded-md" style={{ backgroundColor: '#e8e0d4', width: '60%' }} />
        <div className="h-4 rounded-md" style={{ backgroundColor: '#e8e0d4', width: '70%' }} />
      </div>
    )
  }

  const sizeMap = { sm: '16px', md: '28px', lg: '40px' }

  return (
    <div
      className="rounded-full animate-spin"
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        border: '3px solid #e8e0d4',
        borderTopColor: '#e8682a',
      }}
    />
  )
}

export default Loader