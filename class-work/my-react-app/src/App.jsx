import React from 'react'
import './App.css'
import ChangeColor from './Components/ChangeColor/ChangeColor'
import OpenRole from './Components/peerlist/scroll/OpenRole'
import FormApp from './Components/Form/FormApp'
import Controlled from './Components/Form/Controlled'

function App() {

  const dummyOpenRoles = ["frontend", "backend engineer", "Ui/Ux designer", "product manger", "ceo", "cto ", "coo"]

  return (

    <>
      <div className='bg-yellow-200 h-screen w-screen flex  items-center justify-center'>
        
        <FormApp/>
      </div>

    </>
  )
}

export default App
