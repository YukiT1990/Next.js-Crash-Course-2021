import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  // const res = await fetch(`${server}/api/articles`)
  const res = await fetch(`https://my-json-server.typicode.com/YukiT1990/Next.js-Crash-Course-2021/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
