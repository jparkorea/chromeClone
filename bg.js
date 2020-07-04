const body = document.querySelector("body");

const IMG_NUM = 8;

function paintImage(ImgNumber){
    const image = new Image();
    image.src = `images/${ImgNumber + 1}.jpg`;
    image.classList.add('bgImage'); 
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM); 
    return number;
}

function init(){
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();