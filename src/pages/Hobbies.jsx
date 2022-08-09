import React from 'react';

const biking = require('./../icons/person-biking-solid.svg');
const running = require('./../icons/person-running-solid.svg');
const swimming = require('./../icons/person-swimming-solid.svg');
const book = require('./../icons/book-open-solid.svg');
const coffee = require('./../icons/mug-hot-solid.svg');
const code = require('./../icons/code-solid.svg');
const hiking = require('./../icons/person-hiking-solid.svg');
const mountains = require('./../icons/mountain-sun-solid.svg');
const camping = require('./../icons/campground-solid.svg');

const Hobbies = () => (
  <main className="mt-8 mr-8 mb-8 ml-8">
    <h2 className="text-2xl text-center text-dark-violet font-bold mb-10">Hobbies</h2>
    <div className='flex flex-wrap justify-center mt-10 '>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Triatlon</span>
        <div className='flex flex-row flex-grow mx-2'>
          <img src={running} alt='icon' className='m-2 w-24'/>
          <img src={biking} alt='icon' className='m-2 w-24'/>
          <img src={swimming} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Leer</span>
        <div className='flex flex-row mx-2'>
          <img src={book} alt='icon' className='m-2 w-24'/>
          <img src={coffee} alt='icon' className='m-2 w-24'/>
          <img src={code} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
      <div className='flex flex-col mx-5 my-5 text-gray-800 w-72  text-sm px-4 p-6 text-center hover:bg-gray-300/80 bg-gray-200 rounded-lg '>
        <span className='font-semibold '>Actividades en el campo</span>
        <div className='flex flex-row mx-2'>
          <img src={hiking} alt='icon' className='m-2 w-24'/>
          <img src={mountains} alt='icon' className='m-2 w-24'/>
          <img src={camping} alt='icon' className='m-2 w-24'/>
        </div>
      </div>
    </div>
  </main>
);

export default Hobbies;
