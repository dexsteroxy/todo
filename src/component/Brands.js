import React from 'react'
import car from '../asset/car.svg'
import pen from '../asset/pen.svg'
import key from '../asset/key.svg'
import shoe from '../asset/shoe.svg'
function Brands() {
  return (
    <section className=' section'>
<div className=' container mx-auto'>
    <div className=' flex flex-col md:flex-row gap-y-12 md:gap-y-0 justify-between items-center'>
        <img src={car} alt=''/>

        <img src={pen} alt=''/>

        <img src={key} alt=''/>

        <img src={shoe} alt=''/>

    </div>
</div>
    </section>
  )
}

export default Brands