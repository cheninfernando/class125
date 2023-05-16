leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(800,800);

    canvas=createCanvas(600,600);
    canvas.position(1000,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx="+leftwristx+" rightwristx=" + rightwristx+" difference="+difference);
    
    }
    }
    
    function modelloaded(){
    console.log('posenet has been initialized')
    }
    
    function draw(){
        background("black");
        textSize(difference);
        stroke("white");
        fill("#f705af");
        text("Hello, I'm Chenin!",50,400)
        document.getElementById("squaresides").innerHTML="The text size is equal to "+difference+" px";
    }