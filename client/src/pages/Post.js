import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewPost from '../components/ViewPost'
import { BASE_URL } from '../services/api'

const Post = () => {
  let { id } = useParams()

  const [post, setPost] = useState()
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}/posts/${id}`)
      setPost(response.data)
      console.log(response.data)
    }
    apiCall()
  }, [])

  return <div>{post && <ViewPost post={post} />}</div>
}
export default Post
