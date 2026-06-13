import { useState } from 'react'
import Header from './components/Header'
import ReviewInput from './components/ReviewInput'
import ResultsTable from './components/ResultsTable'
import Dashboard from './components/Dashboard'
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
      alert('Error: ' + err.message)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ReviewInput onAnalyze={handleAnalyze} isLoading={isLoading} />
        {results.length > 0 && (
          <>
            <Dashboard results={results} />
            <ResultsTable results={results} />
          </>
        )}
      </main>
    </div>
  )
}

export default App