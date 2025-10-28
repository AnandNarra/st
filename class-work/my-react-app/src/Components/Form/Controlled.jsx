import React, { useState } from 'react'

const Controlled = () => {
    const [name , setName]=useState("anand")

    const[email , setEmail] = useState("anand@gamil.com")
    const[age , setAge] = useState("")

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        const data ={
            name :name,
            email:email,
            age : age,
        }
        console.log(data)
    }
  return (

    
    <>
    <form className='flex flex-col items-center justify-center gap-2 w-[350px] h-[400px]  bg-green-400 p-3 rounded-2xl border-2' onSubmit={(event) =>{handleOnSubmit(event)}}>

        <input type='text' className="bg-white p-3 rounded-2xl w-[100%]" placeholder='enter your name' onChange={(event) => setName(event.target.value)} value={name}/>
        <input type='email' className="bg-white p-3 rounded-2xl w-[100%] " placeholder='enter your email' onChange={(event) => setEmail(event.target.value)} value={email}/>
        <input type='number'  className="bg-white p-3  rounded-2xl w-[100%]" placeholder='enter your age' onChange={(event) => setAge(event.target.value)}/>
        
        
        <button type='submit' className='bg-red-600 text-white hover:bg-red-500  rounded-2xl w-[100%] h-[50px]' >Regisister</button>
    </form>
    </>
  )
}

export default Controlled