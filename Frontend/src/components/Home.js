import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import '../style/page.css';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Home() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const textToWrite = `Hello ${user.username}, Welcome To the Online Resume Builder !...`;
    const [displayText1, setDisplayText1] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const start = () => {
        setIsLoading(true);

        setTimeout(() => {
            navigate('/template');
        }, 1000);
    };

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayText1(textToWrite.slice(0, currentIndex + 1));

            currentIndex++;

            if (currentIndex === textToWrite.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    const jwtToken = localStorage.getItem('jwtToken'); 

    if (!jwtToken) {
        return <div>Please log in to access this page.</div>;
    }
    return (
        <>
            <div>
                <div>
                    <NavBar />
                </div>
                <div className='mainhome'>
                    <div className='lefthome'>
                        <h6 className='h1' style={{ fontSize: '35px', color: 'blue', height: 150 }}>
                            {displayText1}
                        </h6>
                        <h1 className='h3'>Only 2% of resumes make it past the first round. Be in the top of the 2%...</h1>
                        <h3 className='text'>
                            Use professional field-tested resume templates that follow the exact ‘resume rules’ employers
                            look for. Easy to use and done within minutes - try now for free!
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                isLoading={isLoading}
                                rightIcon={<ArrowForwardIcon />}
                                size='lg'
                                onClick={start}
                                style={{ backgroundColor: 'teal', color: 'white', fontFamily: 'cursive', fontSize: 20, marginTop: 40 }}
                            >
                                Create My Resume
                            </Button>
                        </div>
                    </div>
                    <div className='righthome'></div>
                </div>
            </div>
            <div style={{ marginTop: 50 }}>
                <Footer />
            </div>
        </>
    );
}

export default Home;
