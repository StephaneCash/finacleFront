import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { UserContext } from '../../AppContext';
import "./Init.css"
import "../../components/emploi/Form.css"
import Form0 from '../../components/emploi/Form0';
import Form1 from '../../components/emploi/Form1';
import Form2 from '../../components/emploi/Form2';
import Form3 from '../../components/emploi/Form3';
import Form4 from '../../components/emploi/Form4';

const FormMain = () => {

  const labels = ["", "", "", '', ''];

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <Form0 />
      case 1:
        return <Form1 />
      case 2:
        return <Form2 />
      case 3:
        return <Form3 />
      case 6:
        return <Form4 />
      default:
        throw new Error("Etape non connue")
    }
  }

  const { activeStep } = React.useContext(UserContext);

  return (
    <div className='init' style={{ width: "100%", display: "flex", flexDirection: "column", gap: "3rem" }}>
      <h2>Veuillez remlplir chaque formulaire pour postuler</h2>
      {
        <>
          <Stepper activeStep={activeStep} alternativeLabel>
            {
              labels.map((label, i) => {
                return (
                  <Step key={i}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                )
              })
            }
          </Stepper>

          {handleSteps(activeStep)}
        </>
      }
    </div>
  )
}

export default FormMain