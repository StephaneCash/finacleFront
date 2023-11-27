import React from 'react'
import "./Contact.css"
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactApp'>
        <h2>Contacts</h2>

        <div className='row'>
          <div className='col-sm-6 form'>
            <form>
              <input type="text"
                className='form-control'
                placeholder='Votre nom'
              />
              <input type="email"
                className='form-control'
                placeholder='Votre nom'
              />

              <textarea className='form-control' placeholder='Votre message...'></textarea>

              <button>Envoyer</button>
            </form>
          </div>

          <div className='ul col-sm-6'>
            <div className='item'>
              <FiMapPin />
              <span>Boulevard du 30 Juin</span>
            </div>

            <div className='item'>
              <FiPhoneCall />
              <span>+243 821442125</span>
            </div>

            <div className='item'>
              <FaFax />
              <span>Boulevard du 30 Juin</span>
            </div>

            <div className='item'>
              <FiMail />
              <span>
                Pour plus d'informations sur CUCFDM, envoyez un courrier <br />
                électronique dans le formulaire ci-dessous.
              </span>
            </div>
          </div>


        </div>

        <p>
          Veuillez soumettre votre candidature à un emploi via le lien Opportunités de
          carrière ci-dessous.
          Opportunités de carrière
          Si vous êtes intéressé par une carrière chez CUCFDM, ou l'une de ses sociétés
          affiliées, nous aimerions avoir votre avis
        </p>
      </div>
    </div>
  )
}

export default Contact