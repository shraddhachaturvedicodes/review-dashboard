import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <section
      className="w-full px-6 py-20"
      style={{ backgroundColor: '#f7f4ef' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-stone-300 bg-white">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#e8682a' }}
            ></span>
            <span className="text-xs font-medium text-gray-500 tracking-wide">
              Built for Trishul Eco-Homestays · Chopta
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            See what your guests are{' '}
            <span style={{ color: '#e8682a' }}>really</span> saying.
          </h1>

          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
            GuestLens reads reviews from Google, TripAdvisor, Booking.com and Instagram — then hands you sentiment, themes and ready-to-send responses in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#e8682a', color: 'white' }}
            >
              Open the dashboard →
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-900 text-gray-900 bg-transparent hover:bg-stone-100 transition-all"
            >
              Learn more
            </button>
          </div>

          <div className="flex gap-10 mt-12">
            {[['4+', 'Sources'], ['6', 'Themes'], ['~sec', 'Time to insight']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-gray-900">{num}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Live Preview Card */}
        <div className="flex-shrink-0 w-full md:w-80">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-800">Today's snapshot</span>
              <span className="text-xs" style={{ color: '#e8682a' }}>Live preview</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[['REVIEWS', '128', 'text-gray-900'], ['POSITIVE', '91', ''], ['NEGATIVE', '14', 'text-gray-900']].map(([label, val, cls], i) => (
                <div key={label} className="bg-stone-50 rounded-xl p-3">
                  <div className="text-xs font-medium text-gray-400 mb-1">{label}</div>
                  <div
                    className={`text-xl font-bold ${cls}`}
                    style={i === 1 ? { color: '#e8682a' } : {}}
                  >{val}</div>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Satisfaction</span>
                <span className="font-semibold text-gray-800">71%</span>
              </div>
              <div className="h-1.5 rounded-full bg-stone-100">
                <div className="h-1.5 rounded-full" style={{ width: '71%', backgroundColor: '#e8682a' }}></div>
              </div>
            </div>
            {[['Host', 42, '#8b5cf6'], ['Food', 31, '#e8682a'], ['Location', 27, '#16a34a'], ['Cleanliness', 18, '#3b82f6']].map(([theme, count, color]) => (
              <div key={theme} className="flex items-center justify-between py-2 border-b border-stone-100 text-xs">
                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }}></div>
                  <span className="text-gray-700">{theme}</span>
                </div>
                <span className="text-gray-400">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero