import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
import { Margin } from '@mui/icons-material';
import { BasicForm } from './Basicform';
  import { useFormik } from 'formik';
  import * as yup from "yup";
import { API } from './global';

// import { useNavigate } from 'react-router-dom';
// import{double} from './welcome'

// console.log(double(4))

 

function App() {
  // const [movieflow,setmovieflow] =useState( []);
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
  };
//   useEffect(()=>{
//     fetch("${API}/movie")
//     .then((data)=>data.json())
//     .then((mvs)=>setmovieflow(mvs))
// },[]);
  
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
        <Button onClick={()=>navigate("/BasicForm")} color="inherit">basic form</Button>

<div className='modecorner'>
        <Button onClick={()=>setmode(mode==="light"?"dark":"light")} color="inherit" startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>{mode==="light"?"dark":"light"} mode</Button>
        </div>

        </Toolbar>
      </AppBar>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movielist" element={<Movielist />} />
        <Route path="/flimlist" element={ <Navigate replace to ="/Movielist"/>} />
        <Route path="/Movielist/:id" element={<Mdetails />} />
        <Route path="/movie/edit/:id" element={<Editmovie />} />
        {/* /movie/edit/${nm.id} */}
        <Route path="/color game" element={<Color/>} />
        <Route path="/BasicForm" element={<BasicForm/>} />

        <Route path="/Add movie" element={<Addmovie />} />

        <Route path="*" element={<Not_found />} />

      </Routes>
    </div>
    </ Paper>

    </ThemeProvider>
  );

  function Mdetails(){
    const [movie,setmovie] =useState({});
    const {id} = useParams();

    useEffect(()=>{
      fetch(`${API}/movie/${id}`,{method:"GET"})
      .then((data)=>data.json())
      .then((mvs)=>setmovie(mvs))
  },[id]);
        // const movie=movieflow[id];
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

         <h1 style={style}>{movie.rating}???</h1>
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
        <h1>Welcome to movie app????????</h1>
      </div>
    );
  }
 
  function Movielist() {
    const [movieflow,setmovieflow] =useState( []);
const getmovies =()=>{
  fetch(`${API}/movie`,{method: "GET"})
  .then((data)=>data.json())
  .then((mvs)=>setmovieflow(mvs))
}
    useEffect(()=>getmovies(),[]);
  const deletemovie=async(id)=>{
   await fetch(`${API}/movie/${id}`,{method: "DELETE"})
    getmovies();

  };
  const navigate=useNavigate();
    return ( 
      <div>
      
      <div className='movie-css'>
        {movieflow.map((nm) => (<Movie key={nm.id} movie={nm} id={nm.id} 
        deletebutton={<IconButton color="error"sx={{marginLeft:"auto"}} 
        onClick={()=>deletemovie(nm.id)}>{<DeleteIcon />}</IconButton >}
        editbutton={<IconButton color="secondary"sx={{marginLeft:"auto"}} 
        onClick={()=>navigate(`/movie/edit/${nm.id}`)}>{<EditIcon />}</IconButton >}/>))};
      </div>
      </div>
    );
  }
  // <Button variant="contained">Contained</Button>
  // <Button variant="outlined" startIcon={<DeleteIcon />}>
