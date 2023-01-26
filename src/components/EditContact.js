import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';


const EditContact = (props) => {
    const location =useLocation();
    const {from}= location.state;
    //const {id, name, email}= props.contact;
    //const {id, name, email}= props.contact;
    /* const [name, setName] = useState("");
    const [email, setEmail] = useState(""); */
    const navigate = useNavigate();
    //const contact = props.location.state.contact;


const [name, setName] = useState(from.name);
const [email, setEmail] = useState(from.email);
const[id, setId] = useState(from.id)
    const update = (e) => {
        e.preventDefault();
        if(name === "" || email === ""){
            alert("all fields are mandatory");
            return;
        }
        props.updateContactHandler({ name, email, id});
        setName("");
        setEmail("");
        navigate('/');
    }

    return(
        <div className='ui main'><br></br>
            <h2 id="headerApp" >Edit Contact</h2>
            <form className='ui form' onSubmit={update} >
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
                 <button className='ui button blue' to="">update</button>
                 </form>  
                 </div> 
    )
    }

    export default EditContact;