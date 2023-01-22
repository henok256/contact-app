import React from 'react'
import { useLocation } from 'react-router';
 const DeleteContact = (props) => {
    //const {name, email}= props.contact;
    const location=useLocation();
    const {from}=location.state

  return (
    <div>
        are you sure you want to delete contact {from.name}

    </div>
  )
}

export default DeleteContact;
