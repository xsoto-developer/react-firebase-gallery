import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import AuthLayout from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);
  // const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault(); //Detiene el comportamiento predeterminado del evento submit, es decir, previene que el formulario recargue la página cuando se envía.
    console.log({ email, password })
    //! No es esta la accion a despachar 
    //dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));

  }

  const onGoogleSignIn = () => {
    console.log('Google Sign In')
    dispatch(startGoogleSingIn());
  }

  return (

    <AuthLayout title="Login!!!">
      <form onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="Ingrese su correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}

            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingrese su contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1, mb: 1 }}>
            <Grid
              item
              xs={12}

            >
              <Alert severity='error'> {errorMessage} </Alert>
            </Grid>
          </Grid>


          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction={'row'} justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>
    //   </Grid>
    // </Grid>

  )
}
