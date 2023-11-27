import React, { useState } from 'react'
import App from './App';

export const UserContext = React.createContext();

const AppContext = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [dataForm, setDataForm] = useState(null);
    const [stepCurrent, setstepCurrent] = useState(0);

    return (
        <UserContext.Provider
            value={{ dataForm, setDataForm, activeStep, setActiveStep, stepCurrent, setstepCurrent }}
        >
            <App />
        </UserContext.Provider>
    )
}

export default AppContext