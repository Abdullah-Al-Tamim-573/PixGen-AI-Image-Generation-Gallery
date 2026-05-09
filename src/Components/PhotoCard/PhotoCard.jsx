import { Button, Card } from "@heroui/react";
import { Download, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photoData }) => {
  let { id, title, imageUrl, category, downloads, likes } = photoData;
  
  return (
    <div className="">
      <Card className="">
        
        <Card.Header>
          <Card.Title className="relative">
             <Image className="h-[300px] object-cover rounded-[15px]" width={320} height={0} alt={`ai image name ${title}`} src={imageUrl}></Image>
             <span className="absolute top-3 right-3 bg-white px-3 rounded-2xl">
                  {category}
             </span>
          </Card.Title>
         
            <span className="text-[17px] font-bold my-2">
                  {
                    title
                  }
            </span>
            <div className="flex gap-5 items-center  mt-2">
                 <div className="flex gap-2 items-center border-r-2  pr-7">
                       <Heart size={19}/> <span className="text-[15px]">{likes}</span>
                 </div>
                 <div className="flex gap-2 items-center ">
                    <Download size={15}/> <span className="text-[15px]">{downloads}</span>
                 </div>
            </div>
          
        </Card.Header>
        <Card.Footer>
            <Link href={`/allPhotos/${id}`} className="w-full">
            
             <Button variant="outline" className={`w-full my-2`}>View Details</Button>

            </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PhotoCard;
