import React from 'react'
import { serverTimestamp } from 'firebase/firestore'
import { useDispatch } from 'react-redux/es/exports'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { closeSendMessage } from './features/mail/mailSlice'
import { db, addDoc, collection } from './firebase'

import './SendMail.css'

const SendMail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = async (formData) => {
    const email = await addDoc(collection(db, 'emails'), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
    })

    dispatch(closeSendMessage())
    console.log(email.id)
    return email
  }

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('to', {required: true})} name='to' type={'text'} placeholder='To'/>
            {errors.to && <p className='sendMail__error'>{'Recipient email is required'}</p>}
            <input {...register('subject', {required: true})} name='subject' type={'text'} placeholder='Subject'/>
            {errors.subject && <p className='sendMail__error'>{'Email subject is required'}</p>}
            <textarea {...register('message', {required: true})} name='message' placeholder='Message' className='sendMail__message'/>
            {errors.message && <p className='sendMail__error'>{'Message is required'}</p>}
            <div className='sendMail__options'>
                <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail