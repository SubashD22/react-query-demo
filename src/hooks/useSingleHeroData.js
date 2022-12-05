import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchData = ({queryKey}) =>{
    const Id = queryKey[1]
    return axios.get((`http://localhost:5000/superheroes/${Id}`))
}
export const useSingleHeroData = (Id) =>{
    const queryClient = useQueryClient()
    return useQuery(['super-hero', Id],fetchData,{
        initialData:()=>{

        const hero = queryClient.getQueryData('super-heroes')?.data?.find(
         (hero)=>hero.id === parseInt(Id)
        )
    if(hero){
        return{
            data:hero
        }
    }else{
        return undefined
    }}
    })
}