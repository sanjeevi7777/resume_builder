import React, { useState } from 'react';
import "../style/signup.css";
import { useNavigate, useNavigation } from 'react-router-dom';

// import { Maximize } from "@mui/icons-material";
function SignUp() {
    const [name ,setName]=useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
const navigate=useNavigate();
    return (
        <div className="back">

            <div className="main" >
                <div className='sub-main1'>

                </div>
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <h2>User Register</h2>
                                {/* <img alt="profile" className="profile" /> */}
                                {/* <img src={profile} alt="email" className="profile" /> */}
                            </div>


                        </div>
                        <div>
                            {/* <h1>Login To Continue....</h1> */}
                            <div className="inp">
                                {/* <img src={email} alt="username" className="email" /> */}
                                <input type="text" placeholder="FirstName" className="inputs" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="inp">
                                {/* <img src={email} alt="username" className="email" /> */}
                                <input type="text" placeholder="LastName" className="inputs" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="inp">
                                {/* <img src={email} alt="email" className="email" /> */}
                                <input type="email" placeholder="Email" className="inputs" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="inp">
                                {/* <img src={pass} alt="pass" className="email" /> */}
                                <input type="password" placeholder="Password" className="inputs" value={pass} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <div className="inp">
                                {/* <img src={pass} alt="pass" className="email" /> */}
                                <input type="password" placeholder="Confirm password" className="inputs" value={pass} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="login-button">
                                <button onClick={() => { alert("Success") }} className='button'>Sign Up</button>
                            </div>

                            <p className="link">
                                 <a href="#"  onClick={()=>{navigate('/login')}}>Already have an account?</a>
                            </p>


                        </div>
                    </div>


                </div>
                   
            </div>
        </div>
    );
}

export default SignUp;