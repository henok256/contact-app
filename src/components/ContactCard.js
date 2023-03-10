import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

 const ContactCard =(props)=>{

    const {id, name, email}= props.contact;
  return(
  <div className='item'> 
    <li>
    <img className='ui avatar image' src={user} alt="user"/>
  <div className='content'>
    <Link to={`/contact/${id}`} state={{from: props.contact}} >
      <div className='header'>{name}</div>
      <div>{email}</div>
    </Link>
  </div>
  <i className='trash alternate outline icon' 
  style={{color:"red", marginTop:"4px", marginLeft:"10px", marginBottom:"15px"}} 
  onClick={()=>props.clickHandler(id)}></i> 
  <Link to="/edit" state={{from: props.contact}}>
  <i className='edit alternate outline icon' 
      style={{color:"blue", marginTop:"4px"}} 
  ></i>
  </Link>
    </li>
</div>
);  
}

export default ContactCard;