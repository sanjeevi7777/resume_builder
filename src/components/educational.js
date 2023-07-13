import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import Template1 from './template1.js';
import { Switch, Stack, Box } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import '../style/page.css';
function Personal() {
    const [fname, setFname] = useState('');
    // const [user, setUser] = useState();
    return (<>
        <form style={{ marginLeft: 10 }}>
            <div class="form-group">
                <label for="exampleFormControlInput1">School Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter School Name" onChange={(e) => { setFname(e.target.value) }} />

            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">School Location</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter School Location" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Degree</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Degree" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Field Of Study</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Field Of Study" />
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Start Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter Start Date" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">End Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter End Date" />
            </div>
            <div className='form-group-checkbox'>
                <input className=" checkbox" type="checkbox" id="" value="" aria-label="..." />
                <label className='checklabel'>Completed</label>
            </div>
            {/* <Template1 fname={fname} /> */}

        </form>


    </>);
}

export default Personal;