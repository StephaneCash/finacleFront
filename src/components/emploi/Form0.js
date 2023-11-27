import React, { useEffect, useState } from 'react'
import { UserContext } from '../../AppContext';

const Form0 = () => {

  const { activeStep, setActiveStep, setDataForm, dataForm } = React.useContext(UserContext);

  const [form, setForm] = useState({ nom: "", postnom: "", prenom: "", sexe: "", dateNaissance: "" });

  function handleNextStep(e) {
    e.preventDefault();
    setDataForm({
      ...dataForm, ...form
    });
    setActiveStep(activeStep + 1);
  };

  useEffect(() => {
    if (dataForm) {
      setForm({
        nom: dataForm.nom, postnom: dataForm.postnom,
        prenom: dataForm.prenom, sexe: dataForm.sexe, dateNaissance: dataForm.dateNaissance
      })
    }
  }, [dataForm]);

  return (
    <div className='form'>
      <form>
        <input
          className='form-control'
          placeholder='Votre nom'
          value={form.nom}
          onChange={(e) => {
            setForm({ ...form, "nom": e.target.value })
          }}
        />

        <div className='row'>
          <div className='col-sm-6'>
            <input
              className='form-control'
              placeholder='Votre postnom'
              value={form.postnom}
              onChange={(e) => {
                setForm({ ...form, "postnom": e.target.value })
              }}
            />
          </div>
          <div className='col-sm-6'>
            <input
              className='form-control'
              placeholder='Votre prénom'
              value={form.prenom}
              onChange={(e) => {
                setForm({ ...form, "prenom": e.target.value })
              }}
            />
          </div>
        </div>
        <input
          className='form-control'
          type='date' placeholder='Votre prénom'
          value={form.dateNaissance}
          onChange={(e) => {
            setForm({ ...form, "dateNaissance": e.target.value })
          }}
        />

        <label>Choisir votre sexe</label>
        <div className="form-check">
          <input
            value={"M"}
            onChange={(e) => {
              setForm({ ...form, "sexe": e.target.value })
            }}
            className="form-check-input"
            type="radio" name="flexRadioDefault" id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Masculin
          </label>
        </div>
        <div className="form-check">
          <input
            value={"F"}
            onChange={(e) => {
              setForm({ ...form, "sexe": e.target.value })
            }}
            className="form-check-input"
            type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Fémminin
          </label>
        </div>

        <button
          style={{
            opacity: form.nom && form.prenom &&
              form.dateNaissance && form.sexe
              && form.postnom ? 1 : 0.3
          }}
          disabled={
            form.nom && form.prenom &&
              form.dateNaissance && form.sexe
              && form.postnom ? false : true
          }
          onClick={handleNextStep}>Suivant</button>
      </form >
    </div >
  )
}

export default Form0