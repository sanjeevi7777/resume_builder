import React, { useState, useEffect } from 'react';
import NavBar from './navBar2';
import '../style/hover.css'
import '../style/page.css'
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
function Template() {
    const navigate=useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div >
                <div >
                    <h1 className='temptext'>Job Winning Resumes</h1>
                </div>
                {/* <div>
                    <input type="file" id="myFile" name="filename"/>
                    <button type='submit' className='templatenext'>Next</button>
                </div> */}  
            </div>
            <div className='templates' >
                <div className='template1' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {isHovered && (
                        <button className="hover-button" onClick={() => { navigate('/sidebar') }}>Use This Template</button>
                    )}
                </div >
                <div className='template2' onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    {isHovered2 && (
                        <button className="hover-button" onClick={() => { navigate(`/sidebar/${2}`) }}>Use This Template</button>
                    )}
                </div>
                <div className='template3' onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}>
                    {isHovered3 && (
                        <button className="hover-button" onClick={() => { navigate(`/sidebar/${3}`) }}>Use This Template</button>
                    )}
                </div>
                <div className='template4' onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}>
                    {isHovered4 && (
                        <button className="hover-button" onClick={() => { navigate(`/sidebar/${4}`)}}>Use This Template</button>
                    )}
                </div>
            </div>
            <div style={{marginTop:20}}>

            <Footer/>
            </div>
        </div>
    );
}

export default Template;