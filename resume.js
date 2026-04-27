document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("resumeForm");
  const output = document.getElementById("resumeOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const profile = {
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

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("stageLinkProfile", JSON.stringify(profile));

    // SHOW PREVIEW
    output.innerHTML = `
      <div class="resume-card">
        <h2>${profile.name}</h2>
        <p>${profile.role} • ${profile.location}</p>
        <p><strong>Profile saved successfully</strong></p>
      </div>
    `;
  });

});