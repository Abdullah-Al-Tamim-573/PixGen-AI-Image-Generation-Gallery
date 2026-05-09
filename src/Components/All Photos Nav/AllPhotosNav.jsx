// import PhotoCard from "@/Components/PhotoCard/PhotoCard";
// import { apiCategoryData, apiPhotosData } from "@/lib/Fetch Api/FetchApi";
import { Button } from "@heroui/react";
import Link from "next/link";

import { apiCategoryData } from "@/lib/Fetch Api/FetchApi";


const AllPhotosNav = () => {
 
    let categoriesData = apiCategoryData();
    

    

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
             
        </>
    );
};

export default AllPhotosNav;