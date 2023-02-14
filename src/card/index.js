import React from 'react'
import styles from './style.module.css'
const Card = props => {
  const { user } = props
  return (
    <div id='card'>
      <p className='info'> <b>User Selected : </b>
        
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>
      <p className='desc'><b> Description :</b>  {user.description}</p>
      <p><b>Address :</b> {user.address.streetAddress}</p>
      <p><b>City : </b>{user.address.city}</p>
      <p><b>State : </b>{user.address.state}</p>
      <p><b>Zip :</b>{user.address.zip}</p>
    </div>
  )
}

export default Card