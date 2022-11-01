camera = document.getElementById("camera");
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/L5MzVk9qs/model.json', modelLoaded);
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');

function ImageCapture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="capture_img" src="' + data_uri +'">'     
    })
}
console.log("ml5 version :", ml5.version);
function modelLoaded(){
    console.log("Model has now been loaded.")
}