//   Delete
// </Button>
  function Movie({ movie,id ,deletebutton,editbutton}) {
    const [show, setshow] = useState(true)
    const disstyle = {
      display: show ? "none" : "block",
    };
    const style = {
      color: movie.rating > 8 ? "green" : "crimson",
    };
    const navigate=useNavigate();
    return (
      <Card className='movies'>
        <img className='img' alt="img" src={movie.poster}></img>
        <CardContent>
          <div className='ratings'>
          <h2>{movie.name}  
          <IconButton color="primary" onClick={() => setshow(!show)} aria-label="toogle">
  {show?<ExpandLessIcon />: <ExpandMoreIcon />}
</IconButton></h2>
<IconButton color="primary" onClick={() => navigate(`/Movielist/${id}`)} aria-label="InfoIcon">
 <InfoIcon />
</IconButton>
          <h1 style={style}>{movie.rating}???</h1>
        </div>
             
        
        <p style={disstyle}>{movie.summary}</p>
        </CardContent>
        <CardActions>
        <Like /> 
        {deletebutton}{editbutton}
        </CardActions>
        
      
      </Card>
    );
  };

  function Like() {
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    return (
      <div>
        <IconButton color="primary" onClick={() => (setlike(like + 1))} aria-label="like movie">
        <Badge badgeContent={like} color="primary">
????
    </Badge>
</IconButton>

<IconButton color="error" onClick={() => (setdislike(dislike + 1))} aria-label="dslike movi">
<Badge badgeContent={dislike} color="error">
????
    </Badge>
</IconButton>
        

      </div>
    );

  }
  
  
  
  
   function Editmovie(){
    const [movie,setmovie] =useState(null);
    const {id} = useParams();

    useEffect(()=>{
      fetch(`${API}/movie/${id}`,{method:"GET"})
      .then((data)=>data.json())
      .then((mvs)=>setmovie(mvs))
  },[id]);
  console.log(movie)
  return movie?<Editmovieform movie={movie}/>:<h2>loading</h2>;
}
function Editmovieform({movie}){
    const formValidationSchema=yup.object({
      name:yup.string().required(),
      poster:yup.string().required().min(4).url(),
      rating:yup.number().required().min(0,"need greater").max(10,"too big"),
      summary:yup.string().required().min(20),
    trailer:yup.string().required().min(4).url(),
    });
    const {handleChange,handleBlur,handleSubmit,values,errors,touched}=
    useFormik({initialValues:{name:movie.name,
      poster:movie.poster,
      rating:movie.rating,
      summary:movie.summary,
      trailer:movie.trailer,},
    validationSchema:formValidationSchema,
  onSubmit:(updatedmovie)=>{console.log(updatedmovie);updatemovie(updatedmovie);}});
  
    const navigate=useNavigate();
    const updatemovie=async(updatedmovie)=>{
      
    await fetch(`${API}/movie/${movie.id}`,
    {method: "PUT",body: JSON.stringify(updatedmovie),
    headers:{"Content-Type": "application/json",
  },});
    navigate("/Movielist");
  };
  
      return( 
        <form onSubmit={handleSubmit}className='add-movie-form'>
  <TextField 
  name='name'
  onChange={handleChange} 
  onBlur={handleBlur}
  value={values.name}
   label="name" 
   variant="outlined" 
   error={errors.name&& touched.name}
   helperText={errors.name&& touched.name?errors.name:null}/>
  
  <TextField
  name='poster'
  onChange={handleChange} 
  onBlur={handleBlur}
  value={values.poster}  
  label="poster"
     variant="outlined" 
     error={errors.poster&& touched.poster}
     helperText={errors.poster&& touched.poster?errors.poster:null}/>
   <TextField 
  name='rating'
  onChange={handleChange} 
  onBlur={handleBlur}
  value={values.rating}
  label="rating"
   variant="outlined"
   error={errors.rating&& touched.rating}
   helperText={errors.rating&& touched.rating?errors.rating:null}/>
  <TextField
  name='summary'
  onChange={handleChange} 
  onBlur={handleBlur}
  value={values.summary} 
  label="summary"
    variant="outlined" 
    error={errors.summary&& touched.summary}
    helperText={errors.summary&& touched.summary?errors.summary:null}/>
  <TextField 
  name='trailer'
  onChange={handleChange} 
  onBlur={handleBlur}
  value={values.trailer}
  label="trailer"
   variant="outlined" 
   error={errors.trailer&& touched.trailer}
   helperText={errors.trailer&& touched.trailer?errors.trailer:null}/>
    
    <Button color='success'  type='submit'
    variant="contained">save</Button>
  
  </form>
      )
    }
  
}
export default App
