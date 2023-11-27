import React from 'react'
import "./Footer.css"

const Footer = () => {

  const date = new Date();

  return (
    <div className='footerApp'>
      &copy; par Congo fort et uni {date.getFullYear()} | Tout droit réservé
    </div>
  )
}

export default Footer