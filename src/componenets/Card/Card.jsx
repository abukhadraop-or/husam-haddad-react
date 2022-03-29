import { useContext, useEffect, useState } from 'react';
import UrlContext from '../store/url-context.js';
import {CardDiv,CardImage,CardInfo,CardContainer, Title, ReleasedDate, OverView} from './styles.js'

const Card =(props)=>{
    let url=`https://api.themoviedb.org/3/movie/popular?api_key=3024cf700c94345aa84ec47dbf98f3a4&language=en-US&page=1`;
const [responseData,setResponseData]=useState([]);
const sortedUrl=useContext(UrlContext);
console.log(sortedUrl.url);
if(sortedUrl.url!=='g'){
url=sortedUrl.url;
}


useEffect(()=>{fetch(url,{method:'get'
, dataType:'json',headers:{  'Content-Type': 'application/json'}})
.then(result=>{
    return result.json();
})
.then(result=>{
    
    return result.results;}
    
    )
.then(result=>{
    setResponseData(result)
     return `https://image.tmdb.org/t/p/w500/${result[0].backdrop_path}`

})} ,[url])


return(
<CardContainer>
{responseData.map((item)=>
    <CardDiv>
<CardImage img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} >
</CardImage>
<CardInfo>
<Title>{item.original_title}</Title>
<ReleasedDate>{item.release_date}</ReleasedDate>
<OverView>{item.overview}</OverView>
</CardInfo>
</CardDiv> 
)}
</CardContainer>
   )}

export default Card;
