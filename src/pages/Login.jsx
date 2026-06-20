import { useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/ui'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ef] dark:bg-stone-900">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="bg-white dark:bg-stone-800 rounded-2xl border border-[#e8e0d4] dark:border-stone-700 p-10 w-full max-w-md">
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e8682a' }}>
              Welcome back
            </span>
            <h1 className="text-3xl font-bold mt-1 text-[#1a1a1a] dark:text-white">Sign in to GuestLens</h1>
            <p className="text-sm mt-2 text-[#8a7a6a] dark:text-stone-400">Access your review intelligence dashboard</p>
          </div>

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" size="lg">
              Sign in
            </Button>
          </div>

          <p className="text-center text-xs mt-6 text-[#8a7a6a] dark:text-stone-400">
            Authentication coming in Week 6
          </p>
          <p className="text-center text-xs mt-2">
            <button onClick={() => navigate('/')} className="underline" style={{ color: '#e8682a' }}>Back to home</button>
          </p>
          <p className="text-center text-xs mt-2 text-[#8a7a6a] dark:text-stone-400">
            Don't have an account? <span style={{ color: '#e8682a' }}>Sign up coming soon</span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login