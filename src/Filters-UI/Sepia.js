import React,{useState} from 'react'
import "./Filter-Style/Sepia.css";

function Sepia({upImg,active,imageData}) {
 
  const ChangeSepia = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/sepia/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
           
            <button onClick={ChangeSepia} className="download">Download</button>
        </div>
    )
}

export default Sepia
