import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export function Addmovie(){
  const [name, setname]=useState("");
  const [poster, setposter]=useState("");
  const [rating, setrating]=useState("");
  const [summary, setsummary]=useState("");
  const [Trailer, settrailer]=useState("");
  const navigate=useNavigate();
  const addmovie=async()=>{
    const newMovie={name:name,
    poster:poster,
    rating:rating,
  summary:summary,
  Trailer:Trailer,
} ;
// setmovieflow([...movieflow,newmovie]);
  
  await fetch("https://63db579fb8e69785e47fc741.mockapi.io/movie",{method: "POST",body: JSON.stringify(newMovie),
  headers:{"Content-Type": "application/json",},});
  navigate("/Movielist");
};



    return( 
      <div className='add-movie-form'>
<TextField onChange={(a) => setname(a.target.value)} label="name" variant="outlined" />
<TextField onChange={(a) => setposter(a.target.value)} label="poster" variant="outlined" />
<TextField onChange={(a) => setrating(a.target.value)} label="rating" variant="outlined" />
<TextField onChange={(a) => setsummary(a.target.value)} label="summary" variant="outlined" />
<TextField onChange={(a) => settrailer(a.target.value)} label="trailer" variant="outlined" />

  
  {/* <button ></button> */}
  <Button onClick={addmovie} 
  variant="contained">add movie</Button>
 
 
</div>
    )
  }
  