import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import '../style/page.css';
import resumepro from '../images/resumeform.gif';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate();
    return ( <>
    <div>
        <div>
            <NavBar/>
        </div>
        <div className='mainhome'>
            
        <div className='lefthome'>
            
                    <h2 className='h2'>ONLINE RESUME <span style={{ color: 'red' }}>BUILDER</span></h2>
                    <h1 className='h1'>Only 2% of resumes make it past the first round. Be in the top 2%</h1>
                    <h3 className='text'>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</h3>    
                    {/* <button className='resumebutton'>Create Resume</button>     */}
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="button" className="btn btn-primary btn-lg" style={{ backgroundColor:'#33d4f1',color:'black',fontFamily:'fantasy',fontSize:18,marginTop:40 }} onClick={()=>{navigate('/template')}}>Create My Resume</button> 
                    </div>
                    {/* <br/> */}
                    {/* <img src={resumepro} style={{height:"20%"}} ></img>                                                                                                                                                                                                                                                                               */}
        </div>
        <div className='righthome'>
           
        </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </> );
}

export default Home;