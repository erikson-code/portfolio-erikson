import { useState, useEffect } from 'react'
import axios from 'axios'


export const useGetData =(url) => {

   
     const [data, setData] = useState([])
     const [error,setError]= useState()
     const [loading, setLoading] = useState(true)



    useEffect(() => {

        async function fetchData() {

            const res = await axios.get(url)
           
            const result = await res.data

            if(res.status !== 200){
                setError(result)
            }else{
                setData(result)
            }
            setLoading(false)

        }

        url && fetchData()

    }, [])

    return { data,error,loading }

}