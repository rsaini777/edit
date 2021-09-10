var jimp = require('jimp');
const Upload = require("../model/upload");
const axios =require("axios")

const controller={
    getdata:async (req,res)=>{
         res.type('jpg');
         const image=await Upload.findById({_id:req.params.id})
         const id=image._id
         
         axios({
             method:"GET",
             url:`http://localhost:4500/api/image/${id}`
         })
         .then(result=>{
             const data=result.data.image
              jimp.read(data, (err, lenna) => { //url
                if (err) throw err; 
                lenna.resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write('output.jpg', res.download('output.jpg')); // save
            });
         })
         .catch(err=>{
             console.log(err)
         })
         
    
    
    },
    getinvert:async (req,res)=>{
        res.type('jpg');
        const image=await Upload.findById({_id:req.params.id})
        const id=image._id
        
        axios({
            method:"GET",
            url:`http://localhost:4500/api/image/${id}`
        })
        .then(result=>{
            const data=result.data.image
             jimp.read(data, (err, lenna) => { //url
               if (err) throw err; 
               lenna.resize(256, 256) // resize
               .quality(60) // set JPEG quality
               .invert() // set invert
               .write('invert.jpg', res.download('invert.jpg')); // save
           });
        })
        .catch(err=>{
            console.log(err)
        })
        
   
   
   },
   getbrightness:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
           .brightness(.5 ) // set invert
           .write('brightness.jpg', res.download('brightness.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getcontrast:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
           .contrast(.5 ) // set invert
           .write('contrast.jpg', res.download('contrast.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getblur:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
           .blur(4) // set blur
           .write('blur.jpg', res.download('blur.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getsepia:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
           .sepia( ) // set sepia
           .write('sepia.jpg', res.download('sepia.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getopacity:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
           .opacity(.5 ) // set invert
           .write('opacity.jpg', res.download('opacity.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},

getsaturate:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .color([{apply:'saturate', params: [50]}])// set saturate
           .write('saturate.jpg', res.download('saturate.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
gethue:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .color([{apply:'hue', params: [50]}])// set saturate
           .write('hue.jpg', res.download('hue.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getleft:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .rotate(90)// set saturate
           .write('left.jpg', res.download('left.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getshadow:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/left/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .fade()// set saturate
           .write('shadow.jpg', res.download('shadow.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getright:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .rotate(270)// set saturate
           .write('right.jpg', res.download('right.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getdown:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .rotate(180)// set saturate
           .write('down.jpg', res.download('down.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getup:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        const data=result.data.image
         jimp.read(data, (err, lenna) => { //url
           if (err) throw err; 
           lenna.resize(256, 256) // resize
           .quality(60) // set JPEG quality
            
           .rotate(360)// set saturate
           .write('up.jpg', res.download('up.jpg')); // save
       });
    })
    .catch(err=>{
        console.log(err)
    })
    


},
getmerge:async (req,res)=>{
    res.type('jpg');
    const image=await Upload.findById({_id:req.params.id})
    const id=image._id
    
    axios({
        method:"GET",
        url:`http://localhost:4500/api/image/${id}`
    })
    .then(result=>{
        var datas=result.data.image
        var images=["images/art.png",datas];
        var jimps=[];
        for(var i=0;i<images.length;i++){
            jimps.push(jimp.read(images[i]));
        }
        
        Promise.all(jimps).then(function(data){
            return Promise.all(jimps);
        }).then(function(data){
            data[1]=data[1].resize(1020,800);
           
            data[0].composite(data[1],30,30);
        
        
            data[0].write('test.png',res.download("test.png"))
        
        })
    })
    .catch(err=>{
        console.log(err)
    })
    


},


}



module.exports=controller