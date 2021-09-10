import React from "react";
import "./Filter-Style/Theme.css";
import Artboard2 from "../Main-UI/theme/Artboard 2.png";

function Theme({ upImg, active, imageData }) {
  const ChangeTheme = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/merge/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div>
      <div className="theme">
        <img className="box" src={Artboard2} alt=""></img>
        <img className="photo" src={upImg} alt=""></img>
      </div>

      <button onClick={ChangeTheme} className="download">
        Download
      </button>
    </div>
  );
}

export default Theme;
