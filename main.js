console.log("The js file is run");
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
    time.toLocaleString({hour12:true});
	let hoaur = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let s= time.getTimezoneOffset();
    console.log(time);
    // let dd = time.getTime();
    // console.log(dd,'time');

	am_pm = " AM";

	if (hoaur > 12) {
		am_pm = " PM";
	}
	if (hoaur == 0) {
		am_pm = " AM";
	}
   
    document.getElementById("hour")
			.innerHTML = hoaur;
            
                 
    document.getElementById("min")
    .innerHTML = min;
                       
    document.getElementById("sec")
    .innerHTML = sec;
                
    document.getElementById("am-pm")
			.innerHTML = am_pm;
            
            
}
showTime();

