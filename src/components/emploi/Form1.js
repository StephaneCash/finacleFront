import React, { useState } from 'react'
import { UserContext } from '../../AppContext';

const Form1 = () => {

  const [form, setForm] = useState({
    pays: "", province: "", territoire: "", ville: "", secteur: "", chifferie: "",
    groupement: "", ethnie: "", tribu: "", village: "", communeUrbaine: "", communeRurale: ""
  });
  const { activeStep, setActiveStep, setDataForm, dataForm } = React.useContext(UserContext);

  console.log(form)

  function handleNextStep(e) {
    e.preventDefault();
    setDataForm({
      ...dataForm, ...form
    });
    setActiveStep(activeStep + 1);
  };

  return (
    <div className='form'>
      <form>
        <select className='form-control' onChange={(e) => setForm({...form, pays: e.target.value })}>
          <option value="">--Choisir votre pays--</option>
        </select>

        <div className='row'>
          <div className='col-sm-6'>
            <select className='form-control' onChange={(e) => setForm({...form, province: e.target.value })}>
              <option value="">--Choisir votre province--</option>
            </select>
          </div>

          <div className='col-sm-6'>
            <select className='form-control' onChange={(e) => setForm({...form, territoire: e.target.value })}>
              <option value="">--Choisir votre territoire--</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <select className='form-control' onChange={(e) => setForm({...form, secteur: e.target.value })}>
              <option value="">--Choisir votre secteur--</option>
            </select>
          </div>
          <div className='col-sm-6'>
            <select className='form-control' onChange={(e) => setForm({...form, ville: e.target.value })}>
              <option value="">--Choisir votre ville--</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre chefferie'
              value={form.chifferie}
              onChange={(e) => setForm({...form, chifferie: e.target.value })}
            />
          </div>

          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre groupement'
              value={form.groupement}
              onChange={(e) => setForm({...form, groupement: e.target.value })}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre Ethnie'
              value={form.ethnie}
              onChange={(e) => setForm({...form, ethnie: e.target.value })}
            />
          </div>

          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre tribu'
              value={form.tribu}
              onChange={(e) => setForm({...form, tribu: e.target.value })}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre village'
              value={form.village}
              onChange={(e) => setForm({...form, village: e.target.value })}
            />
          </div>

          <div className='col-sm-6'>
            <input
              className='form-control'
              type='text' placeholder='Votre commune urbaine'
              value={form.communeUrbaine}
              onChange={(e) => setForm({...form, communeUrbaine: e.target.value })}
            />
          </div>
        </div>

        <input
          className='form-control'
          type='text' placeholder='Votre commune rurale'
          value={form.communeRurale}
          onChange={(e) => setForm({...form, communeRurale: e.target.value })}
        />

        <div className='btns mt-4'>
          <button
            style={{ backgroundColor: "#fff", color: "#007cf8" }}
            onClick={() => setActiveStep(activeStep - 1)}>Retour</button>
          <button
            style={{
              opacity: form.pays && form.province &&
                form.territoire && form.village
                && form.secteur ? 1 : 0.3
            }}
            disabled={
              form.pays && form.province &&
                form.territoire && form.village
                && form.secteur ? false : true
            }
            onClick={handleNextStep}>Suivant</button>
        </div>
      </form >
    </div >
  )
}

export default Form1