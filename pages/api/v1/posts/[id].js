import axios from 'axios'

export default async (req, res) => {

    try {

        const axiosRes = await axios.get(`http://jsonplaceholder.typicode.com/posts/${req.query.id}`)
        const post = axiosRes.data

        res.status(200).json(post)

    }
    catch (e) {
        console.error(e)
        res.status(error.status || 400).end({message: "API ERROR"})
    }


  
}
