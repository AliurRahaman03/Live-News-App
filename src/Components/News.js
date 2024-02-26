import React from 'react'

export default function News(props) {
  return (
    <div className='news'>
      <div className='news-img'>
        <img alt='' src={props.article.urlToImage}/>
      </div>
      <h1>{props.article.title}</h1>
      <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_blank" rel='noreferrer'>Read More</a></p>
      <div className='source'>
        <p>{props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  )
}
