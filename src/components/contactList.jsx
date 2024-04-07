import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosMore } from "react-icons/io";
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
             <h3>Diane</h3>
             <h3>07866666666</h3>
            </div>
            <div className=''>
              <Link to={'/'} className=''>
              <IoIosMore />
              </Link>
              <h3>dana@gmail.com</h3>
            </div>
         </div>
         <div className='bg-gray-400 py-7 mb-3 flex flex-row justify-between'>
            <div className=''>
             <h3>Ritha</h3>
              <h>0787777777777</h>
             </div>
             <div className=''>
             <Link to={'/'} className=''>
             <IoIosMore />
              </Link>
              <h>ritha@gmail.com</h>
            </div>
         </div>
         <div className='bg-gray-400 py-7 mb-3 flex flex-row justify-between'>
          <div className=''>
           <h3>Naima</h3>
           <h>0788888888</h>
           </div>
           <div className=''>
           <Link to={'/'} className=''>
           <IoIosMore />
              </Link>
              naima@gmail.com 
            </div>
         </div>
      </section>
    </fragment>
  )
}

export default ContactList