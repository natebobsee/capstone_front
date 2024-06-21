/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react"
import { registeruser } from "./api";
export default function Register() {
    const [formData, setFormData]=useState(
        {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }

    )

    const {firstname, lastname, email, password}= formData;
    
    function handleOnChange(event){
        setFormData((prevState)=>({
        ...prevState,
        [event.target.name]: event.target.value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result= await registeruser(formData);
    }

    console.log(formData);
    return( 
    <>
    <div>Register
    </div>
    <form onSubmit={handleSubmit}>
    <div>firstname</div>
    <input id='firstname' name='firstname' value={firstname} onChange={handleOnChange} type='text' />
    <div>lastname</div>
    <input id='lastname' name='lastname' value = {lastname} onChange={handleOnChange} type='text'/>
    <div>email</div>
    <input id='email' name='email' value={email} onChange={handleOnChange} type='text' />
    <div>password</div>
    <input id='password' name='password' value = {password} onChange={handleOnChange} type='text'/>
    <div>
    <button type='submit'>submit
    </button>
    </div>
    </form>
    
    </>)
}