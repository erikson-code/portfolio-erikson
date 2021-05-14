import PortfoliosApi from '../../../lib/api/portfolios'
export default async function handlePortfolio(req, res) {

    if (req.method === 'GET') {
        const json = await new PortfoliosApi().getById(req.query.id)
        return res.json(json.data)
    }
    if (req.method === 'PATCH') {

        try {
            const json = await new PortfoliosApi().updatePortfolio(req.query.id, req.body)
            return res.json(json.data)
        } catch (e) {
            return res.status(e.status || 422).json(e.response.data)
        }


    }
    if(req.method === 'DELETE'){
        const json = await new PortfoliosApi().delete(req.query.id)
        return res.json(json.data)
    }

}