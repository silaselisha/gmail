import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { mailSelector } from './features/mail/mailSlice'

import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import MailList from './MailList'
import SendMail from './SendMail'

import './App.css'

const App = () => {
  const {sendMessageIsOpen} = useSelector(mailSelector)
  return (
    <Router>
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
    </Router>
  )
}

export default App

