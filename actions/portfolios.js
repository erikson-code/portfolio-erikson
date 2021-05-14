import axios from 'axios'
import { useApiHandler } from './createPortfolio'

const createPortfolio = (data) => axios.post('/api/portfolios', data)
const updatePortfolio = (id,data) => axios.patch(`/api/portfolios/${id}`, data)
const deletePortfolio = (id) => axios.delete(`/api/portfolios/${id}`)


export const useCreatePortfolio = () => useApiHandler(createPortfolio)
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio)
export const useDeletePortfolio = () => useApiHandler(deletePortfolio)


export const useGetPortfolio = async (id)=>{

    const json = await axios.get(`/api/portfolios/${id}`)

    const data = json.data

    return {data}

} 
