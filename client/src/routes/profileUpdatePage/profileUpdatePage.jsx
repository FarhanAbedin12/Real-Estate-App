import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./profileUpdatePage.scss";
import CloudinaryUploadWidget from "../../components/uploadWidget/UploadWidget";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';



function ProfileUpdatePage() {
  const cloudName= "farhanjoy";
  const uploadPreset= 'estate';

  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [publics, setPublic] = useState("");

  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const navigate = useNavigate();
  const uwConfig = {
    cloudName,
    uploadPreset,
    multiple: false,
    folder: 'avatar',
    maxImageFileSize: 2000000,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username= formData.get("username")
    const email= formData.get("email")
    const password= formData.get("password")
    


    try {
      const res = await apiRequest.put(`/user/${currentUser.id}`, {
        username,
        email,
        password,
        avatar,
      });

      updateUser(res.data);
      navigate("/profile");

    } catch (err) {
      console.log(err);
      setError(err.res.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>Update Failed!</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar}
          alt=""
          className="avatar"
        />

      <CloudinaryUploadWidget 
      uwConfig={uwConfig} setPublicId={setPublic} />
      {publics && (
        <div
          className="image-preview"
          style={{ width: '800px', margin: '20px auto' }}
        >
          <AdvancedImage
            style={{ maxWidth: '100%' }}
            cldImg={cld.image(publicId)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
      </div>
    </div>
  );
}

export default ProfileUpdatePage;