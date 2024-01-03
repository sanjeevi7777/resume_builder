import React from 'react';

function Template2() {
    const user = JSON.parse(localStorage.getItem('dataKey')) || {
        fname: '',
        lname: '',
        about: '',
        email: '',
        phno: '',
        address: '',
    };

    const professional = JSON.parse(localStorage.getItem('dataKey1')) || {
        position: '',
        cname: '',
        startpro: '',
        endpro: '',
        summary: '',
    };

    const education = JSON.parse(localStorage.getItem('dataKey2')) || {
        sname: '',
        slocation: '',
        degree: '',
        field: '',
    };

    const skills = JSON.parse(localStorage.getItem('dataKey3')) || [];

    const projects = JSON.parse(localStorage.getItem('dataKey4')) || [];

    return (
        <div
            style={{
                padding:'20px',
                border: '5px solid black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '600px', // Set a maximum width for responsiveness
                margin: '0 auto', // Center the content horizontally
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    borderBottom: '1px solid lightgray',
                    width: '100%',
                }}
            >
                <div id="image">
                    <img
                        id="profile-photo"
                        src={user.selectedPhoto}
                        alt="Profile-Image"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            backgroundColor: 'lightcyan',
                            border: '1px solid lightgray',
                        }}
                    />
                </div>
                <div id="name">
                    <span style={{ fontSize: '35px' }}>
                        {user.fname} {user.lname}
                    </span>
                    <br />
                    <center>
                        <i id="email" style={{ fontSize: 20 }}>{user.email},</i><br/>
                        <i id="email" style={{ fontSize: 20 }}>{user.phno},</i><br/>
                        <i id="email" style={{ fontSize: 20 }}>{user.address},</i><br/>
                        <i id="more-about" style={{ fontSize: '20px' }}>
                            {user.about}.
                        </i>
                    </center>
                </div>
            </div>
            
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                    border: '1px solid lightgray',
                    borderRadius: '5px',
                    width: '100%',
                }}
            >
                <div
                    className="card"
                    style={{
                        padding: '10px',
                        border: '1px solid lightgray',
                        borderRadius: '5px',
                    }}
                >
                    <b>
                        <i className="fas fa-briefcase"></i>
                        &nbsp;&nbsp;&nbsp;Working Experience 
                    </b>
                    <p style={{ fontSize: 20 }}>
                        {professional.position} at {professional.cname}.
                    </p>
                    <p style={{ fontSize: 13 }}>
                        {professional.startpro}{' '}
                        {professional.endpro ? (
                            <span id="college" >
                                -- {professional.endpro}
                            </span>
                        ) : (
                            <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;(still working)</span>
                        )}
                    </p>
                    <span style={{ fontSize: 15 }}>{professional.summary}</span>
                </div>
                <div
                    className="card"
                    style={{
                        padding: '10px',
                        border: '1px solid lightgray',
                        borderRadius: '5px',
                    }}
                >
                    <b>
                        <i className="fas fa-graduation-cap stroke-transparent"></i>
                        &nbsp;&nbsp;&nbsp;Education
                    </b>
                    <p style={{ fontSize: 13 }}>
                        {education.sname}, {education.slocation}.
                    </p>
                    <p style={{ fontSize: 13 }}>{education.degree} ({education.field})</p>
                </div>
                <div
                    className="card"
                    style={{
                        padding: '10px',
                        border: '1px solid lightgray',
                        borderRadius: '5px',
                    }}
                >
                    <b>
                        <i className="fas fa-cogs"></i>
                        &nbsp;&nbsp;&nbsp;Skills
                    </b>
                    <ul style={{ margin: 0, paddingInlineStart: '20px', fontSize: 13 }}>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div
                    className="card"
                    style={{
                        padding: '10px',
                        border: '1px solid lightgray',
                        borderRadius: '5px',
                    }}
                >
                    <b>
                        <i className="fas fa-folder-open"></i>
                        &nbsp;&nbsp;&nbsp;Projects
                    </b>
                    <ul style={{ margin: 0, paddingInlineStart: '20px', fontSize: 13}}>
                        {projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Template2;
