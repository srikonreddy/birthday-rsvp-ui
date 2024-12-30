import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeoutError(false);
    setError('');

    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeoutError(true);
    }, 5000);

    try {
      const response = await fetch('https://birthday-rsvp-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName }),
      });

      clearTimeout(timeout);

      if (response.ok) {
        onLogin();
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome! Please Log In</h2>
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
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Log In'}
        </button>
        {error && <p className="error">{error}</p>}
        {timeoutError && <p className="error">Sorry, the request is taking so long, I cheaped out on hosting lol. Please alert me xo</p>}
      </div>
    </div>
  );
};

export default Login;