import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArchiveIcon from '@mui/icons-material/Archive'
import InfoIcon from '@mui/icons-material/Info'
import DeleteIcon from '@mui/icons-material/Delete'
import MarkunreadIcon from '@mui/icons-material/Markunread'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AddTaskIcon from '@mui/icons-material/AddTask'
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove'
import LabelIcon from '@mui/icons-material/Label'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import PrintIcon from '@mui/icons-material/Print'
import LaunchIcon from '@mui/icons-material/Launch'

import { useSelector } from 'react-redux/es/exports'
import { mailSelector } from './features/mail/mailSlice'

import './Mail.css'

const Mail = () => {
  const history = useHistory()
  const { selectedMail } = useSelector(mailSelector)
  // const { selectedMail: { title, subject, description, time} } = useSelector(mailSelector)
  

  return (
    <div className='mail'>
      <div className='mail__header'>
        <div className='mail__headerLeft'>
          <IconButton size='small' onClick={() => history.push('/')}>
            <ArrowBackIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <ArchiveIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <InfoIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <DeleteIcon fontSize='small'/>
          </IconButton>
          <div className='mail__headerLeft--break'>
          {' | '}
          </div>
          <IconButton size='small'>
            <MarkunreadIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <AccessTimeIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <AddTaskIcon fontSize='small'/>
          </IconButton>
          <div className='mail__headerLeft--break'>
            {' | '}
          </div>
          <IconButton size='small'>
            <DriveFileMoveIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <LabelIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small'>
            <MoreVertIcon fontSize='small'/>
          </IconButton>
        </div>
        <div className='mail__headerRight'>
          <div className='mail__headerRightInfo'>
            <span>{2}</span> of <span>6841</span>
          </div>

          <div className='mail__headerRightIcons'>
            <IconButton size='small'>
              <ArrowBackIosIcon fontSize='inherit' />
            </IconButton>
            <IconButton size='small'>
              <ArrowForwardIosIcon fontSize='inherit' />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <div className='mail__bodyHeaderRight'>
            <h2>{selectedMail?.subject}</h2>
            <Button size='small' endIcon={<CloseIcon />} className='mail__bodyHeaderIcon'>Inbox</Button>
          </div>
          <div className='mail__bodyHeaderLeft'>
            <IconButton>
              <PrintIcon fontSize='small'/>
            </IconButton>
            <IconButton>
              <LaunchIcon fontSize='small' color='black' />
            </IconButton>
          </div>
        </div>
        <div className='mail__bodyMail'>
          <p>{selectedMail?.description}</p>
          
          <span>{selectedMail?.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Mail