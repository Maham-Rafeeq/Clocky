let currenttime = () => {
  let newdate = new Date();
  let hours = newdate.getHours();
  let minutes = newdate.getMinutes();
  let seconds = newdate.getSeconds();
  let ampm = hours >= 12 ? 'PM' :'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  let h = hours.toString().padStart(2, '0');
  let m = minutes.toString().padStart(2, '0');
  let s = seconds.toString().padStart(2, '0');

  let finaltime = `${h}:${m}:${s} ${ampm}`;
  
  document.getElementById("mytime").textContent =finaltime;
}
currenttime();
setInterval(currenttime, 1000);