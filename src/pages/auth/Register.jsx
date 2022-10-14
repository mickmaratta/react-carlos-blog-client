import "./auth.scss";
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username' required />
        <input type="email" placeholder='Email' required/>
        <input type="password" placeholder='Password' required />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to="/login" className="link">Login</Link></span>
      </form>
    </div>
  )
}

export default Register