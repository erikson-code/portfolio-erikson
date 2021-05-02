

import Link from 'next/link'
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import {useGetData} from '../../actions'

const Portfolio = () => {

    const {data,error,loading} = useGetData("/api/v1/posts")



    const renderPosts = () => {
        const post = data.posts
        
        if (post != undefined) {
            return post.map(post =>
                <li key={post.id}>
                    <Link href={`/portfolios/${post.id}`}>
                        <a>c
                <span style={{ color: "white" }}> {post.title}</span>
                        </a>
                    </Link>

                </li>

            )
        }
    }

    return (
        <BaseLayout>
            <BasePage>
                <h1>I am Portfolio</h1>
                {loading &&
                    <p>Loading data ...</p>
                }
               {data &&
                    <ul>
                    {renderPosts(data)}
                </ul>
               }
               {
                   error &&

                   <div className = "alert alert-danger">{error.message}</div>
               }
            </BasePage>
        </BaseLayout>
    )
}




export default Portfolio