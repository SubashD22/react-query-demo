import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TSuperHeroes() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/superheroes').then((res) => {
            setData(res.data)
        })
    }, [])
    if (data === null) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <h1>Super Heroes</h1>
            {data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}

export default TSuperHeroes