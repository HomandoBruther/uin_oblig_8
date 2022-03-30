import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// TODO: Kommenter ut om du ønsker å bruke .scss
// import './styles/scss/main.scss'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
import './styles/css/main.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
