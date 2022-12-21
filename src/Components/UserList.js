import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import './UserList.css'

const UserList = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
   axios
   .get("https://jsonplaceholder.typicode.com/users")
   .then((res)=>setUsers(res.data))
   .catch((err)=>console.log(err));
    },[])
    
  return (
    <div className='list-card'>
        {users.map((el)=>( <UserCard user={el} key={el.id} />))}
    </div>
  )
}

export default UserList