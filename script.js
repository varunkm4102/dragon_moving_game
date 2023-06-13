score = 0;
cross = true;

audio = new Audio("music.mp3");
adioGo = new Audio("gameover.mp3");
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    if(e.keyCode==38){
        dino = document.querySelector(".dino");
        dino.classList.add("animatedDino");
        setTimeout(() =>{
            dino.classList.remove("animatedDino");
        },700)
    }
    if(e.keyCode==39){
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));  
        dino.style.left = dinox + 122+ "px";    
    }
    if(e.keyCode==37){
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));  
        dino.style.left = dinox - 122+ "px";    
    }
    
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obsticle = document.querySelector(".obsticle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue("top"));

    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    console.log(offsetx,offsety);
    if(offsetx< 90 && offsety<52){
        gameOver.style.visibility = "visible";
        obsticle.classList.remove("obsticleAni");
        dino.classList.remove("animatedDino");
        adioGo.play(); 
        setTimeout(() =>{
            adioGo.pause();
            audio.pause();  
        })
    }else if(offsetx< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue("animation-duration"));
        newDur = aniDur - 0.8;
        obsticle.style.animationDuration = newDur + "s";
        },500);
    }
},10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: "+ score;
}