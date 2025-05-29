// ----------------------progess page-------------------------
let prog = document.querySelector(".progress-page"),
	pageHeigth =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
//--------------------------------totop---------------------------
let btn = document.querySelector(".toTop");

btn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
	});
});
// ----------------------------count form o to goal ----------------------
let nums = document.querySelectorAll(".stats-num"),
	stats = document.querySelector("#stats"),
	skillSec = document.querySelector("#skills"),
	skillProg = false,
	started = false;
window.addEventListener("scroll", () => {
	//? to top scrolling
	if (window.scrollY >= 1500) {
		btn.style.cssText = `
        right:20px;
        
        `;
	} else {
		btn.style.cssText = `
        right:-60px;
        `;
	}
	//? count form 0 to goal
	prog.style.width =
		(document.documentElement.scrollTop / pageHeigth) * 100 + "%"; //progress page
	if (window.scrollY >= stats.offsetTop - 200) {
		if (!started) {
			nums.forEach((element) => {
				let count = setInterval(() => {
					element.innerHTML++;
					if (element.innerHTML == element.dataset.goal) {
						clearInterval(count);
					} else {

					}
				}, 1500 / element.dataset.goal);
			});
		}
		started = true;
	}
	//? progess languages
	if (window.scrollY >= skillSec.offsetTop - 200) {
		if (!skillProg) {
			let skills = document.querySelectorAll(".percent span");
			skills.forEach((element) => {
				let proCount = setInterval(() => {
					//!select the language and assign thier width via percent progess
					document.querySelectorAll(".prog div").forEach((e) => {
						e.style.width =
							e.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
					});
					element.innerHTML++;
					if (element.innerHTML == element.dataset.pro) {
						clearInterval(proCount);
					}
				}, 2000 / element.dataset.pro);
			});
		}
		skillProg = true;
	}
});
// --------------------------------------------------count down ------------------------------------------
let countDown = setInterval(() => {
	let nowDate = new Date(),
		endDate = new Date("4 15,2026 00:00:00"),
		diffDate = endDate - nowDate;
	let days = Math.floor(diffDate / (1000 * 60 * 60 * 24)),
		hours = Math.floor(
			(diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		),
		mins = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60)),
		sec = Math.floor((diffDate % (1000 * 60)) / 1000);
	let pageDays = document.querySelector(".days"),
		pagehours = document.querySelector(".hours"),
		pagemins = document.querySelector(".mins"),
		pagesecs = document.querySelector(".secs");
	pageDays.innerHTML = days < 10 ? `0${days}` : days;
	pagehours.innerHTML = hours < 10 ? `0${hours}` : hours;
	pagemins.innerHTML = mins < 10 ? `0${mins}` : mins;
	pagesecs.innerHTML = sec < 10 ? `0${sec}` : sec;
	diffDate <= 0 ? clearInterval(countDown) : "";
	console.log(diffDate);
}, 1000);
