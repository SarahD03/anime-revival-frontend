import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'

const NewPost = ({ user, authenticated }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [form, setForm] = useState({
    description: '',
    image: '',
    ownerId: id
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newPost = await axios.post(`${BASE_URL}/posts`, form)
    setForm({
      description: '',
      image: '',
      ownerId: id
    })
  }

  console.log(id)

  return user && authenticated ? (
    <div className="form-style-3">
      <h2>Create a new Post!</h2>
      <form onSubmit={handleSubmit}>
        <label>Describe your post!</label>
        <input
          id="description"
          placeholder="Whats happening?"
          value={form.description}
          onChange={handleChange}
        />
        <label>Add image to post!</label>
        <input
          id="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <button>Post</button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Please sign in to continue...</h3>
      <button onClick={() => navigate('/signin')}>Signin</button>
    </div>
  )
}
export default NewPost
