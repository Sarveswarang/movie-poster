import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import{Color} from"./color game";
import { Routes, Route, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { dark } from '@mui/material/styles/createPalette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Addmovie}from"./Add movie";
// import { useNavigate } from 'react-router-dom';
// import{double} from './welcome'

// console.log(double(4))
const trailer=[
  {
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
  },
  {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    "id": "102",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    "id": "104",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    "id": "105",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    "id": "106",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    "id": "107",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
  },
  {
    "name": "PS2",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
    "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    "rating": 8,
    "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
    "id": "108"
  },
  {
    "name": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    "rating": 8.8,
    "trailer": "https://youtu.be/NgsQ8mVkN8w",
    "id": "109"
  }
]
 

function App() {
  const [movieflow,setmovieflow] =useState( trailer);
  const navigate=useNavigate();
  const [mode,setmode] =useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyle={
borderRadius:"0px",
minHeight:"100vh",
  }
  
  return ( 
   
    <ThemeProvider theme={darkTheme}>
       <Paper sx={bgstyle} elevation={4} >
    <div>
      
          {/* <Movielist/> */}
      {/* <Color/> */}
      <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>navigate("/")}color="inherit">Home</Button>
        <Button onClick={()=>navigate("/Movielist")} color="inherit">movielist</Button>
        <Button onClick={()=>navigate("/color game")} color="inherit">color game</Button>
        <Button onClick={()=>navigate("/Add movie")} color="inherit">Add movie</Button>

<div className='modecorner'>
        <Button onClick={()=>setmode(mode==="light"?"dark":"light")} color="inherit" startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>{mode==="light"?"dark":"light"} mode</Button>
        </div>

        </Toolbar>
      </AppBar>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movielist" element={<Movielist movieflow={movieflow} setmovieflow={setmovieflow}/>} />
        <Route path="/flimlist" element={ <Navigate replace to ="/Movielist"/>} />
        <Route path="/Movielist/:id" element={<Mdetails movieflow={movieflow}/>} />
        <Route path="/color game" element={<Color/>} />
        <Route path="/Add movie" element={<Addmovie movieflow={movieflow} setmovieflow={setmovieflow}/>} />

        <Route path="*" element={<Not_found />} />

      </Routes>
    </div>
    </ Paper>

    </ThemeProvider>
  );
  function Mdetails({movieflow}){
        const {id} = useParams();
        const movie=movieflow[id];
        const style = {
          color: movie.rating > 8 ? "green" : "crimson",
        };
        const navigate=useNavigate();
    return(
      <div>
         <iframe width="100%" 
        height="600"
         src={movie.trailer}
          title="Vaathi - Official Trailer | Dhanush | Samyuktha | GV Prakash Kumar | Venky Atluri" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
            
          </iframe>
       <div className='detail_movies'>
       
      
        <div className='ratings'>
        <h2>{movie.name}  </h2>

         <h1 style={style}>{movie.rating}⭐</h1>
      </div>
                
      <p className='pstyle'>{movie.summary}</p>
      <Button  onClick={()=>navigate(-1) } variant="contained"startIcon={<ArrowBackIcon />}>
  Back</Button>
      
     </div>
     </div>
    );

   }
  function Not_found(){
    return(
      <div className='error'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGA2vvEnUf1LWTqc-iph6u-jh1TkzKuhno8SpZQThdTc20sdG3uLg8rB1ROBDG7b6fVc&usqp=CAU" alt="404 not found"/>
        {/* <h1>404 ERROR NOT FOUND</h1> */}
      </div>
    );
  }
  function Home(){
    return(
      <div>
        <h1>Welcome to movie app😎👍</h1>
      </div>
    );
  }
 
  function Movielist({movieflow,setmovieflow}) {

    fetch("https://63db579fb8e69785e47fc741.mockapi.io/movie")
    .then((data)=>data.json())
    .then((mvs)=>console.log(mvs))

    return ( 
      <div>
      
      <div className='movie-css'>
        {movieflow.map((nm, index) => (<Movie key={index} movie={nm} id={index}/>))}
      </div>
      </div>
    );
  }
  function Movie({ movie,id }) {
    const [show, setshow] = useState(false)
    const disstyle = {
      display: show ? "none" : "block",
    }
    const style = {
      color: movie.rating > 8 ? "green" : "crimson",
    }
    const navigate=useNavigate();
    return (
      <Card className='movies'>
        <img className='img' src={movie.poster}></img>
        <CardContent>
          <div className='ratings'>
          <h2>{movie.name}  
          <IconButton color="primary" onClick={() => setshow(!show)} aria-label="toogle">
  {show?<ExpandLessIcon />: <ExpandMoreIcon />}
</IconButton></h2>
<IconButton color="primary" onClick={() => navigate(`/Movielist/${id}`)} aria-label="InfoIcon">
 <InfoIcon />
</IconButton>
          <h1 style={style}>{movie.rating}⭐</h1>
        </div>
             
        
        <p style={disstyle}>{movie.summary}</p>
        </CardContent>
        <CardActions>
        <Like />
        </CardActions>
        
      
      </Card>
    );
  }

  function Like() {
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    return (
      <div>
        <IconButton color="primary" onClick={() => (setlike(like + 1))} aria-label="like movie">
        <Badge badgeContent={like} color="primary">
👍
    </Badge>
</IconButton>

<IconButton color="error" onClick={() => (setdislike(dislike + 1))} aria-label="dslike movi">
<Badge badgeContent={dislike} color="error">
👎
    </Badge>
</IconButton>
        

      </div>
    );

  }
 
}
export default App
