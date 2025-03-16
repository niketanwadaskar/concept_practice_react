import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    function handleIncrease() {
        setCount(prev => prev + 1)
    }
    function handleDecrease() {
        if (count < 1) {
            return
        }
        setCount(prev => prev - 1)
    }
    return (
        <div className='font-medium text-[50px]'>
            <div>{count}</div>
            <button className='mx-5 bg-gray' onClick={handleIncrease}>Increase</button>
            <button className='mx-5 bg-gray' onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
