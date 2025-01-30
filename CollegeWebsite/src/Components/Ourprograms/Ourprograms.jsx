import React from 'react'
import './Ourprograms.css'

const Ourprograms = ({subTitle,title}) => {
  return (
    <div className='title'> 
        <h3>{subTitle}</h3>
        <h1>{title}</h1>
    </div>
  )
}

export default Ourprograms