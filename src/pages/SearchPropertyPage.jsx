import React from 'react'
import { useRef, useEffect } from 'react'

function SearchPropertyPage() {
  const CheckIn = useRef(null);
  const CheckOut = useRef(null);

  //! Funzione che gestisce il cambiamento della data di inizio
  const handleStartDateChange = () => {
    if(CheckIn.current && CheckOut.current) {
      CheckOut.current.min = CheckIn.current.value;
    }
  };

  useEffect(() => {
    //! Impostiamo la data minima per la Data di inizio alla data corrente
    const today = new Date().toISOString().split('T')[0]; 
    if (CheckIn.current) {
      CheckIn.current.min = today; //? Impostiamo la data minima per la Data di inizio
    }
  }, []);


  return (
    <div className='flex mt-5 mx-10 bg-linear-90/oklch  from-[#d4c685] to-[#a7d3a6] justify-around'>
      <div className='my-5'>
        <select name="place" id="place" className='bg-amber-100 h-14 p-3'>   
          <option value="all">Sono flessibile</option>
          <option value="italy">Italia</option>
          <option value="europe">Europa</option>
          <option value="america">America</option>
        </select>
      </div>
      <div className='my-5'>
      <input
        type="date"
        id="start-date"
        ref={CheckIn}
        onChange={handleStartDateChange}
        placeholder='Check-In'
        className='bg-amber-100 h-14 p-3'
      />
      </div>
      <div className='my-5'>
      <input
        type="date"
        id="end-date"
        ref={CheckOut}
        placeholder='Check-Out'
        className='bg-amber-100 h-14 p-3'
      />
      </div>
      <div className='my-5'>
        <input type="number" name="children" id="children" min={0} placeholder='Bambini' className='bg-amber-100 h-14 p-3 w-28' />
      </div>
      <div className='my-5'>
        <input type="number" name="adult" id="adult" min={0} placeholder='Adulti' className='bg-amber-100 h-14 p-3 w-28' />
      </div>
      <div className='my-5'>
        <input type="number" name="animal" id="animal" min={0} placeholder='Animali' className='bg-amber-100 h-14 p-3 w-28' />
      </div>
    </div>
  )
}

export default SearchPropertyPage