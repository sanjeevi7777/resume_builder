import React, { useState, useEffect } from 'react';
import NavBar from './navBar2';
import '../style/index.css';
import { Button } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import back from '../images/back.jpg';

function Index() {
    localStorage.clear();
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <style>
                {`
                    body {
                        background-color:#F8F8F8;
                        background-size:cover;
                        background-repeat:no-repeat;
                    }
                `}
            </style>
            <div className='mainindex'>
                <div className='index'>
                    <div className='h2'>
                        <h1 >
                            Free Online Resume Builder: Make Yours in Minutes!
                        </h1>
                    </div>
                    <div className='h3' style={{ color: 'black' }}>
                        <h3>
                            Create a professional resume with ease. Our builder features templates, step-by-step guidance, and endless customizable content options.
                        </h3>
                    </div>
                    <div className='h5' style={{ color: 'black' }}>
                        <h5>
                            Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective.
                        </h5>
                    </div>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='linkedin' size='lg' onClick={() => { navigate("/login") }}>Get Started</Button>
                </div>
            </div>
        </>
    );
}

export default Index;
