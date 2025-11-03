import React, { useState } from "react";

function UnControlledFormApp(){

    const [name ,setName] =useState();

    const handleUserName = (event)=>{
        setName(event.target.value)
    }

    const handleSumbit = (event) =>{
        event.preventDefault();
        const data ={
            name :name
        }
        console.log(data)

    }
    return(
        <>
        <div>
            <form onSubmit={handleSumbit}>
                <input type="text" placeholder="Enter your name" required className="bg-white p-3" onChange={handleUserName}/>
                <button className="bg-white" type="submit">Regisister</button>
            </form>
        </div>
        </>
    )
}

export default UnControlledFormApp;