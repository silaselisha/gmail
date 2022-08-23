import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { auth, provider, signInWithPopup, GoogleAuthProvider } from './firebase'
import { loggedIn } from './features/mail/userSlice'
import './Login.css'

const Login = () => {
  const dispatch = useDispatch()

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user

        dispatch(loggedIn({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }).catch((error) => {
       GoogleAuthProvider.credentialFromError(error)
    })
  }

  return (
    <div  className='login'>
        <div className='login__container'>
            <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail log' />
            <Button onClick={signIn} variant='contained' color='primary'>Login</Button>
        </div>
    </div>
  )
}

export default Login