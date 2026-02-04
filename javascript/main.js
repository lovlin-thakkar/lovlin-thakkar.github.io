function openTab(evt, tabName) {
  document.querySelectorAll(".content").forEach(function(tabContent) {
    tabContent.style.display = "none";
  });

  document.querySelectorAll(".tab").forEach(function(tabLink) {
    tabLink.classList.remove("is-active");
  });

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("is-active");
}


function populateSkills(data) {
  $.each(data.skills, function(i, skill) {
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(skill));
    button.className = "button";
    button.style.background = "hsl(0, 0%, 92%)";
    button.style.border = "none";
    document.getElementById("skillsDiv").appendChild(button);
  });
}


function populateExperience(data) {
  $.each(data.experiences, function(i, experience) {
    var division = document.createElement("div");
    division.className = "notification is-white-ter";

    var header = document.createElement("div");
    header.className = "exp-header";

    var title = document.createElement("span");
    title.className = "exp-title";
    title.textContent = experience.title;
    header.appendChild(title);

    var timeline = document.createElement("span");
    timeline.className = "exp-timeline";
    timeline.textContent = experience.timeline;
    header.appendChild(timeline);

    var company = document.createElement("div");
    company.className = "exp-company";
    company.textContent = experience.company;
    header.appendChild(company);

    division.appendChild(header);

    var descriptionList = document.createElement("ul");
    for (const description of experience.description) {
      var bulletPoint = document.createElement("li");
      bulletPoint.appendChild(document.createTextNode(description));
      descriptionList.appendChild(bulletPoint);
    }
    division.appendChild(descriptionList);

    document.getElementById("2").appendChild(division);
  });
}

function onLoad() {
  $.getJSON("javascript/config.json", function(data) {
    populateSkills(data);
    populateExperience(data);
  }).fail(function() {
    var errorDiv = document.createElement("div");
    errorDiv.className = "notification is-danger";
    errorDiv.textContent = "Failed to load configuration. Please try refreshing the page.";
    document.querySelector(".section .container").prepend(errorDiv);
  });
}
