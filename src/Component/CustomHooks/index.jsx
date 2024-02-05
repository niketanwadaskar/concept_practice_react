import React from 'react'
function useCustomHook(a, b) {
    return a * b;
}
export default function Index() {
    const number = useCustomHook(1, 2)
    return (
        <div>
            Custom hook number{number}
        </div>
    )
}