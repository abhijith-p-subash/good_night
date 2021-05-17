

$("#myform").submit(function(event){
   event.preventDefault();
   var input_text = $("#name").val();
   alert("Turn up the volume");
   var audio = new Audio("omk.mp3");
   if(audio.pause){
    audio.play();
   }
   else if(audio.play){
       audio.pause();
   }
   
   $("#vlm_alert").html("Please Turn up the Volume").fadeIn(3000).fadeOut(10000)
   $("h2").html("");
   $("h1").html("Good Night "+input_text).fadeOut(50000).fadeIn(10000);
})

$("#ear").click(function(){
    alert("Use Earphones for Better Experience");
})

