const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEL = document.getElementById("ampm")

function updateClock()
{
 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();
 let ampm = "AM";

 if(h > 12) 
{
  ampm = "PM";
}
 /* if(h < 10)
 if(m < 10)
 if(s < 10) */

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

/* {
  h = "0" + h;
  m = "0" + m;
  s = "0" + s;
}
 */ hourEL.innerText = h;
 minutesEL.innerText= m;
 secondEl.innerText= s;
 ampmEL.innerText= ampm;
setTimeout(() => { updateClock()}, 1000);

}

updateClock();
//setInterval(updateClock, 1000)

