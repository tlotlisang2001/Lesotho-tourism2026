
document.addEventListener("DOMContentLoaded", function() {
    console.log("Discover Lesotho website initialized.");

    const combinedForm = document.querySelector("#combinedForm");
    if (combinedForm) {
        combinedForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const fullName = document.querySelector("#fullName").value.trim();
            const email = document.querySelector("#email").value.trim();
            const phone = document.querySelector("#phone").value.trim();
            const genderNode = document.querySelector('input[name="gender"]:checked');
            const password = document.querySelector("#password").value;
            const confirmPassword = document.querySelector("#confirmPassword").value;
            const message = document.querySelector("#message").value.trim();

            
            if (!fullName || !email || !phone || !genderNode || !password || !confirmPassword || !message) {
                alert("Error: Please fill out all required fields.");
                return;
            }

            
            if (password.length < 6) {
                alert("Error: Password must be at least 6 characters long.");
                return;
            }

                        if (password !== confirmPassword) {
                alert("Error: Passwords do not match. Please check and try again.");
                return;
            }

   
            alert("Success: Thank you, " + fullName + "! Your registration and message have been submitted successfully.");
            combinedForm.reset();
        });
    }
});