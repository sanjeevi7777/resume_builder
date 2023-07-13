import React, { useState, useEffect } from 'react'; 
import { useContext } from 'react';
import Template1 from './template1.js';
import { useDispatch ,useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import { selectUser } from '../features/userSlice'
function Personal() {
    const[fname,setFname]=useState('');
    // const [user, setUser] = useState();
    const dispatch =useDispatch();
    // const user = useSelector(selectUser);
    const register=(fname)=>{
        // e.preventDefault();
        console.log(fname);
        dispatch(login({
            username: fname
        }))
        // history.pushState
        // console.log(user.username);
    }
    return (  <>
        <form style={{ marginLeft: 10}}>
          
{fname}
            <div class="form-group">
                <label for="exampleFormControlInput1">First Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter FirstName"  onChange={(e)=>{register(e.target.value)}}/>
                 
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter LastName" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Age</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Age" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Dob</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter DateOfBirth"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Address" />
                {/* <select class="form-control" id="exampleFormControlSelect1">
                    <option>Coimbatore</option>
                    <option>Chennai</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> */}
            </div>
            {/* <Template1 fname={fname} /> */}
        </form>
        
    </>);
}

export default Personal;