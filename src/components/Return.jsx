import { useState } from "react";
const BASEURL= 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com'
export default function Return({token}){
  // 
  const token1=(JSON.parse(localStorage.getItem('token')));
    const [bookDelete, setBookDelete] = useState();
    async function deleteb(){
    //   event.preventDefault();
      console.log(bookDelete);
await fetch(`${BASEURL}/api/reservations/${bookDelete}`, {
    method: "DELETE",
    
    headers: {
        'Content-Type': 'application/json',
          "Authorization": `Bearer ${token1}`,
      },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}
    return (
        <>
        <form onSubmit={()=>{deleteb}}>
         <div>
          <label>
           Return ID <input className='submit' value={bookDelete} onChange={(e) => setBookDelete(e.target.value)} />
          </label>
          </div>
        <button>ReturnBooks</button>
        </form>
        </>
            );
}
