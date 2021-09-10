import React,{useState} from 'react'
import "./Filter-Style/Bright.css";

function Bright({upImg,active,imageData}) {
  
  const ChangeBright = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/bright/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
        
            <button onClick={ChangeBright} className="download">Download</button>
        </div>
    )
}

export default Bright
