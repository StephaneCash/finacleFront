import React from 'react'
import "./Carriere.css"
import { useNavigate } from 'react-router-dom';

const Carriere = () => {

    const navigate = useNavigate();

    const handleRedict = ()=>{
        navigate("/emploi")
    };

    return (
        <div className='carrieres'>
            <div className='mainCarriere'>
                <h2>Carrières</h2>

                <div className='row12'>
                    <div className='col1'>
                        <p>
                            Chez CUCFDM, nous offrons une proposition de valeur unique : « Rejoignez-nous, grandissez
                            avec plusieurs ». Nous représentons un groupe diversifié d'entreprises couvrant plusieurs
                            secteurs et souhaitons aider nos employés à réaliser leurs aspirations
                            professionnelles. CUCFDM offre de nombreuses opportunités de développement pour aider
                            les employés à évoluer dans leurs rôles actuels et à se préparer à leur prochaine étape au sein
                            de leur entreprise, de leur division ou de l'ensemble de l'organisation.
                        </p>

                        <p>
                            Parcourez nos offres d’emploi actuelles et postulez pour commencer votre PROCHAINE
                            ÉTAPE.
                        </p>
                    </div>

                    <div className='col2'>
                            <h6>Vous cherchez un emploi ?</h6>
                            <button onClick={handleRedict}>Postuler</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carriere