import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"


function Nav({upImg,setActive,setImageData}) {
    
      const Left = () => {
        setActive("left_rotate");
        Yuvi();
      };
      const Right = () => {
        setActive("right_rotate");
        Yuvi();
      };
      const upSide = () => {
        setActive("up_rotate");
        Yuvi();
      };
      const Down = () => {
        setActive("down_rotate");
        Yuvi();
      };
      const Bright = () => {
        setActive("brightness");
        Yuvi();
      };
    
      const Blur = () => {
        setActive("blur");
        Yuvi();
      };
      const Contrast = () => {
        setActive("contrast");
        Yuvi();
      };
      const Grayscale = () => {
        setActive("grayscale");
        Yuvi();
      };
      const Huerotate = () => {
        setActive("huerotate");
        Yuvi();
      };
      const Invert = () => {
        setActive("invert");
        Yuvi();
      };
      const Opacity = () => {
        setActive("opacity");
        Yuvi();
      };
      const Saturate = () => {
        setActive("saturate");
        Yuvi();
      };
      const Sepia = () => {
        setActive("sepia");
        Yuvi();
      };
      const Shadow = () => {
        setActive("shadow");
        Yuvi();
      };
      const ClickTheme = () => {
        
        Yuvi();
        
      };
      const Yuvi =  () => {
        fetch("http://localhost:4500/api/upload", {
          method: "POST",
          body: JSON.stringify({ data: upImg }),
          headers: { "Content-Type": "application/json" },
        })
          .then((result) => result.json())
          .then((data) => {
            console.log(data.savedImage)
            setImageData(data.savedImage)
            
          });
          
      };
    return (
        <div>
            <div className="navlinks">
              <Link to="/sepia"><button onClick={Sepia} >Sepia</button></Link>
            <Link to="/blur"><button  onClick={Blur}>Blur</button></Link>
            <Link to="/bright"><button onClick={Bright}>Bright</button></Link>
            <Link to="/grayscale"><button onClick={Grayscale}>GrayScale</button></Link>
            <Link to="/opacity"><button onClick={Opacity}>Opacity</button></Link>
            <Link to="/contrast"><button onClick={Contrast}>Contrast</button></Link>
            <Link to="/huerotate"><button onClick={Huerotate}>Huerotate</button></Link>
            <Link to="/invert"><button onClick={Invert}>invert</button></Link>
            <Link to="/saturate"><button onClick={Saturate}>Saturate</button></Link>
            <Link to="/shadow"><button onClick={Shadow}>Shadow</button></Link>
            <Link to="/left"><button onClick={Left}>Left</button></Link>
            <Link to="/right"><button onClick={Right}>Right</button></Link>
            <Link to="/up"><button onClick={upSide}>Up</button></Link>
            <Link to="/Down"><button onClick={Down}>Down</button></Link>
            <Link to="/crop"><button>Crop</button></Link>
            <Link to="/sticker"><button>Sticker</button></Link>
            <Link to="/theme"><button onClick={ClickTheme}>Theme</button></Link>
            </div>
            
            
            
            
            
        </div>
    )
}

export default Nav
