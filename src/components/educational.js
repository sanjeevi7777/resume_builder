import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import '../style/page.css';

function Educational() {
    const [sname, setSname] = useState('');
    const [slocation, setLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [comp, setComp] = useState(false);
    const [studies, setStudies] = useState('');
    const [errors, setErrors] = useState({});
    const [saved, setSaved] = useState('');
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataKey2'));

        if (storedData) {
            setSname(storedData.sname);
            setLocation(storedData.slocation);
            setDegree(storedData.degree);
            setField(storedData.field);
            setStart(storedData.start);
            setEnd(storedData.end);
            setComp(storedData.comp);
            setStudies(storedData.studies);
        }
    }, []);

    const validateForm = () => {
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

        if (start.trim() === '') {
            newErrors.start = 'Start Date is required';
            formIsValid = false;
        } else {
            newErrors.start = '';
        }

        if (end.trim() === '') {
            newErrors.end = 'End Date is required';
            formIsValid = false;
        } else {
            newErrors.end = '';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setSaved();
        switch (field) {
            case 'sname':
                setSname(value);
                setErrors((prevErrors) => ({ ...prevErrors, sname: '' }));
                break;
            case 'slocation':
                setLocation(value);
                setErrors((prevErrors) => ({ ...prevErrors, slocation: '' }));
                break;
            case 'degree':
                setDegree(value);
                setErrors((prevErrors) => ({ ...prevErrors, degree: '' }));
                break;
            case 'field':
                setField(value);
                setErrors((prevErrors) => ({ ...prevErrors, field: '' }));
                break;
            case 'start':
                setStart(value);
                setErrors((prevErrors) => ({ ...prevErrors, start: '' }));
                break;
            case 'end':
                setEnd(value);
                setErrors((prevErrors) => ({ ...prevErrors, end: '' }));
                break;
            case 'studies':
                setStudies(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                sname,
                slocation,
                degree,
                field,
                start,
                end,
                comp,
                studies,
            };
            setSaved('Saved Successfully');
            localStorage.setItem('dataKey2', JSON.stringify(formData));
            // Reset form fields
            setSname('');
            setLocation('');
            setDegree('');
            setField('');
            setStart('');
            setEnd('');
            setComp(false);
            setStudies('');
            setErrors({});
        }
    };

    return (
        <>
            <form style={{ marginLeft: 10 }} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">School Name : </label>
                    <input
                        type="text"
                        className={errors.sname ? 'form-control error' : 'form-control'}
                        id="exampleFormControlInput1"
                        placeholder="Enter School Name"
                        onChange={(e) => handleInputChange(e, 'sname')}
                        value={sname}
                    />
                    {errors.sname && <div className="error-message">{errors.sname}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">School Location : </label>
                    <input
                        type="text"
                        className={errors.slocation ? 'form-control error' : 'form-control'}
                        id="exampleFormControlInput1"
                        placeholder="Enter School Location"
                        onChange={(e) => handleInputChange(e, 'slocation')}
                        value={slocation}
                    />
                    {errors.slocation && <div className="error-message">{errors.slocation}</div>}
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Degree : </label>
                        <input
                            type="text"
                            className={errors.degree ? 'form-control error' : 'form-control'}
                            id="exampleFormControlInput1"
                            placeholder="Enter Degree"
                            onChange={(e) => handleInputChange(e, 'degree')}
                            value={degree}
                        />
                        {errors.degree && <div className="error-message">{errors.degree}</div>}
                    </div>
                    <div className="form-group" style={{ marginLeft: 10, width: '100%' }}>
                        <label htmlFor="exampleFormControlInput1">Field Of Study : </label>
                        <input
                            type="text"
                            className={errors.field ? 'form-control error' : 'form-control'}
                            id="exampleFormControlInput1"
                            placeholder="Enter Field Of Study"
                            onChange={(e) => handleInputChange(e, 'field')}
                            value={field}
                        />
                        {errors.field && <div className="error-message">{errors.field}</div>}
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="form-group" style={{ width: '100%' }}>
                        <label htmlFor="exampleFormControlInput1">Start Date : </label>
                        <input
                            type="month"
                            className={errors.start ? 'form-control error' : 'form-control'}
                            id="exampleFormControlInput1"
                            placeholder="Enter Start Date"
                            onChange={(e) => handleInputChange(e, 'start')}
                            value={start}
                        />
                        {errors.start && <div className="error-message">{errors.start}</div>}
                    </div>
                    <div className="form-group" style={{ marginLeft: 50, width: '100%' }}>
                        <label htmlFor="exampleFormControlInput1">End Date : </label>
                        <input
                            type="month"
                            className={errors.end ? 'form-control error' : 'form-control'}
                            id="exampleFormControlInput1"
                            placeholder="Enter End Date"
                            onChange={(e) => handleInputChange(e, 'end')}
                            value={end}
                        />
                        {errors.end && <div className="error-message">{errors.end}</div>}
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
                <div style={{ margin: '0 auto', display: 'flex' }}>
                    <button className="navlinksubmit" style={{ width: '30%', height: '90%' }} type="submit">
                        Save
                    </button>
                    {saved && <CheckCircleIcon color="blue" style={{ marginTop: 17, marginLeft: 50 }} />}
                    <p className="saved">{saved}</p>
                </div>
            </form>
        </>
    );
}

export default Educational;
