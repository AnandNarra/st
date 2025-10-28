import React from "react";
import JobCard from "./JobCard";

function OpenRole(props){
    return(
        <>
        <div className="w-[350px] h-[400px] bg-white">

            <div className="flex justify-between p-3">

                <h2 className="text-3xl font-extrabold">Active Discussion</h2>
                <p>{"->"}</p>

            </div>

            <div>
                
                {
                    props.name.map((item) =>(
                        <JobCard shiva={item}/>
                    ))
                }

            </div>

        </div>
        
        </>
    )
}

export default OpenRole;