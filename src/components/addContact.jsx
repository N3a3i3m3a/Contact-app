import React, { Fragment } from 'react'; // Import Fragment from react
import NavBar from './navBar';

const AddContact = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="px-4 lg:px-20 py-8">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-8">Add Contact</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full lg:w-1/4">
            <h3 className="mb-2">Full name</h3>
            <input type="text" className="border border-black rounded-lg p-2" />
          </div>
          <div className="flex flex-col w-full lg:w-1/4">
            <h3 className="mb-2">Email</h3>
            <input type="text" className="border border-black rounded-lg p-2" />
          </div>
          <div className="flex flex-col w-full lg:w-1/4">
            <h3 className="mb-2">Phone</h3>
            <input type="text" className="border border-black rounded-lg p-2" />
          </div>
          <div className="flex flex-col w-full lg:w-1/4">
            <h3 className="mb-2">Picture</h3>
            <input type="text" className="border border-black rounded-lg p-2" />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-gray-400 py-2 px-4 rounded-lg">Create</button>
        </div>
      </section>
    </Fragment>
  );
};

export default AddContact;
