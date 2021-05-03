import axios from 'axios'

const posts = async (req,res) => {
    //let posts = [];
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const dataRes = await data.data
    
    //console.log(dataRes)
    res.send(dataRes.slice(0,10))
    
  }

  export default posts