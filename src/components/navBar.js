    import React from 'react';
    import '../style/page.css';
    import { Link } from 'react-router-dom';
    import profile from "../images/profile.jpeg";
    import logo from '../images/logo.png';
    import logogif from '../images/resumeform.gif'
    const NavBar = () => {
        return (
            <div className='nav'>
                <img src={logogif} alt='logo' style={{ width: 50, marginLeft: 15, height: 50,  }}></img>
                <h3 style={{ color: 'black', paddingTop: 8, marginLeft: 15, fontFamily: 'fantasy', fontStyle: 'italic', fontSize: 30 }}> Resume<span style={{ color: 'red' }}>Pro</span><span style={{ color: 'blue' }}>.io</span></h3>
                <div>
                    <ul>
                        <li >
                            <Link to="/home" style={{ color: 'black', fontSize: 20, paddingBottom:10}} className='navButton'>Home</Link>
                        </li>
                        <li >
                            <Link to="/template" style={{ color: 'black', fontSize: 20, paddingBottom: 10, }} className='navButton'>Templates</Link>
                        </li>
                        <li >
                            <Link to="/contact" style={{ color: 'black', fontSize: 20, paddingBottom: 10, }} className='navButton'>Contact us</Link>
                        </li>
                    </ul>

                </div>
                <div className='user'>
                    <ul>

                    <li className='navButtons'>
                        <Link to="/login" style={{paddingBottom:10 }} className='navButton'>Login</Link>
                    </li>
                    <li className='navButtons'>
                        <Link to="/signup" className='navlinks'>SignUp</Link>
                    </li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                </div>
                {/* <div className="container-image"> */}
                {/* <h2 className="heading">User Login.</h2> */}
                {/* <img alt="profile" className="profile" /> */}
                {/* </div> */}

            </div>
        );
    };

    export default NavBar;
