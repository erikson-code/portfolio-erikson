import axios from 'axios'
import { useApiHandler } from './createPortfolio'

const createPortfolio = (data) => axios.post('/api/portfolios', data)

export const useCreatePortfolio = () => useApiHandler(createPortfolio)

