import React, { useState, useEffect } from 'react';
import { Checkbox } from '@chakra-ui/react';
import '../style/page.css';
import {CheckCircleIcon} from '@chakra-ui/icons';
function Personal() {
    const [cname, setCname] = useState('');
    const [position, setPosition] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [curr, setCurr] = useState(false);
    const [summary, setSummary] = useState('');
    const [errors, setErrors] = useState({});
    const [saved, setSaved] = useState('');
    useEffect(() => {
        const professionalData = JSON.parse(localStorage.getItem('dataKey1'));
        setCname(professionalData?.cname || '');
        setPosition(professionalData?.position || '');
        setStart(professionalData?.start || '');
        setEnd(professionalData?.end || '');
        setCurr(professionalData?.curr || false);
        setSummary(professionalData?.summary || '');
    }, []);

    const validateForm = () => {
        const errors = {};

        if (!cname.trim()) {
            errors.company = 'Company Name is required';
        }

        if (!position.trim()) {
            errors.position = 'Position title is required';
        }

        if (!start.trim()) {
            errors.start = 'Start date is required';
        }

        // if (!end.trim() && !curr) {
        //     errors.end = 'End date is required';
        // }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };
    const handleCnameChange = (e) => {
        setCname(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, company: '' }));
    };
    const handlePositionChange = (e) => {
        setPosition(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, position: '' }));
    };

    const handleStartChange = (e) => {
        setStart(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, start: '' }));
    };

    const handleEndChange = (e) => {
        setEnd(e.target.value);
        // setErrors((prevErrors) => ({ ...prevErrors, end: '' }));
    };

    const handleCurrChange = () => {
        setCurr(!curr);
        setErrors((prevErrors) => ({ ...prevErrors, end: '' }));
    };

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem(
                'dataKey1',
                JSON.stringify({
                    cname,
                    position,
                    start,
                    end,
                    curr,
                    summary,
                })
            );
            setSaved("Saved Succesfully");
            // Perform any additional submission logic here
        }
    };

    return (
        <>
            <form style={{ marginLeft: 10 }} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Company Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Position Title"
                        value={cname}
                        onChange={handleCnameChange}
                    />
                    {errors.company && <div className="error-message">{errors.company}</div>}
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
                    {errors.position && <div className="error-message">{errors.position}</div>}
                </div>
                <div style={{display:'flex'}}>

                    <div className="form-group" style={{  width: "90%" }}>
                    <label htmlFor="exampleFormControlInput1">Start Date : </label>
                    <input
                        type="month"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Start Date"
                        value={start}
                        onChange={handleStartChange}
                    />
                    {errors.start && <div className="error-message">{errors.start}</div>}
                </div>
                <div className="form-group" style={{marginLeft:40,width:"100%"}}>
                    <label htmlFor="exampleFormControlInput1">End Date</label>
                    <input
                        type="month"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter End Date"
                        value={end}
                        onChange={handleEndChange}
                        
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
                <div style={{ margin: '0 auto', display: 'flex' }}>

                    <button className="navlinksubmit" style={{width:"30%",height:"90%"}}onClick={handleSubmit}>
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
