import './App.css'
import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Feed from './pages/Feed.js'
import NewPost from './pages/NewPost'
import Post from './pages/Post'
import ProfilePosts from './components/ProfilePosts'
import PostForm from './components/PostForm'
import { useNavigate } from 'react-router-dom'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  let navigate = useNavigate()

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <Signin
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/profile/:id"
            element={<Profile user={user} authenticated={authenticated} />}
          />
          <Route
            path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          />
          <Route
            path="/create"
            element={<NewPost user={user} authenticated={authenticated} />}
          />
          <Route
            path="/posts/:id"
            element={<Post user={user} authenticated={authenticated} />}
          />
          <Route path="/posts-delete/:id" element={<ProfilePosts />} />
          <Route
            path="/posts-update/:id"
            element={<PostForm user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
      <footer>@ 2022 CopyRight Sarah D.</footer>
    </div>
  )
}

export default App
