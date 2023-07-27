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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import profile from "../images/background.jpg";
import axios from 'axios';
export default function SimpleCard() {
    const [coloremail, setColorEmail] = useState('black');
    const [colorpass, setColorPass] = useState('black');
    const [emailerror, setEmailError] = useState('');
    const [passerror, setPassError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const[usererror,setUserError]=useState('');

    const changeHandlerEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        // console.log(email);
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
    // console.log(user);
    // axios
    //     .post('http://localhost:8989/api/v1/auth/authenticate', {
    //         email: email,
    //         password: pass,
    //     })
    //     .then((response) => {
    //         const token = response.data.token;
    //         console.log(token)
    //         // Store the JWT token securely (e.g., in localStorage or HttpOnly cookie)
    //         localStorage.setItem('jwtToken', token);
    //         dispatch(login({ username: email }));
    //         navigate('/home');
    //     })
    //     .catch((error) => {
    //         console.log(pass)
    //         console.log('An error occurred during the login request:', error);
    //         setUserError('Invalid user or password');
    //     });
    const submitHandler = (e) => {
        axios
            .post('http://localhost:8989/api/v1/auth/authenticate', {
                email: email,
                password: pass,
            })
            .then((response) => {
                const token = response.data.token;
                const name=response.data.name;
                const id=response.data.id;
                console.log(token);
                // Store the JWT token securely (e.g., in localStorage or HttpOnly cookie)
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('id',id);
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
                setUserError('Invalid user or password');
            });
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
        dispatch(login({
            username: email
        }));

        
        // return ()
    };
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            backgroundImage={profile}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}>
            
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}opacity={0.9} background={'transparent'}>
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
                            <FormLabel >Email</FormLabel>
                            <Input type="email" value={email}
                                onChange={changeHandlerEmail} placeholder='Email'/>
                            <p style={{color:`${coloremail}`}}>{emailerror}</p>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={pass}
                                onChange={changeHandlerPassword} placeholder='Password' />
                            <p style={{ color: `${colorpass}` }}>{passerror}</p>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <p style={{ color:"red" }}>{usererror}</p>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} 
                                onClick={submitHandler}>
                                Sign in
                            </Button>
                        </Stack>
                            < Link color={'blue.400'} style={{textAlign:'center'}}onClick={() => navigate('/signup')}>
                                Don't have an Account?
                            </Link>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}