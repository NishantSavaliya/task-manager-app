import React from 'react'
import {Container, Row, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    
            <Nav className='header container-fluid bg-dark mt-1 p-0'>
                  <ul>
                        <li>
                              
                              <button className='btn btn-warning ms-5 p-2 fs-5 mt-3 text-dark '>
                                    <Link to="/" className='text-dark bi bi-list' style={{textDecorationLine:"none"}}></Link>
                              </button>
                        </li>
                        <li>
                              <button className='text-white bg-dark border-0 fs-3 ms-5'><span className='bi bi-journal-plus'></span> Task Manager</button>
                        </li>
                  </ul>
                  <ul className='btns'>
                        <li>
                              <button className='btn btn-warning ms-5 p-2 fs-5 mt-3 text-dark '>
                                    <Link to="/task" className='text-dark' style={{textDecorationLine:"none"}}>Task</Link>
                              </button>
                        </li>
                        <li>
                        <button className='btn btn-warning ms-5 p-2 mt-3 fs-5 text-dark'>
                              <Link to="/deleted-task" className='text-dark' style={{textDecorationLine:"none"}}>Deleted Task</Link>
                        </button> 
                        </li>
                  </ul>
            </Nav>
     
    </>
  )
}
