import React, { useState } from 'react';
import './Login.css';


const allowedUsers = [
  { firstName: 'Sri', lastName: 'Konreddy' },
  { firstName: 'Ramnik', lastName: 'Jhooti' },
  { firstName: 'Niha', lastName: 'Gummakonda' },
  { firstName: 'Yuktha', lastName: 'Gubbala' },
  { firstName: 'Stacey', lastName: 'Pavdeja' },
  { firstName: 'Lexi', lastName: 'Cooper-Dervan' },
  { firstName: 'Aonghus', lastName: 'Mullen' },
  { firstName: 'Pauline', lastName: 'Renevey' },
  { firstName: 'Molly', lastName: 'Harris' },
  { firstName: 'Isha', lastName: 'Pachnanda' },
  { firstName: 'Charlotte', lastName: 'Harwood' }
];

const Login = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
  
      const user = allowedUsers.find(
        user =>
          user.firstName.toLowerCase() === firstName.toLowerCase() &&
          user.lastName.toLowerCase() === lastName.toLowerCase()
      );
  
      if (user) {
        onLogin();
      } else {
        setError('Invalid first name or last name, please check spacing :)');
      }
    };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;