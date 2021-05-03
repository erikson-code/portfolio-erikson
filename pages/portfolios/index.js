

import Link from 'next/link'
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { useGetData } from '../../actions'
import { useState } from 'react'
import posts from '../api/v1/posts'

const Portfolio = () => {

    const [vData, getData] = useState()
    const [vError, getError] = useState()
    const [vLoading, getLoading] = useState()


    const auxPosts = async () => {
        const { data, error, loading } = await useGetData("http://localhost:3000/api/v1/posts")

        if (data !== undefined && data.length !== 0) {
            getData(data)
            getError(error)
            getLoading(loading)

        }


    }
    const renderPosts = () => {
        auxPosts()

        if (vData !== undefined) {

            return vData.map(post =>
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
                {renderPosts()}
               
            </BasePage>
        </BaseLayout>
    )

}


export default Portfolio