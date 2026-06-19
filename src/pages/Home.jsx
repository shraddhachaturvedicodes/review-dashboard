import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const features = [
  { icon: '😊', tag: 'AI', title: 'Sentiment classification', description: 'Every review tagged Positive, Neutral or Negative based on overall tone — not single keywords.' },
  { icon: '🏷️', tag: 'THEMES', title: 'Six-theme tagging', description: 'Food, Host, Cleanliness, Location, Value and Experience — see exactly where feedback lands.' },
  { icon: '💬', tag: 'REPLIES', title: 'Suggested responses', description: 'Professional one-line replies for every review — warm thanks or empathetic acknowledgments.' },
  { icon: '📊', tag: 'CHARTS', title: 'Visual analytics', description: 'Sentiment and theme charts populate the moment your analysis finishes.' },
  { icon: '⚡', tag: 'SUMMARY', title: 'At-a-glance metrics', description: 'Total reviews, positives, negatives and top complaint theme — all on one card.' },
  { icon: '📁', tag: 'EXPORT', title: 'One-click CSV export', description: 'Download a clean spreadsheet of every analysis for sharing with your team.' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ef] dark:bg-stone-900">
      <Hero />

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Everything your front desk needs.
            </h2>
            <p className="text-sm mt-1 text-gray-500 dark:text-stone-400">
              Six focused features that turn unread reviews into clear action items.
            </p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-sm font-medium hidden md:block"
            style={{ color: '#e8682a' }}
          >
            Try it now →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Card key={i} icon={f.icon} tag={f.tag} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-20 w-full">
        <div
          className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: '#1a3a2a' }}
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to read between the lines?
            </h2>
            <p className="text-sm" style={{ color: '#a0c0a0' }}>
              Paste your last week of reviews and let GuestLens hand you the patterns, priorities and replies.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#e8682a', color: 'white' }}
            >
              Open dashboard →
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 rounded-full text-sm font-semibold border transition-all"
              style={{ borderColor: 'white', color: 'white', backgroundColor: 'transparent' }}
            >
              Read the story
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home