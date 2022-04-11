// https://teachablemachine.withgoogle.com/models/kYGFDUcWA/ this is the teachable machine link

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 95
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src = "'+data_uri+'"/>'
    });
}

// This is to check whther ml5 is connected properly or not//
console.log('ml5 version: ', ml5.version);

// This will import our model in this variable and modelLeaded will start the image classification process.
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kYGFDUcWA/model.json", modelLoaded);

function modelLoaded() {
    console.log("It's working and the model is loaded");
}

function check() {
    img = document.getElementById('capture_image');   
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
console.log(results[0].confidence);
    }
}





































































