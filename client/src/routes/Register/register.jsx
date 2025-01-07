import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="formContainers">
        <form>
          <h1>Welcome</h1>
          <input name="username" type="text" placeholder="Enter your Username" />
          <input name="email" type="text" placeholder="Enter your Email" />
          <input name="password" type="password" placeholder="Enter your Password" />
          <input name="confirm password" type="password" placeholder="Confirm your Password" />
          <button>Sign Up</button>
          <p>
          Do you have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="imgContainer"> 
      <img src="/bg.png" alt="" />
        </div>
    </div>
  );
}

export default Register;