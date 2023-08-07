import React from 'react'
import Counter from './counter'

function App() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column', }}>
                <h1>Counter App</h1>
            </div>
            <Counter />
        </>
    )
}

export default App