
import SinglePhotoData from "@/Components/SinglePhotoData/SinglePhotoData";
import { apiPhotosData } from "@/lib/Fetch Api/FetchApi";
import Image from "next/image";

export default  function Home() {
    
   let photosData =  apiPhotosData();
   console.log(photosData)

  return (
    <>
         <h2 className="text-3xl font-bold my-2">Top Generations</h2>
         <div className="grid grid-cols-4 gap-5 justify-items-center my-5">
               {
                   photosData.slice(0,8).map(photoData => <SinglePhotoData key={photoData.id} photoData={photoData}></SinglePhotoData>)
               }
         </div>
    </>
  );
}
