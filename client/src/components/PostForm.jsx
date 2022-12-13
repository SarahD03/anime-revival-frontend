import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../services/api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PostForm = () => {
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
  }
  apiCall()
}, [])
console.log(post)


    const handleUpdate = async () => {
        await axios.put(`${BASE_URL}/posts/${parseInt(id)}`, formState)
        alert('Post updated')
        navigate('/')

      }
      const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
    

    return(
    <div>      
        <h2>Edit Your Post</h2>
    <form onSubmit={handleUpdate} >
      <label>Describe your post!</label>
      <input
        id="description"
        // placeholder={post.description}
        value={formState.description}
        onChange={handleChange}
      />
      <label>Add image to post!</label>
      <input
        id="image"
        // placeholder={post.image}
        value={formState.image}
        onChange={handleChange}
      />
      <button>Post</button>
    </form>

    </div>)
}

export default PostForm