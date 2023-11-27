import React from 'react'
import "./Secteurs.css"
import agriculture from "../../assets/images/agriculture.jpg";
import assurance from "../../assets/images/assurance.jpg";
import banque from "../../assets/images/banque.jpg";
import food from "../../assets/images/food.jpg";
import energie from "../../assets/images/energie.jpg";
import education from "../../assets/images/education.jpg";
import hydro from "../../assets/images/hydro.jpg";
import trasport from "../../assets/images/transport.jpg";
import { FiChevronRight } from "react-icons/fi"

const Secteurs = () => {
  return (
    <div className='secteurs'>
      <h2>Secteurs d'activité</h2>

      <h5>
        Expertise, excellence et
        pratiques durables dans de nombreux secteurs
      </h5>

      <div className='grille'>
        <div className='card'>
          <div className='overPlay'></div>
          <img src={agriculture} alt="" />
          <h6>Agriculture</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={assurance} alt="" />
          <h6>Assurance</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={banque} alt="" />
          <h6>Banque</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={food} alt="" />
          <h6>Food</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={energie} alt="" />
          <h6>Energie</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={education} alt="" />
          <h6>Education</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={trasport} alt="" />
          <h6>Transport</h6>
        </div>

        <div className='card'>
          <div className='overPlay'></div>
          <img src={hydro} alt="" />
          <h6>Hydrocarbure</h6>
        </div>
      </div>

      <div className='button'>
        <button>
          <span>Voir plus</span>
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Secteurs