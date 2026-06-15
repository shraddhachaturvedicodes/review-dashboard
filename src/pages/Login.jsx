import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f7f4ef' }}>
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="bg-white rounded-2xl border p-10 w-full max-w-md" style={{ borderColor: '#e8e0d4' }}>
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
              Welcome back
            </span>
            <h1 className="text-3xl font-bold mt-1" style={{ color: '#1a1a1a' }}>Sign in to GuestLens</h1>
            <p className="text-sm mt-2" style={{ color: '#8a7a6a' }}>Access your review intelligence dashboard</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#8a7a6a' }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all"
                style={{ borderColor: '#e8e0d4', backgroundColor: '#fdf8f4' }}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: '#8a7a6a' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all"
                style={{ borderColor: '#e8e0d4', backgroundColor: '#fdf8f4' }}
              />
            </div>
            <button
              className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#e8682a', color: 'white' }}
            >
              Sign in
            </button>
          </div>

          <p className="text-center text-xs mt-6" style={{ color: '#8a7a6a' }}>
            Authentication coming in Week 6
          </p>
          <p className="text-center text-xs mt-2">
            <button onClick={() => navigate('/')} className="underline" style={{ color: '#e8682a' }}>Back to home</button>
          </p>
          <p className="text-center text-xs mt-2" style={{ color: '#8a7a6a' }}>
            Don't have an account? <span style={{ color: '#e8682a' }}>Sign up coming soon</span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login