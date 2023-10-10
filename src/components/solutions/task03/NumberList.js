import React from "react";

function NumberList (){
    const number = [1,2,3,4,5,6,7,8,9,10]
    const listnumber = number.map(number => <li>{number}</li>);
    return <ui>{listnumber}</ui>
}

export default NumberList