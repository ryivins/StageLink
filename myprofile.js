document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("profileContainer");

  const savedProfile = localStorage.getItem("stageLinkProfile");

  if (!savedProfile) {
    container.innerHTML = "<p>No profile found. Create one in the Resume Builder.</p>";
    return;
  }

  const profile = JSON.parse(savedProfile);

  container.innerHTML = `
    <div class="resume-card">

      <h2>${profile.name}</h2>
      <p><strong>${profile.role}</strong> • ${profile.location}</p>

      <hr>

      <p><strong>Email:</strong> ${profile.email}</p>
      <p><strong>Phone:</strong> ${profile.phone}</p>
      <p><strong>Experience:</strong> ${profile.experienceYears} years</p>
      <p><strong>Genre:</strong> ${profile.genre}</p>
      <p><strong>Availability:</strong> ${profile.availability}</p>

      <hr>

      <h3>Summary</h3>
      <p>${profile.summary}</p>

      <h3>Skills</h3>
      <p>${profile.skills}</p>

      <h3>Experience</h3>
      <p>${profile.experience}</p>

      <h3>Education</h3>
      <p>${profile.education}</p>

    </div>
  `;
});