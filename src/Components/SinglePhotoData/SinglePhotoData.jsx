import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePhotoData = ({ photoData }) => {
  let { id, title, imageUrl, category, downloads, likes } = photoData;
  console.log(photoData);
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
          <Card.Description>
            Visit the Acme Creator Hub to sign up today and start earning
            credits from your fans and followers.
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SinglePhotoData;
