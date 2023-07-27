import React from 'react';

function Template2() {
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

    const professional = localStorage.getItem('dataKey1')
        ? JSON.parse(localStorage.getItem('dataKey1'))
        : {
            position: '',
            cname: '',
            start: '',
            end: '',
            summary: '',
        };

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

    const skills = localStorage.getItem('dataKey3') ? JSON.parse(localStorage.getItem('dataKey3')) : [];

    const projects = localStorage.getItem('dataKey4') ? JSON.parse(localStorage.getItem('dataKey4')) : [];

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    borderBottom: '1px solid lightgray',
                }}
            >
                <div id="image">
                    <img
                        id="profile-photo"
                        src={user.selectedPhoto}
                        alt="Profile-Image"
                        style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'lightcyan', border: '1px solid lightgray' }}
                    />
                    <a href="#">
                        <i className="fas fa-pen stroke-transparent"></i>
                    </a>
                </div>
                <div id="name">
                    <span style={{ fontSize: '15px' }}>
                        {user.fname} {user.lname}
                    </span>
                    <br />
                    <span id="email">{user.email}</span>
                    {/* {user.selectedPhoto && (
                        <img
                            src={}
                            alt="Uploaded Photo"
                            style={{ maxWidth: '100%', maxHeight: '400px' }}
                        />
                    )} */}
                    <br />
                    <p id="telephone">
                        Telephone
                        <br />
                        <strong>{user.cell}</strong>
                    </p>
                    <b style={{ fontSize: 15 }}>Address : </b>
                    <span id="email">{user.address}</span>
                    <p id="more-about" style={{ fontSize: '10px' }}>
                        {user.about}
                    </p>
                </div>
                <p id="designation">
                    <span style={{ fontSize: 20, fontFamily: 'monospace' }}>{professional.position}</span>{' '}
                    <span> in</span>
                    <br />
                    <span style={{ fontSize: 15, fontFamily: 'monospace' }}>{professional.cname}.</span>
                    <br />
                    <span id="college" style={{ fontWeight: 'bold' }}>
                        {professional.startpro}{' '}
                    </span>
                    {professional.endpro ? (
                        <span id="college" style={{ fontWeight: 'bold' }}>
                            {' '}
                            -- {professional.endpro}
                        </span>
                    ) : (
                        <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;(still working)</span>
                    )}
                    <br />
                    <span style={{ fontSize: 10, marginBottom: 0 }}>{professional.summary}</span>
                </p>
                <p id="fax">
                    <br />
                    <strong>{user.fax}</strong>
                </p>
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                    border: '1px solid lightgray',
                    borderRadius: '5px',
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
                    <p>
                        <i className="fas fa-graduation-cap stroke-transparent"></i>
                        &nbsp;&nbsp;&nbsp;Education
                    </p>
                    <p style={{ fontSize: 13 }}>
                        {education.sname}, {education.slocation}.
                    </p>
                    <p style={{ fontSize: 13 }}>{education.degree} ({education.field})</p>
                    <a className="edit" href="#"></a>
                </div>
                <div
                    className="card"
                    style={{
                        padding: '10px',
                        border: '1px solid lightgray',
                        borderRadius: '5px',
                    }}
                >
                    <p>
                        <i className="fas fa-briefcase stroke-transparent"></i>
                        &nbsp;&nbsp;&nbsp;Skills
                    </p>
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
                    <p>
                        <i className="fas fa-briefcase stroke-transparent"></i>
                        &nbsp;&nbsp;&nbsp;Projects
                    </p>
                    <ul style={{ margin: 0, paddingInlineStart: '20px', fontSize: 13 }}>
                        {projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Template2;
