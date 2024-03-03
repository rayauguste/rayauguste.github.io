document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("scroll", function() {
      var navSection = document.querySelector(".nav-section");
      var navBar = document.querySelector(".nav-bar");
      if (window.scrollY > 250) {
          navSection.classList.remove("hide");
          navBar.classList.remove("hide-two"); // Remove "hide" class from nav-bar
      } else {
          navSection.classList.add("hide");
          navBar.classList.add("hide-two"); // Add "hide" class to nav-bar
      }
  });
});

  //burger menu check box
  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var element = document.querySelector('#burger-menu');
    var closeButton = document.getElementById('close-button');
    var bodyClick = null; // declare a variable to store the div element
  
    // Check if all necessary elements exist
    if (hamburger && element && closeButton) {
      hamburger.addEventListener('change', function() {
        console.log('Checkbox state changed');
        // Toggle the 'move-left' class based on the state of the checkbox
        if (hamburger.checked) {
          element.classList.remove('move-left');
          closeButton.classList.remove('move-left'); // Remove 'move-left' from close button
        } else {
          element.classList.add('move-left');
          closeButton.classList.add('move-left'); // Add 'move-left' to close button
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
  var elements = [document.querySelector('#burger-menu'), document.querySelector('#close-button')];

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

document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.getElementById('close-button');
  var elements = [document.querySelector('#burger-menu'), document.querySelector('#close-button')];

  if (closeButton) {
    closeButton.addEventListener('click', function() {
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
    });
  }
});

function generateImagesOnLoad() {
  // Check if the page is designlist.html
  if (window.location.pathname.endsWith('designlist.html')) {
      // Get the variable value from localStorage
      var variable = localStorage.getItem('variable');
      if (!variable) {
          // Set a default value if the variable is not set
          variable = 'game';
      }
      // Call the function to generate images based on the variable
      generateImages(variable);
  }
}

function changeVariableAndNavigate(variable) {
  // Store the variable value in localStorage
  localStorage.setItem('variable', variable);
  // Open the link to another HTML page
  window.location.href = "designlist.html";
}

function generateImages(variable) {
  var imageList = [];
  // Game UI Image List
  var gameImageList = [
    'img/Frame 3425.png',
    'img/Frame 3425.png',
    'img/Frame 3425.png',
    'img/Frame 3425.png'
  ];

  // Web UI Image List
  var webImageList = [
    'img/Frame 3427.png',
    'img/Frame 3427.png',
    'img/Frame 3427.png',
    'img/Frame 3427.png'
  ];

  // App UI Image List
  var appImageList = [
    'img/Frame 3428.png',
    'img/Frame 3428.png',
    'img/Frame 3428.png',
    'img/Frame 3428.png'
  ];

  if (variable === 'game') {
      imageList = gameImageList;
  } else if (variable === 'web') {
      imageList = webImageList;
  } else if (variable === 'app') {
      imageList = appImageList;
  }

  // Generate div elements with images
  var designListSection = document.querySelector('.design-list');
  designListSection.innerHTML = ''; // Clear existing content
  for (var i = 0; i < imageList.length; i++) {
      var imageDiv = document.createElement('div');
      imageDiv.classList.add('large-design'); // Add 'large-design' class to the div
      var image = document.createElement('img');
      image.src = imageList[i];
      image.alt = 'Image ' + (i + 1);
      image.style.width = '100%'; // Set image width to fill the parent div
      image.style.height = 'auto'; // Maintain aspect ratio
      image.draggable = false; // Disable image dragging
      imageDiv.appendChild(image);
      designListSection.appendChild(imageDiv);
  }
}

// Call the generateImagesOnLoad function when the page finishes loading
document.addEventListener('DOMContentLoaded', generateImagesOnLoad);
