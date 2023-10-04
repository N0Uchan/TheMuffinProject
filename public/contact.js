const buttons = document.querySelectorAll(".meowSoundButtons");

for(var i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        var innerText = this.innerHTML;
        
        playAudio(innerText);
        buttonAnimation(innerText);

        
    });
}

function buttonAnimation(btnElement){
    switch(btnElement){
        case "a":
            var clickedButton = document.querySelector("."+btnElement);
            clickedButton.classList.add("pressed");
            setInterval(function(){clickedButton.classList.remove("pressed")},1000);
            break;

        case "b":
            var clickedButton = document.querySelector("."+btnElement);
            clickedButton.classList.add("pressed");    
            document.getElementById("alertVol").innerHTML="Increase volume if u aren't able to hear the purr being played ;)";        
            setInterval(function(){
                clickedButton.classList.remove("pressed");
                document.getElementById("alertVol").innerHTML="";                
            },5200);
            break;

        case "c":
            var clickedButton = document.querySelector("."+btnElement);
            clickedButton.classList.add("pressed");
            setInterval(function(){clickedButton.classList.remove("pressed")},9300);
            break;

        case "d":
            var clickedButton = document.querySelector("."+btnElement);
            clickedButton.classList.add("pressed");
            clickedButton.setAttribute("id","verb4v2");
            setInterval(function(){
                clickedButton.classList.remove("pressed")
                clickedButton.setAttribute("id","verb4");
            },6200);
            break;

        case "e":
            var clickedButton = document.querySelector("."+btnElement);
            clickedButton.classList.add("pressed");
            clickedButton.classList.add("enlargeAndOverlay");
            clickedButton.setAttribute("id","verb5v2");
            clickedButton.innerHTML="<video id='aokiCatVideo' preload='' autoplay='' muted='' playsinline='' loop=''><source src='../assets/mp4/aokiCatResized.mp4' type='video/mp4'></video>";
            
            setInterval(function(){
                clickedButton.classList.remove("enlargeAndOverlay");
                clickedButton.classList.remove("pressed");
                clickedButton.setAttribute("id","verb5");
                clickedButton.innerHTML="e";               
            },15400);
            break;
    }
}

function playAudio(btnElement){
    switch(btnElement){
        case "a":
            const aud1 = new Audio("../assets/mp3/meow.mp3");
            aud1.play()
            break;
        case "b":
            const aud2 = new Audio("../assets/mp3/catPurr.mp3");
            aud2.play()
            // setTimeout(function(){alert("Increase volume to max if u couldn't hear this one.")} , 5000);                       
            break;
        case "c":
            const aud3 = new Audio("../assets/mp3/aloneCat.mp3");
            aud3.play()
            break;
        case "d":
            const aud4 = new Audio("../assets/mp3/bnnCat.mp3");
            aud4.play()
            break;
        case "e":
            const aud5 = new Audio("../assets/mp3/aokiCat.mp3");
            aud5.play()
            break;
        default:
            alert("broken links, get better....");
    }
}