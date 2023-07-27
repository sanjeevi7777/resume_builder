import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import '../style/page.css';
// import { Spinner} from "@chakra-ui/react"
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
function Home() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const textToWrite = `Hello ${user.username}, Welcome To the Online Resume Builder !...`;
    const [displayText1, setDisplayText1] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayText1(textToWrite.slice(0, currentIndex + 1));
 
            currentIndex++;

            if (currentIndex === textToWrite.length) {
                clearInterval(intervalId);
            }
        }, 100); // You can adjust the interval to control the typing speed

        return () => {
            clearInterval(intervalId); // Clean up the interval on component unmount
        };
    }, []);


 
    return ( <>
    <div>
            {/* <Spinner size='lg' /> */}
        <div>
            <NavBar/>
            
        </div>
        <div className='mainhome'>
            
        <div className='lefthome'>
                    {/* <h4 className='h1' >Hello <span className='h2'>{user.username} ,</span></h4> */}
                    <h6 className='h1' style={{fontSize:'35px',color:'blue',height:150}}>{displayText1}</h6>
                    <h1 className='h3'>Only 2% of resumes make it past the first round. Be in the top of the 2%...</h1>
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
    <div style={{marginTop:50}}>
        <Footer/>
    </div>
    </> );
}

export default Home;