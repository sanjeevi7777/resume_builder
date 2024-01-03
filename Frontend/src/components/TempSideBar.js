import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import '../style/page.css'
import NavBar from './navbar3';
import ReactDOM from 'react-dom';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './template1(a)';
import { Checkbox, useToast, Button } from '@chakra-ui/react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
function Sidebar() {
    const id=localStorage.getItem('id');
    const toast = useToast();
    const [activeTab, setActiveTab] = useState('personal');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [component, setComponent] = useState(null);
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedPhoto(null);
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const navigate = useNavigate();
    const [componentcount, setComponentcount] = useState(1);
    let state = useParams();
    
        useEffect(() => {
            if (state.value === '1') {
                setComponent(<Template1 />);
            } else if (state.value === '2') {
                setComponent(<Template2 />);
            } else if (state.value === '3') {
                setComponent(<Template3 />);
            } else {
                setComponent(<Template4 />);
            }
        }, [state.value]);
    const componentHtml = component ? ReactDOMServer.renderToStaticMarkup(component) : '';
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [about, setAbout] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [address, setAddress] = useState('');
    const [errorspersonal, setErrorsPersonal] = useState({});
    const [savedper, setSavedPer] = useState('');
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataKey'));
        // const storedData = axios.get('http://localhost:8989/api/v1/auth/getPer')
         
        if (storedData) {
            setFname(storedData.fname);
            setLname(storedData.lname);
            setEmail(storedData.email);
            setPhno(storedData.phno);
            setAddress(storedData.address);
            setDob(storedData.dob);
            setAbout(storedData.about);
        }
    }, []);
    const compcount = (value) => {
        setComponentcount(value);
    }
    const validateFormPersonal = () => {
        const errors = {};

        if (!fname.trim()) {
            errors.fname = 'First name is required';
        }

        if (!lname.trim()) {
            errors.lname = 'Last name is required';
        }
        if (!dob.trim()) {
            errors.dob = 'Date of Birth is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            errors.email = 'Invalid email format';
        }
        if (!phno.trim()) {
            errors.phno = 'Phone Number is required';
        }
        if (!address.trim()) {
            errors.address = 'Address is required';
        }

        setErrorsPersonal(errors);

        return Object.keys(errors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const handleFnameChange = (e) => {
        setSavedPer('');
        setFname(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, fname: '' }));
    };

    const handleLnameChange = (e) => {
        setLname(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, lname: '' }));
    };

    const handleAboutChange = (e) => {
        setAbout(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, about: '' }));
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, dob: '' }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, email: '' }));
    };
    const handlePhnoChange = (e) => {
        setPhno(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, phno: '' }));
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        setErrorsPersonal((prevErrors) => ({ ...prevErrors, address: '' }));
    };

    const handleSubmitPersonal = (e) => {
        console.log(id);
        e.preventDefault();
        console.log(email)
        if (validateFormPersonal()) {
            const token = localStorage.getItem('jwtToken');
            console.log(token);

            localStorage.setItem(
                'dataKey',
                JSON.stringify({
                    fname,
                    lname,
                    about,
                    dob,
                    address,
                    email,
                    phno,
                    selectedPhoto
                })
            );
            toast({
                position: 'top',
                title: 'Saved Successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            axios
                .put('http://localhost:8989/api/v1/auth/updatePer', {
                    user_id:id,
                    first_name: fname,
                    last_name: lname,
                    email: email,
                    phone_number: phno,
                    address: address,
                    dob: dob,
                    about: about
                })

                .then((response) => {

                    console.log(response.data)
                    // Store the JWT token securely (e.g., in localStorage or HttpOnly cookie)

                    // dispatch(login({ username: email }));
                })
                .catch((error) => {


                    console.log('An error occurred during the signup request:', error);
                    // setUserError('Invalid user or password');
                });
            if (componentcount >= 5)
                return;
            setComponentcount(componentcount + 1);
            handleTabClick('professional');
        }
    };
    const [cname, setCname] = useState('');
    const [position, setPosition] = useState('');
    const [startpro, setStartPro] = useState('');
    const [endpro, setEndPro] = useState('');
    const [curr, setCurr] = useState(false);
    const [summary, setSummary] = useState('');
    const [errorsprofessional, setErrorProfessional] = useState({});
    useEffect(() => {
        const professionalData = JSON.parse(localStorage.getItem('dataKey1'));
        setCname(professionalData?.cname || '');
        setPosition(professionalData?.position || '');
        setStartPro(professionalData?.startpro || '');
        setEndPro(professionalData?.endpro || '');
        setCurr(professionalData?.curr || false);
        setSummary(professionalData?.summary || '');
    }, []);

    const validateFormProfessional = () => {
        const errors = {};

        if (!cname.trim()) {
            errors.company = 'Company Name is required';
        }

        if (!position.trim()) {
            errors.position = 'Position title is required';
        }

        if (!startpro.trim()) {
            errors.start = 'Start date is required';
        }
        setErrorProfessional(errors);

        return Object.keys(errors).length === 0;
    };
    const handleCnameChange = (e) => {
        setCname(e.target.value);
        setErrorProfessional((prevErrors) => ({ ...prevErrors, company: '' }));
    };
    const handlePositionChange = (e) => {
        setPosition(e.target.value);
        setErrorProfessional((prevErrors) => ({ ...prevErrors, position: '' }));
    };

    const handleStartChangePro = (e) => {
        setStartPro(e.target.value);
        setErrorProfessional((prevErrors) => ({ ...prevErrors, startpro: '' }));
    };

    const handleEndChangePro = (e) => {
        setEndPro(e.target.value);
    };

    const handleCurrChange = () => {
        setCurr(!curr);
        setErrorProfessional((prevErrors) => ({ ...prevErrors, endpro: '' }));
    };

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    };

    const handleSubmitProfessional = (e) => {
        e.preventDefault();

        if (validateFormProfessional()) {
            localStorage.setItem(
                'dataKey1',
                JSON.stringify({
                    cname,
                    position,
                    startpro,
                    endpro,
                    curr,
                    summary,
                })
            );
            toast({
                position: 'top',
                title: 'Saved Successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            axios
                .put('http://localhost:8989/api/v1/auth/updatePro', {
                    company_name: cname,
                    position_title: position,
                    start_date: startpro,
                    end_date: endpro,
                    curr: curr,
                    summary: summary
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('An error occurred during the signup request:', error);
                    // setUserError('Invalid user or password');
                });
            if (componentcount >= 5)
                return;
            setComponentcount(componentcount + 1);
            handleTabClick('educational');
        }
    };
    const [sname, setSname] = useState('');
    const [slocation, setLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [startedu, setStartEdu] = useState('');
    const [endedu, setEndEdu] = useState('');
    const [comp, setComp] = useState(false);
    const [studies, setStudies] = useState('');
    const [errorsedu, setErrorsEdu] = useState({});
    const [savededu, setSavedEdu] = useState('');

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataKey2'));

        if (storedData) {
            setSname(storedData.sname);
            setLocation(storedData.slocation);
            setDegree(storedData.degree);
            setField(storedData.field);
            setStartEdu(storedData.startedu);
            setEndEdu(storedData.endedu);
            setComp(storedData.comp);
            setStudies(storedData.studies);
        }
    }, []);

    const validateFormEducational = () => {
        let formIsValid = true;
        const newErrors = {};

        if (sname.trim() === '') {
            newErrors.sname = 'School Name is required';
            formIsValid = false;
        } else {
            newErrors.sname = '';
        }

        if (slocation.trim() === '') {
            newErrors.slocation = 'School Location is required';
            formIsValid = false;
        } else {
            newErrors.slocation = '';
        }

        if (degree.trim() === '') {
            newErrors.degree = 'Degree is required';
            formIsValid = false;
        } else {
            newErrors.degree = '';
        }

        if (field.trim() === '') {
            newErrors.field = 'Field of Study is required';
            formIsValid = false;
        } else {
            newErrors.field = '';
        }

        if (startedu.trim() === '') {
            newErrors.start = 'Start Date is required';
            formIsValid = false;
        } else {
            newErrors.start = '';
        }

        if (endedu.trim() === '') {
            newErrors.end = 'End Date is required';
            formIsValid = false;
        } else {
            newErrors.end = '';
        }

        setErrorsEdu(newErrors);
        return formIsValid;
    };

    const handleInputChange = (e, field) => {
        // validateFormEducational();
        const value = e.target.value;
        setSavedEdu();
        switch (field) {
            case 'sname':
                setSname(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, sname: '' }));
                break;
            case 'slocation':
                setLocation(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, slocation: '' }));
                break;
            case 'degree':
                setDegree(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, degree: '' }));
                break;
            case 'field':
                setField(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, fieldedu: '' }));
                break;
            case 'start':
                setStartEdu(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, startedu: '' }));
                break;
            case 'end':
                setEndEdu(value);
                setErrorsEdu((prevErrors) => ({ ...prevErrors, end: '' }));
                break;
            case 'studies':
                setStudies(value);
                break;
            default:
                break;
        }
    };

    const handleSubmitEdu = (e) => {
        e.preventDefault();
        if (validateFormEducational()) {
            const formData = {
                sname,
                slocation,
                degree,
                field,
                startedu,
                endedu,
                comp,
                studies,
            };
            toast({
                position: 'top',
                title: 'Saved Successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            localStorage.setItem('dataKey2', JSON.stringify(formData));
            axios
                .put('http://localhost:8989/api/v1/auth/updateEdu', {
                    school_name: sname,
                    school_location: slocation,
                    degree: degree,
                    field: field,
                    start_date: startedu,
                    end_date: endedu,
                    studies: studies,
                    completed: comp
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('An error occurred during the signup request:', error);
                    // setUserError('Invalid user or password');
                });
            setSavedEdu('Saved Successfully');
            handleTabClick('skills');

            handleTabClick('skills');
            if (componentcount >= 5)
                return;
            setComponentcount(componentcount + 1);
        }
    };
    const [skills, setSkills] = useState('');
    const [skillsArray, setSkillsArray] = useState([]);
    const [errorskills, setErrorSkills] = useState('');
    const [reset, setReset] = useState(false);

    useEffect(() => {
        const storedSkills = JSON.parse(localStorage.getItem('dataKey3'));
        if (storedSkills && Array.isArray(storedSkills)) {
            setSkillsArray(storedSkills);
        }
        if (reset) {
            setSkillsArray([]);
            localStorage.removeItem('dataKey3');
            setReset(false);
        }
    }, [reset]);

    const handleInputChangeSkills = (e) => {
        setSkills(e.target.value);
        setErrorSkills('');
    };

    const addSkills = () => {
        if (skills.trim() === '') {
            setErrorSkills('Skills cannot be empty.');
        } else if (skillsArray.includes(skills)) {
            setErrorSkills('Skills already exist.');
        } else {
            toast({
                position: 'top',
                title: 'Skills Added Successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            setSkillsArray((prevSkillsArray) => {
                const newSkillsArray = [...prevSkillsArray, skills];
                localStorage.setItem('dataKey3', JSON.stringify(newSkillsArray));
                axios
                    .post('http://localhost:8989/api/v1/auth/saveSkills', {
                        skill: skills
                    })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log('An error occurred during the signup request:', error);
                        // setUserError('Invalid user or password');
                    });
                return newSkillsArray;
            });
            setSkills('');
            setErrorSkills('');
        }
    };

    const resetSkills = () => {
        axios
            .delete('http://localhost:8989/api/v1/auth/deleteAllSkills')
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log('An error occurred during the delete request:', error);
                // setUserError('Invalid user or password');
            });
        setReset(true);
    };

    const [projects, setProjects] = useState('');
    const [projectsArray, setProjectsArray] = useState([]);
    const [errorprojects, setErrorProjects] = useState('');

    const [initialProjectsArray, setInitialProjectsArray] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('dataKey4'));
        if (storedProjects) {
            setProjectsArray(storedProjects);
            setInitialProjectsArray(storedProjects);
        }
    }, []);

    const handleInputChangeProjects = (e) => {
        setProjects(e.target.value);
        setErrorProjects('');
    };
    const addProjects = () => {
        if (projects.trim() === '') {
            setErrorProjects('Projects cannot be empty.');
        } else if (projectsArray.includes(projects)) {
            setErrorProjects('Projects already exist.');
        } else {
            const newProjectsArray = [...projectsArray, projects];
            setProjectsArray(newProjectsArray);
            toast({
                position: 'top',
                title: 'Projects Added Successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            axios
                .post('http://localhost:8989/api/v1/auth/saveProjects', {
                    projects: projects
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log('An error occurred during the signup request:', error);
                    // setUserError('Invalid user or password');
                });
            localStorage.setItem('dataKey4', JSON.stringify(newProjectsArray));
            setProjects('');
            setErrorProjects('');
        }
    };

    const resetProjects = () => {
        axios
            .delete('http://localhost:8989/api/v1/auth/deleteAllProjects')
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log('An error occurred during the delete request:', error);
                // setUserError('Invalid user or password');
            });
        setProjectsArray(initialProjectsArray);
        setProjects('');
        localStorage.removeItem('dataKey4');
        setErrorProjects('');
    };

    const renderComponent = () => {
        switch (activeTab) {
            case 'personal':

                return (
                    <div>
                        {/* {setComponentcount(1)} */}
                        <h3 style={{ textAlign: 'center' }}>Personal Details</h3>
                        <form style={{ marginLeft: 10 }} onSubmit={handleSubmitPersonal}>
                            <div style={{ display: 'flex' }}>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">First Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        value={fname}
                                        placeholder="Enter First Name"
                                        onChange={handleFnameChange}
                                    />
                                    {errorspersonal.fname && <div className="error-message">{errorspersonal.fname}</div>}
                                </div>
                                <div className="form-group" style={{ marginLeft: 70 }}>
                                    <label htmlFor="exampleFormControlInput1" >Last Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        value={lname}
                                        placeholder="Enter Last Name"
                                        onChange={handleLnameChange}
                                    />
                                    {errorspersonal.lname && <div className="error-message">{errorspersonal.lname}</div>}
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Dob :</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Date of Birth"
                                        value={dob}
                                        onChange={handleDobChange}
                                    />
                                    {errorspersonal.dob && <div className="error-message">{errorspersonal.dob}</div>}
                                </div>
                                <div className="form-group" style={{ marginLeft: 30 }}>
                                    <label htmlFor="exampleFormControlInput1"  >Email :</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                        style={{ width: "143%" }}
                                    />
                                    {errorspersonal.email && <div className="error-message">{errorspersonal.email}</div>}

                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className="form-group"  >
                       
                                    <label htmlFor="exampleFormControlInput1">Phone Number :</label>
                                    <input
                                        style={{ width: "100%" }}
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Phone Number"
                                        value={phno}
                                        onChange={handlePhnoChange}
                                    />
                                    {errorspersonal.phno && <div className="error-message">{errorspersonal.phno}</div>}
                                </div>
                                <div className='form-group' style={{ marginLeft: 20 }}>
                                    <label for="file">Profile : </label>
                                    <input type="file" onChange={handlePhotoChange}  />

                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Address"
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                                {errorspersonal.address && <div className="error-message">{errorspersonal.address}</div>}
                            </div>
                            <label htmlFor="exampleFormControlInput1">Describe yourself :</label>
                            <textarea
                                id="summary"
                                name="summary"
                                rows="4"
                                cols="50"
                                style={{ color: 'black' }}
                                placeholder="Detail Summary"
                                value={about}
                                onChange={handleAboutChange}
                            />
                            <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', widows: "100%" }}>
                                <Button colorScheme='teal' variant='solid' onClick={handleSubmitPersonal}>
                                    SAVE  &raquo;&raquo;
                                </Button>
                                {/* {savedper && <CheckCircleIcon color='blue' style={{ marginTop: 17, marginLeft: 50 }} />}
                                <p className='saved'> {savedper}</p> */}
                            </div>
                        </form>
                    </div>
                );
            case 'professional':

                return (
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Professional Details</h3>
                        <form style={{ marginLeft: 10 }} onSubmit={handleSubmitProfessional}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Company Name : </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Company Title"
                                    value={cname}
                                    onChange={handleCnameChange}
                                />
                                {errorsprofessional.company && <div className="error-message">{errorsprofessional.company}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Position Title : </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Position Title"
                                    value={position}
                                    onChange={handlePositionChange}
                                />
                                {errorsprofessional.position && <div className="error-message">{errorsprofessional.position}</div>}
                            </div>
                            <div style={{ display: 'flex' }}>

                                <div className="form-group" style={{ width: "90%" }}>
                                    <label htmlFor="exampleFormControlInput1">Start Date : </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Start Date"
                                        value={startpro}
                                        onChange={handleStartChangePro}
                                    />
                                    {errorsprofessional.start && <div className="error-message">{errorsprofessional.start}</div>}
                                </div>
                                <div className="form-group" style={{ marginLeft: 40, width: "100%" }}>
                                    <label htmlFor="exampleFormControlInput1">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter End Date"
                                        value={endpro}
                                        onChange={handleEndChangePro}

                                    />

                                </div>
                            </div>
                            <div className="form-group-checkbox">
                                <Checkbox
                                    id="check"
                                    isChecked={curr}
                                    onChange={handleCurrChange}
                                    colorScheme="blue"
                                >
                                    Currently employed
                                </Checkbox>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Work Summary</label>
                                <textarea
                                    id="summary"
                                    name="summary"
                                    rows="4"
                                    cols="50"
                                    placeholder="Detail Summary"
                                    value={summary}
                                    onChange={handleSummaryChange}
                                />
                            </div>
                            <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', widows: "100%" }}>
                                <Button colorScheme='teal' variant='solid' onClick={handleSubmitProfessional}>
                                    SAVE  &raquo;&raquo;
                                </Button>
                            </div>
                            {/* <button className="navlinksubmit" style={{ width: "30%", height: "90%" }} onClick={next}>
                                    Next
                                </button> */}
                            {/* {savedpro && <CheckCircleIcon color='blue' style={{ marginTop: 17, marginLeft: 50 }} />}
                                <p className='saved'> {savedpro}</p> */}
                        </form>
                    </div>
                );
            case 'educational':
                return (
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Educational Details</h3>
                        <form style={{ marginLeft: 10 }} onSubmit={handleSubmitEdu}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">School Name : </label>
                                <input
                                    type="text"
                                    className={errorsedu.sname ? 'form-control error' : 'form-control'}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter School Name"
                                    onChange={(e) => handleInputChange(e, 'sname')}
                                    value={sname}
                                />
                                {errorsedu.sname && <div className="error-message">{errorsedu.sname}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">School Location : </label>
                                <input
                                    type="text"
                                    className={errorsedu.slocation ? 'form-control error' : 'form-control'}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter School Location"
                                    onChange={(e) => handleInputChange(e, 'slocation')}
                                    value={slocation}
                                />
                                {errorsedu.slocation && <div className="error-message">{errorsedu.slocation}</div>}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Degree : </label>
                                    <input
                                        type="text"
                                        className={errorsedu.degree ? 'form-control error' : 'form-control'}
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Degree"
                                        onChange={(e) => handleInputChange(e, 'degree')}
                                        value={degree}
                                    />
                                    {errorsedu.degree && <div className="error-message">{errorsedu.degree}</div>}
                                </div>
                                <div className="form-group" style={{ marginLeft: 10, width: '100%' }}>
                                    <label htmlFor="exampleFormControlInput1">Field Of Study : </label>
                                    <input
                                        type="text"
                                        className={errorsedu.field ? 'form-control error' : 'form-control'}
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Field Of Study"
                                        onChange={(e) => handleInputChange(e, 'field')}
                                        value={field}
                                    />
                                    {errorsedu.field && <div className="error-message">{errorsedu.field}</div>}
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="exampleFormControlInput1">Start Date : </label>
                                    <input
                                        type="date"
                                        className={errorsedu.startedu ? 'form-control error' : 'form-control'}
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Start Date"
                                        onChange={(e) => handleInputChange(e, 'start')}
                                        value={startedu}
                                    />
                                    {errorsedu.start && <div className="error-message">{errorsedu.start}</div>}
                                </div>
                                <div className="form-group" style={{ marginLeft: 50, width: '100%' }}>
                                    <label htmlFor="exampleFormControlInput1">End Date : </label>
                                    <input
                                        type="date"
                                        className={errorsedu.end ? 'form-control error' : 'form-control'}
                                        id="exampleFormControlInput1"
                                        placeholder="Enter End Date"
                                        onChange={(e) => handleInputChange(e, 'end')}
                                        value={endedu}
                                    />
                                    {errorsedu.end && <div className="error-message">{errorsedu.end}</div>}
                                </div>
                            </div>
                            <div className="form-group-checkbox">
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    id=""
                                    value=""
                                    aria-label="..."
                                    onClick={() => setComp(!comp)}
                                    checked={comp}
                                />
                                <label className="checklabel">Completed</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Describe Your Studies : </label>
                                <textarea
                                    id="summary"
                                    name="summary"
                                    rows="4"
                                    cols="50"
                                    placeholder="Detail Summary"
                                    value={studies}
                                    onChange={(e) => handleInputChange(e, 'studies')}
                                />
                            </div>
                            <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', widows: "100%" }}>
                                <Button colorScheme='teal' variant='solid' onClick={handleSubmitEdu}>
                                    SAVE  &raquo;&raquo;
                                </Button>
                            </div>
                        </form>
                    </div>
                );
            case 'skills':
                return (
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Skills</h3>
                        <div>
                            <label htmlFor="exampleFormControlInput1">Skills</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Skills"
                                value={skills}
                                onChange={handleInputChangeSkills}
                                style={{ height: 60 }}
                            />
                            {errorskills && <p style={{ color: 'red' }}>{errorskills}</p>}
                            <div>
                                <div className='skillbutton'>

                                    <Button onClick={addSkills} colorScheme='facebook'>
                                        Add Skills
                                    </Button>
                                    <Button colorScheme='gray' onClick={resetSkills}>
                                        Reset Skills
                                    </Button>
                                </div>
                                <div className='nextbutton'>

                                    <Button colorScheme='teal' onClick={() => { setComponentcount(componentcount + 1); handleTabClick('projects') }}>
                                        Next &raquo;&raquo;
                                    </Button>
                                </div>
                            </div>
                            {/* <button className="navlinksubmit" style={{ width: '30%', height: '90%', marginLeft: 120 }} onClick={next}>
                                Next
                            </button> */}
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Projects</h3>
                        <div>
                            <label htmlFor="exampleFormControlInput1">Projects</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Projects"
                                style={{height:60}}
                                value={projects}
                                onChange={handleInputChangeProjects}
                            />
                            {errorprojects && <p style={{ color: 'red' }}>{errorprojects}</p>}
                            <div>
                                <div className='skillbutton'>

                                    <Button onClick={addProjects} colorScheme='facebook'>
                                        Add Projects
                                    </Button>
                                    <Button colorScheme='gray' onClick={resetProjects}>
                                        Reset Projects
                                    </Button>
                                </div>
                                <div className='nextbutton'>

                                    <Button colorScheme='teal' onClick={() => { navigate(`/print/${state.value}`)}}>
                                        Submit &raquo;&raquo;
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };
    const jwtToken = localStorage.getItem('jwtToken'); 

    if (!jwtToken) {
        return <div>Please log in to access this page.</div>;
    }
    return (
        <div >
            <NavBar />
            <div className='wrapper'>

            <div className='side-container'>
                <div className="side">
                    <ul className="flex-column">

                        <li className="nav-item">
                            <p style={{ marginLeft: -10, width: 18, paddingTop: 17 }}> {componentcount === 1 && <FaArrowRight />}</p>
                            <Link className="sidelinks" onClick={() => { handleTabClick('personal'); compcount(1) }}>
                                <i class="fa-solid fa-user-secret fa-beat-fade"></i>&nbsp;
                                Personal Details
                            </Link>
                        </li>

                        <li className="nav-item">
                            <p style={{ marginLeft: -10, width: 18, paddingTop: 17 }}> {componentcount === 2 && <FaArrowRight />}</p>
                            <Link className="sidelinks" onClick={() => { handleTabClick('professional'); compcount(2) }} >
                                <i class="fa-solid fa-user-tie fa-beat-fade"></i>&nbsp;
                                Professional Details
                            </Link>

                        </li>
                        <li className="nav-item">
                            <p style={{ marginLeft: -10, width: 18, paddingTop: 17 }}> {componentcount === 3 && <FaArrowRight />}</p>
                            <Link className="sidelinks" onClick={() => { handleTabClick('educational'); compcount(3) }}>
                                <i class="fa-solid fa-user-graduate fa-beat-fade" />&nbsp;
                                Educational Details
                            </Link>
                        </li>
                        <li className="nav-item">
                            <p style={{ marginLeft: -10, width: 18, paddingTop: 17 }}> {componentcount === 4 && <FaArrowRight />}</p>
                            <Link className="sidelinks" onClick={() => { handleTabClick('skills'); compcount(4) }}>
                                <i class="fa-solid fa-user-gear fa-beat-fade" style={{ marginTop: 4 }}></i>&nbsp;
                                Key Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <p style={{ marginLeft: -10, width: 18, paddingTop: 17 }}> {componentcount === 5 && <FaArrowRight />}</p>
                            <Link className="sidelinks" onClick={() => { handleTabClick('projects'); compcount(5) }}>
                                <i class="fa-solid fa-diagram-project fa-beat-fade"></i>&nbsp;
                                Projects Details
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    {renderComponent()}
                </div>
                {/* <div className='resumelive' id="resume">
                    {comp}
                </div> */}
  <div className='resumelive' >
                        {/* Display the HTML content inside the iframe */}
                        <iframe
                           
                            title="Resume Preview"
                            id="resume"
                            srcDoc={`<!DOCTYPE html><html><body>${componentHtml}</body></html>`}
                            style={{ width: '100%', height: '630px', border: 'none' ,padding:'0px'}}
                        />
                        </div>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;
