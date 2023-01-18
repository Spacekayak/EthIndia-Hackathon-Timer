var x;
var override = false;
var countdownDate;
var end = false;

if (override) {
	countdownDate = new Date("Dec 4, 2022 9:00:00").getTime();
	// countdownDate = new Date("Dec 4, 2022 1:56:00").getTime();
	//alert(countdownDate);
	secondState();
}

// var countdownDate = new Date("Dec 1, 2022 9:00:00").getTime();
var current = localStorage["startTime"];
if (current != undefined && !override) {
	startCountdown();
}
//var countdownDate = new Date("Dec 1, 2022 17:20:00").getTime();

// Update the count down every 1 second
x = setInterval(timerFunction, 1000);

function timerFunction() {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countdownDate - now;
	//alert(Date(countdownDate) + ":" + Date(now));

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	//     + minutes + "m " + seconds + "s ";

	//document.getElementsByClassName("timeinstance")[0].innerHTML = days + "d";
	// document.getElementsByClassName("star")[0].style.transform = "rotate(" + -seconds * 10 + "deg)";

	document.getElementsByClassName("timeinstance")[0].innerHTML =
		24 * days + hours + "h";
	// document.getElementsByClassName("star")[1].style.transform = "rotate(" + -seconds * 10 + "deg)";

	document.getElementsByClassName("timeinstance")[1].innerHTML = minutes + "m";
	// document.getElementsByClassName("star")[2].style.transform = "rotate(" + -seconds * 10 + "deg)";

	document.getElementsByClassName("timeinstance")[2].innerHTML = seconds + "s";
	if (!end)
		document.getElementsByClassName("star")[2].style.transform =
			"rotate(" + -seconds * 10 + "deg)";
	else
		document.getElementsByClassName("star")[2].style.transform = "rotate(0deg)";

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		end = true;

		document.getElementsByClassName("timeinstance")[0].innerHTML = "W";
		// document.getElementsByClassName("star")[0].style.transform = "rotate(" + -seconds * 10 + "deg)";

		document.getElementsByClassName("timeinstance")[1].innerHTML = "R";
		// document.getElementsByClassName("star")[1].style.transform = "rotate(" + -seconds * 10 + "deg)";

		document.getElementsByClassName("timeinstance")[2].innerHTML = "A";
		// document.getElementsByClassName("star")[2].style.transform = "rotate(" + -seconds * 10 + "deg)";

		document.getElementsByClassName("timeinstancestar")[3].style.display =
			"block";
		document.getElementsByClassName("timeinstance")[3].innerHTML = "P";
		document.getElementsByClassName("timertext")[0].innerHTML =
			"And... that's a";
	}
}

function startCountdown() {
	var startTime;
	var current = localStorage["startTime"];

	document.getElementsByClassName("timertext")[0].innerHTML =
		"Time to <br> Submission";
	if (current == undefined) {
		startTime = Date.now();

		localStorage["startTime"] = "" + startTime;
	} else {
		//startTime = new Date(parseInt(localStorage["startTime"], 10).valueOf());
		startTime = Date.parse(new Date(parseInt(current)));
	}
	//countdownDate = startTime;

	countdownDate = new Date(startTime + 36 * 60 * 60 * 1000);
	secondState();
}

function secondState() {
	//alert("wooooo");
	document.getElementsByClassName("spacer")[0].style.display = "none";
	document.getElementsByClassName("starter")[0].style.display = "none";
	document.getElementsByClassName("timertext")[0].style.display = "block";
	document.getElementsByClassName("timertext")[0].style.display = "block";
	document.getElementsByClassName("timecontainer")[0].style.display = "flex";
	document.getElementsByClassName("timeinstancestar")[3].style.display = "none";
	setInterval(timerFunction, 1000);
}
