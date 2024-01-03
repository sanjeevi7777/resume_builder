import React from 'react';

function Template1() {
    const user = localStorage.getItem('dataKey') ? JSON.parse(localStorage.getItem('dataKey')) : { fname: '', lname: '', about: '', dob: '', email: '', address: '', selectedPhoto: '' };
    const professional = localStorage.getItem('dataKey1') ? JSON.parse(localStorage.getItem('dataKey1')) : { position: '', cname: '', start: '', end: '', summary: '' };
    const education = localStorage.getItem('dataKey2') ? JSON.parse(localStorage.getItem('dataKey2')) : { sname: '', slocation: '', degree: '', field: '', start: '', end: '' };
    const skills = localStorage.getItem('dataKey3') ? JSON.parse(localStorage.getItem('dataKey3')) : [];
    const projects = localStorage.getItem('dataKey4') ? JSON.parse(localStorage.getItem('dataKey4')) : [];

    return (
        <div style={{
            maxWidth: '700px',
            background: '#e5e5e5',
            margin: '0px auto 0px',
            boxShadow: '1px 1px 2px #DAD7D7',
            borderRadius: '3px',
            padding:'20px',
            paddingTop: '40px',
            marginTop: '0px',
            border: '5px solid black'
        }}>
            <div style={{ marginTop: '-60px' }}>
            <img src={user.selectedPhoto} alt="User Photo" style={{ height: '100px', marginTop: '30px' }} />

                <div style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <span style={{ fontWeight: '700' }}>{user.fname}</span>
                    <span style={{ fontWeight: '300' }}>{user.lname}</span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ color: '#999', fontWeight: '300' }}>Email: </span>
                    <span style={{ color: '#999', fontWeight: '300' }}>{user.email}</span>
                    <span style={{ height: '10px', display: 'inline-block', borderLeft: '2px solid #999', margin: '0px 10px' }}></span>
                    <span style={{ color: '#999', fontWeight: '300' }}>Phone: </span>
                    <span style={{ color: '#999', fontWeight: '300' }}>{user.phno}</span>
                    <span style={{ height: '10px', display: 'inline-block', borderLeft: '2px solid #999', margin: '0px 10px' }}></span>
                    <span style={{ color: '#999', fontWeight: '300' }}>Address: </span>
                    <span style={{ color: '#999', fontWeight: '300' }}>{user.address}</span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '20px' }}>{user.about}</span>
                </div>
            </div>
            <div style={{ lineHeight: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ letterSpacing: '2px', color: '#54AFE4', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Experience</div>
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ marginLeft: '10px', display: 'inline-block' }}>
                            <div style={{ fontWeight: 'bold' }}>{professional.cname}</div>
                            <div style={{ fontWeight: 'bold', display: 'inline-block', marginRight: '10px', textDecoration: 'none' }}>{professional.position}</div>
                            <div>{professional.startpro} {professional.endpro ? <span style={{ fontSize: '16' }}> -- {professional.endpro}</span> : <span style={{ fontSize: '16' }}>&nbsp;&nbsp;(still working)</span>}</div>
                            <div>{professional.summary}</div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ letterSpacing: '2px', color: '#54AFE4', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Education</div>
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ marginLeft: '10px', display: 'inline-block' }}>
                            <div style={{ fontWeight: 'bold' }}>{education.sname}</div>
                            <div >{education.slocation}</div>
                            <div>{education.startedu} -- {education.endedu}</div>
                      
                            <div >{education.degree}<span> ( {education.field} ) </span></div>
                            <div style={{ fontSize: '15px' }}>{education.studies}</div>
                        
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ letterSpacing: '2px', color: '#54AFE4', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Projects</div>
                    <div style={{ display: 'flex' }}>
                        {projects.map((project, index) => (
                            <div key={index} style={index === 0 ? { marginLeft: '10px', display: 'inline-block' } : { marginLeft: '50px', textAlign: 'right', display: 'inline-block' }}>
                                <div style={{ fontWeight: 'bold' }}>{project}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{ letterSpacing: '2px', color: '#54AFE4', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>Skills</div>
                    <div style={{ display: 'flex' }}>
                        {skills.map((skill, index) => (
                            <div key={index} style={index === 0 ? { marginLeft: '10px', display: 'inline-block' } : { marginLeft: '50px', textAlign: 'right', display: 'inline-block' }}>
                                <div style={{ fontWeight: 'bold' }}>{skill}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template1;
