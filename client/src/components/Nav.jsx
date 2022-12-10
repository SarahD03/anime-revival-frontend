import {Link} from 'react-router-dom'
const Nav = ({authenticated, user, handleLogOut}) => {
   let authenticatedOptions
   if (user) {
    authenticatedOptions = (
        <nav>
            <h3>Welcome (user)</h3>
            <Link>Feed</Link>
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
    <h3>XD</h3>
  </Link>
  {authenticated && user ? authenticatedOptions : publicOptions}
</header>
</div>
)

}

export default Nav