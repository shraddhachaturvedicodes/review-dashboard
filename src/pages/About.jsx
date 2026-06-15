import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const sections = [
  {
    icon: '🎯',
    title: 'The problem',
    description: 'Staff read reviews one by one. Recurring complaints go unnoticed. Negative reviews go unanswered. There\'s no easy way to see what guests actually feel — or to respond consistently.'
  },
  {
    icon: '✨',
    title: 'The solution',
    description: 'Paste or upload reviews in bulk. GuestLens classifies sentiment, tags the primary theme, drafts a professional reply, and shows it all on a single, scannable dashboard.'
  },
  {
    icon: '🏔️',
    title: 'The context',
    description: 'Trishul Eco-Homestays sits at the base of Chandrashila peak. The aesthetic and tone of GuestLens — warm, calm, earthy — are inspired by its mountain setting.'
  },
  {
    icon: '🎓',
    title: 'The maker',
    description: 'Shraddha Chaturvedi · TBI-26101134 — built during the TBI-GEU Summer Internship Program 2026, AI-Assisted Full Stack Track at Graphic Era University, Dehradun.'
  },
]

function About() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
            About the project
          </span>
        </div>
        <h1 className="font-serif text-5xl font-bold leading-tight mb-6" style={{ color: '#1a1a1a' }}>
          Built in the hills,<br />for the hosts of the hills.
        </h1>
        <p className="text-base leading-relaxed mb-12 max-w-2xl" style={{ color: '#6a5a4a' }}>
          GuestLens was created for <strong>Trishul Eco-Homestays</strong> in Chopta, Uttarakhand — a small, family-run property that quietly collects guest feedback across Google Reviews, TripAdvisor, Booking.com and Instagram.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#e8e0d4' }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#fdf0e8' }}
              >
                <span style={{ fontSize: '18px' }}>{s.icon}</span>
              </div>
              <h3 className="font-serif text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6a5a4a' }}>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: '#e8e0d4' }}>
          <h3 className="font-serif text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>Under the hood</h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#6a5a4a' }}>
            React 18 + Vite, Tailwind CSS, Recharts for analytics, PapaParse for CSV export, and Gemini AI via OpenRouter powering the language model behind every classification and suggested reply.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 rounded-full text-sm font-semibold"
              style={{ backgroundColor: '#e8682a', color: 'white' }}
            >
              Open the dashboard
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 rounded-full text-sm font-semibold border"
              style={{ borderColor: '#1a1a1a', color: '#1a1a1a', backgroundColor: 'transparent' }}
            >
              Back home
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About