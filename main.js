// welcome to JavaScript file where the functions will be declared and used/invoked on home.html

// let's create a function that will take our input and save it in variables. Using ES6 syntax.

// input that are changable depends on the company that you are applying for as follows.
// company name?
// target role that you are applying for?
// job title?
// your hard skills (regarding Job Description)?
// organization name?
// reasons to join the organization?
// degree/ certificate?
// what (regarding Job Description) requirements can you fullfil?
// target role? again, which you already going to submit it.
// Transferable Skills  ===  soft skills?
// proficient in <Systems>?
// <List 3-4 achievements relevant to the JD - Job Description>?
// your name from two parts compraing to your digital footprint?

//now let's head up to implement our functions.
var coverletter = "";
var saveInputs = (
	companyName,
	targetRole,
	jobTitle,
	hardSkills,
	organizationName,
	arrayOfReasons,
	degree,
	requirements,
	arrayOfSoftSkills,
	systems,
	arrayOfAchievements,
	yourName
) => {
	var companyName = companyName || document.getElementById("companyName").value;
	var targetRole = targetRole || document.getElementById("targetRole").value;
	var jobTitle = jobTitle || document.getElementById("jobTitle").value;
	var hardSkills = hardSkills || document.getElementById("hardSkills").value;
	var organizationName =
		organizationName || document.getElementById("organizationName").value;
	var arrayOfReasons =
		arrayOfReasons || document.getElementById("arrayOfReasons").value;
	var degree = degree || document.getElementById("degree").value;
	var requirements =
		requirements || document.getElementById("requirements").value;
	var arrayOfSoftSkills =
		arrayOfSoftSkills || document.getElementById("arrayOfSoftSkills").value;
	var systems = systems || document.getElementById("systems").value;
	var arrayOfAchievements =
		arrayOfAchievements || document.getElementById("arrayOfAchievements").value;
	var yourName = yourName || document.getElementById("yourName").value;
	console.log({
		companyName: companyName || document.getElementById("companyName").value,
		targetRole: targetRole || document.getElementById("targetRole").value,
		jobTitle: jobTitle || document.getElementById("jobTitle").value,
		hardSkills: hardSkills || document.getElementById("hardSkills").value,
		organizationName:
			organizationName || document.getElementById("organizationName").value,
		arrayOfReasons:
			arrayOfReasons || document.getElementById("arrayOfReasons").value,
		degree: degree || document.getElementById("degree").value,
		requirements: requirements || document.getElementById("requirements").value,
		arrayOfSoftSkills:
			arrayOfSoftSkills || document.getElementById("arrayOfSoftSkills").value,
		systems: systems || document.getElementById("systems").value,
		arrayOfAchievements:
			arrayOfAchievements ||
			document.getElementById("arrayOfAchievements").value,
		yourName: yourName || document.getElementById("yourName").value,
	});
	newData = {
		companyName: companyName || document.getElementById("companyName").value,
		targetRole: targetRole || document.getElementById("targetRole").value,
		jobTitle: jobTitle || document.getElementById("jobTitle").value,
		hardSkills: hardSkills || document.getElementById("hardSkills").value,
		organizationName:
			organizationName || document.getElementById("organizationName").value,
		arrayOfReasons:
			arrayOfReasons || document.getElementById("arrayOfReasons").value,
		degree: degree || document.getElementById("degree").value,
		requirements: requirements || document.getElementById("requirements").value,
		arrayOfSoftSkills:
			arrayOfSoftSkills || document.getElementById("arrayOfSoftSkills").value,
		systems: systems || document.getElementById("systems").value,
		arrayOfAchievements:
			arrayOfAchievements ||
			document.getElementById("arrayOfAchievements").value,
		yourName: yourName || document.getElementById("yourName").value,
	};
	return {
		companyName: companyName || document.getElementById("companyName").value,
		targetRole: targetRole || document.getElementById("targetRole").value,
		jobTitle: jobTitle || document.getElementById("jobTitle").value,
		hardSkills: hardSkills || document.getElementById("hardSkills").value,
		organizationName:
			organizationName || document.getElementById("organizationName").value,
		arrayOfReasons:
			arrayOfReasons || document.getElementById("arrayOfReasons").value,
		degree: degree || document.getElementById("degree").value,
		requirements: requirements || document.getElementById("requirements").value,
		arrayOfSoftSkills:
			arrayOfSoftSkills || document.getElementById("arrayOfSoftSkills").value,
		systems: systems || document.getElementById("systems").value,
		arrayOfAchievements:
			arrayOfAchievements ||
			document.getElementById("arrayOfAchievements").value,
		yourName: yourName || document.getElementById("yourName").value,
	};
};

