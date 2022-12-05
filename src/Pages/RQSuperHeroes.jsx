import React from 'react';
import { Link } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData'

const RQSuperHeroes = () => {
    const onSucess = (data) => {
        console.log('...')
    }
    const { isLoading, data, isError, error } = useSuperHeroData()
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h1>Super Heroes</h1>
            {data?.data.map((hero) => {
                return <Link to={`/rsh/${hero.id}`} key={hero.id}>{hero.name}</Link >
            })}
        </>
    )
}

export default RQSuperHeroes