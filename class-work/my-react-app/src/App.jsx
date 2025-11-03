import React, { useState } from 'react'
import './App.css'
import UseEffectApi from './Components/useEffect-Api/useEffectApi'
import PrimaryButton from './Components/Ui/PrimaryButton'




function App() {

  const dummyOpenRoles = ["frontend", "backend engineer", "Ui/Ux designer", "product manger", "ceo", "cto ", "coo"]

  const [show , setShow] = useState(false)

  function handleButton(){
      setShow(!show)
    }

  return (

    <>
      
      <PrimaryButton onAnand={handleButton}>
        {show ? "Hide" : "Show"}
      </PrimaryButton>

      {
        show && ( <p>I am the ghost</p>)
      }


    </>
  )
}

export default App
