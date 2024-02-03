import React, { useEffect } from 'react'

export default function List({ getItems }) {
    const [items, setItems] = React.useState(getItems());

    useEffect(() => {
        setItems(getItems());
        console.log("Updating rendered")
    }, [getItems])

    return (
        <div>
            <h1>List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
