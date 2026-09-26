import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
  const { name, value } = event.target

  setFormData((currentData) => ({ ...currentData, [name]: value }))
}

   const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.email || !formData.password) {
    return
  }

  console.log(formData)
}

  return (
    <main>
      <div>
        <h1>Welcome Back</h1>
        <p>Login to manage your finances</p>

        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  )
}

export default Login