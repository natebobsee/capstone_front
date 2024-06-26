   //import { useParams } from "react-router-dom";
   import { useState, useEffect } from "react"; 
   export default function ReservedBooks({token}) {
    const BASEURL= 'https://capstone-front-14km.onrender.com/'
    const [reservedBooks, setReservedBooks] = useState([]);
    const token1=(JSON.parse(localStorage.getItem('token')));
    console.log(token);

    useEffect(()=>{
        async function start(){
        try {
            const response = await fetch(`${BASEURL}/api/reservations`, {
        
            headers: {
                  'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token1}`, 
                },
              })
              const result = await response.json();
              setReservedBooks(result);
        } catch (error) {
            console.log(error);
        }
    }
    start();
    console.log(reservedBooks);
    }, []); 
  
 
    return (
    <>

     {reservedBooks.map((result)=>{
        return <>{result.title}</>
        })}
         
    </>
)

}