// an example of using this function:
// we are invoking the factory function inside a var value to save the returning object.
// var myInfo = saveInputs(
//     "Carla Car Rental Inc",
//     "Internship",
//     "Junior Full Stack Developer", [
//         "Javascript",
//         "HTML",
//         "CSS",
//         "jQuery",
//         "NodeJs",
//         "Express Js",
//         "React Js",
//         "ANgular Js",
//         "SQL && noSQL Databases",
//     ],
//     "Carla Car Rental Inc",
//     "I always wanted to know more about your technologies",
//     "Full Stack Devloper Certificate",
//     "Web Development", [
//         "accepts feedback",
//         "empathy",
//         "honesty",
//         "problem solver",
//         "atonomous learner",
//         "Passion",
//         "Collaboration and teamwork",
//         "Proper communication skills",
//         "active listening",
//         "creativity",
//     ],
//     "Programming", [
//         "Achieved 1 year in teaching full stack development in tunisia for building a better future",
//     ],
//     "Seif Miehiar"
// );

// now we want to create a function that would check our object and to take the values of it and update our cover letter.

// and here you can see our cover letter already hard coded but we want to change some keywords.
// var basicCoverLetter = `
// Dear ${companyName},
// I am writing in regard to your job opening of ${targetRole}. As a candidate with extensive experience in ${jobTitle}, I am highly skilled in ${hardSkills}.
// The opportunity to join ${organizationName} greatly interests me because ${arrayOfReasons}. As a holder of ${degree} I can competently execute ${requirements}.
// I believe that I would make a valuable asset to your team and I offer my resume for your review.
// As per my professional summary, my qualities and experience make me highly suitable for the role of ${targetRole}.
// I am highly regarded for ${arrayOfSoftSkills}. I am proficient in ${systems}.
// Throughout my career, I have demonstrated the highest levels of service and commitment to the mission of any organization I have worked for.  ${arrayOfAchievements}.
// Thus, if you are looking for a well grounded ${jobTitle} please contact me to arrange an interview. I am eager to learn more about how your organization can benefit from my contribution.
// I thank you for your time and consideration, and I look forward to hearing from you.
// Regards,
// ${yourName}
// #${yourName} #jobs #careers
// `;

