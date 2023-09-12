import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import ImageSizeContext from "../Context/MyContext";
const PlaceImage = ({ place }) => {
  const iSize=useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={iSize.size}
      height={iSize.size}
    />
  );
};

export default PlaceImage;
