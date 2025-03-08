
score = 0;
cross = true;
audio = new Audio('Sneaky-Snitch.mp3');
audiogo = new Audio('breeze-of-blood-122253.mp3');
jump = new Audio('Untitled video - Made with Clipchamp.mp4')

setTimeout(() => {
   audio.play()
}, 1000)
document.onkeydown = function (e) {
    console.log("Key Code is:", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino")
        jump.play();
        setTimeout(() => {
            dino.classList.remove("animateDino")
            jump.pause();
        }, 700)
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox - 112 + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstracale = document.querySelector('.obstracale');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstracale, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstracale, null).getPropertyValue('top'))
    ofsetx = Math.abs(dx - ox);

    ofsety = Math.abs(dy - oy);
    if (ofsetx < 73 && ofsety < 52) {
        gameOver.style.visibility = "visible";
        obstracale.classList.remove("obstracaleAni")
        audiogo.play('breeze-of-blood-122253.mp3')
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
         }, 1000)
    }
    else if (ofsetx < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstracale, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstracale.style.animationDuration = newDur + "s";
            console.log("New anim=",newDur)
        }, 500)

    }
}, 20)
function updatescore(score) {
    scorecount.innerHTML = "YOUR SCORE:" + score
}