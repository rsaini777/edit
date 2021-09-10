import React,{useState} from 'react'
import "./Filter-Style/Left.css";

function Left({upImg,active,imageData}) {
  
  const ChangeLeft = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/left/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
       
            <button onClick={ChangeLeft} className="download">Download</button>
        </div>
    )
}

export default Left
