import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const feed = await axios.get(`${BASE_URL}/posts/all`)
      setPosts(feed.data)
      console.log(feed.data)
    }
    handlePosts()
  }, [])

  let navigate = useNavigate()

  return user && authenticated ? (
    <div>
      <h3 className="feed-title">Welcome to your feed!</h3>
      <div className="post-card">
        {posts.map((item) => (
          <div
            key={posts.id}
            onClick={() => {
              navigate(`/posts/${item.id}`)
            }}
            className="post-list"
          >
            <h3>Posted by: @{item.owner.userName}</h3>
            <img
              src={item.image}
              style={{
                width: '18em',
                border: '2px solid grey',
                borderRadius: '2px'
              }}
              alt="user post"
            />
            <h3>{item.description}</h3>
            <h4>View Comments...</h4>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Please sign in to continue...</h3>
      <button onClick={() => navigate('/signin')}>Signin</button>
    </div>
  )
}

export default Feed
