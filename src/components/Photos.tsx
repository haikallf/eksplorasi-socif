import React from "react";
import Photo1 from "../assets/images/photo1.jpg";
import Photo2 from "../assets/images/photo2.jpg";
import Photo3 from "../assets/images/photo3.jpg";
import { EventImage } from "../styles/details.styles";

const Photos: React.FC<{ count: number }> = ({ count }) => {
  const listOfImages: string[] = [Photo1, Photo2, Photo3];
  const eventImages: string[] = [];
  for (let i: number = 0; i < count; i++) {
    eventImages.push(listOfImages[i]);
  }
  return (
    <>
      {eventImages.map((img, index) => (
        <EventImage src={img} />
      ))}
    </>
  );
};

export default Photos;
