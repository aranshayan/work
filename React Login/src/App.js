import './App.css';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { BsMicrosoft } from 'react-icons/bs';

const App = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
  }

  const handleSignUpClick = () => {
    setIsSignUp(true);
  }

  const handleLogin = async () => {
     
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = 'http://172.20.20.120:8080/api/login';

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Incorrect password');
      }

      const result = await response.json();
      console.log('Success:', result);
      window.location.href = "http://digikala.com";
    } catch (error) {
      console.debug('Error:', error.message);
      alert(error.message);
    }
  }

  const handleSignUp = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password2').value;

    const url = 'https://reqres.in/api/register';

    const data = { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('ثبت نام با مشکل  روبرو شد');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.debug('Error:', error.message);
      alert(error.message);
    }
  }

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">

          <form className="sign-in-form">
            <h2 className="title">ورود</h2>
          <div className="input-field">
            <AiOutlineUserAdd className="icon" />
            <input type="text" placeholder="نام کاربری" id="username" autoComplete='currennt-username'/>
          </div>
          <div className="input-field">
            <MdPassword className="icon" />
              <input type="password" placeholder="رمز عبور" id="password" autoComplete='current-password'/>
          </div>
            <input type="button" value="ثبت نام" className="btn solid" id="login-btn" onClick={handleLogin} />
              <p className="social-text">یا استفاده از پلتفرم</p>
          <div className="social-media">
            <FcGoogle className="social-icon"/>
              <BsApple className="social-icon"/>
               <BsMicrosoft className="social-icon"/>
          </div>
          </form>
          
          <form className="sign-up-form">
            <span><h2 className="title">ثبت نام</h2></span>
            <div className="input-field">
            <AiFillMail className="icon"/>
              <input type="email" placeholder="ایمیل" id="email" autoComplete='currennt-email' />
            </div>
            <div className="input-field">
            <AiOutlineUser className="icon" />
              <input type="password" placeholder="رمز عبور" id="password2" autoComplete='current-password'/>
            </div>
            <input type="button" className="btn" value="ثبت نام" id="signup-btn" onClick={handleSignUp} />
            <div>
              <p className="social-text">یا استفاده از پلتفرم</p>
              <div className="social-media">
              <FcGoogle className="social-icon"/>
                <BsApple className="social-icon"/>
                  <BsMicrosoft className="social-icon"/>
              </div>                
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <span><h3>میخواهید عضو شوید</h3></span>
            <span><p>برای ثبت نام اینجا کلیک کنید</p></span>
            <button className="btn transparent" id="sign-up-btns" onClick={handleSignUpClick}>ثبت نام</button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
         <h3>آیا اکانت دارید؟</h3>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>ورود</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

