import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState('');
  const [skillsArray, setSkillsArray] = useState([]);
  const [error, setError] = useState('');
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

  const handleInputChange = (e) => {
    setSkills(e.target.value);
    setError('');
  };

  const addSkills = () => {
    if (skills.trim() === '') {
      setError('Skills cannot be empty.');
    } else if (skillsArray.includes(skills)) {
      setError('Skills already exist.');
    } else {
      setSkillsArray((prevSkillsArray) => {
        const newSkillsArray = [...prevSkillsArray, skills];
        localStorage.setItem('dataKey3', JSON.stringify(newSkillsArray));
        return newSkillsArray;
      });
      setSkills('');
      setError('');
    }
  };

  const resetSkills = () => {
    setReset(true);
  };

  return (
    <div>
      <label htmlFor="exampleFormControlInput1">Skills</label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter Skills"
        value={skills}
        onChange={handleInputChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className="navlinksubmit" style={{ marginLeft: 130, marginTop: 40 }} onClick={addSkills}>
        Add Skills
      </button>
      <button className="navlinksubmit" style={{ marginLeft: 130, marginTop: 40 }} onClick={resetSkills}>
        Reset Skills
      </button>
    </div>
  );
}

export default Skills;
