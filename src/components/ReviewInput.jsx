import { useState } from 'react'
import { Button, Loader } from './ui'

function ReviewInput({ onAnalyze, isLoading }) {
  const [text, setText] = useState('')
  const [mode, setMode] = useState('single')

  const handleSubmit = () => {
    if (!text.trim()) return
    const reviews = mode === 'single'
      ? [text.trim()]
      : text.split('\n').filter(r => r.trim() !== '')
    onAnalyze(reviews)
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4" style={{ color: '#1a1a1a' }}>
        📝 Paste Guest Reviews
      </h2>

      <div className="flex gap-2 mb-4">
        <Button variant={mode === 'single' ? 'primary' : 'outline'} size="sm" onClick={() => setMode('single')}>
          Single Review
        </Button>
        <Button variant={mode === 'bulk' ? 'primary' : 'outline'} size="sm" onClick={() => setMode('bulk')}>
          Bulk Reviews
        </Button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={
          mode === 'single'
            ? 'Paste a single guest review here...'
            : 'Paste multiple reviews here, one per line...'
        }
        className="w-full h-40 rounded-xl p-4 text-sm resize-none outline-none border mb-4"
        style={{ borderColor: '#e8e0d4', color: '#1a1a1a' }}
      />

      <Button
        variant="primary"
        size="lg"
        disabled={isLoading || !text.trim()}
        onClick={handleSubmit}
      >
        {isLoading ? (
          <>
            <Loader variant="spinner" size="sm" />
            Analyzing {text.split('\n').filter(r => r.trim()).length} review(s)...
          </>
        ) : (
          <>🔍 Analyze Reviews</>
        )}
      </Button>
    </div>
  )
}

export default ReviewInput