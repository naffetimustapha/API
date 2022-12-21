import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const UserCard = ({user}) => {
  return (
    <div >
      <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        
        <Card.Text>{user.username} </Card.Text>
        <Card.Text>{user.email} </Card.Text>
        <Link to={`/user/${user.id}`}>go to profile</Link>
   
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard