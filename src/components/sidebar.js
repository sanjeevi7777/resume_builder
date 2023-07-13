import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../style/page.css'
import NavBar from './navBar2';
import ReactDOM from 'react-dom';
import Personal from './personal.js';
import Professional from './professional.js'
import Template1 from './template1';
import Template2 from './template2';
import Educational from './educational';
function Sidebar() {
   let state=useParams();
   useEffect((e)=>{
    //    e.preventDefault();
       const componentTemplate = document.getElementById('live');
       if (state.value == 1) {
           ReactDOM.render(<Template1 />, componentTemplate);
       }
       else if (state.value == 2) {
           ReactDOM.render(<Template2 />, componentTemplate);
       }
   })
        const personal = (e) => {
            const componentContainer = document.getElementById('display');
            ReactDOM.render(<Personal />, componentContainer);
           
           
            };
    const professional = () => {
        const componentContainer = document.getElementById('display');
        ReactDOM.render(<Professional />, componentContainer);
    };
    const educational = () => {
        const componentContainer = document.getElementById('display');
        ReactDOM.render(<Educational />, componentContainer);
    };
    const skills = () => {
        const componentContainer = document.getElementById('display');
        ReactDOM.render(<Personal />, componentContainer);
    };
    const hobbies = () => {
        const componentContainer = document.getElementById('display');
        ReactDOM.render(<Personal />, componentContainer);
    };
    const projects = () => {
        const componentContainer = document.getElementById('display');
        ReactDOM.render(<Personal />, componentContainer);
    };
    return (<>
        <div >
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'left',height:"100%"}}>
                <div className='side'>

                    <ul class="flex-column">
                        <li class="nav-item">
                            <Link className="nav-link" onClick={personal} style={{ padding: 10 }}>Personal Details</Link >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={professional} style={{ padding: 10 }}>Professional Details</Link >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={educational} style={{ padding: 10 }}>Educational Details</Link >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={personal} style={{ padding: 10 }}>Skills</Link >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={personal} style={{ padding: 10 }}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={personal}style={{padding:10}} >Hobbies</Link >
                        </li>
                        {/* <li className="nav-item"> */}
                        <Link className="navlinksubmit" style={{ marginLeft: 40, marginTop: 40, paddingLeft: 40 }}>Submit</Link>
                        {/* </li> */}
                    </ul>


            </div>
                <div className='content' id='display'>

                </div>
               
                <div className='resumelive' id='live'>

                </div>
            </div>
           
        </div>
    </>);
}

export default Sidebar;