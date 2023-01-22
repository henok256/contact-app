import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact  from './deleteContact';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]= useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
     
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact}]);// adding the new contacts into the previous contacts
  };
  const reseter=()=>{
    setContacts([]);

  };
  const removeContactHandler=(id)=>{
    
      const input=window.prompt("iy you are sure to delete the contact, write anything");
      if(input!=null){
        const newContactList= contacts.filter((contact)=>{
          return contact.id !== id;
        });
        setContacts(newContactList);
      }
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
      
          <Route   path="/"   element={<ContactList contacts={contacts} reseter={reseter}  getContactId={removeContactHandler} />}/>
          <Route   path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route   path="/contact/:id" element={<ContactDetail />} />
          <Route path="/delete" element={<DeleteContact />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
