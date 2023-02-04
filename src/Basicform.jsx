import { useFormik } from 'formik';
import * as yup from "yup";

const formValidationSchema=yup.object({
  email:yup.string().required().min(12,"need bigger email address"),
  password:yup.string().required().min(8,"need bigger password").max(12,"too long"),

});
export function BasicForm(){
 
  const formik=useFormik({initialValues:{email:"",password:""},
  validationSchema:formValidationSchema,
onSubmit:(values)=>console.log(values),})

    return(
      <form onSubmit={formik.handleSubmit}>
        
          <input name='email' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type="email" placeholder="email"></input> 
          {formik.errors.email&& formik.touched.email?formik.errors.email:null}
          <input  name='password'
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}

          value={formik.values.password} 
          type="password" placeholder="password"></input>
         {formik.errors.password && formik.touched.password ?formik.errors.password :null}

<button type='submit'>submit</button>
       
      </form>
    )
  }