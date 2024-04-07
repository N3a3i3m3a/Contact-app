import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <section className='py-7 text-black bg-gray-400 flex flex-row justify-around '>
       <nav className=''>
        <Link to={'/'} className=''> Contacts</Link>
       </nav>
       <nav className=''>
        <Link to={'/'} className=''> Home</Link>
       </nav>
       <nav className=''>
        <Link to={'/'} className=''> Login</Link>
       </nav>
    </section>
  );
};

export default NavBar;