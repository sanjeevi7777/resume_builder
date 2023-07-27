import React, { useState } from 'react';
import axios from 'axios';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useToast, 
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import NavBar from './navBar';

export default function Contact() {
    const token=localStorage.getItem('jwtToken');
    console.log("Token :"+token);
    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
       

        axios
            .post('http://localhost:8989/api/v1/feedback/addUserFeedback', {
                // name: name,
                email: email,
                feedback: message,
            })
            .then((response) => {
                console.log(response.data);
                toast({
                    position: 'top',
                    title: 'Message Sent',
                    description: 'Your message has been sent successfully.',
                    status: 'success',
                    duration: 5000, // Duration in milliseconds, or null for infinite duration
                    isClosable: true, // Allow users to close the toast manually
                });
            
            })
            .catch((error) => {
                console.log('An error occurred during the request:', error);
            
            });
    };

    return (
        <>
            <NavBar />
            <Container bg="#E1EBEE" maxW="full" maxH="fit-content" pt={100} centerContent overflow="hidden">
                <Flex>
                    <Box
                        bg="teal"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="darkgray"
                                                    _hover={{ border: '2px solid black' }}
                                                    leftIcon={<MdPhone color="black" size="20px" />}>
                                                    +92-9545335722
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="darkgray"
                                                    _hover={{ border: '2px solid black' }}
                                                    leftIcon={<MdEmail color="black" size="20px" />}>
                                                    sanjeevi@gmail.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="darkgray"
                                                    _hover={{ border: '2px solid black' }}
                                                    leftIcon={<MdLocationOn color="black" size="20px" />}>
                                                    Coimbatore, India
                                                </Button>
                                            </VStack>
                                        </Box>
                                        {/* <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                                            <IconButton
                                                aria-label="facebook"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<MdFacebook size="28px" />}
                                            />
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                            <IconButton
                                                aria-label="discord"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsDiscord size="28px" />}
                                            />
                                        </HStack> */}
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" value={name} onChange={handleNameChange} />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="email">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" value={email} onChange={handleEmailChange} />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="message">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                        value={message}
                                                        onChange={handleMessageChange}
                                                    />
                                                </FormControl>
                                                <FormControl id="submit" float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        color="white"
                                                        onClick={handleSubmit}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
