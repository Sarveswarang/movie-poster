import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Addmovie({movieflow,setmovieflow}){
    const [name, setname]=useState("")
const [poster, setposter]=useState("")
const [rating, setrating]=useState("")
const [summary, setsummary]=useState("")
const [Trailer, settrailer]=useState("")

    return(
      <div className='add-movie-form'>
<TextField onChange={(a) => setname(a.target.value)} label="name" variant="outlined" />
<TextField onChange={(a) => setposter(a.target.value)} label="poster" variant="outlined" />
<TextField onChange={(a) => setrating(a.target.value)} label="rating" variant="outlined" />
<TextField onChange={(a) => setsummary(a.target.value)} label="summary" variant="outlined" />
<TextField onChange={(a) => settrailer(a.target.value)} label="trailer" variant="outlined" />

  
  {/* <button ></button> */}
  <Button onClick={()=>{
    const newmovie={name:name,
    poster:poster,
    rating:rating,
  summary:summary,
  Trailer:Trailer,
} ;
setmovieflow([...movieflow,newmovie]);
  }} variant="contained">add movie</Button>
 

</div>
    )
  }
  