import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { apiCategoryData, apiPhotosData } from "@/lib/Fetch Api/FetchApi";
import { Button } from "@heroui/react";
import Link from "next/link";


const AllPhotos = () => {
 
    let categoriesData = apiCategoryData();
    let photosData = apiPhotosData();

    

    return (
        <>
             {/* category nav in all category route */}
             <nav>
                <ul className="flex gap-3 items-center my-3">
                     {
                         categoriesData.map(categoryData => <li key={categoryData.id}>
                            <Link href={`/allPhotos/categoryPhoto/${categoryData.name}`}>
                             
                                   <Button variant="tertiary">{categoryData.name}</Button>
                             </Link>
                         </li>)
                     }
                </ul>
             </nav>
             <div className="grid grid-cols-4 gap-5 my-5">
                   {
                       photosData.map(photoData => <PhotoCard key={photoData.id} photoData={photoData}></PhotoCard>)
                   }
             </div>
        </>
    );
};

export default AllPhotos;