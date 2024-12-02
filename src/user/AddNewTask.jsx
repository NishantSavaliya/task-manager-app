import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddNewTask() {

  // destructuring data

  const [data, setData] = useState("");

  // store all ref in veriable

  const newtask=useRef([]);
  const detail=useRef("");
  const navigate = useNavigate();

  // create event handling function

  const taskHendling=(e)=>{

    e.preventDefault();

    var ins={
      newtask:newtask.current.value,
      detail:detail.current.value,
    }

    // call api via axios.post()

    axios.post(`http://localhost:8000/task`,ins).then(()=>{

      // pass message

      Swal.fire({
        title: "Added",
        text: "New Task Added",
        icon: "success"
      });

      e.target.reset();

      navigate("/");
      
    })
  }


  return (
    <>
      <Container className='new-task mx-auto p-5'>
            <p  className='text-dark fs-1 fw-bolder'>Add New Tasks Here</p>

          <form onSubmit={taskHendling}>
            <div className="input-group mt-5">
                  <span className="input-group-text bi bi-pencil-fill bg-white fs-3"></span>
                  <input type="text" ref={newtask} className="form-control border-bottom border-2 border-dark fs-3 text-secondary fw-light rounded-0" placeholder="New Task"/>
            </div>

            <div className="input-group mt-5">
                  <span className="input-group-text bi bi-pencil-fill bg-white fs-3"></span>
                  <input type="text"ref={detail} className="form-control border-bottom border-2 border-dark fs-3 text-secondary fw-light rounded-0" placeholder="Detail"/>
            </div>

            <input type='submit' className='btn btn-lg shadow btn-warning p-2 mt-5 fs-5 text-dark' value="CREATE"/>
          </form>
      </Container>
    </>
  )
}
