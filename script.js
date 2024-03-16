const days=document.querySelector("#q");
const hours=document.querySelector("#w");
const minutes=document.querySelector("#e");
const seconds=document.querySelector("#r");

const currentYear=new Date().getFullYear();
const newYear=new Date(`march 25 ${currentYear} 00:00:00`);

function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(UpdateTime,1000);