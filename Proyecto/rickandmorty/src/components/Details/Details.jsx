import React from 'react'

const Details = (props) => {
  return (
    <div>
        <span>{props.Genre}</span>
        <span>{props.Status}</span>
    </div>
  )
}

export default Details