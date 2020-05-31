function openTab(evt, tabName) {
  console.log("Tab change!");
  var i, tabContent, tabLinks;
  
  tabContent = document.getElementsByClassName("content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}


function onLoad() {
  populateSkills();
  populateExperience();
}


function populateSkills() {
  console.log("Populating skills!");

  $.getJSON('javascript/config.json', function(data) {
    $.each(data.skills, function(i, skill) {
      console.log(`Skill #${i}: ${skill}`);

      var button = document.createElement("button");
      button.innerHTML = skill;
      button.className = "button";
      button.style.background = "hsl(0, 0%, 92%)";
      button.style.border = "none";
      document.getElementById("skillsDiv").appendChild(button);
    });
  });
}

function populateExperience() {
  console.log("Populating experience!");

  $.getJSON('javascript/config.json', function(data) {
    $.each(data.experiences, function(i, experience) {
      console.log(`Experience #${i}: ${experience}`);

      var division = document.createElement("div");
      division.className="notification is-white-ter";

      var title = document.createElement("b");
      title.innerHTML = experience.title + " @ " + experience.company + " (" + experience.timeline + ")";
      division.appendChild(title);

      var descriptionList = document.createElement("ul");
      for (let j = 0; j < experience.description.length; j++) {
        var bulletPoint = document.createElement("li");
        bulletPoint.innerHTML = experience.descriptionList[j];
        descriptionList.appendChild(bulletPoint);
      }
      division.appendChild(descriptionList);

      document.getElementById("2").appendChild(division);
    });
  });
}