import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../services/api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PostForm = ({ user, authenticated }) => {
let navigate = useNavigate()
let { id } = useParams()
const [post, setPost] = useState()
const [formState, setFormState] = useState({
    description: '',
    image: ''
})

useEffect(() => {
  const apiCall = async () => {
    const response = await axios.get(`${BASE_URL}/posts/${id}`)
    setPost(response.data)
    console.log('the data', response.data)
  }
  apiCall()
}, [])



    const handleUpdate = async () => {
        await axios.put(`${BASE_URL}/posts/${parseInt(id)}`, formState)
        alert('Post updated')
        navigate(`${BASE_URL}/profile/${post.ownerId}`)
      }
      const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
    

    return user && authenticated ? (
    <div>      
        <h2>Edit Your Post</h2>
    <form onSubmit={handleUpdate} >
      <label>Describe your post!</label>
      <input
        id="description"
        value={formState.description}
        onChange={handleChange}
      />
      <label>Add image to post!</label>
      <input
        id="image"
        value={formState.image}
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

export default PostForm