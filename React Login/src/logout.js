import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

const LogoutPage = () => {
  const history = useHistory();
  const { handleLogout } = useContext(UserContext);

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("میخواهید خارج شوید؟");
    if (confirmLogout) {
      handleLogout();
      history.push('/');
    }
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <p>میخواهید خارج شوید؟"</p>
      <button onClick={handleLogoutClick}>خروج</button>
    </div>
  );
};
 
export default LogoutPage;

