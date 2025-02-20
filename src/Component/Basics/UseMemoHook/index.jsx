import React, { useMemo, useState } from 'react'

export default function Index() {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    const doubleNumber = useMemo(()=>slowFunction(number),[number])

    const theme = {
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
    }

  return (
    <>
     <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
     <button onClick={()=>setDark(!dark)}>Toggle</button>
     <div style={theme}>{doubleNumber}</div> 
    </>
  )
}

function slowFunction(number){
    console.log('Calling slow function')
    for(let i=0;i<1000000000;i++){}
    return number*2
}