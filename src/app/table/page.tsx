import React from 'react';

const Table = () => {
  return (
    <div className="flex justify-center overflow-x-auto bg-black h-screen">
      <table className="table-auto border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-800 text-white">Name</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Age</th>
            <th className="px-4 py-2 bg-gray-800 text-white">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700">
            <td className="border px-4 py-2 text-white">John Doe</td>
            <td className="border px-4 py-2 text-white">30</td>
            <td className="border px-4 py-2 text-white">USA</td>
          </tr>
          <tr className="bg-gray-700">
            <td className="border px-4 py-2 text-white">Jane Smith</td>
            <td className="border px-4 py-2 text-white">25</td>
            <td className="border px-4 py-2 text-white">Canada</td>
          </tr>
          <tr className="bg-gray-700">
            <td className="border px-4 py-2 text-white">Mike Johnson</td>
            <td className="border px-4 py-2 text-white">40</td>
            <td className="border px-4 py-2 text-white">UK</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
