import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact  from './deleteContact';
import EditContact from './EditContact';
import api from '../api/contacts';
//import axios from 'axios';

function App() {

  const [contacts, setContacts]= useState([]);
  const [searchTerm, setSearchTerm]= useState("");
  const [searchResult, setSearchResults]=useState([]);
  
  //retrieve contacts from api
  const retrieveContacts = async ()=>{
    const response =  await api.get("/contacts");
    return response.data;
  };
  
  const addContactHandler= async (contact)=>{
    const request = {
      id:uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);// adding the new contacts into the previous contacts
  };

  const updateContactHandler=async (contact)=>{
    if(contact.id===undefined){
      console.log("the contact id isn't defined");
    }
      const response = await api.put(`/contacts/${contact.id}`, contact);
       const {id, name, email}= response.data;
      setContacts(
        contacts.map(contact=>{
        return contact.id === id? {...response.data}: contact
      }));
  }

  const reseter=()=>{
    setContacts([]);

  };
  const removeContactHandler=async (id)=>{
    await api.delete(`/contacts/${id}`);
      
      //if(input!=null){
        const newContactList= contacts.filter((contact)=>{
          return contact.id !== id;
        });
        setContacts(newContactList);
      //}
  };
    
  const searchHandler =(searchTerm)=>{
         setSearchTerm(searchTerm);        
          if(searchTerm!==""){
           const newContactList= contacts.filter((contact)=> {
              return Object.values(contact)
              .join(" ").toLowerCase()
              .includes(searchTerm.toLowerCase());    
            });
            setSearchResults(newContactList);
          }
          else{
            setSearchResults(contacts);
          }
  }
   useEffect(()=>{
    const getAllContacts = async ()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);             
    }
    getAllContacts();
}, []); 

  
  
  return (
    <div className='ui container'>
      <BrowserRouter>
      <Header /> <br></br><br></br>
      <Routes>
      
          <Route   path="/"   element={<ContactList contacts={searchTerm.length < 1 ?contacts:searchResult} reseter={reseter}  getContactId={removeContactHandler} setSearchTerm={setSearchTerm} term={searchTerm} searchKeyWord={searchHandler}/>}/>
          <Route   path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route   path="/contact/:id" element={<ContactDetail />} />
          <Route   path="/delete" element={<DeleteContact />} />
          <Route   path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
