import React, { createRef, useState, useCallback } from "react";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { IndividualSticker } from "./IndividualSticker";
import Beach from "./stickers/beach.png"
import By from "./stickers/by.png"
import From from "./stickers/from.png"
import In from "./stickers/in.png"
import Summer from "./stickers/summer.png"
import Watermelon from "./stickers/watermelon.png"



export default function Drag({upImg}) {
  const stageRef = React.useRef(null);
  const [background] = useImage(upImg);
  const [images, setImages] = useState([]);

  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    
  }
 
  
  
  const stickersData = [
    {
      url: Beach,
      width: 100,
      alt: "Beach"
    },
    {
      url: By,
      width: 150,
      alt: "By"
    },
    {
      url: From,
      width: 60,
      alt: "From"
    },
    {
      url: In,
      width: 100,
      alt: "In"
    },
    {
      url: Summer,
      width: 150,
      alt: "Summer"
    },
    {
      url: Watermelon,
      width: 60,
      alt: "Watermelon"
    }
  ];
  

  const addStickerToPanel = ({ src, width, x, y }) => {
    setImages((currentImages) => [
      ...currentImages,
      {
        width,
        x,
        y,
        src,
        resetButtonRef: createRef()
      }
    ]);
  };

  const resetAllButtons = useCallback(() => {
    images.forEach((image) => {
      if (image.resetButtonRef.current) {
        image.resetButtonRef.current();
      }
    });
  }, [images]);

  const handleCanvasClick = useCallback(
    (event) => {
      if (event.target.attrs.id === "backgroundImage") {
        resetAllButtons();
      }
    },
    [resetAllButtons]
  );
  const handleExport = () => {
     const uri = stageRef.current.toDataURL();
     console.log(uri);
     downloadURI(uri, 'stage.png');

  };

  

  return (
    <div>
     
      <Stage
        width={600}
        height={400}
        onClick={handleCanvasClick}
        onTap={handleCanvasClick}
        ref={stageRef}
      >
        <Layer>
          <KonvaImage
            image={background}
            height={400}
            width={600}
            id="backgroundImage"
          />
          {images.map((image, i) => {
            return (
              <IndividualSticker
                onDelete={() => {
                  const newImages = [...images];
                  newImages.splice(i, 1);
                  setImages(newImages);
                }}
                onDragEnd={(event) => {
                  image.x = event.target.x();
                  image.y = event.target.y();
                }}
                key={i}
                image={image}
              />
            );
          })}
        </Layer>
      </Stage>
      
      {stickersData.map((sticker) => {
        return (
          <button
            className="button"
            onMouseDown={() => {
              addStickerToPanel({
                src: sticker.url,
                width: sticker.width,
                x: 100,
                y: 100
              });
            }}
          >
            <img alt={sticker.alt} src={sticker.url} width={sticker.width} />
          </button>
        );
      })}
       
      <button onClick={handleExport}>Download</button>
    </div>
  );
}

