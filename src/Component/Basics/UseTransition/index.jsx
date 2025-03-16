import React, { useState, useTransition } from 'react';
import { data } from "../../Data/cities"
export default function UseTransition() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filteredData = data.filter(item => item.name.includes(value));
            setResults(filteredData);
        });
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
            {isPending && <div>Loading results...</div>}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}