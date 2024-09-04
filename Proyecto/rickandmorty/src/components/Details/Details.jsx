import React from 'react'

const Details = (props) => {
  return (
    <div>
        <span>{props.Gender}</span>
        <span>{props.Status}</span>
    </div>
  )
}

export default Details