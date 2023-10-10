import React, { useState } from "react";

function NumberList (){
    const [num, setNum] = useState([1,2,3,4,5,6,7,8,9,10])
    const list = num.map((num) => 
        <li>{num}</li>
    )
    return (
        <ul>{list}</ul>
        )
}

export default NumberList