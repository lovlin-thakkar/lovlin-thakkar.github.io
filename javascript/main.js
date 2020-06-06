function openTab(evt, tabName) {
  var tabsContent, tabLinks;
  
  tabsContent = document.getElementsByClassName("content");
  [].forEach.call(tabsContent, function(tabContent) {
    tabContent.style.display = "none";
    return tabContent;
  });

  tabLinks = document.getElementsByClassName("tab");
  [].forEach.call(tabLinks, function(tabLink) {
    tabLink.className = tabLink.className.replace(" is-active", "");
    return tabLink;
  });

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
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

    var title = document.createElement("b");
    var titleText = experience.title + " @ " + experience.company + " (" + experience.timeline + ")";
    title.appendChild(document.createTextNode(titleText));
    division.appendChild(title);

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
  });
}