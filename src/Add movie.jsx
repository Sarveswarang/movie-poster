import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from './global';
const formValidationSchema=yup.object({
  name:yup.string().required(),
  poster:yup.string().required().min(4).url(),
  rating:yup.number().required().min(0,"need greater").max(10,"too big"),
  summary:yup.string().required().min(20),
trailer:yup.string().required().min(4).url(),
});


export function Addmovie(){
  const {handleChange,handleBlur,handleSubmit,values,errors,touched}=
  useFormik({initialValues:{name:"",
    poster:"",
    rating:"",
    summary:"",
    trailer:"",},
  validationSchema:formValidationSchema,
onSubmit:(newMovie)=>{console.log(newMovie);newMovie(addmovie)}});

  const navigate=useNavigate();
  const addmovie=async(newMovie)=>{
    
  await fetch(`${API}/movie`,{method: "POST",body: JSON.stringify(newMovie),
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
value={values.email}
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
  
  <Button  type='submit'
  variant="contained">add movie</Button>

</form>
    )
  }
  