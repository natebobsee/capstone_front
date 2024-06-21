/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react"
import { loginuser } from "./api";
export default function Login() {
    const [formData, setFormData]=useState(
        {
            email: '',
            password: '',
        }

    )

    const {email, password}= formData;
    
    function handleOnChange(event){
        setFormData((prevState)=>({
        ...prevState,
        [event.target.name]: event.target.value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result= await loginuser(formData);
    }

    console.log(formData);
    return( <>login
    <form onSubmit={handleSubmit}>
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