document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.style.display = "none";
        message.style.display = "block";
    });
});