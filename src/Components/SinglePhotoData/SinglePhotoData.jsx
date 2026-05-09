import { Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const SinglePhotoData = ({ photoData }) => {
  let { id, title, imageUrl, category, downloads, likes } = photoData;
  console.log(photoData);
  return (
    <div className="border">
      <Card className="w-[400px]">
        
        <Card.Header>
          <Card.Title>Become an Acme Creator!</Card.Title>
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
