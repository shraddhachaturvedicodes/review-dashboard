import Footer from '../components/Footer'
import ReviewInput from '../components/ReviewInput'
import ResultsTable from '../components/ResultsTable'
import Dashboard from '../components/Dashboard'
import SummaryCard from '../components/SummaryCard'
import { useState } from 'react'
import { analyzeReviewsSequentially } from '../utils/gemini'

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [progress, setProgress] = useState({ current: 0, total: 0 })

  const handleAnalyze = async (reviews) => {
    setIsLoading(true)
    setResults([])
    setError('')
    setProgress({ current: 0, total: reviews.length })
    try {
      const analyzed = await analyzeReviewsSequentially(
        reviews,
        (current, total) => setProgress({ current, total })
      )
      setResults(analyzed)
    } catch (err) {
      setError('The AI model is currently rate-limited. Please wait 30 seconds and try again.')
    }
    setIsLoading(false)
    setProgress({ current: 0, total: 0 })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="mb-2">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
            Dashboard
          </span>
        </div>
        <h1 className="font-serif text-4xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
          Read your guests, instantly.
        </h1>
        <p className="text-sm mb-10" style={{ color: '#8a7a6a' }}>
          Paste a single review or many at once. GuestLens classifies sentiment, tags themes and drafts a reply for every one.
        </p>

        <div className="bg-white rounded-2xl border p-6 mb-4" style={{ borderColor: '#e8e0d4' }}>
          <ReviewInput onAnalyze={handleAnalyze} isLoading={isLoading} />
        </div>

        {isLoading && progress.total > 0 && (
          <div className="bg-white rounded-2xl border px-6 py-4 mb-4" style={{ borderColor: '#e8e0d4' }}>
            <div className="flex justify-between text-sm mb-2" style={{ color: '#8a7a6a' }}>
              <span>Analyzing reviews...</span>
              <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{progress.current} / {progress.total}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ backgroundColor: '#e8e0d4' }}>
              <div
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(progress.current / progress.total) * 100}%`, backgroundColor: '#e8682a' }}
              />
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border px-6 py-4 mb-4 flex items-start gap-3" style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
            <span style={{ color: '#dc2626', fontSize: '18px' }}>⚠️</span>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#991b1b' }}>Analysis Failed</p>
              <p className="text-sm mt-1" style={{ color: '#dc2626' }}>{error}</p>
            </div>
          </div>
        )}

        {results.length > 0 && (
          <>
            <SummaryCard results={results} />
            <Dashboard results={results} />
            <ResultsTable results={results} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default DashboardPage