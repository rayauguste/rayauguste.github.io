document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("scroll", function() {
      var navSection = document.querySelector(".nav-section");
      if (window.scrollY > 250) {
        navSection.classList.remove("hide");
      } else {
        navSection.classList.add("hide");
      }
    });
  });

  //burger menu check box
  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var element = document.querySelector('#burger-menu');
    var bodyClick = null; // declare a variable to store the div element
  
    if (hamburger && element) {
      hamburger.addEventListener('change', function() {
        console.log('Checkbox state changed');
        // Toggle the 'move-left' class based on the state of the checkbox
        if (hamburger.checked) {
          element.classList.remove('move-left');
        } else {
          element.classList.add('move-left');
        }
  
        // Check if the hamburger is checked and if the bodyClick exists
        if (hamburger.checked) {
          // create a new div element and assign an id
          bodyClick = document.createElement('div');
          bodyClick.id = 'bodyClick';
          // apply the CSS style using style.cssText
          bodyClick.style.cssText = "height: 100%; width: 100%; position: fixed; top: 0; left: auto; right: 0; z-index: 5;";
          // append the div element to the document body
          document.body.appendChild(bodyClick);
        } else if (!hamburger.checked && bodyClick) {
          // remove the div element from the document body
          document.body.removeChild(bodyClick);
          // set the variable to null
          bodyClick = null;
        }
      });
    }
  });
  
  
  
  
  

//Click off burger menu
document.addEventListener('DOMContentLoaded', function() {
  var elements = [document.querySelector('#burger-menu')];

  document.addEventListener("click", function(event) {
    if (event.target.id === "bodyClick") {
      // Uncheck the checkbox
      document.getElementById("hamburger").checked = false;
      // Remove the class "move-left" from the elements
      elements.forEach(function(element) {
        element.classList.add("move-left");
      });
      // get the current div element by its id
      var bodyClick = document.getElementById("bodyClick");
      // remove the div element from the document body
      document.body.removeChild(bodyClick);
      // set the variable to null
      bodyClick = null;
    }
  });
});