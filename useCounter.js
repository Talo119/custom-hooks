import { useState } from "react"

export const useCounter = ( initialValue  = 10) => {

    const [counter, setcounter] = useState(initialValue)
    
    const increment = (value = 1) =>{
        setcounter( ( current ) => current + value )
    }

    const reset = () =>{
        setcounter( initialValue )
    }

    const decrease = (value = 1) =>{
        if (counter === 0) return
        setcounter( ( current ) => current - value)
    }

    return {
        counter,
        increment,
        reset,
        decrease
    }
}

