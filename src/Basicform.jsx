import { useFormik } from 'formik';
import * as yup from "yup";

const formValidationSchema=yup.object({
  email:yup.string().email().required().min(12,"need bigger email address"),
  password:yup.string().required().min(8,"need bigger password").max(12,"too long"),

});
export function BasicForm(){
 
  const {handleChange,handleBlur,handleSubmit,values,errors,touched}=useFormik({initialValues:{email:"",password:""},
  validationSchema:formValidationSchema,
onSubmit:(values)=>console.log(values),})

    return(
      <form onSubmit={handleSubmit}>
        
          <input name='email' 
          onChange={handleChange} 
          onBlur={handleBlur}
          value={values.email}
          type="email" placeholder="email"></input> 
          {errors.email&& touched.email?errors.email:null}
          <input  name='password'
          onChange={handleChange} 
          onBlur={handleBlur}

          value={values.password} 
          type="password" placeholder="password"></input>
         {errors.password && touched.password ?errors.password :null}

<button type='submit'>submit</button>
       
      </form>
    )
  }
//   import { useFormik } from 'formik';
// import * as yup from "yup";

// const formValidationSchema=yup.object({
//   email:yup.string().email().required().min(12,"need bigger email address"),
//   password:yup.string().required().min(8,"need bigger password").max(12,"too long"),

// });
// export function BasicForm(){
 
//   const formik=useFormik({initialValues:{email:"",password:""},
//   validationSchema:formValidationSchema,
// onSubmit:(values)=>console.log(values),})

//     return(
//       <form onSubmit={handleSubmit}>
        
//           <input name='email' 
//           onChange={handleChange} 
//           onBlur={handleBlur}
//           value={values.email}
//           type="email" placeholder="email"></input> 
//           {errors.email&& touched.email?errors.email:null}
//           <input  name='password'
//           onChange={handleChange} 
//           onBlur={handleBlur}

//           value={values.password} 
//           type="password" placeholder="password"></input>
//          {errors.password && touched.password ?errors.password :null}

// <button type='submit'>submit</button>
       
//       </form>
//     )
//   }