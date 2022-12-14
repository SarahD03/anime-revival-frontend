import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../services/api"

const ProfilePosts = () => {

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


    return(<div className="protected"><button onClick={handleDelete}>are you sure you want to delete?</button></div>)
}

export default ProfilePosts