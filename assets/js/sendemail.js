function sendMail(contactForm) {
    emailjs.send("gmail", "template_ovaYMkIj", { "from_name": contactForm.name.value, "project_request": contactForm.projectsummary.value, "from_email": contactForm.emailaddress.value })
        .then(
            function(response) {
                console.log("success", response);
                alert("Your message has been sent!");
            },
            function(error) {
                console.log("error", error);
            });
    document.getElementById("myForm").reset();
    return false;
}
