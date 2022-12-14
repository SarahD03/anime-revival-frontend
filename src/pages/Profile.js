import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Client from '../services/api'
import logo from '/Users/sarah03/ga_seir/projects/anime-revival-frontend2/src/logo.png'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [profile, setProfile] = useState([])
  const [posts, setPost] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getProfile = async () => {
      let profileCard = await Client.get(`/users/${id}`)
      setProfile(profileCard.data)
      console.log('profile data:', profileCard.data)
    }
    getProfile()
  }, [])
  //added another useeffect because it wasnt working for first one
  useEffect(() => {
    const getPosts = async () => {
      let profileCard = await Client.get(`/users/${id}`)
      setPost(profileCard.data.posts)
      console.log('posts data:', profileCard.data.posts)
    }
    getPosts()
  }, [])

  // if profile is empty string or empty this will automatically load a default avatar
  return user && authenticated ? (
    <div>
      <section className="section-box">
        <h1 className="profile-title">My profile</h1>
        <h1>
          {
            <img
              src={profile?.profileImage || logo}
              alt="profile pic"
              className="profile-pic"
            />
          }
        </h1>
        <h1 className="profile-user" key={profile.id}>
          @{profile.userName}
        </h1>
      </section>
      <div>
        <h1>My Posts:</h1>
        {posts.map((post) => (
          <div className="profile-posts" key={post.id} id={post.id}>
            <h2>{post.description}</h2>
            <img
              src={post.image}
              style={{ width: '10em', border: '2px solid grey' }}
              alt="profile-posts"
            />
            <h4>Date: {post.createdAt}</h4>
            <h5>post ID: {post.id}</h5>
            <Link to={`/posts-delete/${post.id}`}>
              <button className="profile-btn">Delete</button>
            </Link>
            <Link to={`/posts-update/${post.id}`}>
              <button className="profile-btn">Update</button>
            </Link>
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

export default Profile
