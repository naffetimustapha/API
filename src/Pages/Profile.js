import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import '../App.css';;

const Profile = () => {
  const {id}=useParams();
  const [user, setUser]=useState({})
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res)=>setUser(res.data[0]))
    .catch((err)=>console.log(err));
  });
  
  return (
    <div className='Profile-mid'>
     <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title> 
        <Card.Text>{user.username} </Card.Text>
        <Card.Text>{user.email} </Card.Text>
      <Link to={'/users'}>Go back to list</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile