noseX=0;
noseY=0;
function preload() {
   
}

function setup() {
Canva=createCanvas(500,500);
Canva.position(500,195);
video=createCapture(VIDEO);
video.hide()
poses=ml5.poseNet(video,posing)
poses.on('pose',loco)
}

function draw() {
 
}


function posing() {
 console.log("ready!")   
}
function loco(results) {
    if (results.length>0) {
        console.log(results); 
         noseX=results[0].pose.nose.x-79;
         noseY=results[0].pose.nose.y+10;
        console.log("x="+noseX);
        console.log("y="+noseY);
    }
    else{
    console.log("NOPE, Unblock your camera");
    }
}