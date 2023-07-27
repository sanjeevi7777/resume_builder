import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../style/page.css';
import NavBar from './navBar2';
import ReactDOM from 'react-dom';
import Personal from './personal.js';
import Professional from './professional.js';
import Template1 from './Template1';
import Template2 from './Template2';
import Educational from './educational';
import Skills from './skills';
import Projects from './projects';
import ReactDOMServer from 'react-dom/server';
import Template3 from './Template3';
import Template4 from './template1';

function Sidebar() {
    const navigate = useNavigate();
    const [buttonstate, setButtonState] = useState('Next');
    const [componentcount, setComponentcount] = useState(0);
    const [activeLink, setActiveLink] = useState(0); // Added state variable for active link
    const state = useParams();
    let comp1;

    useEffect(() => {
        const componentTemplate = document.getElementById('resume');
        if (state.value == 1) {
            comp1 = ReactDOM.render(<Template1 />, componentTemplate);
        } else if (state.value == 2) {
            comp1 = ReactDOM.render(<Template2 />, componentTemplate);
        } else if (state.value == 3) {
            comp1 = ReactDOM.render(<Template3 />, componentTemplate);
        } else {
            comp1 = ReactDOM.render(<Template4 />, componentTemplate);
        }
    });

    function click() {
        if (componentcount === 0) {
            setComponentcount(1);
            personal();
        } else if (componentcount === 1) {
            setComponentcount(2);
            professional();
        } else if (componentcount === 2) {
            setComponentcount(3);
            educational();
        } else if (componentcount === 3) {
            setComponentcount(4);
            skills();
        } else if (componentcount === 4) {
            setComponentcount(5);
            projects();
            setButtonState('submit');
        } else if (componentcount === 5) {
            setComponentcount(6);
            alert('Saved Successfully');
            navigate('/print');
        } else if (componentcount === 6) {
            let print = document.getElementById('resume').innerHTML;
            document.body.innerHTML = print;
            window.print();
            setComponentcount(0);
            setButtonState('next');
            navigate('/home');
        }
    }

    const personal = () => {
        const componentContainer = document.getElementById('display');
        setComponentcount(1);
        setButtonState('next');
        setActiveLink(0); // Set active link index
        ReactDOM.render(<Personal />, componentContainer);
    };

    const professional = () => {
        const componentContainer = document.getElementById('display');
        setComponentcount(2);
        setButtonState('next');
        setActiveLink(1); // Set active link index
        ReactDOM.render(<Professional />, componentContainer);
    };

    const educational = () => {
        const componentContainer = document.getElementById('display');
        setComponentcount(3);
        setButtonState('next');
        setActiveLink(2); // Set active link index
        ReactDOM.render(<Educational />, componentContainer);
    };

    const skills = () => {
        const componentContainer = document.getElementById('display');
        setComponentcount(4);
        setButtonState('next');
        setActiveLink(3); // Set active link index
        ReactDOM.render(<Skills />, componentContainer);
    };

    const projects = () => {
        const componentContainer = document.getElementById('display');
        setComponentcount(5);
        setButtonState('submit');
        setActiveLink(4); // Set active link index
        ReactDOM.render(<Projects />, componentContainer);
    };

    return (
        <>
            <div>
                <NavBar />
                <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                    <div className="side">
                        <ul className="flex-column">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 0 ? 'active' : ''}`}
                                    onClick={personal}
                                    style={{ padding: 10 }}
                                >
                                    Personal Details {activeLink === 0 && <FaArrowRight />}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 1 ? 'active' : ''}`}
                                    onClick={professional}
                                    style={{ padding: 10 }}
                                >
                                    Professional Details {activeLink === 1 && <FaArrowRight />}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 2 ? 'active' : ''}`}
                                    onClick={educational}
                                    style={{ padding: 10 }}
                                >
                                    Educational Details {activeLink === 2 && <FaArrowRight />}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 3 ? 'active' : ''}`}
                                    onClick={skills}
                                    style={{ padding: 10 }}
                                >
                                    Skills {activeLink === 3 && <FaArrowRight />}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 4 ? 'active' : ''}`}
                                    onClick={projects}
                                    style={{ padding: 10 }}
                                >
                                    Projects {activeLink === 4 && <FaArrowRight />}
                                </Link>
                            </li>
                            <Link className="navlinksubmit" style={{ marginLeft: 40, marginTop: 40, paddingLeft: 40 }} onClick={click}>
                                {buttonstate}
                            </Link>
                        </ul>
                    </div>
                    <div id="display" className="content"></div>
                    <div className="resumelive" id="resume">
                        {comp1}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
