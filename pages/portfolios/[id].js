import BaseLayout from '../../components/layouts/BaseLayout'
import { useRouter } from 'next/router'
import axios from 'axios'
import BasePage from '../../components/BasePage'

const Portfolio = ({portfolio}) => {
    
  
    const name = "Filips"

    function helloWord(){
        console.log(name)
    }
    helloWord()

    return (
        <BaseLayout>
            <BasePage>
            <h1>I am Portfolio Detail</h1>
            <h1>{portfolio.title}</h1>
            <p>Body:{portfolio.body}</p>
            <p>{portfolio.id}</p>
            </BasePage>
        </BaseLayout>

    )
   

}
Portfolio.getInitialProps = async ({query})=>{

    let post = {}
    debugger
    try{

        const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
       
    }
    catch(e){
        console.error(e)
    }
    debugger

    return {
        portfolio: post}

}



export default Portfolio