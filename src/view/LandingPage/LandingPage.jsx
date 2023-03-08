import React, { useEffect, useState } from "react"
import { getHello } from "../../features/apiPetitions";

export default function LandingPage(){
    const [hello, setHello] = useState(null);
    useEffect(()=>{
        getHello(setHello)
    },[])
    return(
        <div>
            dani estuvo aqui
            <br />
            {hello}
        </div>
    )
}