import React,{useState} from 'react'
import "./Filter-Style/Down.css";

function Down({upImg,active,imageData}) {
  
  const ChangeDown = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/down/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
      
            <button onClick={ChangeDown} className="download">Download</button>
        </div>
    )
}

export default Down
