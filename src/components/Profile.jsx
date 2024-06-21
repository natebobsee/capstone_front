import { useState, useEffect } from "react";
import { getMe } from "./api";
export default function Profile (){
    const [user, setUser]= useState([]);
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    useEffect(()=>{
        async function getuser(token) {
            const loggeduser = await getMe(token);
            setUser(loggeduser)
            console.log(loggeduser)
        }
        getuser();
    },[token])
console.log(user);
 return (<>
 
 
 { 
//  user.map((book)=>{
//      return( <h3 key = {book.id}>{book.title} id #{book.author_id}</h3>
//      )
//  })

user.map((book)=>{if(book.author_id==2){return <h3 key = {book.id}>{book.title}</h3>}})
 }
 
 
 </>)

}