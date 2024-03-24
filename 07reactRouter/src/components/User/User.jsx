import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white tect-3xl p-3'>User : {userId}</div>
  )
} 

export default User