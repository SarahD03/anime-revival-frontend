import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Signin = (props) => {
  const [formValues, setFormValues] = useState({ userName: '', password: '' })
  let navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    // navigate('/feed')
  }

  return (
    <div>
      <h2>Sign in to get full access!</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input
            onChange={handleChange}
            name="username"
            type="username"
            value={formValues.username}
            required
            autoComplete="off"
          />
          <label>Password:</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={formValues.password}
            required
            autoComplete="off"
          />
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
