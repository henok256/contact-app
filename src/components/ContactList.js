import React from 'react';
import {Link} from 'react-router-dom';

import ContactCard from './ContactCard';
const ContactList=(props)=>{
    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
  /*const contacts=[{
    name:"henok",
    email:"henok23@gmail.com",
    id:1
  },{
    name:'ayele',
    email:'hdshsh@yahoo.com'
  }
    ];*/

    const renderContactList = props.contacts.map((contact)=>{
        return (
          <ContactCard 
          contact={contact} 
          clickHandler={deleteContactHandler}
          key={contact.id}
          />
        );
       
    });
    return (
    <div className='main'>
     <h1>Contact List</h1>
     <Link to="/add">
     <button className='ui button blue right' style={{"float":"right"}}>Add Contact</button>
     </Link>
     
      <div>{renderContactList}</div>
    </div>
    )
}

export default ContactList;