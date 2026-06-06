import { useState } from 'react'

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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        📝 Paste Guest Reviews
      </h2>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('single')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            mode === 'single'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Single Review
        </button>
        <button
          onClick={() => setMode('bulk')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            mode === 'bulk'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Bulk Reviews
        </button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={
          mode === 'single'
            ? 'Paste a single guest review here...'
            : 'Paste multiple reviews here, one per line...'
        }
        className="w-full h-40 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading || !text.trim()}
        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl transition-all"
      >
        {isLoading ? '⏳ Analyzing...' : '🔍 Analyze Reviews'}
      </button>
    </div>
  )
}

export default ReviewInput