import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formValues, setFormValues] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    profileImage: ''
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      password: formValues.password,
      profileImage: formValues.profileImage
    })
    setFormValues({
      userName: '',
      password: '',
      confirmPassword: '',
      profileImage: ''
    })
    navigate('/signin')
  }

  return (
    <div>
      <h1>Create Your Account!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="Onepiece123..."
            value={formValues.userName}
            required
            autoComplete="off"
          />
          <label>Password:</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            required
            autoComplete="off"
          />
          <label>Confirm password</label>
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
            autoComplete="off"
          />
          <label>Profile image:</label>
          <input
            onChange={handleChange}
            name="profileImage"
            type="profileImage"
            placeholder="Image URL"
            value={formValues.profileImage}
            autoComplete="off"
          />
          <button
            disabled={
              !formValues.userName ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
