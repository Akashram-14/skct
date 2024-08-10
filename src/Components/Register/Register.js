import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <div id="back1">
                <div className='well' id="login_box">
                    <div id="welcome">
                        <br></br>
                        <h1> HeartfeltHappenings💞</h1>
                    </div>
                   <Link to='/Login'><button style={{ position: 'absolute', top: '10px', right: '10px' }} id="login_button">
                        <h3>Login</h3>
                    </button></Link>
                    <div>
                        <h4 id="email_text">🆔Name</h4>
                        <input type="text" placeholder="🆔Enter your name ..." id="text" />
                        <br></br>

                        <h4 id="email_text">📧Email</h4>
                        <input type="email" placeholder="📧Enter your email ..." id="text" />
                        <br></br>

                        <h4 id="age">☎️Mobile No</h4>
                        <input type="tel" placeholder='☎️Enter your number ...' id="num"></input>
                        <br></br>

                        <h4 id="password_text">🗝️Password</h4>
                        <input type="password" placeholder="🗝️Enter your password ..." id="text"></input>

                        <br></br>
                        <br></br>
                        <br></br>


                        <button id="signin_button"><h3>Sign Up</h3></button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
