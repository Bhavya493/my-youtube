import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-7 m-3 rounded bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
