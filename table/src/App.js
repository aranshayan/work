import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TableComponent from './TableComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<TableComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
