import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const DynamicHeroes = ({ id }) => {
    const fetchData = (id) => {
        return axios.get((`http://localhost:5000/superheroes/${id}`))
    }
    const dynamicQuerry = useQueries(
        id.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchData(id),
            }
        })
    )
    console.log(dynamicQuerry)

    return (
        <div>DynamicHeroes</div>
    )
}

export default DynamicHeroes