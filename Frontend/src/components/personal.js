import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@chakra-ui/icons';
function Personal() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [about, setAbout] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const[phno,setPhno]=useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});
    const [saved, setSaved] = useState('');
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataKey'));

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

    const validateForm = () => {
        const errors = {};

        if (!fname.trim()) {
            errors.fname = 'First name is required';
        }

        if (!lname.trim()) {
            errors.lname = 'Last name is required';
        }

        if (!about.trim()) {
            errors.about = 'About is required';
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

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const handleFnameChange = (e) => {
        setSaved();
        setFname(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, fname: '' }));
    };

    const handleLnameChange = (e) => {
        setLname(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, lname: '' }));
    };

    const handleAboutChange = (e) => {
        setAbout(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, about: '' }));
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, dob: '' }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    };
    const handlePhnoChange = (e) => {
        setPhno(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, phno: '' }));
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, address: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
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
                })
            );
            setSaved("Saved Succesfully");
            // Perform any additional submission logic here
        }
    };

    return (
        <>
            <form style={{ marginLeft: 10 }} onSubmit={handleSubmit}>
                <div style={{display:'flex'}}>
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
                    {errors.fname && <div className="error-message">{errors.fname}</div>}
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
                    {errors.lname && <div className="error-message">{errors.lname}</div>}
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
                    {errors.dob && <div className="error-message">{errors.dob}</div>}
                </div>
                    <div className="form-group" style={{ marginLeft: 30 }}>
                    <label htmlFor="exampleFormControlInput1">Phone Number :</label>
                    <input
                            style={{width:"146%" }}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Phone Number"
                        value={phno}
                        onChange={handlePhnoChange}
                    />
                    {errors.dob && <div className="error-message">{errors.phno}</div>}
                    </div>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleFormControlInput1" >Email :</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
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
                    {errors.address && <div className="error-message">{errors.address}</div>}
                </div>
                <label htmlFor="exampleFormControlInput1">Describe yourself :</label>
                <textarea
                    id="summary"
                    name="summary"
                    rows="4"
                    cols="50"
                    style={{color:'black'}}
                    placeholder="Detail Summary"
                    value={about}
                    onChange={handleAboutChange}
                />
                <div style={{ margin: '0 auto', display: 'flex' }}>

                    <button className="navlinksubmit" style={{ width: "30%", height: "90%" }} onClick={handleSubmit}>
                        Save
                    </button>
                    {saved && <CheckCircleIcon color='blue' style={{ marginTop: 17, marginLeft: 50 }} />} 
                    <p className='saved'> {saved}</p>
                </div>
            </form>
        </>
    );
}

export default Personal;
