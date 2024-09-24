// document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get input elements
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;

//     // FIELDS
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;

//         // Generate resume output
//         const resumeOutput = `
//             <h2>RESUME</h2>
//             <p><strong>Name: </strong> ${name}</p>
//             <p><strong>Email: </strong> ${email}</p>
//             <p><strong>Phone: </strong> ${phone}</p>

//             <h3>Education</h3>
//             <p>${education}</p>

//             <h3>Experience</h3>
//             <p>${experience}</p>

//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;

//         // Display the resume output in the 'resumeOutput' div
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error("The resume output element is missing.");
//         }
//     } else {
//         console.error("One or more input fields are missing.");
//     }
// });

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // Check all fields exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Generate resume output
        const resumeOutput = `
            <h2>RESUME</h2>
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone: </strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the resume output in the 'resumeOutput' div
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing.");
        }
    } else {
        console.error("One or more input fields are missing.");
    }
});
