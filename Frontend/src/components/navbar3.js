import React from 'react';
import '../style/page.css';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpeg";
import logo from '../images/logo.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import {
Popover,
PopoverTrigger,
PopoverContent,
PopoverHeader,
PopoverArrow,
PopoverCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import {
AlertDialog,
AlertDialogBody,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogContent,
AlertDialogOverlay,
AlertDialogCloseButton,
Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();    
    const cancelRef = React.useRef()
    const user = useSelector(selectUser);
    const navigate=useNavigate();
    return (
    <div className='nav' style={{backgroundColor:'#e7fffb'}}>
            
            <img src={logo} alt='logo' style={{ width: 50, marginLeft: 15, height: 50,  }}></img>
            <h3 style={{ color: 'black', paddingTop: 8, marginLeft: 15, fontFamily: 'fantasy', fontStyle: 'italic', fontSize: 30 }}> Resume<span style={{ color: 'teal', fontSize: 30 }}>Pro</span><span style={{ color: 'darkblue', fontSize: 30 }}>.io</span></h3>
            <div>
                <ul>
                    <li className='li'>
                        <Link to="/home" style={{ color: 'black', fontSize: 20, paddingBottom:10}} className='navButton'>Home</Link>
                    </li>
                    <li className='li'>
                        <Link to="/template" style={{ color: 'black', fontSize: 20, paddingBottom: 10, }} className='navButton'>Templates</Link>
                    </li>
                    <li className='li'>
                        <Link to="/contact" style={{ color: 'black', fontSize: 20, paddingBottom: 10, }} className='navButton'>Contact us</Link>
                    </li>
                </ul>

            </div>
            <div className='user'>
                <ul>

                {/* <li className='navButtons'>
                    <Link to="/login" style={{paddingBottom:10 }} className='navButton'>Log In</Link>
                </li>
                
                <li className='navButtons'>
                    <Link to="/signup" className='navlinks'>SignUp</Link>
                </li> */}
                    <div >
                        <Popover >
                    <PopoverTrigger >
                                <button style={{width:40,borderRadius:200,height:0}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" style={{ alignSelf:'center'}}>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg></button>
                    </PopoverTrigger>
                    <PopoverContent color='white' bg='white' borderColor='gray.300' width='200px' height='300px' margin='5'>
                        <PopoverArrow />
                            <PopoverCloseButton color='black' />
                            <div class="B">
                                <img src={profile}/>
                            </div>
                        <PopoverHeader style={{color:'black',alignSelf:'center',fontStyle:'italic',fontFamily:'fantasy',fontSize:'20px'}}>{user.username}</PopoverHeader>
                                <>
                                    <Button colorScheme='red'onClick={onOpen} style={{width:100,alignSelf:'center'}}>Logout ?</Button><br/>
                                    <Button style={{backgroundColor:'white',alignSelf:'center'}} onClick={()=>{navigate("/signup")}}>Account Settings</Button>
                                    <AlertDialog
                                        motionPreset='slideInBottom'
                                        leastDestructiveRef={cancelRef}
                                        onClose={onClose}
                                        isOpen={isOpen}
                                        isCentered
                                    >
                                        <AlertDialogOverlay />

                                        <AlertDialogContent>
                                            <AlertDialogHeader>Logout?</AlertDialogHeader>
                                            <AlertDialogCloseButton />
                                            <AlertDialogBody>
                                                Are you sure you want to Log out your account.
                                            </AlertDialogBody>
                                            <AlertDialogFooter>
                                                <Button ref={cancelRef} onClick={onClose}>
                                                    No
                                                </Button>
                                                <Button colorScheme='red' ml={3} onClick={()=>{navigate("/index")}}>
                                                    Yes
                                                </Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </>
                    </PopoverContent>
                </Popover>
                </div>
                </ul>
                
            </div>
            {/* <div className="container-image"> */}
            {/* <h2 className="heading">User Login.</h2> */}
            {/* <img alt="profile" className="profile" /> */}
            {/* </div> */}

        </div>
    );
};

export default NavBar;
