
import { GifItem } from "./GifItem";
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

   const {images, isLoading}=useFetchGifs(category)

  return (
    <>
    {
    
    !isLoading && (<h2>Is loading</h2>)
    
    
    }
      <h3>{category}</h3>
      {
        images.map(image=>(
         <GifItem key={image.id} {...image}/>
        )
      )
      }
    </>
  );
};
