'use strict';

// setTimeOut
const gallery=document.querySelector('.gallery');
const galleryUlLi=document.querySelectorAll('.gallery>ul>li');
const centerBtn=document.querySelector('.centerBtn');
const arrow=document.querySelectorAll('.arrow');

const arrBg=[];
for(let i=0;i<galleryUlLi.length;i++){
  arrBg.push(`url(img/img${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background=arrBg[i];
}

let i=-1;

function autoGallery(){
  i++;
  console.log(`i -> ${i}`);
  //이동거리
  const gap=galleryUlLi[1].offset-galleryUlLi[0];
  const goto=(-i*gap)+'px';

  gallery.style.left=goto;
  gallery.style.transition='all 0.5s';

  // console.log(`gap -> ${gap}, goto-> ${goto}`);

  if(i>=galleryUlLi.length-1) i=-1;

  // setTimeout(autoGallery, 3000); //
}
//3초 마다 0 1234,,,,
let setIn=setInterval(autoGallery, 3000);

// centerBtn.addEventListener('mouseover', (e)=>{
//   if(e.target==e){
//     clearInterval(setIn);
//   }
// });

// (function(){
//   autoGallery();
// })();


// let j=-1;
//3초 후에 1번만 실행
// setTimeout(()=>{
//   j++;
//   console.log(`j-> ${j}`)
// },3000);

(()=> autoGallery())();