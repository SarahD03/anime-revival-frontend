import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import logo from '/Users/sarah03/ga_seir/projects/anime-revival-frontend2/client/src/logo.png'
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
      <h1>My profile</h1>
      <h1>
        {
          <img
            src={profile?.profileImage || logo}
            alt="profile pic"
            className="profile-pic"
          />
        }
      </h1>
      <h1 className="profile-user">{profile.userName}</h1>
      <div>
        <h1>My Posts:</h1>
        {posts.map((post) => (
          <div className="profile-posts">
            <h2 key={id}>{post.description}</h2>
            <img
              src={post.image}
              style={{ width: '10em', border: '2px solid grey' }}
            />
            <h4>Date: {post.createdAt}</h4>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      {' '}
      <h3>You must be signed in.</h3>{' '}
      <button onClick={() => navigate('/signin')}>Signin</button>
    </div>
  )
}

export default Profile
