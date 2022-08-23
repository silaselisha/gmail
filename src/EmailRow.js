import React from 'react'
import { useHistory } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'

import { useDispatch } from 'react-redux'
import { openMail } from './features/mail/mailSlice'

import './EmailRow.css'

const EmailRow = ({ title, subject, description, time }) => {
  const history =  useHistory()
  const dispatch = useDispatch()

  const openEmail = () => {

    dispatch(openMail({
        title,
        subject,
        description,
        time
    }))

    history.push('/mail')
  }


  return (
    <div className='emailRow' onClick={openEmail}>
        <div className='emailRow__options'>
            <IconButton>
                <CheckBoxOutlineBlankIcon />
            </IconButton>
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>
        <h3 className='emailRow__title'>
           {title}
        </h3>
        <div className='emailRow__message'>
            <h4>{subject} {' '}
            <span className='emailRow__description'>
                - {description}</span></h4>
        </div>
        <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow