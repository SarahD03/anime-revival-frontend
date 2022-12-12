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
    setFormValues({ userName: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/profile/${payload.id}`)
    console.log(payload.id)
  }

  return (
    <div>
      <h2>Sign in to get full access!</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className="form-style-3"
      >
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            value={formValues.userName}
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
          <button
            disabled={!formValues.userName || !formValues.password}
            type="submit"
            style={{
              marginTop: '1em',
              marginLeft: '10em'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
