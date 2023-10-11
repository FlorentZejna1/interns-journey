import React, {useState, useEffect} from "react";

function Time(){
    const [time, setTime] = useState(new Date())
    
    useEffect (() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, [])
    return( 
    <div>
        <h1>Current Date: {time.toDateString()}</h1>
        <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
    )
}

export default Time