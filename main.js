console.log("The js file is run");
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hoaur = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    // console.log(hoaur,":",min,":",sec,"pm");
	am_pm = " AM";

	if (hoaur > 12) {
		hoaur -= 12;
		am_pm = " PM";
	}
	if (hoaur == 0) {
		hr = 12;
		am_pm = " AM";
	}

	let currentTime = hoaur + ":"
			+ min + ":" + sec + am_pm;

	// document.getElementById("clock")
	// 		.innerHTML = currentTime;
            
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
