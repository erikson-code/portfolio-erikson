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

    async createPortfolio(data){
        return await axios.post(this.apiUrl,data)
       
    }
    async updatePortfolio(id,data){

        return await axios.patch(`${this.apiUrl}/${id}`,data)
    }
    async delete(id){
        return await axios.delete(`${this.apiUrl}/${id}`)
    }


}

export default PortfoliosApi