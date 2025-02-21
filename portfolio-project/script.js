document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").innerText = "Message Sent Successfully!";
});

const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const typingText = "Raju Maurya | Java Full Stack Developer";
let index = 0;
function typeEffect() {
    if (index < typingText.length) {
        document.querySelector(".typing").textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
