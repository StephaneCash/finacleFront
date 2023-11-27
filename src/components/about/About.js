import React from 'react'
import "./About.css"
import { FiChevronRight } from "react-icons/fi";

const About = () => {
  return (
    <div className='about'>
      <h2>Pourquoi rejoindre notre équipe ?</h2>

      <div className='row'>
        <div className='col-sm-3'>
          <h6>Découvrez-en davantage sur :</h6>
          <div className='ul'>
            <div className='item'>
              <FiChevronRight />
              <span>Nos valeurs</span>
            </div>

            <div className='item'>
              <FiChevronRight />
              <span>Opportunité illimitée</span>
            </div>

            <div className='item'>
              <FiChevronRight />
              <span>Développement de carrière</span>
            </div>

            <div className='item'>
              <FiChevronRight />
              <span>Santé</span>
            </div>
          </div>
        </div>
        <div className='col-sm-9'>
          <p>
            Chez CUCFDM, nous vous offrirons des opportunités de carrière illimitées dans
            un environnement collaboratif en équipe tout en vous aidant à atteindre vos
            objectifs professionnels.
            Que vous souhaitiez bâtir votre carrière à l'échelle nationale ou sur le marché
            mondial, vous aurez la chance d'utiliser votre expertise, d'élargir vos
            compétences et d'apprendre de nouvelles choses en travaillant.
            Depuis notre création il y a plus de 6 ans, nos employés continuent de faire de
            CUCFDM un groupe diversifié d'entreprises axées sur la performance. Nous
            nous concentrons sur l’amélioration continue, en commençant par vous
          </p>
        </div>
      </div>
    </div>
  )
}

export default About