import React, { Component } from 'react'

// Import components
import Subtitle from '../Subtitle/Subtitle'
import Header from '../Header/Header'
// Import static assets
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header title="Rachel's shopping cart" />
        <Subtitle />
      </div>
    )
  }
}

export default App
