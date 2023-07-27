import React, { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState('');
    const [projectsArray, setProjectsArray] = useState([]);
    const [errorprojects, setErrorProjects] = useState('');
    const [saved, setSaved] = useState('');
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
            localStorage.setItem('dataKey4', JSON.stringify(newProjectsArray));
            setProjects('');
            setErrorProjects('');
        }
    };

    const resetProjects = () => {
        setProjectsArray(initialProjectsArray);
        setProjects('');
        localStorage.removeItem('dataKey4');
        setErrorProjects('');
        setSaved('');
    };


    return (
        <div>
            <label htmlFor="exampleFormControlInput1">Projects</label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Projects"
                value={projects}
                onChange={handleInputChangeProjects}
            />
            {errorprojects && <p style={{ color: 'red' }}>{errorprojects}</p>}
            <button
                className="navlinksubmit"
                style={{ marginLeft: 130, marginTop: 40 }}
                onClick={addProjects}
            >
                Add projects
            </button>
            {saved && (
                <p style={{ color: 'green', marginTop: 10 }}>
                    Projects saved successfully!
                </p>
            )}
            <button
                className="navlinksubmit"
                style={{ marginLeft: 130, marginTop: 10 }}
                onClick={resetProjects}
            >
                Reset Projects
            </button>
        </div>
    );
}

export default Projects;
