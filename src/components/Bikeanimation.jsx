import React from 'react'
import { Container } from 'react-bootstrap'
import "../CSS/bikeanimation.css"

const Bikeanimation = () => {
  return (
    <>

<section className='bike-animation-main'>
    <div className='road-size'>

    <img src='images/road.png' className='road-image'></img>
</div>
<div className='moving-section'>
    <img src='images/bikelogo.svg'  className='bike-image  card-img-overlay' ></img>
</div>

</section>



    </>
  )
}

export default Bikeanimation