//saving new data as a string to call on the html
var data;
var newLine = document.write("<br>");
//function accepts two parameters. object of our data, and the cover letter to update it's values.
var updateCoverLetter = (dataObject) => {
	data = `Dear ${dataObject.companyName},${newLine}
    I am writing in regard to your job opening of ${
			dataObject.targetRole
		}. As a candidate with extensive experience in ${
		dataObject.jobTitle
	}, I am highly skilled in ${dataObject.hardSkills}.\n
    The opportunity to join ${
			dataObject.organizationName
		} greatly interests me because ${
		dataObject.arrayOfReasons
	}. As a holder of ${dataObject.degree} I can competently execute ${
		dataObject.requirements
	}.
    I believe that I would make a valuable asset to your team and I offer my resume for your review.\n
    As per my professional summary, my qualities and experience make me highly suitable for the role of ${
			dataObject.targetRole
		}.
    I am highly regarded for ${
			dataObject.arrayOfSoftSkills
		}. I am proficient in ${dataObject.systems}.\n
    Throughout my career, I have demonstrated the highest levels of service and commitment to the mission of any organization I have worked for.  ${
			dataObject.arrayOfAchievements
		}.
    Thus, if you are looking for a well grounded ${
			dataObject.jobTitle
		} please contact me to arrange an interview. I am eager to learn more about how your organization can benefit from my contribution.
    I thank you for your time and consideration, and I look forward to hearing from you.
    Regards,
    ${dataObject.yourName}
    #${editName(dataObject.yourName)} #jobs #careers
    `;
	///////////////////

	coverletter = `Dear ${dataObject.companyName},
    I am writing in regard to your job opening of ${
			dataObject.targetRole
		}. As a candidate with extensive experience in ${
		dataObject.jobTitle
	}, I am highly skilled in ${dataObject.hardSkills}.
    The opportunity to join ${
			dataObject.organizationName
		} greatly interests me because ${
		dataObject.arrayOfReasons
	}. As a holder of ${dataObject.degree} I can competently execute ${
		dataObject.requirements
	}.
    I believe that I would make a valuable asset to your team and I offer my resume for your review.
    As per my professional summary, my qualities and experience make me highly suitable for the role of ${
			dataObject.targetRole
		}.
    I am highly regarded for ${
			dataObject.arrayOfSoftSkills
		}. I am proficient in ${dataObject.systems}.
    Throughout my career, I have demonstrated the highest levels of service and commitment to the mission of any organization I have worked for.  ${
			dataObject.arrayOfAchievements
		}.
    Thus, if you are looking for a well grounded ${
			dataObject.jobTitle
		} please contact me to arrange an interview. I am eager to learn more about how your organization can benefit from my contribution.
    I thank you for your time and consideration, and I look forward to hearing from you.
    Regards,
    ${dataObject.yourName}
    #${editName(dataObject.yourName)} #jobs #careers`;
	///////////////////////

	console.log(`Dear ${dataObject.companyName},
    I am writing in regard to your job opening of ${
			dataObject.targetRole
		}. As a candidate with extensive experience in ${
		dataObject.jobTitle
	}, I am highly skilled in ${dataObject.hardSkills}.
    The opportunity to join ${
			dataObject.organizationName
		} greatly interests me because ${
		dataObject.arrayOfReasons
	}. As a holder of ${dataObject.degree} I can competently execute ${
		dataObject.requirements
	}.
    I believe that I would make a valuable asset to your team and I offer my resume for your review.
    As per my professional summary, my qualities and experience make me highly suitable for the role of ${
			dataObject.targetRole
		}.
    I am highly regarded for ${
			dataObject.arrayOfSoftSkills
		}. I am proficient in ${dataObject.systems}.
    Throughout my career, I have demonstrated the highest levels of service and commitment to the mission of any organization I have worked for.  ${
			dataObject.arrayOfAchievements
		}.
    Thus, if you are looking for a well grounded ${
			dataObject.jobTitle
		} please contact me to arrange an interview. I am eager to learn more about how your organization can benefit from my contribution.
    I thank you for your time and consideration, and I look forward to hearing from you.
    Regards,
    ${dataObject.yourName}
    #${editName(dataObject.yourName)} #jobs #careers
    `);

	return `Dear ${dataObject.companyName},
  I am writing in regard to your job opening of ${
		dataObject.targetRole
	}. As a candidate with extensive experience in ${
		dataObject.jobTitle
	}, I am highly skilled in ${dataObject.hardSkills}.
  The opportunity to join ${
		dataObject.organizationName
	} greatly interests me because ${dataObject.arrayOfReasons}. As a holder of ${
		dataObject.degree
	} I can competently execute ${dataObject.requirements}.
  I believe that I would make a valuable asset to your team and I offer my resume for your review.
  As per my professional summary, my qualities and experience make me highly suitable for the role of ${
		dataObject.targetRole
	}.
  I am highly regarded for ${
		dataObject.arrayOfSoftSkills
	}. I am proficient in ${dataObject.systems}.
  Throughout my career, I have demonstrated the highest levels of service and commitment to the mission of any organization I have worked for.  ${
		dataObject.arrayOfAchievements
	}.
  Thus, if you are looking for a well grounded ${
		dataObject.jobTitle
	} please contact me to arrange an interview. I am eager to learn more about how your organization can benefit from my contribution.
  I thank you for your time and consideration, and I look forward to hearing from you.
  Regards,
  ${upperName(dataObject.yourName)}
  #${editName(dataObject.yourName)} #jobs #careers
  `;
};
//this functions takes a name as a string and return the first letter of each part of the name example: editName("Seif Miehiar") => // SM
var editName = (name) => {
	if (typeof name === "string") {
		var result = name.split(" ");
		console.log(result);
		var string = "";
		result.map((element, i) => {
			console.log(element, i);
			string += element[0].toUpperCase();
		});
	}
	return string;
};

// var upperName = (name) => {
// 	var newName = "";
// 	var splitName = name.split(" ");
// 	for (var i = 0; i < splitName.length; i++) {
// 		splitName[i][0] = String.prototype.toUpperCase.call(splitName[i][0]);
// 		console.log(String.prototype.toUpperCase.call(splitName[i][0]));
// 		if (i < splitName.length - 1) {
// 			newName = newName + splitName[i] + " ";
// 		} else {
// 			newName = newName + splitName[i];
// 		}
// 	}
// 	return newName;
// };

var upperName = (name) => {
	var newName = "";
	var splitName = name.split(" ");
	for (var i = 0; i < splitName.length; i++) {
		var firstName = splitName[i][0].toUpperCase();
		splitName[i][0] = firstName;
		if (i < splitName.length - 1) {
			newName =
				newName + splitName[i].replace(splitName[i][0], firstName) + " ";
		} else {
			newName = newName + splitName[i].replace(splitName[i][0], firstName);
		}
	}
	return newName;
};
//toggling elements in html
var show = function (elem) {
	elem.style.display = "block";
};

var hide = function (elem) {
	elem.style.display = "none";
};

var toggle = function (elem) {
	var emp = $("#toggleInnerHtml").empty();
	if (emp) {
		document.getElementById("toggleInnerHtml").append(coverletter);
		document.getElementById("toggleInnerHtml").style.visibility = "visible";
	}

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === "block") {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
};

// Listen for click events
document.addEventListener(
	"click",
	function (event) {
		// Make sure clicked element is our toggle
		if (!event.target.classList.contains("toggle")) return;

		// Prevent default link behavior
		event.preventDefault();

		// Get the content
		var content = document.querySelector(event.target.hash);
		if (!content) return;

		// Toggle the content
		toggle(content);
	},
	false
);
