import { useEffect, useRef } from 'react'

/*
 * Modal component
 * @param {boolean} isOpen - controls visibility
 * @param {function} onClose - called when modal should close (Escape key, backdrop click, or close button)
 * @param {string} title - modal title shown in the header
 * @param {node} children - modal body content
 */
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Trap focus inside modal while open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(26, 26, 26, 0.5)' }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border w-full max-w-md p-6 outline-none"
        style={{ borderColor: '#e8e0d4' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ color: '#1a1a1a' }}>{title}</h2>
          <button
            onClick={onClose}
            className="text-sm rounded-full w-8 h-8 flex items-center justify-center hover:bg-stone-100"
            style={{ color: '#8a7a6a' }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="text-sm" style={{ color: '#6a5a4a' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal