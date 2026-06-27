import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { Button, Loader, Toast } from '../components/ui'
import { getAnalyses, deleteAnalysis } from '../utils/api'

function History() {
  const [analyses, setAnalyses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' })

  const showToast = (message, type = 'success') => {
    setToast({ visible: false, message: '', type })
    setTimeout(() => setToast({ visible: true, message, type }), 50)
  }

  const fetchAnalyses = async () => {
    setIsLoading(true)
    try {
      const data = await getAnalyses()
      setAnalyses(data)
    } catch (err) {
      showToast('Could not load saved analyses from server', 'error')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAnalyses()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteAnalysis(id)
      setAnalyses(analyses.filter(a => a.id !== id))
      showToast('Analysis deleted', 'success')
    } catch (err) {
      showToast('Failed to delete analysis', 'error')
    }
  }

  const sentimentStyles = {
    Positive: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    Neutral: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    Negative: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ef] dark:bg-stone-900">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
          Saved History
        </span>
        <h1 className="text-4xl font-bold mt-1 mb-2 text-[#1a1a1a] dark:text-white">
          Past Analyses
        </h1>
        <p className="text-sm mb-10 text-[#8a7a6a] dark:text-stone-400">
          Reviews saved from the dashboard, fetched live from the backend API.
        </p>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader variant="spinner" size="lg" />
          </div>
        ) : analyses.length === 0 ? (
          <div className="bg-white dark:bg-stone-800 rounded-2xl border border-[#e8e0d4] dark:border-stone-700 p-10 text-center">
            <p className="text-[#8a7a6a] dark:text-stone-400">No saved analyses yet. Analyze a review on the Dashboard and save it here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {analyses.map((a) => (
              <div key={a.id} className="bg-white dark:bg-stone-800 rounded-2xl border border-[#e8e0d4] dark:border-stone-700 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[#1a1a1a] dark:text-stone-200 mb-3">{a.review}</p>
                    <div className="flex gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sentimentStyles[a.sentiment] || ''}`}>
                        {a.sentiment}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-300">
                        {a.theme}
                      </span>
                    </div>
                    <p className="text-sm italic text-[#6a5a4a] dark:text-stone-400">"{a.response}"</p>
                    <p className="text-xs mt-2 text-[#8a7a6a] dark:text-stone-500">
                      Saved {new Date(a.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(a.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onDismiss={() => setToast({ ...toast, visible: false })}
      />
    </div>
  )
}

export default History