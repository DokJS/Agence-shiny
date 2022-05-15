import {useEffect,useState} from 'react'

export const useFetch = url => {

    const [data, setData] = useState({})
    const [isDataLoading, setIsDataLoading] = useState(true)

    useEffect(()=>{

        if(!url){
            return ''
        }

        async function fetchData (){
            
            const response = await fetch(url)
            const data = await response.json()

            setData(data)
            setIsDataLoading(false)
        }

        fetchData()
    },[url])

    return {data,isDataLoading}
}