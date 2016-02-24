
/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var a="I am Yirong and I am awesome!";
 var newA=a.replace("awesome","fun");
 $("#main").append(newA);
*/
 var formattedName=HTMLheaderName.replace("%data%","Yirong Cheng");
 var formattedRole=HTMLheaderRole.replace("%data%","Application Developer");
 $("#header").prepend(formattedRole).prepend(formattedName);
  
 var skills=["Java/JavaEE","JSP/Servlet","JavaScript","Struts","Hibernate","Git, SVN","ANT","Oracle, SQL server, MySQL","SQL", "Eclipse, JDeveloper", "Web Service, SOAP, XML"];
 var bio={
	 "name": "Yirong Cheng",
	 "role": "Senior Application Devloper",
	 "contactInfo": "240-413-2889",
	 "contacts":{
		 "email": "chengyr@hotmail.com",
		 "mobile": "240-413-2889",
		 "github" : "YirongC",
		 "linkedin": "yirongcheng"
		 
	 },
	 
	 
	 
	 "pictureURL":"images/fry.jpg",
	 "welcomeMsg": "Welcome to My resume",
	 "skills": skills,
	 "location" : "Washington DC"
 }
  
bio.displayContacts=function(aplace){
	 $(aplace).append(HTMLmobile.replace("%data%",bio.contacts.mobile)); 
	$(aplace).append(HTMLemail.replace("%data%",bio.contacts.email));
	$(aplace).append(HTMLgithub.replace("%data%",bio.contacts.github));
	$(aplace).append(HTMLlinkedin.replace("%data%",bio.contacts.linkedin));
	
}  
 
bio.display=function(){

	 //$("#header").append(HTMLcontactsStart);
	  bio.displayContacts("#topContacts");
	 // $("#header").append(HTMLlocation.replace("%data%",bio.location));
	 $("#header").append(HTMLbioPic.replace("%data%",bio.pictureURL));
	 $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
	 if(bio.skills.length!=0)
	 {
		 $("#header").append(HTMLskillsStart);
		 for (var i=0;i<bio.skills.length;i++)
		 $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	 }
 

}

 
 var work={
	 "jobs": [
	 {
		"position" :"Senior Application Developer",
		"employer":"ITCON",
		"years": "March 2015 - present",
		"city":"Washington DC",
		"description":""
	 },
	 {
		"position" :"Software Engineer VI",
		"employer":"Verizon",
		"years": "1999-2015",
		"city":"Arlington VA",
		"description":""		 
		 
	 }
	 ]
};

 work.display=function(){
	for (var job in work.jobs) 
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerandTitle=HTMLworkEmployer.replace("%data%",work.jobs[job].employer).concat(HTMLworkTitle.replace("%data%",work.jobs[job].position));
		$(".work-entry:last").append(formattedEmployerandTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].years));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].city));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
	}
 }
 
 
 var education={
	 "schools": [
	 {
		 "name": "Marquette University",
		 "degree": "MS",
		 "yearsAttend": "1996-1999",
		 "city": "Milwaukee, WI USA",
		 "major": "Computer and Electrical Engineering"
	 },
	 {
		 "name": "Nanjing University of Post & Telecommunications",
		 "degree": "MS",
		 "yearsAttend": "1993-1996",
		 "city": "Nanjing, Jiangsu PRChina",
		 "major": "Computer Engineering"		 
	 }
	 
	]
	 
	 
	 
	 
 }
 

 education.display=function(){
	 
	 for (var e in education.schools)
	 {
		$("#education").append(HTMLschoolStart);
		 $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[e]["name"])+HTMLschoolDegree.replace("%data%",education.schools[e]["degree"]));
		 $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[e]["yearsAttend"]));
		 $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[e]["city"]));
		 $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[e]["major"])); 
	 }
 };
 
 
 var project={
	 "projects":[
	 
	 {
		 "title":"Management system for grants, volunteer programs and applicant/member/staff service for Corporation for National & Community Service \(CNCS\)",
		 "dates": "2015-2016",
		 "description": "o Analysis, design, development and unit testing for the application  o Evaluation for the new tools  o Development Software upgrade support  o Technologies used included: Java/JEE, Struts, Hibernate, SQL, JSP/Servlet, Javascript, weblogic server 10, Oracle database 11g, Ant, Eclipse, Bugzilla, subversion, Jira, Jenkins",
		 "projectImage":""
	 },
	 {
		 "title":"",
		 "dates": "",
		 "description": "",
		 "projectImage":""		 
	 }
	 ]
 };
 


