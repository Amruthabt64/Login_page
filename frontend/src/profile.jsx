import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div >
      <div >
        <h2>Welcome to Your Profile 🎉</h2>
        <p>You have successfully logged in!</p>
        <button
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
