import React,{useState} from 'react'
import "./Filter-Style/Shadow.css";

function Shadow({upImg,active,imageData}) {
 
  const ChangeShadow = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/shadow/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
         
            <button onClick={ChangeShadow} className="download">Download</button>
        </div>
    )
}

export default Shadow
