import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Logout from './Logout';
import Profile from './profile';
import TableComponent from './TableComponent';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/tablecomponent" element={<TableComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
