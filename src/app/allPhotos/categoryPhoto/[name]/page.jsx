import { apiPhotosData } from "@/lib/Fetch Api/FetchApi";
// import AllPhotos from "../../page";
import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import AllPhotosNav from "@/Components/All Photos Nav/AllPhotosNav";


const DynamicCategoryPhoto = async({params}) => {
    let {name} = await params;
    let photosData = apiPhotosData();
    
    
   

    let filterPhoto = photosData.filter(data => data.category.includes(name));
   
    
    
    return (
        <>

        <div>
              <AllPhotosNav></AllPhotosNav>
        </div>
        {/* <div>
            {
                photosData.length
            }
        </div> */}
            {/* <AllPhotos></AllPhotos> */}
            <div className="grid grid-cols-4">
                  {
                    filterPhoto.map(photoData => <PhotoCard photoData={photoData} key={photoData.id}></PhotoCard>)
                  }
            </div>
        </>
    );
};

export default DynamicCategoryPhoto;