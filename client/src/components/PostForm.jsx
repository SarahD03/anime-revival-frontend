import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../services/api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import logo3 from '/Users/sarah03/ga_seir/projects/anime-revival-frontend2/client/src/logo3.gif'

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
    <div style={{
      marginLeft: '30%',
      width: '42em',
      alignItems: 'center',
      justifyContent: 'center'
    }} className="form-style-3">      
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
      <button style={{
            display: 'flex',
            width: '6em',
            marginTop: '1em',
            marginLeft: '17em'
          }}>Post</button>
    </form>
<img src={logo3} alt='keyboard girl' style={{display: 'relative', width: '450px', marginTop: '30px', marginBottom: '100px', border: 'pink solid', borderWidth: '5px', borderRadius: '10px'}}/> 
    </div>
    ) : (
        <div className="protected">
        <h3>Please sign in to continue...</h3>
        <button onClick={() => navigate('/signin')}>Signin</button>
      </div>
    )
}

export default PostForm