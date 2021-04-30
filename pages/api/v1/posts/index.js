import axios from 'axios'

export default async (req, res) => {

    try {

        const axiosRes = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        const posts = axiosRes.data

        res.status(200).json({posts: posts.slice(0,10)})

    }
    catch (e) {
        console.error(e)
        res.status(error.status || 400).end({message: "API ERROR"})
    }


  
}

