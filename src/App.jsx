import { useState } from 'react'
import Header from './components/Header'
import ReviewInput from './components/ReviewInput'
import { analyzeReview } from './utils/gemini'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  const handleAnalyze = async (reviews) => {
    setIsLoading(true)
    setResults([])
    try {
      const analyzed = await Promise.all(
        reviews.map(async (review) => {
          const result = await analyzeReview(review)
          return { review, ...result }
        })
      )
      setResults(analyzed)
    } catch (err) {
      console.error('Analysis failed:', err)
      alert('Error: ' + err.message)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ReviewInput onAnalyze={handleAnalyze} isLoading={isLoading} />

        {/* Temporary result display for testing */}
        {results.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              ✅ Results
            </h2>
            {results.map((r, i) => (
              <div key={i} className="mb-4 p-4 bg-gray-50 rounded-xl text-sm">
                <p className="text-gray-600 mb-1"><span className="font-medium">Review:</span> {r.review}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Sentiment:</span> {r.sentiment}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Theme:</span> {r.theme}</p>
                <p className="text-gray-600"><span className="font-medium">Response:</span> {r.response}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App