import apiRequest from "../../lib/apiRequest";
import "./users.scss";

function Users({ user, onUserTitleClick }) {
  const dateObj = new Date(user.createdAt);
  const formattedDate = dateObj.toLocaleString();

  const handleDelete = async (id) => {
    try {
      await apiRequest.delete(`/user/${id}`);
      window.location.reload();
      console.log("successfully deleted");
    } catch (e) {
      console.log("Failed to delete!", e);
    }
  };

  return (
    <div className="carded" onClick={() => onUserTitleClick(user)}>
      <div className="imageContainer">
        <img className="img" src={user.avatar || "noavatar.jpg"} alt="" />
      </div>
      <div className="textContainer">
        <h2 className="title">
          <div>{user.username}</div>
        </h2>
        <p>Email : {user.email}</p>
        <p>Created At : {formattedDate}</p>
      </div>
      <div className="delete" onClick={() => handleDelete(user.id)}>
        <p>🗑️</p>
      </div>
    </div>
  );
}

export default Users;