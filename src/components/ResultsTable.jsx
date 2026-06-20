import { useState } from 'react'
import { Button, Toast, Modal } from './ui'

function ResultsTable({ results }) {
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' })
  const [selectedReview, setSelectedReview] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ visible: false, message: '', type })
    setTimeout(() => setToast({ visible: true, message, type }), 50)
  }

  const sentimentStyles = {
    Positive: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700',
    Neutral: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700',
    Negative: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
  }

  const themeStyles = {
    Food: 'bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-300',
    Host: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300',
    Cleanliness: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-300',
    Location: 'bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-300',
    Value: 'bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-300',
    Experience: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
  }

  const handleExport = () => {
    const headers = ['Review', 'Sentiment', 'Theme', 'Suggested Response']
    const rows = results.map(r => [
      `"${r.review.replace(/"/g, '""')}"`,
      r.sentiment,
      r.theme,
      `"${r.response.replace(/"/g, '""')}"`
    ])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'guestlens-analysis.csv'
    a.click()
    URL.revokeObjectURL(url)
    showToast('CSV exported successfully!', 'success')
  }

  const handleCopy = (response) => {
    navigator.clipboard.writeText(response)
    showToast('Response copied to clipboard!', 'info')
  }

  return (
    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-gray-200 dark:border-stone-700 overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-100 dark:border-stone-700 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-stone-200">
          📊 Analysis Results
          <span className="ml-2 text-sm font-normal text-gray-400 dark:text-stone-500">
            {results.length} review{results.length !== 1 ? 's' : ''} analyzed
          </span>
        </h2>
        <Button variant="primary" size="sm" onClick={handleExport}>
          ⬇️ Export CSV
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-stone-900 text-gray-500 dark:text-stone-400 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-3 text-left w-2/5">Review</th>
              <th className="px-6 py-3 text-left">Sentiment</th>
              <th className="px-6 py-3 text-left">Theme</th>
              <th className="px-6 py-3 text-left">Suggested Response</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-stone-700">
            {results.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-stone-700 transition-colors">
                <td className="px-6 py-4 text-gray-700 dark:text-stone-300 leading-relaxed">
                  <button
                    onClick={() => setSelectedReview(r)}
                    className="text-left hover:underline hover:text-orange-600 transition-colors"
                  >
                    {r.review.length > 60 ? r.review.slice(0, 60) + '...' : r.review}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sentimentStyles[r.sentiment] || 'bg-gray-100 dark:bg-stone-700 text-gray-600 dark:text-stone-300'}`}>
                    {r.sentiment}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${themeStyles[r.theme] || 'bg-gray-100 dark:bg-stone-700 text-gray-600 dark:text-stone-300'}`}>
                    {r.theme}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-stone-400 italic leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span>"{r.response}"</span>
                    <button
                      onClick={() => handleCopy(r.response)}
                      className="shrink-0 text-gray-400 dark:text-stone-500 hover:text-orange-500 transition-colors mt-0.5"
                      title="Copy response"
                    >
                      📋
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title="Full Review"
      >
        {selectedReview && (
          <div className="space-y-4">
            <p className="leading-relaxed">{selectedReview.review}</p>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sentimentStyles[selectedReview.sentiment]}`}>
                {selectedReview.sentiment}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${themeStyles[selectedReview.theme]}`}>
                {selectedReview.theme}
              </span>
            </div>
            <div className="pt-2 border-t" style={{ borderColor: '#e8e0d4' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#8a7a6a' }}>
                Suggested Response
              </p>
              <p className="italic">"{selectedReview.response}"</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setSelectedReview(null)}>
              Close
            </Button>
          </div>
        )}
      </Modal>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onDismiss={() => setToast({ ...toast, visible: false })}
      />
    </div>
  )
}

export default ResultsTable