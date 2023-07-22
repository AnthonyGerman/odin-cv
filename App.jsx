import { useState } from 'react'
import './App.css'

function App({ submit, infoChange }) {

  return (
    <>
      <form onSubmit={submit}>
        <input name='name' id='name' placeholder='Name' type='text' onChange={infoChange}/>
        <input name='email' id='email' placeholder='Email' type='email' onChange={infoChange}/>
        <input name='phoneNumber' id='phoneNumber' placeholder='Phone Number' type='tel' onChange={infoChange}/>
        <br />
        <input name='schoolName' id='schoolName' placeholder='School Name' type='text' onChange={infoChange}/>
        <input name='title' id='title' placeholder='Title of study' type='text' onChange={infoChange}/>
        <input name='date' id='date' placeholder='Date of study' type='date' onChange={infoChange}/>
        <br />
        <input name='companyName' id='companyName' placeholder='Company Name' type='text' onChange={infoChange}/>
        <input name='positionTitle' id='positionTitle' placeholder='Position Title' type='text' onChange={infoChange}/>
      </form>
    </>
  )
}

export default App
