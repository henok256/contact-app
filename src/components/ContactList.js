import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    console.log(props);
    
    const inputEl =useRef("");
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const reseterV=(id)=>{
      props.reseter(id);
    };
    const getSearchTerm=(e)=>{
      props.searchKeyWord(inputEl.current.value)
    }
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
      <div className="header-tag">
        <h1>Contact List</h1>
      </div>
      <div className='tools'>
      <div className='ui search'>
    <div className='ui icon input'>
         <input className='prompt'
         type='text' 
         placeholder='search contacts'  
         value={props.term}
         ref={inputEl}
         onChange={getSearchTerm}
         />
        <i className='search icon'></i>    
    </div>
</div>
<Link to="/add" >
    <button className='same-color ui button blue'>Add Contact</button>
  </Link>
      <div className='reset-center'>
        <button className='same-color ui button blue' onClick={reseterV}>Delete all the contact</button> 
</div>
      </div>    
      <div>
       < ol>
          {renderContactList.length>0
          ? renderContactList
          :"No contact available"}
       </ol> 
        </div>
    </div>
    );
}

export default ContactList;