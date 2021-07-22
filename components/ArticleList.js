import React from 'react'
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
  // console.log("articles: " + JSON.stringify(articles, null, 2))  // JSON.stringify(articles, null, 2
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>

  )
}

export default ArticleList
