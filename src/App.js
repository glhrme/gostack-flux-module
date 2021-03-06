import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'
import Header from './components/Header'

import GlobalStyle from './styles/global'
import store from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
