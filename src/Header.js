import React from 'react'
import { IconButton, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import SettingsIcon from '@mui/icons-material/Settings'
import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { userSelector } from './features/mail/userSlice'
import { auth, signOut } from './firebase'
import { loggedOut } from './features/mail/userSlice'

import './Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(userSelector)

  const signedOut = () => {
    signOut(auth).then(() => {
        dispatch(loggedOut())
    }).catch(err => {
        return err
    })
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail log' />
        </div>
        <div className='header__middle'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input type={'text'} placeholder='Search in emails' />
            <IconButton>
                <TuneIcon />
            </IconButton>
        </div>
        <div className='header__right'>
            <IconButton size={'small'}>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton size={'small'}>
                <SettingsIcon />
            </IconButton>
            <IconButton size={'small'}>
                <AppsIcon />
            </IconButton>
            <IconButton size={'small'} onClick={signedOut}>
                <Avatar src={user?.photo}/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header