let hr=document.querySelector('#hrs')
let mn=document.querySelector('#min')
let sc=document.querySelector('#sec')



setInterval(()=>{

let day=new Date();
let hh=day.getHours()*30;
let mm=day.getMinutes()*6;
let ss=day.getSeconds()*6;
hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform=`rotateZ(${mm}deg)`;

sc.style.transform=`rotateZ(${ss}deg)`;








//Digitial clock

let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');
let ampm=document.getElementById('ampm');


let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
var am = h >=12 ? 'PM':'AM';
if (h>12) {
	h=h-12;
}
h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(s<10)?"0"+s:s;

hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
ampm.innerHTML=am;




});



