const Feed = ({ user, authenticated }) => {
  return user && authenticated ? (
    <div>
      <h3>Welcome to your feed!</h3>
    </div>
  ) : (
    <div>
      <h3>Please sign in to continue...</h3>
      <button>Signin</button>
    </div>
  )
}

export default Feed
