import React, { useState } from 'react'
import List from './List';



export default function Index() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = () => {
        return [Number(number), Number(number) + 1, Number(number) + 2]
    }
    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => {
                setDark(!dark)
            }}>Toggle</button>
            <List getItems={getItems} />
        </div>
    )
}


const array = [
    2208, 1047, 1514, 762, 2161, 1935, 671, 872, 671, 1368, 265, 2253, 872, 823, 1551, 2253, 307, 719, 1165, 167, 617, 2070, 1285, 2107, 102
]