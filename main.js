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