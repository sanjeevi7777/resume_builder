import React,{useState} from 'react'
import MyComponent from "./personal.js";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
function Template1() {
    const [text, setText] = useState("");
    const user = useSelector(selectUser);
    // console.log(user);
  return (
    
    <div className="mb-5 p-4 w-100" style={{border:"5px solid #00adb5", backgroundColor:"biege"}}>
        <div >
            <div className="row  m-0 d-flex align-items-center" style={{height:"160px"}}>
                <div className="col-2 text-center media" >
                    <img className="rounded align-self-center mx-auto " alt='profile-pic'
                         style={{maxHeight:'50px',minHeight:"10px", width:'100px', background:'grey',padding:0}}/>
                 {user.username}
                </div>
                <div className="col-6    text-left font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div className=' d-flex justify-content-center' style={{color:"#00adb5",fontSize:"55px"}}></div>      
                    <h5 className=' d-flex justify-content-center'>       
                          {/* {hobbies.lname} */}
                    </h5>
                </div>
                <div className="col-4  ">
                    <div className=' p-3' style={{fontSize:"18px",float:"left",display:"inline-block"}}>
                        <div ></div>
                        <div></div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
        <div className="text-justify mx-4"></div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>

        <div className="container" style={{fontFamily:"Serif",}}>
            <div className="row">
                <div className="col-3 text-left  " style={{color:"#00adb5"}}> <h4> Professional Experience</h4></div>
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                   
                       
                
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left" style={{color:"#00adb5"}}><h4>Education</h4></div>
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        
                        
                    </div>
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left " >
                    <h4 style={{color:"#00adb5"}}>Key Skills</h4>
                </div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    
                       
                </div>
                   
                </div>
              <div className="w-100 mt-4"> </div>
              <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
              <div className="col-3 text-left " >
                  <h4 style={{ color: "#00adb5" }}>Key Skills</h4>
              </div>
              <div className="col-9 text-left" style={{ fontSize: "18px" }}>


              </div>

          </div>
                
        </div>
        
    // </div>
                
    
  );
}

export default Template1;