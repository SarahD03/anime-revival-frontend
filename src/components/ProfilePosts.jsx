import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../services/api"

const ProfilePosts = () => {
const logo2 = '/logo2.gif'
    const [post, setPost] = useState([])
    let { id } = useParams()

useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}/posts/${id}`)
      setPost(response.data)
    }
    apiCall()
  }, [])
  const handleDelete = async () => {
    await axios.delete(`${BASE_URL}/posts/${parseInt(id)}`)
    alert('Post deleted')
  }
console.log(id)

    return(
      <div>
    <div className="protected">
      <button 
      onClick={handleDelete}>are you sure you want to delete?
      </button>
    </div>
<img src={logo2} alt='crying gif' style={{display: 'relative', marginTop: '30px', marginBottom: '100px', border: 'pink solid', borderWidth: '5px', borderRadius: '10px'}}/>
    </div>)
}

export default ProfilePosts