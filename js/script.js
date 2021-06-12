function redirectProjects() {
	window.location.href="https://matt-downing.com/webpages/projects.html"
}
function redirectExperience() {
	window.location.href="https://matt-downing.com/webpages/experience.html"
}  
function redirectContact() {
	window.location.href="https://matt-downing.com/webpages/contactform.html"
}
function linkedin() {
	window.location.href="https://www.linkedin.com/in/matthew-downing-0455a5177/"
}  
function github() {
	window.location.href="https://github.com/mattdowning314/"
}  
function website() {
	window.location.href="https://matt-downing.com"
}
function redirectHomePage() {
	window.location.href="https://matt-downing.com"
}
function redirectjob(company) {
	if (company == "Festo") {
		window.location.href="https://matt-downing.com/webpages/experience-festo.html"
	}
	else if (company == "Twiddy") {
		window.location.href="https://matt-downing.com/webpages/experience-twiddy.html"
	}
	else if (company == "DigitalLumens") {
		window.location.href="https://matt-downing.com/webpages/experience-digitallumens.html"
	}
	else if (company == "DuPont") {
		window.location.href="https://matt-downing.com/webpages/experience-dupont.html"
	}
}
function redirectproject(project) {
	if (project == "8bit") {
		window.location.href="https://matt-downing.com/webpages/projects-8bit.html"
	}
	else if (project == "sunrise") {
		window.location.href="https://matt-downing.com/webpages/projects-sunrise.html"
	}
	else if (project == "binaryclock") {
		window.location.href="https://matt-downing.com/webpages/projects-binaryclock.html"
	}
	else if (project == "bootcamp") {
		window.location.href="https://matt-downing.com/webpages/projects-bootcamp.html"
	}
}
var animate;

function movinganimation(){
	document.getElementById("secretpicture").style.left = parseInt(document.getElementById("secretpicture").style.left) + 5 + 'px';
	document.getElementById("secretpicture").style.top = parseInt(document.getElementById("secretpicture").style.top) - 5 + 'px';
	animate = setTimeout(movinganimation, 40);
}

function secret(){
	document.getElementById("secretpicture").style.visibility = "visible";
	document.getElementById("secretpicture").style.position = 'relative';
	document.getElementById("secretpicture").style.left = '0px';
	document.getElementById("secretpicture").style.top = '0px';
	movinganimation();
}


