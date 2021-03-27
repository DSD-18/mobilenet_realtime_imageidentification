function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modalloaded);
}
function draw(){
  image(video,0,0,300,250)
  classifier.classify(video,gotResult); 
}
function modalloaded(){
  console.log("Modal is loaded")
}
function gotResult(error,result){
    if(error){
      console.log(error);
    }
    else {
      console.log(result)
      document.getElementById("Result_object").innerHTML = result[0].label;
      document.getElementById("Result_Accuracy").innerHTML = result[0].confidence.toFixed(2);
    }

}