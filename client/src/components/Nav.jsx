import {Link} from 'react-router-dom'
const Nav = ({authenticated, user, handleLogOut}) => {
   let authenticatedOptions
   if (user) {
    authenticatedOptions = (
        <nav>
            <h3>Welcome (user)</h3>
            <Link>Home</Link>
            <Link onClick={handleLogOut}>Sign Out</Link>
        </nav>
    )
}
const publicOptions = (
<nav>
    <h2>Welcome guest!</h2>
    <Link>Home</Link>
    <Link>Register</Link>
    <Link>Sign In</Link>
</nav>
)


return (<div>
        <header>
  <Link to="/">
    <h3>HOME</h3>
  </Link>
  {authenticated && user ? authenticatedOptions : publicOptions}
</header>
</div>
)

}

export default Nav