import {Link} from 'react-router-dom'
const Nav = ({authenticated, user, handleLogOut}) => {
   let authenticatedOptions
   if (user) {
    authenticatedOptions = (
        <nav>
            <h3>Welcome, {user.userName}!</h3>
            <Link to='/feed'>Feed</Link>
            <Link onClick={handleLogOut}>Sign Out</Link>
        </nav>
    )
}
const publicOptions = (
<nav>
    <Link to='/'>Home</Link>
    <Link to='/register'>Register</Link>
    <Link to='/signin'>Sign In</Link>
</nav>
)


return (<div>
        <header>
  <Link to="/">
    <h3>Anime Revival</h3>
  </Link>
  {authenticated && user ? authenticatedOptions : publicOptions}
</header>
</div>
)

}

export default Nav