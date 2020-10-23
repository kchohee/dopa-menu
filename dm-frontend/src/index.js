import './index.css'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './v1/helpers/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
)
