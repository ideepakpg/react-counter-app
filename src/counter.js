import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0)
    const[showCount, setShowCount] = useState(false)
    return (
        <div>
            <button onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide Button':'Show Count'}</button>
            {showCount ? (
                <>
                <h2>Counter Show Open</h2>
                    <h2>Counter : {count}</h2>
                    <button onClick={() => setCount(count+1)}>Increment</button>                                    
                </>
            ):null}      
        </div>
    )
}

export default Counter