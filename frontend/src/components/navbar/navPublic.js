import "./navbar.css"

const NavPublic = () => {
 
  return (
    <>
       <nav className="nav">
        <a href="/" className="site-title">GrumbleBook</a>
        <ul>
            
          <li>
            <a href="/signup">Signup</a>
          </li>

          <li>
            <a href="/login">Login</a>
          </li>      
      </ul>
    </nav>
    </>
  );
}

export default NavPublic;


