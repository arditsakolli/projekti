import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../../client/src/components/Views/NavBar';

function UsersDetails() {
    const {id} = useParams()
    const [userDetails, setUserDetails]= useState({})
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/user/${id}`)
          .then((res) => {
            // console.log(res.data);
            setUserDetails(res.data);
            console.log(res.data)
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
        <NavBar/>
    <div className='d-flex align-items-center justify-content-center ' >
     
      <div className=" mt-5 ml-5 mr-5 bCollor p-5 shadow-lg p-3 mb-5 bg-white rounded maxWidth border4side">
      <div class="card-body font-family   borderbootom pb-3">
        <h2 className="card-title">Project : <h1>{userDetails.firstName}</h1></h2> <br/>
        <h3>Details :</h3>
        <h4 className=" para"> { userDetails.lastName}</h4>
        {/* <button onClick={handleDeleteButton} className='btn btn-success'>Delete</button>
        <button onClick={()=>editButton(project._id)} className='btn btn-success ml-3'>Edit</button> */}
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default UsersDetails