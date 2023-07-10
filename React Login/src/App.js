import React from "react";
import { useState } from "react";
import './App.css';

// import React, { useId } from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Logout from './Logoutt';
// import Profile from './profile';
// import TableComponent from './TableComponent';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Profile />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/tablecomponent" element={<TableComponent />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// const App2 = () => {
//   return <div>test</div>
// }
// export default App2

// export const App3 = (props) => {

//   return <div>{props.text}</div>
// }
// const firstName = 'shayan'

// export const App4 = () => {

//   const setStateAli = (x) => {
//     let value = x
//     const getValue = () => value
//     const setValue = (newValue) => value = newValue
//     return [getValue , setValue]
//   }

//   const [getValue , setValue] = setStateAli(firstName)
//   const handleButtonClick = () => {
//     setValue('ali')
//     console.log(getValue(), 'inner')
//     reloadDIV()

//   }

//   const [firstNames , setFirstName] = useState('shayan')

//   const reloadDIV  =() => document.getElementById("here").innerHTML = getValue()

//   return (
//     <div>
//       <div id='here'>{firstNames}</div>
//       <button onClick={() => setFirstName('ali')}>Click Me!</button>
//     </div>

//   )

// }

// export function App4() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [namesList, setNamesList] = useState([]);

//   const handleFirstName = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastName = (event) => {
//     setLastName(event.target.value);
//   };
//   const id = useId()

//   const handleAddName = () => {
//     if (firstName && lastName) {
//       setNamesList((prev) => [...prev, { firstName, lastName,  id:  namesList.length   }]);
//     }
//   };

//   const handleRemoveName = (name) => {
//     setNamesList((prev) =>
//       prev.filter(f => !(name.id === f.id))
//     );
//   };

//   return (
//     <div>
//       <input type="text" value={firstName} onChange={handleFirstName} placeholder="نام" />
//       <input type="text" value={lastName} onChange={handleLastName} placeholder="خانوادگی" />
//       <button onClick={handleAddName}>ثبت</button>

//       <ul>
//         {namesList.map((name, index) => (
//           <div key={index}>
//                <li>
//             {name.firstName} {name.lastName} {name.id}
//           </li>
//           <button onClick={() => handleRemoveName(name)}>Delete</button>
//           </div>

//         ))}
//       </ul>
//     </div>
//   );
// }

export function App4() {
  const [fullName, setFullName] = useState({ firstName: '', lastName: '', isEditing: false, id : -1 });
  const [namesList, setNamesList] = useState([]);

  const handleFullName = (event) => {
    setFullName({ ...fullName, [event.target.name]: event.target.value });
  };


  const handleAddName = () => {
        setNamesList((prev) => [
          ...prev,
          { firstName: fullName.firstName  ,lastName : fullName.lastName, id: namesList.length, isEditing: false },
        ]);
  };

  const handleRemoveName = (name) => {
    setNamesList((prev) => prev.filter((f) => f.id !== name.id));
  };

  const handleEditName = (nameId, newNameFirst, newNameLast) => {
    
    setFullName({ firstName: newNameFirst , lastName: newNameLast, isEditing: true });
  };

  const handleEditButtonClick = (name) => {
     setNamesList(prev => prev.map(x => {
      if (x.id === name.id){
        x.isEditing = true
      }
      return x
     }))
    
  };


  return (
    <div className="container2">
      <div className="input-container">
        <input
          type="text"
          name="firstName"
          value={fullName.firstName}
          onChange={handleFullName}
          placeholder="نام"
        />

        <input
          type="text"
          name="lastName"
          value={fullName.lastName}
          onChange={handleFullName}
          placeholder="خانوادگی"
        />

        <button className="button2" onClick={handleAddName}>ثبت</button>
      </div>
      <ul>
        {namesList.map((name, index) => (
          <div key={name.id}> 
                {name.isEditing ? <input type='checkbox' /> : null}
                <input
                  type="text"
                  name="firstName"
                  value={name.firstName}
                  onChange={handleFullName}
                  disabled={!name.isEditing}
                />
                <input
                  type="text"
                  name="lastName"
                  value={name.lastName}
                  onChange={handleFullName}
                  disabled={!name.isEditing}
                />
                <button className="button" onClick={() => handleRemoveName(name)}>حذف</button>
                {/* <button className="button" onClick={() => handleEditButtonClick(name)}>انصراف</button> */}
                <button className="button2" onClick={() => handleEditButtonClick(name)}>ویرایش</button>
            {/* ) : (
              <ul>
                <input
                  type="text"
                  value={name.fullName}
                  disabled
                />
                <button className="button" onClick={() => handleRemoveName(name)}>حذف</button>
                <button className="button" onClick={() => handleEditButtonClick(name)}>ویرایش</button>
              </ul>
            )} */}
          </div>
        ))}
      </ul>
    </div>
  );
}            
