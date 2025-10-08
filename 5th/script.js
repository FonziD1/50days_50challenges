const loadText = document.querySelector('.loading-text');
const bg = document.querySelector(".bg");

const load = 0;

function blurring(){
    load++;
    if(laod > 99)
    

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num-in_min) * (out_max-out_min) / (in_max - in_min) + out_min;
}

let int = setInterval(blurring, 30);