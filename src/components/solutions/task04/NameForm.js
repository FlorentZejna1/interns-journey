import React, { useState } from "react";

function NameForm (){
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [fullname, setfullname] = useState()

   return(
        <div className="form-container">
            <form
                className="form"
                onSubmit={(e) => {
                e.preventDefault()
                setfullname(name + " "+ lastName)}}
            >
            <input 
                type="text"
                value={name}
                onChange={(e) => {setName(e.target.value)}}/>
            <input 
                type="text"
                value={lastName}
                onChange={(e) => {setlastName(e.target.value)}}/>
            <div>
                <button className="submit-button">Submit</button>
                <h1>{fullname}</h1>
             </div>
            </form>
        </div>
    )
}

export default NameForm