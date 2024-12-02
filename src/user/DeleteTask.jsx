import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DeleteTask() {

const [data, setData]=useState([]);
const {id}=useParams();
const navigate=useNavigate();

useEffect(()=>{

      axios.delete(`http://localhost:8000/task/${id}`).then(()=>{
            Swal.fire({
                  icon: "error",
                  title: "Delete",
                  text: "Task is Deleted",
            });
      })

      navigate('/')
},[])


  return (
    <>
      
    </>
  )
}
