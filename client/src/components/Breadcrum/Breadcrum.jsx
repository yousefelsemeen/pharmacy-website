import React from 'react'
import './Breadcrum.css'
import arrow from '../../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product} = props;

    return (
    <div className='breadcrum'>
      HOME <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name} 
    </div>
  )
}

export default Breadcrum
