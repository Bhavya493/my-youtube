import React, { useEffect, useState } from 'react'

const TestRender = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('use effect');
        return () => {
            console.log('unmount')
        }
    }, [count])
  return (
    <div>
      <input className='border border-black' type='text' value={count} onChange={(e) => setCount(e.target.value)}/>
    </div>
  )
}

export default TestRender
