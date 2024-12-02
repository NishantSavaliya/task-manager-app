import React, { useEffect, useState } from 'react'
import {Container, Table} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function TaskList() {

      const [task, setTask]=useState([]);
      const navigate=useNavigate();
     
      useEffect(()=>{

            axios.get(`http://localhost:8000/task`).then((response)=>{
                  setTask(response.data);
            })
      },[task]);

  return (
    <>
      <Container className='task-list mx-auto p-5'>

            <p  className='text-dark fs-1 fw-bolder'>Tasks List</p>

            <Table className='table table-responsive table-bordered shadow'>

                  {task && task.map((item)=>{
                        return(
                              <>
                                    <tr>
                                    <td>
                                          <button className='bg-secondary fs-3 text-white rounded-circle border-0 m-2' onClick={()=>navigate(`/delete-task/${item.id}`)}><span className='bi bi-trash'></span></button>
                                    </td>
                                    <td className=''>
                                    <div className="accordion " id="accordionBasic">
                                          <div className="accordion-item border-0">
                                                <h2 className="accordion-header" id="headingOne">
                                                      <button className="accordion-button fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                      {item.newtask}
                                                      </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionBasic">
                                                      <div className="accordion-body">
                                                            {item.detail}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    </td>
                              </tr>
                              </>
                        )
                  })}
                  
            </Table>
      </Container>
    </>
  )
}
