import { Button, TextField, Typography } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import { Formik, Field, ErrorMessage ,Form} from "formik";
import { useUserContext } from "../context/UserProvider";


const Signup=() => {
const {isloading , handlelogin}:any=useUserContext()
console.log({isloading})

  const initialValues ={ email: '', password: '' }
  const validate= (values :any) => {
    const errors = {} as any;
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
      if (!values.password) {
    errors.password = 'Required';
    }
    return errors;
  }
  const submit = (values:any ,setSubmitting:any) => {
   handlelogin(values)
   setSubmitting(false)
  }
    return(
        <Grid 
        container
        direction="column" 
        justifyContent="center" 
        alignItems="center"
        height="100vh">
    
     <Formik
       initialValues={initialValues}
       validate={validate}
       onSubmit={(values, { setSubmitting }) => 
      submit({...values},  setSubmitting )
      }
     >
       {({ isSubmitting }) => (
         <Form>
            <Typography variant="h4">Admin Signup</Typography>
            <Grid item xs={12} md={12}>
            <Field as= {TextField} 
           type="email" 
           name="email"
            variant ="standard" 
            label="Email" 
            id="email" />
            {Error() && (<FormHelperText sx={{color:"red"}}>
            <ErrorMessage name="email" component="div" />
            </FormHelperText>)}
           </Grid>
           
            <Grid item xs={12} md={12}>
           <Field type="password" 
           name="password"
            as={TextField} 
            variant="standard"
            id="******"
            label="password"/>
              {Error() && (<FormHelperText sx={{color:"red"}}>
           <ErrorMessage name="password" component="div" />
           </FormHelperText>)}
                </Grid>
           <Grid item xs={12} md={12} sx={{m:5}}>
           <Button variant="contained"type="submit" disabled={isSubmitting}>
             Submit
           </Button>
           </Grid>
         </Form>
       )}
     </Formik>
   </Grid>
     
    )
}
export default Signup