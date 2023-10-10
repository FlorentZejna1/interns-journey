import React, {useState} from "react";


function Button (){
    const buttonText = "Click Me"
    const [click, setClick] = useState(buttonText)
    
    function handleClick (){
        setClick('Clicked')

        setTimeout(() => {
            setClick(buttonText);
        },2000);
    }
    
    return <button className="button"onClick={handleClick}>{click}</button>
}

export default Button