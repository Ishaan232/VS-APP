var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function work(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var x=event.results[0][0].transcript;
    console.log(x);
    document.getElementById("textbox").innerHTML = x;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var Utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utter_this);
    Webcam.attach("camera");
    setTimeout(function(){
 takesnapshot();
 save();
    },5000);
}
camera=document.getElementById(camera);
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 function takesnapshot(){
    Webcam.snap(function(anynameofyourchoice){
       document.getElementById("result").innerHTML='<img id="anyidofyourchoice" src="'+anynameofyourchoice+'"/>';
    });
 }
 function save(){
   ex=document.getElementById("voice");
   somethingisback=document.getElementById("anyidofyourchoice").src;
   ex.href=somethingisback;
   ex.click();
 }