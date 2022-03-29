import React, { useContext, useState }  from "react";
import UrlContext from "../store/url-context";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import { SearchList, SortDiv ,Arrow} from "./styles";


const Sort = (props) => {

  const [radius,setRadius]=useState('8px')
  const [rotate,setRotate]=useState('0');
  const [sortValue,setSortValue]=useState('popularity.desc');
  
let url=`https://api.themoviedb.org/3/discover/movie?api_key=3024cf700c94345aa84ec47dbf98f3a4&language=en-US&sort_by=${sortValue}&include_adult=false&include_video=false&page=1`;
  const sortCtx=useContext(UrlContext);

  const clickHandler=()=>{
  if(rotate==='90deg'){
    setRotate('0deg')
    setRadius('8px')
  }else{
setRotate('90deg');
setRadius('8px 8px 0 0 ');

  }}

const changeHandler=(option)=>{
setSortValue(option.target.value)
sortCtx.sortUrl(url)

}
const button=()=>{

}

  return (
      <>  
    <SortDiv>
     <h2>Popular Moives</h2>
      <SearchList onClick={clickHandler} radius={radius}><h2>Sort</h2>   <Arrow rotate={rotate} />  </SearchList>
      {rotate==='90deg'  &&  <Select onChange={changeHandler}></Select>}
      <Button  color={'rgb(3, 37, 65)'} onClick={button}>Search</Button>
    </SortDiv>
    </>
  );    
};

export default Sort;
