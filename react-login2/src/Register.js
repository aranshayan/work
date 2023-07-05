import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const handleRegister = async (data) => {
    try {
      const response = await axios.post('https://reqres.in/api/register', data);
      console.log(response.data);

      if (response.data.token) {
        history.push('/logout');
      } else {
        setError('ثبت نام ناموفق. لطفا مجددا تلاش کنید.');
      }
    } catch (error) {
      console.error(error);
      setError('خطایی رخ داده است. لطفا مجددا تلاش کنید.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    handleRegister(data);
  };

  return (
    <div>
      <h2>ثبت نام</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">ایمیل:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">رمز عبور:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">ثبت نام</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
