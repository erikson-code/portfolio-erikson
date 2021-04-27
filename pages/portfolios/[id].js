import BaseLayout from '../../components/layouts/BaseLayout'
import { useRouter } from 'next/router'
import axios from 'axios'


const Portfolio = ({portfolio}) => {
    
    debugger

    const name = "Filips"

    function helloWord(){
        console.log(name)
    }
    helloWord()

    return (
        <BaseLayout>

            <h1>I am Portfolio Detail</h1>
            <h1>{portfolio.title}</h1>
            <p>Body:{portfolio.body}</p>
            <p>{portfolio.id}</p>
        </BaseLayout>

    )
   

}
Portfolio.getInitialProps = async ({query})=>{

    let post = {}
    debugger
    try{

        const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
        debugger
    }
    catch(e){
        console.error(e)
    }
    debugger

    return {
        portfolio: post}

}



export default Portfolio