import React, { useState } from 'react';
import CalenderIcon from "../assets/icons/calender-svgrepo-com.svg";

export default function Navbar() {
  const yearRange = [
    { id: 1, label: '2023-24' },
    { id: 2, label: '2023-22' },
    { id: 3, label: '2022-21' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2023-24'); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };
  return (
    <div className="flex justify-between items-center p-4 rounded-md">
      <p className="font-bold text-2xl">Chapter VI-A</p>
      <div className="flex items-center p-4 rounded-md">
        <h1 className="mr-4">Financial Year:</h1>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none"
            >
              <img
                src={CalenderIcon}
                alt="User"
                className="h-5 w-5 mr-2"
              />
              {selectedYear ? selectedYear : 'Select Year Range'}
            </button>
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
              {yearRange.map((year) => (
                <button
                  key={year.id}
                  type="button"
                  onClick={() => handleYearSelection(year.label)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none ${year.label === selectedYear ? 'bg-gray-200' : ''
                    }`}
                >
                  {year.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}