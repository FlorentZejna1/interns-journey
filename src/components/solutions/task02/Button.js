import React, {useState} from "react";


function Button (){
    const [click, setClick] = useState(false)
    return (
        
        click? <button >Clicked</button>
        :<button onClick={
            (e) => {setClick(true)
        }}>Click ME!</button>
        
        
    )
}

export default Button