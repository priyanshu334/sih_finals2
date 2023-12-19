import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Questions'
import Question2 from './components/Questions2'
import Home from './components/Home'
import Task1 from './components/Tasks/Task1'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/questions' element={<Question/>}/>
     <Route path='/questions2' element={<Question2/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/taks1' element={<Task1/>}/>


    </Routes>
    
    
    </>
  )
}

export default App