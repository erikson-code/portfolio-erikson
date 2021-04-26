import axios from 'axios'

import BaseLayout from '../components/layouts/BaseLayout'
const Portfolio = ({ posts }) => {

  const renderPosts = () => {

    return posts.map(post => <li key={post.id}>{post.title}</li>)
  }

  return (
    <BaseLayout>
      <h1>I am Portfolio</h1>
      <ul>
        {renderPosts()}
      </ul>
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