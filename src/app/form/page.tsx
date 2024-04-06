import React from 'react';

const Form = () => {
  return (
    <div className="bg-black text-white p-4">
      <form action="/submit" method="post">
        <div className="mb-4">
          <label htmlFor="fname" className="block">First Name:</label>
          <input type="text" id="fname" name="fname" className="border rounded-md py-2 px-3 bg-gray-800 text-white w-full" placeholder='border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full'/>
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="block">Last Name:</label>
          <input type="text" id="lname" name="lname" className="border rounded-md py-2 px-3 bg-gray-800 text-white w-full" placeholder='border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full'/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" name="email" className="border rounded-md py-2 px-3 bg-gray-800 text-white w-full" placeholder='border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full
border rounded-md py-2 px-3 bg-gray-800 text-white w-full'/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">Message:</label>
          <textarea id="message" name="message" rows="4" cols="50" className="border rounded-md py-2 px-3 bg-gray-800 text-white w-full" placeholder='border rounded-md py-2 px-3 bg-gray-800 text-white w-full'></textarea>
        </div>
        <div>
          <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </div>
      </form>
    </div>
  );
};

export default Form;
