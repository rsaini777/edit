import React,{useState} from 'react'
import "./Filter-Style/Invert.css";

function Invert({upImg,active,imageData}) {
  
  const ChangeInvert = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/invert/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
            
            <button onClick={ChangeInvert} className="download">Download</button>
        </div>
    )
}

export default Invert
