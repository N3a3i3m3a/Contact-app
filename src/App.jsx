import React from 'react' 
import { Routes,Route, Navigate } from 'react-router-dom'
import NavBar from './components/navBar'
import ContactList from './components/contactList'
import AddContact from './components/addContact'
import ContactDetails from './components/contactDetails'
import EditContact from './components/editContact'

function App() {

  return (
  <section>
    <NavBar/>
    <ContactList/>
    <Routes>
      <Route path = {'/'} element ={<Navigate to ='/contactList'/>}/>
      <Route path = {'/contacts/list'} element={<ContactList/>}/>
      <Route path = {'/contacts/add'} element={<AddContact/>}/>
      <Route path = {'/contacts/details/:contactId'} element={<ContactDetails/>}/>
      <Route path = {'/contacts/edit/:contactId'} element={<EditContact/>}/>
    </Routes>
  </section>
  )
}

export default App
 