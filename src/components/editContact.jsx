import React, { Fragment } from 'react'
import NavBar from './navBar'

const EditContact = () => {
  return (
    <Fragment>
    <NavBar/>
    <section>
<div>      
    <h3>Full name</h3>
  <input type='text' className='border border-black'/>
</div>
<div className=''>
  <h3>Email</h3>
  <input type='text' className='border border-black'/>
</div>
<div className=''>
  <h3>Phone</h3>
  <input type='text' className='border border-black'/>
</div>
<div>
  <button className='bg-gray-400'>update</button>
</div>
</section>
   </Fragment>
  )
}

export default EditContact