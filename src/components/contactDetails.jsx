import React, { Fragment } from 'react'
import NavBar from './navBar'

const ContactDetails = () => {
  return (
    <Fragment>
      <NavBar/>
      <section className='flex flex-row justify-between'>
        <div className=''>
        <h3>Names:</h3>
        <h3>Emai:</h3>
        <h3>Phone:</h3>
        <h3>Created on:</h3>
        <h3>Updated on:</h3>
        </div>
        <div className='flex flex-row gap-12'>
          <div className=''>
            <button className=''>Update</button>
          </div>
          <div className=''>
            <button className=''>Delete</button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ContactDetails