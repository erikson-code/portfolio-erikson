
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'



const Portfolio = ({ posts }) => {

    useEffect(() => {

        async function getPost(){
            const res = await fetch("/api/v1/posts")
            const data =  await res.json()
            
    
        }

        getPost()

    }, [])


    const renderPosts = () => {

        return posts.map(post =>
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>c
                {post.title}
                    </a>
                </Link>

            </li>

        )
    }

    return (
        <BaseLayout>
            <BasePage>
                <h1>I am Portfolio</h1>
                <ul>
                    {renderPosts()}
                </ul>
            </BasePage>
        </BaseLayout>
    )
}


Portfolio.getInitialProps = async () => {

    let posts = []

    try {

        const res = await axios.get("http://jsonplaceholder.typicode.com/posts")
        posts = res.data

    } catch (e) {

        console.error(e)

    }
    return { posts: posts.slice(0, 10) }


}

export default Portfolio