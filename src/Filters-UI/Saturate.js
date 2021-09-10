import React,{useState} from 'react'
import "./Filter-Style/Saturate.css"

function Saturate({upImg,active,imageData}) {

  const ChangeSaturate = () => {
     const id = imageData._id;
     var image = "file.jpg";
     var link = document.createElement("a");
     link.download = image;
     link.href = `http://localhost:4500/api/saturate/${id}`;
     document.body.appendChild(link);
     link.click();
   };
    return (
        <div>
            <img className={active} src={upImg} alt=""></img>
          
            <button onClick={ChangeSaturate} className="download">Download</button>
        </div>
    )
}

export default Saturate
