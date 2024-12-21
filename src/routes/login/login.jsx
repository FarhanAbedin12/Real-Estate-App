import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <p>
          Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
      <div className="imgContainer"> 
      <img src="/bg.png" alt="" />
        </div>
    </div>
  );
}

export default Login;