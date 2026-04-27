document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("resumeForm");
  const output = document.getElementById("resumeOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const genre = document.getElementById("genre").value;
    const experience = document.getElementById("experience").value;

    output.innerHTML = `
      <div class="resume-card">
        <h3>${name}</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Genre:</strong> ${genre}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      </div>
    `;
  });

});