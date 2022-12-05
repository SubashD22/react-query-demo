import axios from "axios"
import { useQuery } from "react-query"

export const useSuperHeroData = ()=>{
    return useQuery('super-heroes',()=>{
        return axios.get('http://localhost:5000/superheroes')
    })
}