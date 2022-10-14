import "./auth.scss";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [err, setErr] = useState(null)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs)
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder='Username' name="username" required onChange={handleChange} />
        <input type="email" placeholder='Email' name="email" required onChange={handleChange} />
        <input type="password" placeholder='Password' name="password" required onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login" className="link">Login</Link></span>
      </form>
    </div>
  )
}

export default Register