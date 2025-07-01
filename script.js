function generateCV() {
  document.getElementById("cv-name").innerText = document.getElementById("name").value;
  document.getElementById("cv-email").innerText = document.getElementById("email").value;
  document.getElementById("cv-phone").innerText = document.getElementById("phone").value;
  document.getElementById("cv-objective").innerText = document.getElementById("objective").value;
  document.getElementById("cv-education").innerText = document.getElementById("education").value;
  document.getElementById("cv-experience").innerText = document.getElementById("experience").value;

  // Skills list
  const skillsText = document.getElementById("skills").value;
  const skillsArray = skillsText.split(",");
  const skillsList = document.getElementById("cv-skills");
  skillsList.innerHTML = "";
  skillsArray.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill.trim();
    skillsList.appendChild(li);
  });
}
