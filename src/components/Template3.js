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
                border: '1px solid lightgray', // Add a light border
            }}
        >
            <img
                src={ user.selectedPhoto }
                alt="Photo of Cthulu"
                id="pic"
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    marginBottom: '20px',
                    backgroundColor: 'lightblue',
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
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                    }}
                >
                    {user.fname} {user.lname}
                </h4>
                <p>
                    Cell: <span className="tel" style={{ fontSize: '16px' }}>{user.phno}</span>
                    <br />
                    Address: <span className="tel" style={{ fontSize: '16px' }}>{user.address}</span>
                    <br />
                    Email: <a className="email" href={`mailto:${user.email}`} style={{ fontSize: '16px' }}>{user.email}</a>
                </p>
            </div>
            <div
                id="objective"
                style={{
                    marginBottom: '20px',
                }}
            >
                <p>{user.about}</p>
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
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                        }}
                    >
                        <b>Working Experience:</b>
                    </h5>
                    <dd>
                        <h5>{experience.cname} - {experience.position}</h5>
                        <p>{experience.summary}</p>
                        <p>Start Date: {experience.startpro}</p>
                        {renderEndDate(experience.endpro)}
                    </dd>
                </div>
                <h5
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                    }}
                >
                    <b>Education:</b>
                </h5>
                <dd>
                    <h5>{education.sname} - {education.slocation}</h5>
                    <p>
                        <strong>Degree:</strong> {education.degree} ({education.field})
                    </p>
                    <p>{education.startedu} - {education.endedu}</p>
                </dd>
                <dd className="clear"></dd>
                <h5
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                    }}
                >
                    <b>Skills:</b>
                </h5>
                <dd>
                    {skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </dd>
                <h5
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                    }}
                >
                    <b>Projects:</b>
                </h5>
                <dd>
                    {projects.map((project, index) => (
                        <p key={index}>{project}</p>
                    ))}
                </dd>
            </dl>
            <div className="clear"></div>
        </div>
    );
}

export default Template3;
