import { useState } from "react";
import "../style/login.css";
import profile from "../images/profile.jpeg";
import email from "../images/email.jpeg";
import pass from "../images/pass.png";
import { useNavigate, useNavigation } from 'react-router-dom';
// import { Maximize } from "@mui/icons-material";
function Login() {
    const navigate = useNavigate();
    return ( 
        <div className="back">

        <div className="mains" >
                <div className='sub-mains1'>

                </div>
            <div className="sub-mains">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            {/* <h2 className="heading">User Login.</h2> */}
                            {/* <img alt="profile" className="profile" /> */}
                            <img src={profile} alt="email" className="profile"/>
                        </div>


                    </div>
                    <div>
                        {/* <h1>Login To Continue....</h1> */}
                        <div className="input1">
                            {/* <img src={email} alt="email" className="email" /> */}
                                <input required type="email" placeholder="Email" className="name" />
                        </div>
                        <div className="input2">
                            {/* <img src={pass} alt="pass" className="email" /> */}
                            <input type="password" placeholder="Password" className="name" required/>
                        </div>
                        <div className="login-button">
                                <button onClick={() => { alert("Success") }} className="button">Login</button>
                        </div>

                        <p className="link">
                                <a href="#">Forgot password ?</a><a href="#" onClick={() => { navigate('/signup') }}>Don't Have an Account ?</a>
                        </p>


                    </div>
                </div>

            </div>
                    
        </div>
        </div>
     );
}

export default Login;