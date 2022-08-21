import React from 'react'
import { IconButton, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import SettingsIcon from '@mui/icons-material/Settings'
import AppsIcon from '@mui/icons-material/Apps'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'


import './Header.css'

const Header = () => {
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
                <QuestionMarkIcon />
            </IconButton>
            <IconButton size={'small'}>
                <SettingsIcon />
            </IconButton>
            <IconButton size={'small'}>
                <AppsIcon />
            </IconButton>
            <IconButton size={'small'}>
                <Avatar/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header