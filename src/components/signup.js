import React, { useState } from 'react';
import axios from 'axios';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import back from "../images/backsignup.jpg";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SignupCard() {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [colorfname, setColorFname] = useState('black');
    const [coloremail, setColorEmail] = useState('black');
    const [colorpass, setColorPass] = useState('black');
    const [fnameerror, setFnameError] = useState('');
    const [emailerror, setEmailError] = useState('');
    const [passerror, setPassError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeHandlerFname = (e) => {
        const value = e.target.value;
        setFname(value);
        console.log(value)
        if (value.trim() === '') {
            setColorFname('red');
            setFnameError('Enter First Name');
        } else {
            setColorFname('black');
            setFnameError('');
        }
    };
    const changeHandlerEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value.trim() === '') {
            setColorEmail('red');
            setEmailError('Enter Email Address');
        } else {
            setColorEmail('black');
            setEmailError('');
        }
    };

    const changeHandlerPassword = (e) => {
        const value = e.target.value;
        setPass(value);
        if (value.trim() === '') {
            setColorPass('red');
            setPassError('Enter Password');
        } else {
            setColorPass('black');
            setPassError('');
        }
    };

    const submitHandler = () => {
        
        if (fname.trim() === '') {
            setColorFname('red');
            setFnameError('Enter First Name');
            return;
        }

        if (email.trim() === '') {
            setColorEmail('red');
            setEmailError('Enter Email Address');
            return;
        }

        if (pass.trim() === '') {
            setColorPass('red');
            setPassError('Enter Password');
            return;
        }

        dispatch(
            login({
                username: fname,
            })
        );
            axios
                .post('http://localhost:8989/api/v1/auth/register', {
                    name:fname,
                    email: email,
                    password: pass,
                })
                .then((response) => {
                    const token = response.data.token;
                    console.log(token)
                    // Store the JWT token securely (e.g., in localStorage or HttpOnly cookie)
                    // localStorage.setItem('jwtToken', token);
                    // dispatch(login({ username: email }));
                    navigate('/home');
                })
                .catch((error) => {
                    console.log(pass)
                    console.log('An error occurred during the signup request:', error);
                    // setUserError('Invalid user or password');
                });
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        backgroundImage={back}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
        
            // bg={useColorModeValue('white', 'gray.800')}
        >
            <Stack spacing={5} mx={'auto'} width={'70vh'} py={12} px={6} opacity={0.9} >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'black'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={1}>
                       
                                <FormControl id="email" isRequired>
                                    <FormLabel>User Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={fname}
                                        onChange={changeHandlerFname}
                                    />
                                    <Text style={{ color: colorfname }}>{fnameerror}</Text>
                                </FormControl>
                        
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={changeHandlerEmail}
                            />
                            <Text style={{ color: coloremail }}>{emailerror}</Text>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={pass}
                                    onChange={changeHandlerPassword}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }
                                    >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Text style={{ color: colorpass }}>{passerror}</Text>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={submitHandler}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'} onClick={()=>{navigate("/login")}}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
