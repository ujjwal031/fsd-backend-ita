import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>User Registration System</h1>
      <div className="form-section">
        <Register />
      </div>
      <div className="form-section">
        <Update />
      </div>
      <div className="form-section">
        <Delete />
      </div>
      <div className="table-container">
        <View />
      </div>
    </div>
  )
}

export default App