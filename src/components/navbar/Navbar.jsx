import "./navbar.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const cat = location.search;

  const handleLogout = () =>{
    logout();
    navigate("/")
  }
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">CARLOS BLOG.</div>
        </Link>
        <div className="links">
          <NavLink className="link active" to="/">
            <h6 className={cat==="" ? "active" : ""}>FEATURED</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=art">
            <h6 className={cat==="?cat=art" ? "active" : ""}>ART</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=science">
            <h6 className={cat==="?cat=science" ? "active" : ""}>SCIENCE</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=technology">
            <h6 className={cat==="?cat=technology" ? "active" : ""}>TECHNOLOGY</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=cinema">
            <h6 className={cat==="?cat=cinema" ? "active" : ""}>CINEMA</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=design">
            <h6 className={cat==="?cat=design" ? "active" : ""}>DESIGN</h6>
          </NavLink>
          <NavLink className="link" to="/?cat=food">
            <h6 className={cat==="?cat=food" ? "active" : ""}>FOOD</h6>
          </NavLink>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={handleLogout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
          <span className="write">
            <Link className="link" to="write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
