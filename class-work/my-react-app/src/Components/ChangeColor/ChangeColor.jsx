import React, { useState } from "react";

function ChangeColor(){
let [color ,setColor]=useState("")
    
    function handleColor(){
        
        setColor("red")
    }
    return(
        <>

        <button style={{background: `${color}`}} onClick={handleColor}>Change color</button>
        </>
    )
}

export default ChangeColor;