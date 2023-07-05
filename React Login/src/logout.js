import React from "react";
import { useNavigate } from "react-router-dom";

const Logoutt = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h2>پروفایل کاربری</h2>
      </div>
      <div className="profile-info">
        <div className="avatar">
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            alt="User Avatar"
          />
        </div>
        <div className="user-details">
          <h3>نام کاربری</h3>
          <p>ایمیل: user@example.com</p>
          <p>شهر: تهران</p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button onClick={handleButtonClick}>خروج</button>
      </div>
    </div>
  );
}

export default Logoutt;