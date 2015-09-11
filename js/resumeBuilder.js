var bio = {
	"name": "Alex Polubiec",
	"role": "Front-End Web Developer & Technical Writer",
	"contacts": {
		"email": "alexandra.polubiec@gmail.com",
		"mobile": "914-330-1329",
		"github": "paloobi",
		"twitter": "@AlliePaloobi",
		"location": "SF Bay Area"
	},
	"picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0ac/1b3/2e622ce.jpg",
	"welcomeMessage": "Hi there! I'm Alex.",
	"skills": [
		"Python",
		"HTML",
		"CSS",
		"JavaScript",
		"jQuery",
		"Technical Documentation"
	]
};

var work = {
	"jobs": [
		{
			"title": "Senior Technical Writer",
			"employer": "Shape Security",
			"dates": "2015 - Present",
			"city": "Mountain View",
			"description": [
				"Translate PDF documentation into single-sourced HTML and PDF docs using Sphinx documentation tool",
				"Create and maintain custom Python build script for the Technical Documentation Library",
				"Work with engineering team to create automated documentation",
				"Collaborate with engineering, support, and product teams to provide accurate documentation for the ShapeShifter Botwall"
			]
		},
		{
			"title": "Senior Technical Writer/Technical Writer",
			"employer": "A10 Networks",
			"years": "2013 - 2015",
			"city": "San Jose",
			"description": [
				"Authored user guide & automated documentation for RESTful API.",
				"Provided solution for transitioning from PDF to HTML documentation.",
				"Implemented new context-sensitive help system using FrameMaker HTML output, with custom CSS and JavaScript topic mapping, while managing the GUI documentation for a major release.",
				"Restructured and managed Scripting Language Reference & System Administration Guide"
			]
		}
	]
};

var education = {
	"schools": [
		{	
			"name": "Udacity",
			"years": "2015-present",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Development"]
		},
		{
			"name": "Skillcrush",
			"years": "2014",
			"degree": ["Web Developer Blueprint"]
		},
		{	
			"name": "Bennington College",
			"years": "2007-2011",
			"city": "Bennington, VT",
			"degree": "Bachelor of Arts"
			"majors": ["Music", "Drama"]
		}
	],
	"onlineCourses": [
		{
			"title": "Introduction to Computer Science and Programming with Python",
			"school": "MITx",
			"year": "2013",
			"url": "http://www.edx.org/"
		},
		{
			"title": "Introduction to Statistics",
			"school": "BerkeleyX",
			"year": "2012",
			"url": "http://www.edx.org"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"dates": "2015",
			"description": "Implemented online resume with Bootstrap",
			"images": []
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data", item.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", item.title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
};

for (var skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
	$("#skills").append(formattedSkill);
}