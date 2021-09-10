import React,{useState} from 'react'
import "./Filter-Style/GrayScale.css";

function GrayScale({upImg,active,imageData}) {
  
     const ChangeGrayScale = () => {
        const id = imageData._id;
        var image = "file.jpg";
        var link = document.createElement("a");
        link.download = image;
        link.href = `http://localhost:4500/api/grayscale/${id}`;
        document.body.appendChild(link);
        link.click();
      };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
      
            <button  onClick={ChangeGrayScale} className="download">Download</button>
        </div>
    )
}

export default GrayScale
