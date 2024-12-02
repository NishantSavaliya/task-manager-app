import React, { useEffect, useState } from 'react'
import {Container, Table} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Task() {

      const [task, setTask]=useState([]);
      const navigate=useNavigate();
     
      useEffect(()=>{

            axios.get(`http://localhost:8000/task`).then((response)=>{
                  setTask(response.data);
            })
      },[task]);

  return (
    <>

      <Header/>
      <Container className='mx-auto p-5'>

            <p  className='text-dark fs-1 fw-bolder'>Tasks List</p>

            <Table className='table table-responsive shadow mt-5'>

                  <thead>
                        <tr className='fs-4'>
                              <th>Task Name</th>
                              <th>Detail</th>
                        </tr>
                  </thead>

                  <tbody>
                  {task && task.map((item)=>{
                        return(
                              <>
                                    <tr className='fs-5'>
                                          <td >{item.newtask} </td>
                                          <td >{item.detail} </td>
                                    </tr>
                              </>
                        )
                  })}
                  </tbody>
            </Table>
      </Container>
    </>
  )
}

