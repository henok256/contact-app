import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const reseterV=(id)=>{
      props.reseter(id);
    };
  

    const renderContactList = props.contacts.map((contact, index) => {
      return (
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
          index={index +1}
        />
      );
    });
    return (
    <div className='main'>
      <h1 className="header-tag">Contact List</h1>
      <div>
       < ol>
          {renderContactList}
       </ol> 
        </div>
      <div className='reset-center'>
  <button className='same-color ui button blue' onClick={reseterV}>Clear all the contact</button>
  <Link to="/add">
    <button className='same-color ui button blue'>Add Contact</button>
  </Link>
</div>
    </div>
    );
}

export default ContactList;