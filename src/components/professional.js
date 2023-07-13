import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import Template1 from './template1.js';
import { Switch ,Stack,Box} from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import '../style/page.css';
function Personal() {
    const [fname, setFname] = useState('');
    // const [user, setUser] = useState();
    return (<>
        <form style={{ marginLeft: 10 }}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Position Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Position Title" onChange={(e) => { setFname(e.target.value) }} />

            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">EndDate</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter Start Date" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">StartDate</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter End Date" />
            </div>
            <div className='form-group-checkbox'>
                <input className=" checkbox" type="checkbox" id="" value="" aria-label="..."/>
                <label className='checklabel'>currently employed</label>
            </div>
           
            <div class="form-group">
                <label for="exampleFormControlInput1">Work Summary</label>
                <textarea id="summary" name="summary" rows="4" cols="50" placeholder='Detail Summary'>
                </textarea>
            </div>
            {/* <Template1 fname={fname} /> */}
            
        </form>
        

    </>);
}

export default Personal;