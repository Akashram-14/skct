// Login.js
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
     <div className='wrapper'>
    <form action=""> 
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder=' 👤Username' required />
        </div>
        <div className="input-box">
          <input type="password" placeholder='🔒Password' required maxLength={8}/>
        </div>
        
        <div className="remember-forgot">
          <lable><input type="checkbox" /><b>Remember me</b></lable>
          <a href="#"><b>Forgot password?</b></a>
        

        </div>
        <button type="submit">Login</button>

        <div className="register-link">
<p><b>Dont't have an account?</b><a href="#"><Link to='/Register'><b>Register</b></Link></a></p>
    </div>
    </form>
    </div>
   );
};

export default Login;