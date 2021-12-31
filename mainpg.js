user_name = localStorage.getItem("User_Name");

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100,80)
    canvas = createCanvas(550, 500);
    canvas.position(800,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        console.log(results);
    }
}