import {useEffect,useState,useContext} from 'react'

export const useFetch = url => {

    const [data, setData] = useState({})
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{

        if(!url){
            return ''
        }

        async function fetchData (){
            
            try {
                setIsDataLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                setData(data)

            }catch(error){
                setError(true)

            }finally{
                setIsDataLoading(false)

            }
          
        }

        fetchData()
    },[url])

    return {data,isDataLoading,error}
}


export const useTheme = themeContext => {

const {theme} = useContext(themeContext)

return theme 

}