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
      "location": "Mountain View",
      "description": "Translate PDF documentation into single-sourced HTML and PDF docs using Sphinx documentation tool. Create and maintain custom Python build script for the Technical Documentation Library. Work with engineering team to create automated documentation. Collaborate with engineering, support, and product teams to provide accurate documentation for the ShapeShifter Botwall."
    },
    {
      "title": "Senior Technical Writer/Technical Writer",
      "employer": "A10 Networks",
      "dates": "2013 - 2015",
      "location": "San Jose",
      "description": "Authored user guide & automated documentation for RESTful API. Provided solution for transitioning from PDF to HTML documentation. Implemented new context-sensitive help system using FrameMaker HTML output, with custom CSS and JavaScript topic mapping, while managing the GUI documentation for a major release. Restructured and managed Scripting Language Reference & System Administration Guide."
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
      "degree": "Bachelor of Arts",
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
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      var formattedImages = ""
      for (image in projects.projects[project].images) {
        formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }

  }
}

projects.display()

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


function displayPhoto() {
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
  $("#header").append(formattedBioPic);
};

function displayWelcomeMsg() {
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
  $("#header").append(formattedWelcomeMsg);
};

function displaySkills() {
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  };

  for (var skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill])
    $("#skills").append(formattedSkill);
  }
}

displayPhoto()
displayWelcomeMsg()
displaySkills()

function displayContacts() {

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
}

displayContacts()

function displayWork() {
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  $(".work-entry:last").append(formattedEmployerTitle);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  $(".work-entry:last").append(formattedDates);
	  
	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  $(".work-entry:last").append(formattedLocation);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedDescription);
	}
};

displayWork()




$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
