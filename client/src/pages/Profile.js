import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import logo from '/Users/sarah03/ga_seir/projects/anime-revival-frontend2/client/src/logo.png'

const Profile = ({ user, authenticated }) => {
  const [profile, setProfile] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getProfile = async () => {
      let profileCard = await Client.get(`/users/${id}`)
      setProfile(profileCard.data)
      console.log('profile data:', profileCard.data)
      console.log('profileee', profile.userName)
    }
    getProfile()
  }, [])
  // if (profile.profileImage == null) {
  //   return <img width={100} height={100} src={logo} />
  // } else {
  //   return <img src={profile.profileImage} />
  // }
  let logopic = <img src={logo} />
  if (profile.profileImage == null) {
    return logopic
  }

  return user && authenticated ? (
    <div>
      <h2>My profile</h2>
      <h1>{<img src={profile.profileImage} />}</h1>
      <h1>{profile.userName}</h1>
      <h3>My Posts: {profile.posts}</h3>
    </div>
  ) : (
    <h3>You must be signed in.</h3>
  )
}

export default Profile
