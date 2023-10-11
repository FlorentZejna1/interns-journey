import React, { useState } from "react";

function NumberList (){
    let num = [];
    for(let i= 0; i < 10; i++){
        num.push(<li>{i + 1}</li>)
    } 
    return (
        <ul>{num}</ul>
        )
}

export default NumberList