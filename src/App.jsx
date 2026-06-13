import { useState } from 'react'
import Header from './components/Header'
import ReviewInput from './components/ReviewInput'
import ResultsTable from './components/ResultsTable'
import Dashboard from './components/Dashboard'
import SummaryCard from './components/SummaryCard'
import { analyzeReviewsSequentially } from './utils/gemini'

function App() {
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ReviewInput onAnalyze={handleAnalyze} isLoading={isLoading} />

        {isLoading && progress.total > 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 px-6 py-4 mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Analyzing reviews...</span>
              <span>{progress.current} / {progress.total}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl px-6 py-4 mb-6 flex items-start gap-3">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="text-red-700 font-medium text-sm">Analysis Failed</p>
              <p className="text-red-500 text-sm mt-1">{error}</p>
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
    </div>
  )
}

export default App