import axios from 'axios'

class PortfoliosApi {

    async getAll() {

        return await axios.get('http://localhost:3001/api/portfolios')

    }

    async getById(id){

        return await axios.get(`http://localhost:3001/api/portfolios/${id}`)
    }

}

export default PortfoliosApi