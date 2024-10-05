// Function to handle the alert and click the Subscribe button
function showAlert() {
    alert("Successfully Subscribed !");
}


document.addEventListener('DOMContentLoaded', function () {
    // Signup functionality
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const signupUsername = document.getElementById("signupUsername").value;
            const signupPassword = document.getElementById("signupPassword").value;
            const signupRePassword = document.getElementById("signupRePassword").value;

            if (signupPassword !== signupRePassword) {
                alert("Passwords do not match!");
                return;
            }

            localStorage.setItem("username", signupUsername);
            localStorage.setItem("password", signupPassword);

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Login functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const loginUsername = document.getElementById("loginUsername").value;
            const loginPassword = document.getElementById("loginPassword").value;

            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (loginUsername === storedUsername && loginPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Carousel functionality for the home page
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll(".carousel-images img");
        const dots = document.querySelectorAll(".dot");

        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});

function redirectToUpdateForm(id){
    window.location.href = "update.php?id=" + id; 
}



