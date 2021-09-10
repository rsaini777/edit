import React,{useState} from 'react'
import "./Filter-Style/Huerotate.css";

function Huerotate({upImg,active,imageData}) {
  
  const ChangeHeurotate = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/huerotate/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
         
            <button onClick={ChangeHeurotate} className="download">Download</button>
        </div>
    )
}

export default Huerotate
