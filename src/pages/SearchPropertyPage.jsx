import React from 'react'
import { useRef, useEffect } from 'react'

function SearchPropertyPage() {
  const CheckIn = useRef(null);
  const CheckOut = useRef(null);

  //! Funzione che gestisce il cambiamento della data di inizio
  const handleStartDateChange = () => {
    if (CheckIn.current && CheckOut.current) {
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
    <form className='flex flex-col md:flex-row mt-5 mx-10 bg-linear-90/oklch  from-[#d4c685] to-[#a7d3a6] justify-around gap-x-8 gap-y-4 px-5 py-4'>
      {/* Place section */}
      <div>
        <label htmlFor="place">Dove</label>
        <select name="place" id="place" className='bg-amber-100 h-12 p-3 w-full'>
          <option value="all">Sono flessibile</option>
          <option value="italy">Italia</option>
          <option value="europe">Europa</option>
          <option value="america">America</option>
        </select>
      </div>
      {/* date section */}
      <div className='grid grid-cols-2 gap-4'>
        {/* date checkIn section */}
        <div>
          <label htmlFor="start-date">Check-In</label>
          <input
            type="date"
            id="start-date"
            ref={CheckIn}
            onChange={handleStartDateChange}
            placeholder='Check-In'
            className='bg-amber-100 h-12 p-3 w-full'
          />
        </div>
        {/* date checkOut section */}
        <div>
          <label htmlFor="end-date">Check-Out</label>
          <input
            type="date"
            id="end-date"
            ref={CheckOut}
            placeholder='Check-Out'
            className='bg-amber-100 h-12 p-3 w-full'
          />
        </div>
      </div>
      {/* # people Section */}
      <div className='md:grid md:grid-cols-3 gap-4 flex flex-col'>
        {/* children section */}
        <div>
          <label htmlFor="children">Bambini</label>
          <input type="number" name="children" id="children" min={0} className='bg-amber-100 h-12 p-3 w-full' />
        </div>
        {/* Adult Section */}
        <div>
          <label htmlFor="adult">Adulti</label>
          <input type="number" name="adult" id="adult" min={0}  className='bg-amber-100 h-12 p-3 w-full' />
        </div>
        {/* Animal section */}
        <div>
          <label htmlFor="animal">Animali</label>
          <input type="number" name="animal" id="animal" min={0} className='bg-amber-100 h-12 p-3 w-full' />
        </div>
      </div>
    </form>
  )
}

export default SearchPropertyPage