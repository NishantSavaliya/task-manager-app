import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './user/Layout'
import DeleteTask from './user/DeleteTask'
import Task from './user/Task'
import DeletedTask from './user/DeletedTask'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/delete-task/:id' element={<DeleteTask/>}/>
      <Route path='/deleted-task' element={<DeletedTask/>}/>
      <Route path='/task' element={<Task/>}/>
    </Routes>
   </Router>
  </StrictMode>,
)
