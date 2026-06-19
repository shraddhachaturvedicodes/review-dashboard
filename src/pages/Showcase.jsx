import { useState } from 'react'
import Footer from '../components/Footer'
import { Button, Input, Modal, Toast, Loader } from '../components/ui'

function Showcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [showLoader, setShowLoader] = useState(false)

  const triggerToast = () => {
    setToastVisible(false)
    setTimeout(() => setToastVisible(true), 50)
  }

  const triggerLoader = () => {
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f7f4ef' }}>
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
          Component Library
        </span>
        <h1 className="text-4xl font-bold mt-1 mb-2" style={{ color: '#1a1a1a' }}>UI Showcase</h1>
        <p className="text-sm mb-12" style={{ color: '#8a7a6a' }}>
          All reusable components from /components/ui — Button, Input, Modal, Toast, Loader.
        </p>

        {/* Button Section */}
        <section className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: '#e8e0d4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>Button</h2>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Button variant="primary" size="sm">Primary sm</Button>
            <Button variant="primary" size="md">Primary md</Button>
            <Button variant="primary" size="lg">Primary lg</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Input Section */}
        <section className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: '#e8e0d4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>Input</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              label="Password (with error)"
              type="password"
              placeholder="••••••••"
              error="Password must be at least 8 characters"
            />
          </div>
        </section>

        {/* Modal Section */}
        <section className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: '#e8e0d4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>Modal</h2>
          <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Confirm Action">
            <p className="mb-4">Are you sure you want to delete this review analysis? This cannot be undone.</p>
            <div className="flex gap-3">
              <Button variant="primary" size="sm" onClick={() => setModalOpen(false)}>Confirm</Button>
              <Button variant="outline" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
            </div>
          </Modal>
        </section>

        {/* Toast Section */}
        <section className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: '#e8e0d4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>Toast</h2>
          <Button variant="primary" onClick={triggerToast}>Show Toast</Button>
          <Toast
            message="Review analysis exported successfully!"
            type="success"
            isVisible={toastVisible}
            onDismiss={() => setToastVisible(false)}
          />
        </section>

        {/* Loader Section */}
        <section className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: '#e8e0d4' }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>Loader</h2>
          <div className="flex items-center gap-8 mb-4">
            <div className="flex flex-col items-center gap-2">
              <Loader variant="spinner" size="sm" />
              <span className="text-xs" style={{ color: '#8a7a6a' }}>Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="spinner" size="md" />
              <span className="text-xs" style={{ color: '#8a7a6a' }}>Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="spinner" size="lg" />
              <span className="text-xs" style={{ color: '#8a7a6a' }}>Large</span>
            </div>
          </div>
          <div className="mb-4 max-w-sm">
            <span className="text-xs block mb-2" style={{ color: '#8a7a6a' }}>Skeleton variant</span>
            <Loader variant="skeleton" />
          </div>
          <Button variant="outline" size="sm" onClick={triggerLoader}>
            {showLoader ? <Loader variant="spinner" size="sm" /> : 'Simulate loading'}
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Showcase