import './App.css';
import {useEffect, useState} from 'react'
import News from './Components/News';

function App() {
  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState("india")
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-01-26&sortBy=publishedAt&apiKey=0dac6d73a658475bb657ddad6a534f73`)
    .then(response=>response.json())
    .then((news)=>{
      console.log(news)
      setArticles(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])

  return (
    <div className="App">
      <header className='header'>
        <h1>Top Headlines</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value)
          }
          else{
            setCategory("india")
          }
        }} placeholder='Search News'/>
      </header>
      <section className='news-articles'>
        {
          
          articles.length !==0?
          articles.map((article)=>{
            return(
              <News article={article} />
            )
          })
          :<h3>No News Found For Searched Text</h3>
        }
        {
          console.log(articles.length)
        }
      </section>
      
    </div>
  );
}

export default App;
