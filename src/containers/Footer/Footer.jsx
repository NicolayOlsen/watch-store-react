import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='watches__footer'>
        <div className="watches__footer-content__input">
        <p>Registrer deg her for å motta vårt nyhetsbrev med tilbud og aktuelle nyheter.</p>
            <input type="email" placeholder="E-post adresse" />
            <button type="button">OK</button>
        </div>
    </div>
  )
}

export default Footer
