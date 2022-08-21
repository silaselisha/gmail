import React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import RefreshIcon from '@mui/icons-material/Refresh'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import InboxIcon from '@mui/icons-material/Inbox'
import SellIcon from '@mui/icons-material/Sell'
import InfoIcon from '@mui/icons-material/Info'

import Section from './Section'
import './MailList.css'

const MailList = () => {
  return (
    <div className='mailList'>
        <div className='mailList__setting'>
          <div className='mailList__settingLeft'>
              <IconButton>
                <CheckBoxOutlineBlankIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <ExpandMoreIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <RefreshIcon fontSize='small'/>
              </IconButton>
              <IconButton>
                <MoreVertIcon fontSize='small'/>
              </IconButton>
          </div>
          <div className='mailList__settingRight'>
            <div className='mailList__left'>
              <span>{1}-{50}</span> of <span>581</span>
            </div>
            <div className='mailList__middle'>
              <div>
                <ArrowBackIosIcon fontSize='inherit' />
              </div>
              <div>
                <ArrowForwardIosIcon fontSize='inherit'/>
              </div>
            </div>
            <div className='mailList__right'>
              <IconButton disableRipple>
                <MenuIcon fontSize='inherit'/>
              </IconButton>
              <IconButton disableRipple>
                <ArrowDropDownIcon fontSize='inherit'/>
              </IconButton>
            </div>
          </div>
        </div>
        <div className='mailList__sections'>
            <Section Icon={InboxIcon} title='Primary' active={true} color={'blue'} />
            <Section Icon={SellIcon} title='Promotions' color={'green'} />
            <Section Icon={InfoIcon} title='Updates' color={'orange'} />
        </div>
    </div>
  )
}

export default MailList