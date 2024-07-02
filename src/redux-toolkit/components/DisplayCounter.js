import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
function DisplayCounter() {
    const {counterVal}=useSelector(store=>store.counter)
    
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
       Update State == <span className='text-success h1'>{counterVal}</span>
      </Card.Text>
      

      
    </Card.Body>
  </Card>
  )
}

export default DisplayCounter