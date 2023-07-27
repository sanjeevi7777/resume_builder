import React, { useEffect, useState } from 'react'
function Template1() {
    const [text, setText] = useState("");
    // const user=null;
    // const user = useSelector(selectUser);
    // var user ={fname:'',lname:''};
    // useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('dataKey'));
    const professional = JSON.parse(localStorage.getItem('dataKey1'));
    const educational = JSON.parse(localStorage.getItem('dataKey2'));
    const skills = JSON.parse(localStorage.getItem('dataKey3'));
    const projects = JSON.parse(localStorage.getItem('dataKey4'));
    // console.log(professional.position);   

    // })  
    let comp;
    if (professional.curr === true) {
        comp = <p> : Yes</p>
    }
    else {
        comp = <p> : No</p>
    }
    return (

        <div className="mb-5 p-4 w-100" style={{ border: "5px solid lightgrey", backgroundColor: "biege" }}>
            {/* <div > */}
            {/* <div className="col-6    text-left font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div className=' d-flex justify-content-center' style={{color:"#00adb5",fontSize:"55px"}}></div>      
                    <h4 className=' d-flex justify-content-center'>       
                          {user.fname} {user.lname}
                    </h4>
                </div> */}
                
            <div className="" style={{ height: "160px", display: 'flex' }}>
                <div className="" style={{ marginLeft: 50 }}>

                    <img className="" alt='profile  -picture'
                        style={{ maxHeight: '160px', minHeight: "60px", maxWidth: "160px", background: 'white', padding: 0 }} />

                </div>
                <div>



                    <h5 style={{ width: 300 }}>
                        Name &#160;&#160;:&#160;{user.fname} {user.lname}
                    </h5>


                    <p style={{ width: 300, display: 'flex' }}>
                        Age &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;: {user.age}
                    </p>
                    <p style={{ width: 300 }}>
                        DOB &#160;&#160;&#160;&#160;&#160;&#160;&#160;: {user.dob}
                    </p>
                    <p style={{ width: 300 }}>
                        Email &#160;&#160;&#160;&#160;&#160;&#160;: {user.email}
                    </p>
                    <p style={{ width: 300 }}>
                        Address &#160;&#160;: {user.address}
                    </p>


                </div>
                
                {/* </div> */}
            </div>
            {/* <hr style={{height:"5px",backgroundColor:"#00adb5",marginTop:20}}/>
        <div className="text-justify mx-4"></div> */}
            <hr style={{ height: "5px", backgroundColor: "lightgrey", marginTop: 20 }} />

            <div className="container" style={{ fontFamily: "Serif", }}>
                <div className="row">
                    <div className="col-3 text-left  " style={{ color: "grey", width: 400 }}> <h4> Professional Experience</h4>
                    </div>
                    <div style={{ fontSize: "13px" }}>
                        <table style={{ width: 500 }}>

                            <tr>
                                <th>Job Title  </th>
                                <td>: {professional.position}</td>
                                <th>Start Date  </th>
                                <td>: {professional.start}</td>
                                <th>End Date  </th>
                                <td>: {professional.end}</td>
                            </tr>
                            <tr>
                                <th>Employeed </th>
                                <td style={{ paddingTop: 16 }}>{comp}</td>
                                <th>Working summary  </th>
                                <td> : {professional.summary}</td>
                            </tr>
                        </table>


                    </div>
                    <div className="w-100 mt-4"> </div>
                    <hr style={{ height: "5px", backgroundColor: "lightgrey" }} />
                    <div className="col-3 text-left" style={{ color: "grey", width: 400 }}><h4>Education</h4>

                    </div>
                    <div>
                        <div style={{ fontSize: "13px" }}>
                            <table style={{ width: 500 }}>

                                <tr>
                                    <th>School Name   </th>
                                    <td> : {educational.sname}</td>
                                    <th>School Location   </th>
                                    <td> : {educational.slocation}</td>
                                </tr>
                                <tr>
                                    <th>Degree  </th>
                                    <td> : {educational.degree}</td>
                                    <th>Field Of Study </th>
                                    <td> : {educational.field}</td>
                                </tr>

                                <tr>
                                    <th>Start Date  </th>
                                    <td> : {educational.start}</td>
                                    <th>End Date </th>
                                    <td> : {educational.end}</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                    <div className="w-100 mt-4"> </div>
                    <hr style={{ height: "5px", backgroundColor: "lightgrey" }} />
                    <div className="col-3 text-left " style={{ color: "grey", width: 400 }}>
                        <h4 >Key Skills</h4>
                    </div>
                    <div>
                        {skills.map((skills) =>
                            <li style={{ fontSize: "16px" }}>{skills}</li>
                        )}


                    </div>

                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{ height: "5px", backgroundColor: "lightgrey" }} />
                <div className="col-3 text-left " style={{ color: "grey", width: 400 }}>
                    <h4 >Projects</h4>
                </div>
                <div>
                    {projects.map((projects) =>
                        <li style={{ fontSize: "16px" }}>{projects}</li>
                    )}


                </div>

            </div>
        </div>

        // </div>


    );
}

export default Template1;
// axios
//     .get('http://localhost:8989/getAllSignIn')
//     .then((response) => {
//         console.log(response.data[0].user_name);
//         let flag = 0;

//         for (let i = 0; i < response.data.length; i++) {
//             console.log(response.data[i]);
//             if (response.data[i].user_name === email && response.data[i].password == pass) {
//                 flag = 1;
//                 navigate('/home');
//                 // alert('Login Successful');
//                 break;
//             }
//         }
