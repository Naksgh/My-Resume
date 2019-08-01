function sendMail(contactForm) {
    emailjs.send("gmail", "ucd_template", { "from_name": contactForm.name.value, "project_request": contactForm.projectsummary.value, "from_email": contactForm.emailaddress.value })
        .then(
            function(response) {
                console.log("success", response);
            },
            function(error) {
                console.log("error", error);
            });
            return false;
            
}