project.display=function()
{
	for (var p in project.projects)
	{
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[p].title));
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[p].dates));
		var desc=project.projects[p].description.split("o ");
		for (var i in desc)
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",desc[i]));
		
	}
	
	
	
};

bio.display();
work.display();
project.display();
education.display();
bio.displayContacts("#footerContacts");

//$("#mapDiv").append(googleMap);
 
 
 
 

 
||||||| merged common ancestors
/*
This is empty on purpose! Your code to build the resume will go here.
 */
=======
/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var a="I am Yirong and I am awesome!";
 var newA=a.replace("awesome","fun");
 $("#main").append(newA);
*/
 var formattedName=HTMLheaderName.replace("%data%","Yirong Cheng");
 var formattedRole=HTMLheaderRole.replace("%data%","Application Developer");
 $("#header").prepend(formattedRole).prepend(formattedName);
  
 var skills=["Java/JavaEE","JSP/Servlet","JavaScript","Struts","Hibernate","Git, SVN","ANT","Oracle, SQL server, MySQL","SQL", "Eclipse, JDeveloper", "Web Service, SOAP, XML"];
 var bio={
	 "name": "Yirong Cheng",
	 "role": "Senior Application Devloper",
	 "contactInfo": "240-413-2889",
	 "pictureURL":"images/fry.jpg",
	 "welcomeMsg": "Welcome to My resume",
	 "skills": skills,
	 "location" : "Washington DC"
 }
  
  
 


 $("#header").append(HTMLmobile.replace("%data%",bio.contactInfo));
  $("#header").append(HTMLlocation.replace("%data%",bio.location));
 $("#header").append(HTMLbioPic.replace("%data%",bio.pictureURL));
 $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));
 if(bio.skills.length!=0)
 {
	 $("#header").append(HTMLskillsStart);
	 for (var i=0;i<bio.skills.length;i++)
	 $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
 }
 



 
 var work={
	 "jobs": [
	 {
		"position" :"Senior Application Developer",
		"employer":"ITCON",
		"years": "March 2015 - present",
		"city":"Washington DC",
		"description":""
	 },
	 {
		"position" :"Software Engineer VI",
		"employer":"Verizon",
		"years": "1999-2015",
		"city":"Arlington VA",
		"description":""		 
		 
	 }
	 ]
};

 work.display=function(){
	for (var job in work.jobs) 
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerandTitle=HTMLworkEmployer.replace("%data%",work.jobs[job].employer).concat(HTMLworkTitle.replace("%data%",work.jobs[job].position));
		$(".work-entry:last").append(formattedEmployerandTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].years));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].city));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
	}
 }
 
 
 var education={
	 "schools": [
	 {
		 "name": "Marquette University",
		 "degree": "MS",
		 "yearsAttend": "1996-1999",
		 "city": "Milwaukee, WI USA",
		 "major": "Computer and Electrical Engineering"
	 },
	 {
		 "name": "Nanjing University of Post & Telecommunications",
		 "degree": "MS",
		 "yearsAttend": "1993-1996",
		 "city": "Nanjing, Jiangsu PRChina",
		 "major": "Computer Engineering"		 
	 }
	 
	]
	 
	 
	 
	 
 }
 

 education.display=function(){
	 
	 for (var e in education.schools)
	 {
		$("#education").append(HTMLschoolStart);
		 $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[e]["name"])+HTMLschoolDegree.replace("%data%",education.schools[e]["degree"]));
		 $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[e]["yearsAttend"]));
		 $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[e]["city"]));
		 $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[e]["major"])); 
	 }
 };
 
 
 var project={
	 "projects":[
	 
	 {
		 "title":"Management system for grants, volunteer programs and applicant/member/staff service for Corporation for National & Community Service \(CNCS\)",
		 "dates": "2015-2016",
		 "description": "o Analysis, design, development and unit testing for the application  o Evaluation for the new tools  o Development Software upgrade support  o Technologies used included: Java/JEE, Struts, Hibernate, SQL, JSP/Servlet, Javascript, weblogic server 10, Oracle database 11g, Ant, Eclipse, Bugzilla, subversion, Jira, Jenkins",
		 "projectImage":""
	 },
	 {
		 "title":"",
		 "dates": "",
		 "description": "",
		 "projectImage":""		 
	 }
	 ]
 };
 


project.display=function()
{
	for (var p in project.projects)
	{
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[p].title));
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[p].dates));
		var desc=project.projects[p].description.split("o ");
		for (var i in desc)
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",desc[i]));
		
	}
	
	
	
};

work.display();
project.display();
education.display();

//$("#mapDiv").append(googleMap);
 
 
 
 

 
>>>>>>> 8d51f45eedb6b65c1883a8ec28ecc5284737c18e
