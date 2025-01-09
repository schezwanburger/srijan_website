import React from 'react'
import Speaker_card from '../components/Speaker_card'

function Speakers() {
  return (
    <div className='h-[50vh] text-justify px-10 mt-14'>
      <h1  className="inline font-bold text-2xl bg-[#389336] p-3 rounded-tl-3xl rounded-br-3xl">Keynote Speakers</h1>
      <div className='flex flex-wrap justify-center w-[70vw] mt-4'>
        <Speaker_card img={"../src/assets/vips_logo.png"} name='David Sanderson' designation='Professor and Inaugural Judith Neilson Chair' company='in Architecture, Faculty of Arts, Design and Architecture' location='UNSW Sydney, Australia' />
      </div>
    </div>
  )
}

export default Speakers
