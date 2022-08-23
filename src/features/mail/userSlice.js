import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state, action) => {
            state.user = action.payload
        },
        loggedOut: (state) => {
            state.user = null
        }
    }
})

export const { loggedIn, loggedOut } = userSlice.actions
export const userSelector = (state) => state.user

export default userSlice.reducer