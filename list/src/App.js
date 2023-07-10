// import React from "react";
// import { useState } from "react";
// import './App.css';


// export function App4() {
//   const [fullName, setFullName] = useState({ firstName: '', lastName: '', isEditing: false, id : -1 });
//   const [namesList, setNamesList] = useState([]);

//   const handleFullName = (event) => {
//     const { name, value } = event.target;
//     setFullName((prevFullName) => ({ ...prevFullName, [name]: value }));
//   };

//   const handleFirstNameChange = (event, nameId) => {
//     const { value } = event.target;
//     setNamesList((prevNamesList) =>
//       prevNamesList.map((name) =>
//         name.id === nameId ? { ...name, firstName: value } : name
//       )
//     );
//   };

//   const handleLastNameChange = (event, nameId) => {
//     const { value } = event.target;
//     setNamesList((prevNamesList) =>
//       prevNamesList.map((name) =>
//         name.id === nameId ? { ...name, lastName: value } : name
//       )
//     );
//   };

//   const handleAddName = () => {
//     setNamesList((prev) => [
//       ...prev,
//       { firstName: fullName.firstName, lastName: fullName.lastName, id: namesList.length, isEditing: false },
//     ]);
//   };

//   const handleRemoveName = (name) => {
//     setNamesList((prevNamesList) =>
//       prevNamesList.filter((f) => f.id !== name.id)
//     );
//   };

//   const handleEditName = (nameId, newNameFirst, newNameLast) => {
//     setFullName((prevFullName) => ({
//       ...prevFullName,
//       firstName: newNameFirst,
//       lastName: newNameLast,
//     }));
//   };

//   const handleEditButtonClick = (name) => {
//     setNamesList((prevNamesList) =>
//       prevNamesList.map((x) => {
//         if (x.id === name.id) {
//           return { ...x, isEditing: true };
//         }
//         return x;
//       })
//     );
//   };

//   return (
//     <div className="container2">
//       <div className="input-container">

//         <input
//           type="text"
//           name="firstName"
//           value={fullName.firstName}
//           onChange={handleFullName}
//           placeholder="نام"
//         />

//         <input
//           type="text"
//           name="lastName"
//           value={fullName.lastName}
//           onChange={handleFullName}
//           placeholder="خانوادگی"
//         />

//         <button className="button2" onClick={handleAddName}>ثبت</button>

//       </div>

//       <ul>
//         {namesList.map((name) => (
//           <div key={name.id}>
//             {name.isEditing ? <input type='checkbox' /> : null}
//             <input
//               type="text"
//               name={`firstName${name.id}`}
//               value={name.firstName}
//               onChange={(event) => handleFirstNameChange(event, name.id)}
//               disabled={!name.isEditing}
//             />
//             <input
//               type="text"
//               name={`lastName${name.id}`}
//               value={name.lastName}
//               onChange={(event) => handleLastNameChange(event, name.id)}
//               disabled={!name.isEditing}
//             />

//             <button className="button" onClick={() => handleRemoveName(name)}>حذف</button>

//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState } from "react";
import './App.css';

export function App4() {
  
  const [namesList, setNamesList] = useState([]);
  const [fullName, setFullName] = useState({ firstName: '', lastName: '' });

  const handleNameChange = (event, nameId, field) => {
    const { value } = event.target;
  
    if (nameId === -1) {
      setFullName((prevFullName) => ({
        ...prevFullName,
        [field]: value,
      }));
    } else {
      setNamesList((prevNamesList) =>
        prevNamesList.map((name) =>
          name.id === nameId ? { ...name, [field]: value } : name
        )
      );
    }
  };
  
  const handleAddName = () => {
    const newId = namesList.length;
    setNamesList((prev) => [
      ...prev,
      { firstName: fullName.firstName, lastName: fullName.lastName, id: newId, isEditing: false },
    ]);
    setFullName({ firstName: '', lastName: '' });
  };

  const handleRemoveName = (name) => {
    setNamesList((prevNamesList) =>
      prevNamesList.filter((f) => f.id !== name.id)
    );
  };

  const handleEditButtonClick = (name) => {
    setNamesList((prevNamesList) =>
      prevNamesList.map((x) => {
        if (x.id === name.id) {
          return {
            ...x,
            isEditing: !x.isEditing,
          };
        }
        return x;
      })
    );
  };

  return (
    <div className="container2">
      <div className="input-container">
        <input  
          type="text"
          name="firstName"
          value={fullName.firstName}
          onChange={(event) => handleNameChange(event, -1, 'firstName')}
          placeholder="نام"
        />
        <input
          type="text"
          name="lastName"
          value={fullName.lastName}
          onChange={(event) => handleNameChange(event, -1, 'lastName')}
          placeholder="خانوادگی"
        />
        <button className="button2" onClick={handleAddName}>ثبت</button>
      </div>
      <ul className="input-container2">
        {namesList.map((name) => (
          <div key={name.id}>
            <input
              type='checkbox'
              checked={name.isEditing}
              onChange={() => handleEditButtonClick(name)}
            />
            <input
              type="text"
              name={`firstName${name.id}`}
              value={name.firstName}
              onChange={(event) => handleNameChange(event, name.id, 'firstName')}
              disabled={!name.isEditing}
            />
            <input
              type="text"
              name={`lastName${name.id}`}
              value={name.lastName}
              onChange={(event) => handleNameChange(event, name.id, 'lastName')}
              disabled={!name.isEditing}
            />
            <button className="button" onClick={() => handleRemoveName(name)}>حذف</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
