var name = "Alex Polubiec";
var role = "Front-End Web Developer & Technical Writer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);