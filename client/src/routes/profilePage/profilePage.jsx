import { useNavigate } from "react-router-dom";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";

function ProfilePage() {
  const navigate= useNavigate()
  const handleLogout=async ()=>{
    try{
      const res= apiRequest.post("/auth/logout")
      localStorage.removeItem("user")
      navigate("/home")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://www.hindustantimes.com/ht-img/img/2023/11/23/1600x900/IMG_7289_1700764001828_1700764009852.jpeg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Nanami</b>
            </span>
            <span>
              E-mail: <b>joy@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
        <h3>Your Dream Property, Just a Tap Away </h3>
        <h6>Discover, buy, and sell properties effortlessly with our app! </h6>
        <h6>🏡 Find Your Perfect Home: Browse a curated collection of properties tailored to your preferences.</h6>
        <h6>💼 Hassle-Free Selling: List your property and reach thousands of potential buyers.</h6>
        <h6>📍 Stay Local, Go Global: Access properties in your neighborhood or explore international opportunities.</h6>
        <h6>⚡ Instant Updates: Get real-time alerts on new listings and market trends.</h6>
        <h6>Transform the way you deal with property—start your journey with us today!</h6>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;