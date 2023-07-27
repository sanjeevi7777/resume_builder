import React, { useEffect, useState } from 'react';
import'../style/page.css';
function Template1() {
    const [text, setText] = useState('');
    const user = localStorage.getItem('dataKey') ? JSON.parse(localStorage.getItem('dataKey')) : {fname:'',lname:'',about:'',dob:'',email:'',phno:'',address:''};
    const professional = localStorage.getItem('dataKey1') ? JSON.parse(localStorage.getItem('dataKey1')) : {cname:'',position:'',start:'',end:'',summary:''};
    const educational = localStorage.getItem('dataKey2') ? JSON.parse(localStorage.getItem('dataKey2')) : {sname:'',slocation:'',degree:'',field:'',start:'',end:''};
    const skills = localStorage.getItem('dataKey3') ? JSON.parse(localStorage.getItem('dataKey3')) : [];
    const projects = localStorage.getItem('dataKey4') ? JSON.parse(localStorage.getItem('dataKey4')) : [];

    let comp;
    if (professional) {
        comp = "yes"
    } else {
        comp = "no";
    }

    return (
        <div
            className="mb-5 p-4 w-100"
            style={{ border: '5px solid #00adb5', fontFamily: 'Arial' }}
        >
            <div
                className="profile-section"
                style={{ display: 'flex', marginBottom: '20px' }}
            >
                <div style={{ flex: '0 0 70%' }}>
                    <div style={{ marginBottom: '10px' ,fontSize: 12 }}>
                        <strong>Name:</strong> {user.fname} {user.lname}
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Phno:</strong> {user.phno}
                    </div>
                    <div style={{fontSize: 12}}>
                        <strong>Address:</strong> {user.address}
                    </div>
                    <div style={{ marginTop: '8px',fontSize:12 }}>
                        <p className='small'> {user.about}</p>
                    </div>
                </div>
                <div className="profile-image" style={{ marginLeft: 'auto' }}>
                    <img
                        src={user.selectedPhoto}
                        alt="Profile"
                        style={{ maxHeight: '140px', minHeight: '60px', maxWidth: '160px', background: 'white', padding: 0 }}
                    />
                </div>
            </div>
            <hr style={{ height: '4px', backgroundColor: '#00adb5', margin: '20px 0' }} />
            <div
                className="content-section"
                style={{ display: 'flex', fontFamily: 'Arial' }}
            >
                <div style={{ flex: '0 0 50%', marginRight: '20px' }}>
                    <div
                        className="section-title"
                        style={{ color: '#00adb5', marginBottom: '10px', fontSize: 12 }}
                    >
                        <strong style={{ fontSize: 18, color: "#00adb5" }}>Professional Experience</strong>
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Company Name:</strong> {professional.cname}
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Job Title:</strong> {professional.position}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Start Date:</strong> {professional.startpro}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>End Date:</strong> {professional.endpro}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Employed:</strong> {comp}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ maxWidth: 250, marginRight: -20, fontSize: 12 }}>
                        <strong >Working Summary:</strong> {professional.summary}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                </div>
                <div style={{ flex: '0 0 50%' }}>
                    <div
                        className="section-title"
                        style={{ color: '#00adb5', marginBottom: '10px', fontSize: 12 }}
                    >
                        <strong style={{ fontSize: 18, color: "#00adb5" }}>Education</strong>
                    </div>
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>School Name:</strong> {educational.sname}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>School Location:</strong> {educational.slocation}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Degree:</strong> {educational.degree}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Field Of Study:</strong> {educational.field}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>Start Date:</strong> {educational.startedu}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                    <div style={{ marginBottom: '10px', fontSize: 12 }}>
                        <strong>End Date:</strong> {educational.endedu}
                    </div>
                    <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '10px 0' }} />
                </div>
            </div>
            <hr style={{ height: '4px', backgroundColor: '#00adb5', margin: '20px 0' }} />
            <div style={{ fontFamily: 'Arial' }}>
                <div
                    className="section-title"
                    style={{ color: '#00adb5', marginBottom: '10px' }}
                >
                    <strong style={{ fontSize: 18, color: "#00adb5" }}>Key Skills</strong>
                </div>
                <ul
                    className="skills-list"
                    style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '10px', fontSize: 12 }}
                >
                    {skills.map((skill) => (
                        <li key={skill} style={{ fontSize: '14px' }}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-100" style={{ marginBottom: '20px' }}></div>
            <hr style={{ height: '1px', backgroundColor: '#00adb5', margin: '20px 0' }} />
            <div style={{ color: '#00adb5', marginBottom: '10px' }}>
                <strong style={{ fontSize: 18, color: "#00adb5" }}>Projects</strong>
            </div>
            <ul
                className="projects-list"
                style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '10px', fontSize: 12 }}
            >
                {projects.map((project) => (
                    <li key={project} style={{ fontSize: '14px' }}>
                        {project}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Template1;
