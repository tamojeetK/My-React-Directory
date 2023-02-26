import React from 'react'
import './index.css'

function Card({children}) {
  return (
    <div className='cardStyle'>
    {children}
    </div>
  )
}

export default Card
