import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './Header'
import AddNewTask from './AddNewTask'
import TaskList from './TaskList'

export default function Layout() {
  return (
    <>
      <Header/>
      <Container className='container mx-auto'>
        <AddNewTask/>
        <TaskList/>
      </Container>
      
    </>
  )
}
