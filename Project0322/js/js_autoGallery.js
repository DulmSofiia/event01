'use strict';

const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');
const itemsLi=document.querySelectorAll('.items>ul>li');

// galleryLi 각각 for,배열, push을 이용해서 배경이미지를 설정
const arrBg=[];
for(let i=0;i<galleryLi.length;i++){
  arrBg.push(`url(img/img${i}.jpg) no-repeat 50%/cover`);
  galleryLi[i].style.background=arrBg[i];
}

let i=-1;

function autoGallery(){
  i++;
  //이동 기준 거리(한아의 li의 너비)
  const gap=galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
  //gallery 가 이동
  const goto = (-i*gap)+'px';
  
  console.log(`i ${i}, gap ${gap}, goto ${goto}`);

  gallery.style.left = goto;
  gallery.style.transition='all 1s';
  

  // itemsLi.forEach((el,idx)=>{
  //   console.log(el,idx);
  //   if(idx===i){
  //     el.classList.add
  //   }
  // });
  //li 마지막 번지를 보이고 다시 처음으로 돌아가서
  // 반복실행 조건문 설정
  // if(i >= 4) i=-1;
  if(i>=galleryLi.length-1) i=-1;

}
//3초마다 autoGallery 실행 setInterval
setInterval(autoGallery, 3000);

(()=>{
  autoGallery();
})();