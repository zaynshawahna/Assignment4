import React, { useState } from "react";
import List from "./components/List.js";
import ImageSizeContext from "./Context/MyContext.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const [imageSize,setImageSize]=useState(100);

 

  return (
    <ImageSizeContext.Provider value={{ size: imageSize }}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
            if(e.target.checked)
            setImageSize(150);
            if (!e.target.checked) 
            setImageSize(100);
            
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
}