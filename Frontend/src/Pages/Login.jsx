import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setError('')
    setSuccess('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Please fill all fields')
      return
    }

    setLoading(true)
    setError('')
    setSuccess('Login successful')

    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center pt-20">
      <div className="bg-slate-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-8">
          Login to manage your finances
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <label className="sr-only" htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label className="sr-only" htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-emerald-400 text-sm self-start"
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>

          {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-400 text-black font-bold py-3 rounded-lg hover:bg-emerald-300 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {success && <p className="text-emerald-400 text-sm">{success}</p>}

        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account? <Link to="/register" className="text-emerald-400 hover:underline">Register</Link>
        </p>

      </div>
    </main>
  )
}

export default Login