import axios from 'axios'

class PortfoliosApi {

    constructor(){

        this.apiUrl = process.env.PORTFOLIO_API_URL +'/portfolios'
    }

    async getAll() {

        return await axios.get(this.apiUrl)

    }

    async getById(id){

        return await axios.get(`${this.apiUrl}/${id}`)
    }

}

export default PortfoliosApi