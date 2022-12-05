import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Dependent = ({ email }) => {

    const { data } = useQuery(['user', email], () => {
        return axios.get(`http://localhost:5000/users/${email}`)
    })
    const channelId = data?.data.channelId;
    const { data: courses } = useQuery(['courses', channelId], () => {
        return axios.get(`http://localhost:5000/courses/${channelId}`)
    },
        {
            enabled: !!channelId
        }
    )
    console.log(courses)
    return (
        <div>Dependent</div>
    )
}

export default Dependent