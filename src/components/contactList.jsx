import React from 'react'
import {Link} from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const ContactList = () => {
  return (
    <fragment className='flex flex-col'>
      <section className='flex flex-row justify-around'>
        <div>
          <h2>Welcome to your contacts</h2>
        </div>
        <div>
          <Link to={'/contacts/add'} className='bg-gray-400'>Add new</Link>
        </div>
      </section>
      <section className='contact-list'>
         <div className='bg-gray-400 py-7 mb-3 flex flex-row justify-between'>
            <div className=''>
             <h3>Name: Diane</h3>
             <h3>Phone: 07866666666</h3>
             <h3>Email: dana@gmail.com</h3>
            </div>
            <div className=' flex flex-col gap-3'>
            <div className=''>
              <Link to={'/'} className=''><FaEye /></Link>
              </div>
              <div className=''>
              <Link to={'/'} className=''><CiEdit /></Link>
              </div>
              <div className=''>
              <Link to={'/'} className=''><MdDelete /></Link>
              </div>
            </div>  
              
         </div>
         <div className='bg-gray-400 py-7 mb-3 flex flex-row justify-between'>
            <div className=''>
             <h3>Name: Ritha</h3>
              <h3>Phone: 0787777777777</h3>
              <h3>Eail: ritha@gmail.com</h3>
             </div>
             <div className=' flex flex-col gap-3'>
             <div className=''>
              <Link to={'/'} className=''><FaEye /></Link>
              </div>
              <div className=''>
              <Link to={'/'} className=''><CiEdit /></Link>
              </div>
              <div className=''>
              <Link to={'/'} className=''><MdDelete /></Link>
              </div>
              </div>
         </div>
         <div className='bg-gray-400 py-7 mb-3 flex flex-row justify-between'>
          <div className=''>
           <h3>Name: Naima</h3>
           <h3>Phone: 0788888888</h3>
           <h3>Email: naima@gmail.com </h3>
           </div>
           <div className=' flex flex-col gap-3'>
           <div className=''>
              <Link to={'/contacts/details/:contactId'} className=''><FaEye /></Link>
              </div>
              <div className=''>
              <Link to={'/contacts/edit/:contactId'} className=''><CiEdit /></Link>
              </div>
              <div className=''>
              <Link to={'/'} className=''><MdDelete /></Link>
              </div>
              </div>
         </div>
      </section>
    </fragment>
  )
}

export default ContactList