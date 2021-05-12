import axios from 'axios'

const postsID = async (req, res) => {
    // //let posts = [];
    const { id } = req.query
    
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
     const dataRes = await data.data

    res.send(dataRes)


}

export default postsID