import React from 'react'
import { useLocation } from 'react-router';
import { Link} from 'react-router-dom';
import user from '../images/user.png';
 const ContactDetail = (props) => {
  const location=useLocation();
  const {from}= location.state;
  
  //const {name, email}= props.contact;
  console.log(from.id);
  return (
    <div className='main'>
      <div className='ui card centered'>
         <div className='image' >
                <img src={user}  alt='profile pic'/>
                <div className='content'>
                <div className='header'>{from.name}</div>
                <div className='description'>{from.email}</div>
               </div>
         </div>        
      </div>
      <div className="center-div">
         <Link to="/">
         <button>Back to the Contact List</button>
         </Link>      
         </div>
    </div>
  );
};

export default ContactDetail;
