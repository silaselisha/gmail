import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/exports'
import { mailSelector } from './features/mail/mailSlice'

import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import MailList from './MailList'
import Login from './Login'
import SendMail from './SendMail'

import { loggedIn, userSelector } from './features/mail/userSlice'
import { auth, onAuthStateChanged } from './firebase'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const {sendMessageIsOpen} = useSelector(mailSelector)
  const { user} = useSelector(userSelector)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(loggedIn({
          diplayName: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      }
    })
  }, [dispatch])

  return (
    <Router>
      {
        !user ? <Login /> : (
            <div className='app'>
              <Header />
              <div className='app__body'>
                <Sidebar />
                <Switch>
                  <Route path='/mail'>
                    <Mail />
                  </Route>
                  <Route path='/'>
                    <MailList />
                  </Route>
                </Switch>
              </div>
              {sendMessageIsOpen && <SendMail />}
            </div>
        )
      }
    </Router>
  )
}

export default App

