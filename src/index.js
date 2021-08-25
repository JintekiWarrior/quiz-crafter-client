import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDom.render(appJsx, document.querySelector('#root'))
