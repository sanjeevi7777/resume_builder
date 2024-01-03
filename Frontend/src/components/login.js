import React, { useState} from 'react';
import axios from 'axios';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import profile from "../images/background.jpg";
import { useNavigate } from 'react-router-dom';

export default function SimpleCard() {
    const [coloremail, setColorEmail] = useState('black');
    const [colorpass, setColorPass] = useState('black');
    const [emailerror, setEmailError] = useState('');
    const [passerror, setPassError] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [usererror, setUserError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const changeHandlerEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value.trim() === '') {
            setColorEmail('red');
            setEmailError("Enter Email Address");
        } else {
            setColorEmail('black');
            setEmailError("");
        }
    };

    const changeHandlerPassword = (e) => {
        const value = e.target.value;
        setPass(value);
        if (value.trim() === '') {
            setColorPass('red');
            setPassError("Enter Password");
        } else {
            setColorPass('black');
            setPassError("");
        }
    };

    const submitHandler = (e) => {
        if (email.trim() === '') {
            setColorEmail('red');
            setEmailError("Enter Email Address");
            return;
        }

        if (pass.trim() === '') {
            setColorPass('red');
            setPassError("Enter Password");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            axios
                .post('http://localhost:8989/api/v1/auth/authenticate', {
                    email: email,
                    password: pass,
                })
                .then((response) => {
                    const token = response.data.token;
                    const name = response.data.name;
                    const id = response.data.id;
                    console.log(token);
                    localStorage.setItem('jwtToken', token);
                    localStorage.setItem('id', id);
                    dispatch(login({ username: name }));
                    toast({
                        position: 'top',
                        title: 'Login Successfully',
                        description: 'You have logged in to Resume.Pro.io.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                    navigate('/home');
                })
                .catch((error) => {
                    setIsLoading(false); 
                    setUserError('Invalid user or password');
                });
        }, 1500);
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            backgroundImage={profile}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} opacity={0.9} background={'transparent'}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'black'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="Email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={changeHandlerEmail}
                                placeholder='Email'
                            />
                            <p style={{ color: `${coloremail}` }}>{emailerror}</p>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={pass}
                                onChange={changeHandlerPassword}
                                placeholder='Password'
                            />
                            <p style={{ color: `${colorpass}` }}>{passerror}</p>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'teal.400'}>Forgot password?</Link>
                            </Stack>
                            <p style={{ color: "red" }}>{usererror}</p>
                            <Button
                                isLoading={isLoading}
                                loadingText="Signing in"
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                                onClick={submitHandler}>
                                Sign in
                            </Button>
                        </Stack>
                        <Link color={'teal.400'} style={{ textAlign: 'center' }} onClick={() => navigate('/signup')}>
                            Don't have an Account?
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
