document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     MODAL (FREE INTRO + SIGNUP)
  ------------------------------*/
  const toggleButtons = document.querySelectorAll(".lead-toggle");
  const closeButtons = document.querySelectorAll(".close-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const form = document.getElementById(targetId);

      if (form) {
        form.classList.remove("hidden");
        form.classList.add("visible");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const form = document.getElementById(targetId);

      if (form) {
        form.classList.remove("visible");
        form.classList.add("hidden");

        const opener = document.querySelector(`.lead-toggle[data-target="${targetId}"]`);
        if (opener) opener.setAttribute("aria-expanded", "false");
      }
    });
  });



  /* -----------------------------
     FAQ ACCORDION
  ------------------------------*/
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Toggle visibility
      if (answer.style.display === "block") {
        answer.style.display = "none";
        question.setAttribute("aria-expanded", "false");
      } else {
        answer.style.display = "block";
        question.setAttribute("aria-expanded", "true");
      }
    });
  });



  /* -----------------------------
     TESTIMONIAL CAROUSEL
  ------------------------------*/
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[index].classList.add("active");
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Start rotating every 5 seconds
  setInterval(nextTestimonial, 5000);

  // Show the first one immediately
  showTestimonial(currentIndex);

});
