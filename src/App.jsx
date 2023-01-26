import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
// import{double} from './welcome'

// console.log(double(4))
function App() {
  return (
    <div>
      
          <Movielist/>
      {/* <Color/> */}
    </div>


  );
  function Color() {
    const [color, setcolor] = useState('red');
    const abc = {

      backgroundColor: color,
    }
    const [colorlist,setcolorlist]=useState(["green", "yellow", "orange"]);
    return (
      <div>
        <input style={abc} type="text" onChange={(a) => (setcolor(a.target.value))} 
        value={color}/>
        <button onClick={()=>setcolorlist([...colorlist,color])}>Add Color</button>
        {colorlist.map((nm)=><Colorbox list={nm} />)}
        
      </div>
    );
  }
  function Colorbox({list}){
    const Colorboxstyle={
      height:"20px",
      width:"auto",
      marginTop:"10px",
      background:list,

    };
    return(
      <div style={Colorboxstyle}></div>
    );

  }
  function Movielist() {

    const [movieflow,setmovieflow] =useState( [
      {
        "name": "Vikram",
        "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
        "rating": 8.4,
        "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
      },
      {
        "name": "RRR",
        "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating": 8.8,
        "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
      },
      {
        "name": "Iron man 2",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating": 7,
        "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
      },
      {
        "name": "No Country for Old Men",
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating": 8.1,
        "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
      },
      {
        "name": "Jai Bhim",
        "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating": 8.8
      },
      {
        "name": "The Avengers",
        "rating": 8,
        "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
      },
      {
        "name": "Interstellar",
        "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating": 8.6,
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
      },
      {
        "name": "Baahubali",
        "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating": 8,
        "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
      },
      {
        "name": "Ratatouille",
        "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating": 8,
        "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
      },
      {
        "name": "PS2",
        "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
        "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
        "rating": 8
      },
      {
        "name": "Thor: Ragnarok",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
        "rating": 8.8
      }
    ])
const [name, setname]=useState("")
const [poster, setposter]=useState("")
const [rating, setrating]=useState("")
const [summary, setsummary]=useState("")

    return (
      <div>
<div className='add-movie-form'>
  <input onChange={(a) => setname(a.target.value)} type="text" placeholder='name'/>
  <input onChange={(a) => setposter(a.target.value)} type="text" placeholder='poster'/>
  <input onChange={(a) => setrating(a.target.value)}type="text" placeholder='rating'/>
  <input onChange={(a) => setsummary(a.target.value)}type="text" placeholder='summary'/>
  {/* <button ></button> */}
  <Button onClick={()=>{
    const newmovie={name:name,
    poster:poster,
    rating:rating,
  summary:summary,
} ;
setmovieflow([...movieflow,newmovie]);
  }} variant="contained">add movie</Button>
 

</div>
      
      <div className='movie-css'>
        {movieflow.map((nm) => (<Movie movie={nm} />))}
      </div>
      </div>
    );
  }
  function Movie({ movie }) {
    const [show, setshow] = useState(false)
    const disstyle = {
      display: show ? "none" : "block",
    }
    const style = {
      color: movie.rating > 8 ? "green" : "crimson",
    }
    return (
      <div className='movies'>
        <img className='img' src={movie.poster}></img>
        <div className='ratings'>
          <h1>{movie.name}</h1>
          <h1 style={style}>{movie.rating}⭐</h1>
        </div>
        <button onClick={() => setshow(!show)}>toogle</button>
        <p style={disstyle}>{movie.summary}</p>
        <Like />

      </div>
    );
  }

  function Like() {
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    return (
      <div>
        <button onClick={() => (setlike(like + 1))}>👍{like}</button>
        <button onClick={() => (setdislike(dislike + 1))}>👎{dislike}</button>

      </div>
    );

  }
  
}
export default App
