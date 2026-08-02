const tbody = document.getElementById("lectureBody");

fetch("data/lectures.json")
  .then(response => response.json())
  .then(data => {

    tbody.innerHTML = "";

    if (data.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" class="placeholder">
            No lectures uploaded yet.
          </td>
        </tr>`;
      return;
    }

    data.forEach((lecture, index) => {

      tbody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${lecture.date}</td>
          <td>
            <a class="topic-link"
               href="${lecture.slides}"
               target="_blank">
               ${lecture.topic}
            </a>
          </td>
          <td>${lecture.reference || "—"}</td>
        </tr>`;

    });

  })
  .catch(error => {
    console.error(error);
    tbody.innerHTML = `
      <tr>
        <td colspan="4">
          Unable to load lecture schedule.
        </td>
      </tr>`;
  });
