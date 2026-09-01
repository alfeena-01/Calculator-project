import React from 'react'

function User(props) {
  return (
    <div>
        <h1>Hello,{props.name} </h1>
        <p>Your age is {props.age}</p>
        </div>
  )
}

export default User