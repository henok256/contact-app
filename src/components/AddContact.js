
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AddContact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if(name === "" || email === ""){
            alert("all fields are mandatory");
            return;
        }
        props.addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate('/');
    }

    return(
        <div className='ui main'><br></br>
            <h2 id="headerApp" >Add Contact</h2>
            <form className='ui form' onSubmit={add} >
                <div className='field'>
                    <label>Name</label>
                    <input type="text" 
                    value={name}
                    name="name" 
                    placeholder='Name' 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="email" 
                    name="email" 
                    value={email}
                    placeholder='email'
                    onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <button className='ui button blue' to="">Add</button>
                 </form>  
                 </div> 
    )

    }

    export default AddContact;