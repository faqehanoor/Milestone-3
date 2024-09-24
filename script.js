var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('name');
    var qualificationElement = document.getElementById('name');
    var educationElement = document.getElementById('name');
    var experienceElement = document.getElementById('name');
    if (nameElement && emailElement && phoneElement && qualificationElement && educationElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var qualification = qualificationElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
    }
    var resumeOutput = "\n<h2>RESUME</h2>\n<p><strong>Name: </strong> ".concat(name, "</p>\n<p><strong>Name: </strong> ").concat(Email, "</p>\n<p><strong>Phone: </strong> ").concat(PhoneNumber, " </p>");
    "<h3>qualification</h3>\n<p>".concat(qualification, "</p>");
    "<h3>Experience</h3>\n<p>".concat(experience, "</p>");
    "<h3>Education</h3>\n<p>".concat(Education, "</p>");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("the resume output element are mising");
    }
    {
        console.error("One or more ouput is mising");
    }
});
