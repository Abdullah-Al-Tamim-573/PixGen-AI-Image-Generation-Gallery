
// import PhotoCard from '../Components/PhotoCard/PhotoCard.jsx'

import Banner from "@/Components/Banner/Banner";
import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { apiPhotosData } from "@/lib/Fetch Api/FetchApi";


export default  function Home() {
    
   let photosData =  apiPhotosData();
   

  return (
    <>
      <Banner></Banner>
         <h2 className="text-3xl font-bold my-2">Top Generations</h2>
         <div className="grid grid-cols-4 gap-5 justify-items-center my-5">
               {
                   photosData.slice(0,8).map(photoData => <PhotoCard key={photoData.id} photoData={photoData}></PhotoCard>)
               }
         </div>
    </>
  );
}
