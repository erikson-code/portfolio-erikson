
import PortfoliosApi from '../../lib/api/portfolios'
import axios from 'axios'
export default async function createPortfolios(req, res) {


    try {
        const data = req.body

        new PortfoliosApi().createPortfolio(data)
        return res.send(data)

    }
    catch (e) {
        return res.status(e.status || 422).json(e.response.data)
    }
}

