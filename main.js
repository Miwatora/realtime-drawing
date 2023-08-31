function setup() {
    video =  createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(490, 480);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized! ');
}

function draw() {
    background('#CCE2CB')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}