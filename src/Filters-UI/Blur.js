import React,{useState} from 'react'
import "./Filter-Style/Blur.css";

function Blur({upImg,active,imageData}) {
    
     const ChangeBlur = () => {
        const id = imageData._id;
        var image = "file.jpg";
        var link = document.createElement("a");
        link.download = image;
        link.href = `http://localhost:4500/api/blur/${id}`;
        document.body.appendChild(link);
        link.click();
      };
   
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
            
            <button onClick={ChangeBlur} className="download">Download</button>
            
        </div>
    )
}

export default Blur
