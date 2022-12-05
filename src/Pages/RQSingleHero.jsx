import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleHeroData } from '../hooks/useSingleHeroData';

const RQSingleHero = () => {
    const { Id } = useParams();
    const { isLoading, isError, error, data } = useSingleHeroData(Id)
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <h1>{data?.data.name} - {data?.data.alterEgo}</h1>
        </div>
    )
}

export default RQSingleHero