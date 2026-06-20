import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#f7f4ef] dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: '#1a3a2a', color: '#e8682a' }}
              >G</div>
              <span className="font-semibold text-gray-800 dark:text-white">GuestLens</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-stone-400 leading-relaxed">
              AI-powered guest review intelligence for Trishul Eco-Homestays, nestled in Chopta, Uttarakhand.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-stone-500 mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              {[['Home', '/'], ['Dashboard', '/dashboard'], ['About', '/about'], ['Sign in', '/login']].map(([label, path]) => (
                <Link key={path} to={path} className="text-sm text-gray-700 dark:text-stone-300 hover:text-orange-500 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-stone-500 mb-4">Built for</h4>
            <p className="text-sm text-gray-700 dark:text-stone-300">TBI-GEU Summer Internship 2026</p>
            <p className="text-sm text-gray-700 dark:text-stone-300">AI-Assisted Full Stack Track</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-white mt-3">Shraddha Chaturvedi</p>
            <p className="text-sm text-gray-400 dark:text-stone-500">Graphic Era University, Dehradun</p>
          </div>
        </div>
        <div className="border-t border-stone-200 dark:border-stone-700 mt-10 pt-6 flex justify-between items-center">
          <p className="text-xs text-gray-400 dark:text-stone-500">© 2026 GuestLens. Crafted for the hills.</p>
          <p className="text-xs text-gray-400 dark:text-stone-500">SIP 2026 · TBI-GEU</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer