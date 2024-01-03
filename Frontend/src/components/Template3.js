import React from 'react';
import axios from 'axios';

function Template3() {
    var userdata;
    axios.get('http://localhost:8989/api/v1/auth/getAllPer')
    .then((response)=>{
        console.log(response.data);
        userdata=response.data;
    });

    const user = localStorage.getItem('dataKey')
        ? JSON.parse(localStorage.getItem('dataKey'))
        : {
            fname: '',
            lname: '',
            about: '',
            dob: '',
            email: '',
            address: '',
            cell: '',
        };

    var userProfessionaldata;
    axios.get('http://localhost:8989/api/v1/auth/getAllPro')
        .then((response) => {
            console.log(response.data);
            userProfessionaldata = response.data;
        });

    const experience = localStorage.getItem('dataKey1')
        ? JSON.parse(localStorage.getItem('dataKey1'))
        : {
            position: '',
            cname: '',
            start: '',
            end: '',
            summary: '',
        };

    var userEducationaldata;
    axios.get('http://localhost:8989/api/v1/auth/getAllEdu')
        .then((response) => {
            console.log(response.data);
            userEducationaldata = response.data;
        });

    const education = localStorage.getItem('dataKey2')
        ? JSON.parse(localStorage.getItem('dataKey2'))
        : {
            sname: '',
            slocation: '',
            degree: '',
            field: '',
            start: '',
            end: '',
        };

    var skillData;
    axios.get('http://localhost:8989/api/v1/auth/getAllSkills')
        .then((response) => {
            console.log(response.data);
            skillData = response.data;
        });

    const skills = localStorage.getItem('dataKey3') ? JSON.parse(localStorage.getItem('dataKey3')) : [];

    var projectsData;
    axios.get('http://localhost:8989/api/v1/auth/getAllProjects')
        .then((response) => {
            console.log(response.data);
            projectsData = response.data;
        });

    const projects = localStorage.getItem('dataKey4') ? JSON.parse(localStorage.getItem('dataKey4')) : [];

    const renderEndDate = (end) => {
        if (end) {
            return <p>End Date: {end}</p>;
        } else {
            return <p>End Date: Still Working</p>;
        }
    };
    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ddd',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                borderRadius: '8px',
            }}
        >
            <img
                src={user.selectedPhoto}
                alt="Profile Photo"
                id="pic"
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    marginBottom: '20px',
                    border: '2px solid #fff',
                }}
            />
            <div
                className="vcard"
                style={{
                    marginBottom: '20px',
                }}
            >
                <h4
                    className="fn"
                    style={{
                        fontSize: '32px', 
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#333',
                        marginLeft:'15px'
                    }}
                >
                    {user.fname} {user.lname}
                </h4>
                <p style={{ fontSize: '18px', marginLeft:'15px' }}>
                    Cell: <span className="tel" style={{ fontSize: '18px'}}>{user.phno}</span>
                    <br />
                    Address: <span className="tel" style={{ fontSize: '18px' }}>{user.address}</span>
                    <br />
                    Email: <a className="email" href={`mailto:${user.email}`} style={{ fontSize: '18px' }}>{user.email}</a>
                </p>
            </div>
            <div
                id="objective"
                style={{
                    marginBottom: '20px',
                }}
            >
                <p
                    style={{
                        fontSize: '20px', // Increased font size
                        color: '#555',
                        marginLeft:'15px'
                    }}
                >
                    {user.about}
                </p>
            </div>
            <div className="clear"></div>
            <dl
                style={{
                    marginBottom: '20px',
                }}
            >
                <dd className="clear"></dd>
                <div
                    id="objective"
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <h5
                        style={{
                            fontSize: '28px', // Increased font size
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            color: '#333',
                        }}
                    >
                        <b>Working Experience:</b>
                    </h5>
                    <dd>
                        <h3>{experience.cname} - {experience.position}</h3>
                        <p
                            style={{
                                fontSize: '20px', // Increased font size
                                color: '#555',
                            }}
                        >
                            {experience.summary}
                        </p>
                        <p>Start Date: {experience.startpro}</p>
                        {renderEndDate(experience.endpro)}
                    </dd>
                </div>
                <h5
                    style={{
                        fontSize: '28px', // Increased font size
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#333',
                    }}
                >
                    <b>Education:</b>
                </h5>
                <dd>
                    <h3>{education.sname} - {education.slocation}</h3>
                    <p
                        style={{
                            fontSize: '20px', // Increased font size
                            color: '#555',
                        }}
                    >
                        <strong>Degree:</strong> {education.degree} ({education.field})
                    </p>
                    <p>{education.startedu} - {education.endedu}</p>
                </dd>
                <dd className="clear"></dd>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div
                        style={{
                            flex: 1,
                            marginRight: '10px',
                        }}
                    >
                        <h5
                            style={{
                                fontSize: '28px', // Increased font size
                                fontWeight: 'bold',
                                marginBottom: '10px',
                                color: '#333',
                            }}
                        >
                            <b>Skills:</b>
                        </h5>
                        <dd>
                            {skills.map((skill, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: '20px', // Increased font size
                                        color: '#555',
                                    }}
                                >
                                    {skill}
                                </p>
                            ))}
                        </dd>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            marginLeft: '10px',
                        }}
                    >
                        <h5
                            style={{
                                fontSize: '28px', // Increased font size
                                fontWeight: 'bold',
                                marginBottom: '10px',
                                color: '#333',
                            }}
                        >
                            <b>Projects:</b>
                        </h5>
                        <dd>
                            {projects.map((project, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: '20px', // Increased font size
                                        color: '#555',
                                    }}
                                >
                                    {project}
                                </p>
                            ))}
                        </dd>
                    </div>
                </div>
            </dl>
            <div className="clear"></div>
        </div>
    );
}

export default Template3;