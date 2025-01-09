import React from 'react'

function Speaker_card({img, name, designation, company, location}) {
  return (
    <div className='flex flex-col items-center bg-green-50 p-5 m-5 rounded-xl shadow-cstm'>
      <img src={img} alt="" className='rounded-full' />
      <h2>{name}</h2>
      <p>{designation}</p>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  )
}

export default Speaker_card
