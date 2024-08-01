const slides = document.getElementById("slides");
let slideIndex = 0;

function showSlide(n) {
    slideIndex = (n + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize with the first slide
showSlide(0);

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Reset error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.textContent = ""));

    // Basic validation (you can add more comprehensive checks)
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    if (name === "") {
        showError("name", "Please enter your name.");
        isValid = false;
    }

    if (email === "" || !isValidEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    if (interest === "") {
        showError("interest", "Please select your interest.");
        isValid = false;
    }

    if (isValid) {
        // Form is valid, submit it or perform other actions
        alert("Form submitted successfully!");

        // You can replace the alert with code to actually send the form data.
        email.value = "";
        name.value = "";
        interest.value = "";
        form.reset();
    }
});

function showError(inputId, message) {
    const formGroup = document.querySelector(`.form-group input#${inputId}`).parentElement;
    formGroup.classList.add("invalid");
    formGroup.querySelector(".error-message").textContent = message;
}

function isValidEmail(email) {
    // Basic email validation (you can use a more robust regex)
    return /\S+@\S+\.\S+/.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    const gravatarImages = document.querySelectorAll(".gravatar-image");

    gravatarImages.forEach((image) => {
        const email = image.dataset.email.trim().toLowerCase();
        const hash = CryptoJS.SHA256(email); // You'll need a function to calculate MD5 hashes
        const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=mp`; // Default to "mystery person"
        document.getElementById("gravatar-image").src = gravatarUrl;
    }); 
});

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    const domain = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"][Math.floor(Math.random() * 4)];
    return `${randomString}@${domain}`;
}

const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials[currentTestimonialIndex].classList.remove("active");
    currentTestimonialIndex = (index + testimonials.length) % testimonials.length;
    testimonials[currentTestimonialIndex].classList.add("active");
}

function nextTestimonial() {
    showTestimonial(currentTestimonialIndex + 1);
}

// Initial display
showTestimonial(0);

// Auto-change every 5 seconds
setInterval(nextTestimonial, 5000);

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


// Fungsi Scroll to Top
(function() {
    const backToTopButton = document.getElementById("backToTopBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    }

    backToTopButton.addEventListener('click', function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
})();