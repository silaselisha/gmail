import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null
}

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openMail: (state, action) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen  = false
    }
  }
})

export const { openSendMessage, closeSendMessage, openMail } = mailSlice.actions
export const mailSelector = (state) => state.mail

export default mailSlice.reducer