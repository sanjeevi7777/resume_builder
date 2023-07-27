import React from 'react';
import '../style/template1.css';
import { Height } from '@mui/icons-material';

function Template1() {
    const user = localStorage.getItem('dataKey') ? JSON.parse(localStorage.getItem('dataKey')) : { fname: '', lname: '', about: '', dob: '', email: '', address: '' ,selectedPhoto:''};
    const professional = localStorage.getItem('dataKey1') ? JSON.parse(localStorage.getItem('dataKey1')) : { position: '', cname: '', start: '', end: '', summary: '' };
    const education = localStorage.getItem('dataKey2') ? JSON.parse(localStorage.getItem('dataKey2')) : { sname: '', slocation: '', degree: '', field: '', start: '', end: '' };
    const skills = localStorage.getItem('dataKey3') ? JSON.parse(localStorage.getItem('dataKey3')) : [];
    const projects = localStorage.getItem('dataKey4') ? JSON.parse(localStorage.getItem('dataKey4')) : [];



    return (
        <div class="container">
            <div class="header">
                <div class="full-name">
                        <img src={user.selectedPhoto} style={{height:'100px',marginTop:30}}></img>
                    <span class="first-name" style={{fontSize:20}}>{user.fname} </span>
                    <span class="last-name" style={{ fontSize:20}}>{user.lname}</span>
                </div>
                <div class="contact-info">
                    <span class="email">Email: </span>
                    <span class="email-val"> {user.email}</span>
                    <span class="separator"></span>
                    <span class="phone">Phone: </span>
                    <span class="phone-val">{user.phno}</span>
                    <span class="separator"></span>
                    <span class="phone">Address: </span>
                    <span class="phone-val">{user.address}</span>
                </div>

                    <div class="about">
                        <span class="desc">{user.about}</span>
                    </div>
            </div>
            <div class="details">
                <div class="section">
                    <div class="section__title">Experience</div>
                    <div class="section__list">
                    
                            <div class="section__list-item">
                                <div class="left">
                                    <div class="name">{professional.cname}</div>
                                    <div class="addr">{professional.position}</div>
                                <div class="duration">{professional.startpro}{professional.endpro ? (
                                    <span style={{ fontSize:16}}> -- {professional.endpro}</span>

                                ) : (

                                        <span style={{ fontSize: 16 }}>&nbsp;&nbsp;(still working)</span>

                                )
                                }</div>
                                <div class="duration">{professional.summary}</div>
                                </div>
                            </div>
  
                    </div>
                </div>
                <div class="section">
                    <div class="section__title">Education</div>
                    <div class="section__list">
                     
                            <div class="section__list-item" >
                                <div class="left">
                                    <div class="name">{education.sname}</div>
                                    <div class="addr">{education.slocation}</div>
                                    <div class="duration">{education.startedu} -- {education.endedu}</div>
                                </div>
                            <div class="left">
                                <div class="name">{education.degree}<span class="addr"> ( {education.field} ) </span></div>
                                {/* <div class="addr"></div> */}
                                <div class="duration">{education.studies}</div>

                            </div>
                            </div>
    
                    </div>
                </div>
                <div class="section">
                    <div class="section__title">Projects</div>
                    <div class="section__list" style={{ display: 'flex' }} k>
                        {projects.map((project, index) => (
                            <div class="skills__item"ey={index}>
                                {index%2==0 ? (
                                    
                                <div class="left">
                                    <div class="name">{project}</div>
                                </div>
                                ):(
                                <div class="right">
                                    <div class="name">{project}</div>
                                </div>)
                                }

                            </div>
                        ))}
                    </div>
                </div>
                <div class="section">
                    <div class="section__title">Skills</div>
                    <div class="section_list"  style={{ display: 'flex' }} k>
                        {skills.map((skill, index) => (
                            <div class="skills__item" ey={index}>
                                {index % 2 == 0 ? (

                                    <div class="left">
                                        <div class="name">{skill}</div>
                                    </div>
                                ) : (
                                    <div class="right">
                                        <div class="name">{skill}</div>
                                    </div>)
                                }

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template1;
