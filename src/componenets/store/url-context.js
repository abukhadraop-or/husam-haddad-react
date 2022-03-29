import React ,{useState}from "react";
const UrlContext=React.createContext({
    url:'',
    sortUrl:(url)=>{},

    });

    export const UrlContextProvider=(probs)=>{
  
        const [url,setUrl]=useState('g');
    
        
      const urlHandler=(url)=>{
          setUrl(url);
      }
       const contextValue={
           url:url,
           sortUrl:urlHandler,
       }
        return <UrlContext.Provider value={contextValue}>{probs.children}</UrlContext.Provider>
    }
    
    export default UrlContext;