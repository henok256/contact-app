import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]= useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact}]);// adding the new contacts into the previous contacts
  };
  const removeContactHandler=(id)=>{
    const newContactList= contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(()=>{  // fetching data from local starage
    const retrieveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts)setContacts(retrieveContacts);
}, []);

  useEffect(()=>{    //saving data into local staorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  
  return (
    <div className='ui container'>
      <BrowserRouter>
      <Header /> <br></br><br></br>
      <Routes>
          <Route   path="/"    element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}/>
          <Route   path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          {/*<AddContact addContactHandler={addContactHandler}/>
           <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
          </Routes>
 
  </BrowserRouter>
            
     
      
    </div>
   
  )
}

export default App;
