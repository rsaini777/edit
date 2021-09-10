import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./Image.css";
import Drag from "../Sticker-UI/Draggable";
import Artboard2 from "./theme/Artboard 2.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function generateDownload(canvas, crop) {
  if (!crop || !canvas) {
    return;
  }

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

export default function Image() {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [active, setActive] = useState();
  const [croping, setCroping] = useState(false);
  const [sticker, setSticker] = useState(false);
  const [theme, setTheme] = useState(false);

  const [fileInputState, setFileInputState] = useState("");
  const [imageData,setImageData]=useState({});
  
  


  const ChangeLeft = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/left/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeRight = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/right/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeDown = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/down/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeUp = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/up/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeImg = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/img/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeInvert = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/invert/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeBright = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/bright/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeContrast = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/contrast/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeBlur = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/blur/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeSepia = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/sepia/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeOpacity = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/opacity/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeSaturate = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/saturate/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeHue = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/hue/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeShadow = () => {
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/shadow/${id}`;
    document.body.appendChild(link);
    link.click();
  };
  const ChangeTheme=()=>{
    const id = imageData._id;
    var image = "file.jpg";
    var link = document.createElement("a");
    link.download = image;
    link.href = `http://localhost:4500/api/merge/${id}`;
    document.body.appendChild(link);
    link.click();

  }
  const ClickTheme = () => {
    setTheme(true);
    Yuvi();
    
  };
  const ClickCrop = () => {
    setCroping(true);
  };
  const ClickSticker = () => {
    setSticker(true);
  };
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
 



  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    setFileInputState(e.target.value);

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(file);
    }
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

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  return (
    <div class="bg-gradient-to-r from-green-400 to-blue-500 ...">
      <Router>
        <div className="App">
          <div class="flex  items-center justify-center bg-grey-lighter">
            <label class="w-40 flex flex-col items-center px-2 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">Select a file</span>

              <input
                style={{ display: "none" }}
                type="file"
                value={fileInputState}
                name="image"
                onChange={onSelectFile}
              />
            </label>
          </div>

          <div>
            <br />
            <br />

            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={Left}
              >
                <Link to="/left">
                  {" "}
                  <i class="fas fa-undo"></i>
                </Link>
              </button>
            ) : (
              <h2
                class="text-lg ..."
                class="font-black ..."
                class="font-mono ..."
              >
                provide image
                <span>
                  <i class="fas fa-image"></i>
                </span>
              </h2>
            )}
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={Right}
              >
                <Link to="/right">
                  <i class="fas fa-redo-alt"></i>
                </Link>
              </button>
            ) : null}
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={upSide}
              >
                <Link to="/upSide">
                  {" "}
                  <i class="fas fa-long-arrow-alt-up"></i>
                </Link>
              </button>
            ) : null}
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={Down}
              >
                <Link to="/down">
                  {" "}
                  <i class="fas fa-long-arrow-alt-down"></i>
                </Link>
              </button>
            ) : null}
            <br />
            <br />
            <div className="filter">
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Bright}
                >
                  <Link to="/bright">Bright</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Blur}
                >
                  <Link to="/blur">Blur</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Contrast}
                >
                  <Link to="/contrast">Contrast</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Grayscale}
                >
                  <Link to="/grayscale">Grayscale</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Huerotate}
                >
                  <Link to="/huerotate">Huerotate</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Invert}
                >
                  <Link to="/invert">Invert</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={Opacity}
                >
                  <Link to="/opacity">Opacity</Link>
                </button>
              ) : null}{" "}
              {upImg ? (
                <button
                  class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                  onClick={Saturate}
                >
                  <Link to="/saturate"> Saturate</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                  onClick={Sepia}
                >
                  <Link to="/sepia">Sepia</Link>
                </button>
              ) : null}
              {upImg ? (
                <button
                  class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                  onClick={Shadow}
                >
                  <Link to="/shadow">Shadow</Link>
                </button>
              ) : null}
            </div>
          </div>
          <br />
          <div className="crop">
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={ClickCrop}
              >
                <Link to="/crop">Crop</Link>
              </button>
            ) : null}
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={ClickSticker}
              >
                <Link to="/stick">Sticker</Link>
              </button>
            ) : null}
          </div>
          <div className="theme">
            {upImg ? (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={ClickTheme}
              >
                <Link to="/theme">Add theme</Link>
              </button>
            ) : null}
          </div>
          <div class=" static ... space-x-4 flex items-start ...  mx-auto ...">
            <div class="object-fill static ...">
              <Switch>
                <Route path="/home">
                  <img className={active} src={upImg} alt=""></img>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/left">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeLeft}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/right">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeRight}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/upSide">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeDown}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/down">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeUp}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/blur">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeBlur}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/bright">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeBright}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/contrast">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeContrast}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/grayscale">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeImg}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/huerotate">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeHue}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/invert">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeInvert}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/opacity">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeOpacity}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/saturate">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeSaturate}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/sepia">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeSepia}>Download</button>
                </Route>
              </Switch>
            </div>{" "}
            <div class="object-fill static ...">
              <Switch>
                <Route path="/shadow">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeShadow}>Download</button>
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/stick">
                  <Drag upImg={upImg} />
                </Route>
              </Switch>
            </div>
            <div class="object-fill static ...">
              <Switch>
                <Route path="/theme">
                  <img className={active} src={upImg} alt=""></img>
                  <button className="download" onClick={ChangeTheme}>Download</button>
                </Route>
              </Switch>
            </div>
           
            <div class="object-fill static ...">
              <Switch>
                <Route path="/crop">
                  <ReactCrop
                    className={active}
                    src={upImg}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                  />
                </Route>
              </Switch>
            </div>
            <div class="inline-block ..." className="example">
              {theme ? <img className="img" src={Artboard2}></img> : null}

              <canvas
                className={active}
                className="overlay"
                ref={previewCanvasRef}
                style={{
                  width: Math.round(completedCrop?.width ?? 0),
                  height: Math.round(completedCrop?.height ?? 0),
                }}
              />
            </div>
          </div>

          <p class="text-lg ..." class="font-black ..." class="font-mono ...">
            Download changed image
          </p>
       
          
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            type="button"
            disabled={!completedCrop?.width || !completedCrop?.height}
            onClick={() =>
              generateDownload(previewCanvasRef.current, completedCrop)
            }
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </Router>
    </div>
  );
}
