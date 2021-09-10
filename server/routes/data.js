const express = require("express");
const router = express.Router();
const controller = require("../controller/upload");
const controll = require("../controller/image");
router.get("/image/:id", controller.getUpload); //getimage
router.get("/img/:id", controll.getdata); //Download
router.get("/invert/:id", controll.getinvert); //invert
router.get("/bright/:id", controll.getbrightness); //brightness
router.get("/contrast/:id", controll.getcontrast); //contrast
router.get("/blur/:id", controll.getblur); //blur
router.get("/sepia/:id", controll.getsepia); //sepia
router.get("/opacity/:id", controll.getopacity); //opacity
router.get("/saturate/:id", controll.getsaturate); //saturate
router.get("/hue/:id", controll.gethue); //hue
router.get("/shadow/:id", controll.getshadow); //shadow
router.get("/left/:id",controll.getleft)//left
router.get("/right/:id",controll.getright)//right
router.get("/down/:id",controll.getdown)//down
router.get("/up/:id",controll.getup)//up
router.get("/merge/:id",controll.getmerge)

module.exports = router;

