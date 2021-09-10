import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./Image.css";
import Nav from "./Nav";
import Sepia from "./Filters-UI/Sepia";
import Blur from "./Filters-UI/Blur";
import Bright from "./Filters-UI/Bright";
import Contrast from "./Filters-UI/Contrast";
import Down from "./Filters-UI/Down";
import Grayscale from "./Filters-UI/GrayScale";
import Huerotate from "./Filters-UI/Huerotate";
import Invert from "./Filters-UI/Invert";
import Left from "./Filters-UI/Left";
import Opacity from "./Filters-UI/Opacity";
import Right from "./Filters-UI/Right";
import Saturate from "./Filters-UI/Saturate";
import Shadow from "./Filters-UI/Shadow";
import Up from "./Filters-UI/Upside";
import Theme from "./Filters-UI/Theme";
import Sticker from "./Sticker-UI/Draggable";
import Crop from "./Main-UI/Crop";

import ImageData from "./ImageData";
function Image({ upImg }) {
  const [active, setActive] = useState();
  const [imageData, setImageData] = useState({});

  return (
    <div className="Image_app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="testing">
              <div className="testing1">
                {upImg ? (
                  <Nav
                    setActive={setActive}
                    setImageData={setImageData}
                    active={active}
                    imageData={imageData}
                    upImg={upImg}
                  />
                ) : null}
              </div>
              <div className="testing2">
                <ImageData upImg={upImg} />
              </div>
            </div>
          </Route>
          <Route path="/sepia" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Sepia
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/blur" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Blur
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/bright" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Bright
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/contrast" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Contrast
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/down" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Down
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/grayscale" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Grayscale
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/huerotate" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Huerotate
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/invert" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Invert
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/left" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Left
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/opacity" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Opacity
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/right" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Right
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/saturate" exact>
            <div className="testing">
              {" "}
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Saturate
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/shadow" exact>
            <div className="testing">
              {" "}
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Shadow
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/up" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Up
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>
          <Route path="/crop" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Crop upImg={upImg} />
              </div>
            </div>
          </Route>
          <Route path="/sticker" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Sticker upImg={upImg} />
              </div>
            </div>
          </Route>
          <Route path="/theme" exact>
            <div className="testing">
              <div className="testing1">
                <Nav
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
              <div className="testing2">
                <Theme
                  setActive={setActive}
                  setImageData={setImageData}
                  active={active}
                  imageData={imageData}
                  upImg={upImg}
                />
              </div>
            </div>
          </Route>

          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default Image;
