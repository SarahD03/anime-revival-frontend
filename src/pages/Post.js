import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewPost from '../components/ViewPost'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Post = ({ user, authenticated }) => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [form, setForm] = useState({
    content: '',
    postId: id,
    ownerId: user.id
  })
  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newPost = await axios.post(`${BASE_URL}/comments/${id}`, form)
    alert('comment created')
    setForm({
      content: '',
      postId: '',
      ownerId: user.id
    })
  }

  const [post, setPost] = useState()
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}/posts/${id}`)
      setPost(response.data)
      console.log(response.data)
    }
    apiCall()
  }, [])

  return user && authenticated ? (
    <div>
      {post && (
        <ViewPost
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
          post={post}
        />
      )}
    </div>
  ) : (
    <div className="protected">
      <h3>Please sign in to continue...</h3>
      <button onClick={() => navigate('/signin')}>Signin</button>
    </div>
  )
}
export default Post
