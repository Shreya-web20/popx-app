import "./Profile.css";

import profilepic from "../assets/profilepic.png";

function Profile() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-info">
          <img
            src={profilepic}
            alt="profile"
          />

          <div>
            <h4>{user.fullName || "Marry Doe"}</h4>
            <p>{user.email || "marrydoe@gmail.com"}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt
          Ut Labore Et Dolore Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
}

export default Profile;