// SAMPLE JOB DATA
const jobs = [
  {
    title: "Assistant Stage Manager",
    genre: "Musical",
    role: "Stage Manager",
    location: "Chicago"
  },
  {
    title: "Lighting Designer",
    genre: "Drama",
    role: "Crew",
    location: "Remote"
  },
  {
    title: "Actor",
    genre: "Comedy",
    role: "Performer",
    location: "New York"
  }
];

// RENDER JOBS TO PAGE
function renderJobs(jobList) {
  const container = document.getElementById("jobResults");
  container.innerHTML = "";

  if (jobList.length === 0) {
    container.innerHTML = "<p>No jobs match your filters.</p>";
    return;
  }

  jobList.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job-card");

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.genre} | ${job.role}</p>
      <p>${job.location}</p>
    `;

    container.appendChild(div);
  });
}

// FILTER FUNCTION
function filterJobs() {
  const genre = document.getElementById("genreFilter").value;
  const role = document.getElementById("roleFilter").value;

  const filtered = jobs.filter(job => {
    return (
      (!genre || job.genre === genre) &&
      (!role || job.role === role)
    );
  });

  renderJobs(filtered);
}

// MAIN LOAD
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("confirmationMessage");

  // FORM SUBMISSION (your original feature)
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      message.style.display = "block";
    });
  }

  // FILTER EVENTS
  const genreFilter = document.getElementById("genreFilter");
  const roleFilter = document.getElementById("roleFilter");

  if (genreFilter) {
    genreFilter.addEventListener("change", filterJobs);
  }

  if (roleFilter) {
    roleFilter.addEventListener("change", filterJobs);
  }

  // INITIAL JOB LOAD
  renderJobs(jobs);
});