import React from 'react'

const ArticleCard = (props) => {
  const { id, make, model, year, description, url, image } = props.article;

  return (
    <div className='article-card' id={id}>
      <div className='article-image-container'>
        <img src={image} alt='car' />
      </div>
      <div className='article-text'>
        <div className='title'>{make}, {model} <span>{year}</span></div>
        <p>{description}. <a href={url}> read more</a></p>
      </div>
    </div>
  )
}

export default ArticleCard