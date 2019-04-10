import App from './app.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './common/fonts/iconfont.js'

ReactDOM.hydrate(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>, 
  document.getElementById('app')
)