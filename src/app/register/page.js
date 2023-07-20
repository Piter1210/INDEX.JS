'use client'
import { useState } from "react";
import "./login.css"

export default function Register() {

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div className="container">

            <input 
                onChange={handleChange} 
                name="email" 
                value={state.email} 
                type="text" 
                placeholder="email" 
            />

            <input 
                name="password" 
                onChange={handleChange} 
                type="password" 
                placeholder="123456" 
            />

            <button>register</button>

        </div>
    )

}

