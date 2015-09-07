var name = "Alex Polubiec";
var role = "Front-End Web Developer & Technical Writer";

var bio = {
	"name": name,
	"role": role,
	"contact": "apolubi@gmail.com",
	"picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0ac/1b3/2e622ce.jpg",
	"welcome": "Hi there! I'm Alex.",
	"skills": ["Python", "HTML", "CSS", "JavaScript", "jQuery", "Technical Documentation"]
};

var work = {};
work.position = "Senior Technical Writer";
work.employer = "Shape Security, Inc.";
work.years = "0.5";
work.city = "Mountain View";

var education = {};
	"Udacity": {
		"years": "2015-present",
		"majors": ["Front-End Web Development"]
	},
	"Skillcrush": {
		"years": "2014",
		"majors": ["Web Development Blueprint"]
	},
	"Bennington College": {
		"years": "2007-2011",
		"city": "Bennington, VT",
		"majors": ["Music", "Drama"]
	}
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(work["position"]);
$("#main").append(education.name);
