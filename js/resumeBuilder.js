var bio = {
  name: "Alex Polubiec",
  role: "Front-End Web Developer & Technical Writer",
  contacts: {
      mobile: "914-330-1329",
      email: "alexandra.polubiec@gmail.com",
      github: "paloobi",
      twitter: "@AlliePaloobi",
      location: "SF Bay Area"
    },
  welcomeMessage: "Hi there! I'm Alex.",
  skills: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Technical Documentation"
    ],
  biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0ac/1b3/2e622ce.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var skill in bio.skills) {
        if (bio.skills.hasOwnProperty(skill)) { 
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
        }
      }
    }

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

};

var education = {
  schools: [
    {
      name: "Udacity",
      location: "Remote",
      degree: "Nanodegree",
      majors: ["Front-End Web Development"],
      dates: "2015-present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      name: "Skillcrush",
      location: "Remote",
      degree: "Blueprint",
      majors: ["Web Development"],
      dates: "2014",
      url: "http://skillcrush.com/"
    },
    {
      name: "Bennington College",
      location: "Bennington, VT",
      degree: "Bachelor of Arts",
      majors: ["Music", "Drama"],
      dates: "2007-2011",
      url: "http://www.bennington.edu/"
    }
  ],
  onlineCourses: [
    {
      title: "Introduction to Computer Science and Programming with Python",
      school: "MITx",
      date: "2013",
      url: "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-5"
    },
    {
      title: "Introduction to Statistics",
      school: "BerkeleyX",
      date: "2012",
      url: "https://www.edx.org/course/introduction-statistics-descriptive-uc-berkeleyx-stat2-1x"
    },
    {
      title: "Internet History, Technology, and Security",
      school: "Coursera",
      date: "2013",
      url: "https://www.coursera.org/course/insidetheinternet"
    },
    {
      title: "Leading Strategic Innovation in Organizations",
      school: "Coursera",
      date: "2013",
      url: "https://www.coursera.org/course/innovation"
    }
  ],
  display: function() {

    for (var school in education.schools) {
      if (education.schools.hasOwnProperty(school)) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        for (var major in education.schools[school].majors) {
          if (education.schools[school].majors.hasOwnProperty(major)) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
          }
        }
      }
    }

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);      
    }

    for (var course in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(course)) {

        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;
        $(".education-entry:last").append(formattedCourseTitleSchool)

        var formattedCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedCourseDate);

        var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedCourseUrl);
      }
    }

  }
};

var work = {
  "jobs": [
    {
      employer: "Shape Security",
      title: "Senior Technical Writer",
      dates: "2015 - Present",
      location: "Mountain View, CA",
      description: "Translate PDF documentation into single-sourced HTML and PDF docs using Sphinx documentation tool. Create and maintain custom Python build script for the Technical Documentation Library. Work with engineering team to create automated documentation. Collaborate with engineering, support, and product teams to provide accurate documentation for the ShapeShifter Botwall."
    },
    {
      employer: "A10 Networks",
      title: "Senior Technical Writer/Technical Writer",
      dates: "2013 - 2015",
      location: "San Jose, CA",
      description: "Authored user guide & automated documentation for RESTful API. Provided solution for transitioning from PDF to HTML documentation. Implemented new context-sensitive help system using FrameMaker HTML output, with custom CSS and JavaScript topic mapping, while managing the GUI documentation for a major release. Restructured and managed Scripting Language Reference & System Administration Guide."
    },
    {
      employer: "Nikki Goth Itoi, Travel & Technical Writer",
      title: "Editorial Assistant",
      dates: "2011-2013",
      location: "Davis, CA",
      description: "Research and editing for online content, travel writing; general office assistance."
    }
  ],
  display: function() {
    for (var job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
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
    }
  }
};


var projects = {
  projects: [
    {
      title: "Online Resume",
      dates: "2015",
      description: "Implemented online resume with Bootstrap",
      images: ["http://alex.polubiec.com/"]
    }
  ],
  display: function() {
    for (var project in projects.projects) {
      if (project.projects.hasOwnProperty(project)) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
          var formattedImages = "";
          for (var image in projects.projects[project].images) {
            if (projects.projects[project].hasOwnProperty.images(image)) {
              formattedImages += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImages);
            }
          }
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
