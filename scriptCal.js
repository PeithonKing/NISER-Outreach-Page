const date = new Date();

var events = {
    0:{},
    1:{},
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{
		4:[
			"Hurry Up! you have to submit tomorrow"
		],
        5:[
			"Last Date of Submission",
			"I will submit today"
		],
		6:[
			"Maybe you will view this today..."
		],
		7:[
			"Or maybe today...."
		]
    },
    8:{
		22:[
			"This is another event in the next month!"
		]
	},
    9:{},
    10:{},
    11:{},
}

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector(".days");

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();

	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	document.querySelector(".date h1").innerHTML = months[date.getMonth()];

	document.querySelector(".date p").innerHTML = new Date().toDateString();

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div class="today" onclick="showDetails(${i})">${i}</div>`;
		} else {
			days += `<div class="this-month" onclick="showDetails(${i})">${i}</div>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
	}

	monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();

function showDetails(day){
    document.getElementById("popup-1").classList.toggle("active", true);
	let month = date.getMonth()
	let details = ""
	
	if(events[month][day]){
		//console.log(events[month][day].length)
		for(let s = 0; s<events[month][day].length; s++){
			details += String(s+1) + ". " + events[month][day][s] + "<br>";
		}
	}else{
		details += "No Events to show"
	}
	
	let write = "<h2>" + months[month] + " " + day + "</h2>" + "<br>" + "<h3>" + details + "</h3>"
    document.getElementsByClassName("box")[0].innerHTML = write
}

function closeDetails(){
	document.getElementById("popup-1").classList.toggle("active", false);
}