import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs=(category)=>{


    const[images, setImages]=useState([]);
    const[isLoading, setIsLoading]=useState(false);

    const getImages=async ()=>{
      const newImages= await getGifs(category);
      setImages(newImages);
      setIsLoading(true)
    
    }
  
    //useFeect can not use an async because async return a promise
    useEffect(()=>{
      getImages();
    }, [])
  

    return {
        images:images,
        isLoading:isLoading
    }

}