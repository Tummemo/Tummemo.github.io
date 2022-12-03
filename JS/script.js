
let i = [];
function storeID(i){
let lastItem = i[i.length-1];
let activeColor = document.getElementById(i.length-1);
activeColor.classList.add('active');
let previousActive = document.getElementById(i[i.length]);
previousActive.classList.add('nonactive');
}

function encoding(idCode){


let vid = document.getElementById(idCode);


let src = vid.children[0].getAttribute('src');


let mainVideo = document.getElementById("main");


let mainSrc = mainVideo.children[0].getAttribute('src');


let activeVideo = document.getElementById('act'); 

let listVideo = document.querySelectorAll('.video-list .vid');


let title = vid.children[1].innerHTML;

let activeVid = document.querySelector(".vid");
activeVid.classList.remove("active");


mainVideo.children[0].src = src ;
mainVideo.children[1].innerHTML = title ;

i += " "+idCode;

storeID(i);

} 




