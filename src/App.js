
import React, {useState,useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';
const alanKey='cff09438f0486bb559cf2683998188ed2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{
  const [newsArticles,setNewsArticles]=useState([]);
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='newHeadlines'){
          setNewsArticles(articles);
        }
      }
    })
  },[])
  return(
    <div>
      <h1>Alan AI news App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}


export default App;
