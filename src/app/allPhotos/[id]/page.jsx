
import { apiPhotosData } from "@/lib/Fetch Api/FetchApi";
import Image from "next/image";


const SinglePhoto = async({params}) => {
    let {id} = await params;
    let photosData = apiPhotosData();
    let singlePhotoData = photosData.find(photo => photo.id === Number(id));
    console.log(singlePhotoData)
    // id:photoId,
    let { title, imageUrl, downloads, model, category, prompt,resolution } = singlePhotoData
    return (
        <div className="my-10 flex gap-10">
               <div>
                   <Image className="h-[600px] object-cover" alt={title} width={500} height={100} src={imageUrl}></Image>
               </div>
               <div>
                    <h2 className="text-2xl font-bold">
                           {
                               title
                           }
                    </h2>
                    <p>
                         {
                            prompt
                         }
                    </p>
                    <br />
                     <div>
                          <span>
                            Downloads: 
                                 {
                                    downloads
                                 }
                          </span>
                     </div>

               </div>
        </div>
    );
};

export default SinglePhoto;