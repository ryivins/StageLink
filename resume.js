document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("resumeForm");
  const output = document.getElementById("resumeOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      location: document.getElementById("location").value,
      role: document.getElementById("role").value,
      experienceYears: document.getElementById("experienceYears").value,
      genre: document.getElementById("genre").value,
      availability: document.getElementById("availability").value,
      summary: document.getElementById("summary").value,
      skills: document.getElementById("skills").value,
      experience: document.getElementById("experience").value,
      education: document.getElementById("education").value
    };

    output.innerHTML = `
      <div class="resume-card">

        <h2>${data.name}</h2>
        <p><strong>${data.role}</strong> • ${data.location}</p>

        <hr>

        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Experience:</strong> ${data.experienceYears} years</p>
        <p><strong>Genre:</strong> ${data.genre}</p>
        <p><strong>Availability:</strong> ${data.availability}</p>

        <hr>

        <h3>Professional Summary</h3>
        <p>${data.summary}</p>

        <h3>Skills</h3>
        <p>${data.skills}</p>

        <h3>Experience</h3>
        <p>${data.experience}</p>

        <h3>Education</h3>
        <p>${data.education}</p>

      </div>
    `;
  });

});