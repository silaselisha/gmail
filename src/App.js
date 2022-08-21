import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import MailList from './MailList'

import './App.css'

const App = () => {
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
      </div>
    </Router>
  )
}

export default App

