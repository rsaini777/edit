import React,{useState} from 'react'
import "./Filter-Style/Up.css";

function Upside({upImg,active,imageData}) {
  
  const ChangeUp = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/up/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div className="upside">
            <img className={active} src={upImg} alt=""></img>

            <div className="right_buttons">
            <button onClick={ChangeUp} className="download">Download</button>
            
            </div>
            
        </div>
    )
}

export default Upside
