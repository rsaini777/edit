import React,{useState} from 'react'
import "./Filter-Style/Right.css";

function Right({upImg,active,imageData}) {
  
  const ChangeRight = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/right/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
          
            <button onClick={ChangeRight} className="download">Download</button>
        </div>
    )
}

export default Right
