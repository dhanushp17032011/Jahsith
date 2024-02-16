//https://teachablemachine.withgoogle.com/models/mbfA23wpK/

Webcam.set({
    
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90  


});

Camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}

console.log('ml5 version:' , ml5.version);      

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mbfA23wpK/model.json',model_loaded);

function model_loaded()
{
  console.log('Model Loaded!');
}

function speak()
{
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " +prediction_1;
  speak_data_2 = "And the second prediction is " +prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}