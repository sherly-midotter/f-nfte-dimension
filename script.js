//LANG TOG //
function toggleLanguage(language) {
    let description = document.getElementById("description");
    if (language === "Deutsch") {
      description.innerHTML = "Die Fünfte Dimension";
    }
    else {
      description.innerHTML = "The Fifth Dimension";
    }
  }
