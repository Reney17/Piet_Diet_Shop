// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("#menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});

// Form Validation for Subscription and Contact Forms
document.addEventListener("DOMContentLoaded", function () {
  const subscriptionForm = document.querySelector("#subscription-form");
  const contactForm = document.querySelector("#contact-form");

  if (subscriptionForm) {
    subscriptionForm.addEventListener("submit", function (event) {
      if (!validateForm(subscriptionForm)) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill out all required fields.");
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      if (!validateForm(contactForm)) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill out all required fields.");
      }
    });
  }
});

function validateForm(form) {
  let valid = true;
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      valid = false;
    }
  });

  return valid;
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Placeholder content updates for demo purposes
function updateBlogContent() {
  const blogSection = document.querySelector("#blog");

  if (blogSection) {
    // Example content update
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
            <h2>New Blog Post Title</h2>
            <p>Content for the new blog post goes here. This is just a placeholder.</p>
            <a href="#">Read More</a>
        `;
    blogSection.appendChild(newArticle);
  }
}

updateBlogContent(); // Call to update blog content

// Example of dynamically handling user feedback (for future implementation)
function handleUserFeedback() {
  const feedbackForm = document.querySelector("#feedback-form");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Here, handle feedback logic (e.g., send feedback to server)
      alert("Thank you for your feedback!");
    });
  }
}

handleUserFeedback(); // Call to handle user feedback

// burger menu

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
  });
});
