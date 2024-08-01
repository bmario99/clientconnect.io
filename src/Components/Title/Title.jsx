import React from 'react'
import './Title.css'

function Title({subtitle,Title}) {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{Title}</h2>
      
    </div>
  )
}

export default Title
