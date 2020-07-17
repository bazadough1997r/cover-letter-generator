// welcome to JavaScript file where the functions will be declared and used/invoked on index.html

// let's create a function that will take our input and save it in variables. Using ES6 syntax.

// input that are changable depends on the company that you are applying foras follows.
// company name ?
// target role that you are applying for ?
// job title ?
// your hard skills (regarding Job Description)?
// organization name ?
// reasons to join the organization ?
// degree / certificate ?
// what ( regarding Job Description ) requirements can you fullfil ?
// target role ? again, which you already going to submit it.
// Transferable Skills  ===  soft skills ?
// proficient in <Systems> ?
// <List 3-4 achievements relevant to the JD - Job Description> ?
// your name from two parts compraing to your digital footprint?

//now let's head up to implement our functions.

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
    return {
        companyName: companyName,
        targetRole: targetRole,
        jobTitle: jobTitle,
        hardSkills: hardSkills,
        organizationName: organizationName,
        arrayOfReasons: arrayOfReasons,
        degree: degree,
        requirements: requirements,
        arrayOfSoftSkills: arrayOfSoftSkills,
        systems: systems,
        arrayOfAchievements: arrayOfAchievements,
        yourName: yourName,
    };
};

// an example of using this function:
// we are invoking the factory function inside a var value to save the returning object.
var myInfo = saveInputs(
    "Google",
    "Junior Developer",
    "Junior Full Stack Developer", ["Javascript", "HTML", "CSS"],
    "Google",
    "I always wanted to know more about your technologies",
    "Full Stack Devloper Certificate",
    "Web Development", [
        "accepts feedback",
        "empathy",
        "honest",
        "problem solver",
        "atonomous learner",
    ],
    "Programming", ["Achievements-one", "Achievements-two", "Achievements-three"],
    "Seif Miehiar"
);

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

//function accepts two parameters. object of our data, and the cover letter to update it's values.
var updateCoverLetter = (dataObject) => {
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
  ${dataObject.yourName}
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
            string += element[0];
        });
    }
    return string;
};