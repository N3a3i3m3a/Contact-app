import React from 'react'
import NavBar from './navBar'

const AddContact = () => {
  return (
    <fragment>
      <NavBar/>
      <section>
        <h2>Add contact</h2>
        <div className='addform'>
        <div className=''>
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
<div className=''>
  <h3>Picture</h3>
  <input type='text' className='border border-black'/>
</div>
<div>
  <button className='bg-gray-400'>Create</button>
</div>


        </div>

      </section>

    </fragment>
  )
}

export default AddContact