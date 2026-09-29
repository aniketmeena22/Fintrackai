import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
    setError('')
    setSuccess('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError('Please fill all fields')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setError('')
    setSuccess('Account details are valid. Registration will work once backend is connected.')
  }

  const inputClassName = 'bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400'

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center pt-20">
      <div className="bg-slate-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400 mb-8">Start managing your finances today</p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            className={inputClassName}
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label className="sr-only" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={inputClassName}
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label className="sr-only" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={showPasswords ? 'text' : 'password'}
            placeholder="Password"
            className={inputClassName}
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength="8"
            required
          />

          <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPasswords ? 'text' : 'password'}
            placeholder="Confirm Password"
            className={inputClassName}
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            minLength="8"
            required
          />

          <button
            type="button"
            onClick={() => setShowPasswords((isVisible) => !isVisible)}
            className="text-emerald-400 text-sm self-start"
          >
            {showPasswords ? 'Hide Passwords' : 'Show Passwords'}
          </button>

          {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}
          {success && <p className="text-emerald-400 text-sm" aria-live="polite">{success}</p>}

          <button
            type="submit"
            className="bg-emerald-400 text-black font-bold py-3 rounded-lg hover:bg-emerald-300 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-emerald-400 hover:underline">Login</Link>
        </p>
      </div>
    </main>
  )
}

export default Register
