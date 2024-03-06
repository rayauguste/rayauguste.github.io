document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("scroll", function() {
      var navSection = document.querySelector(".nav-section");
      var navBar = document.querySelector(".nav-bar");
      var backUp = document.querySelector(".back-up");
      if (window.scrollY > 250) {
          navSection.classList.remove("hide");
          navBar.classList.remove("hide-two"); // Remove "hide" class from nav-bar
          backUp.classList.remove("hide");
      } else {
          navSection.classList.add("hide");
          navBar.classList.add("hide-two"); // Add "hide" class to nav-bar
          backUp.classList.add("hide");
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
  if (window.location.pathname.endsWith('designlist')) {
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
  window.location.href = "designlist";
}

function generateImages(variable) {
  var imageList = [];
  // Game UI Image List
  var gameImageList = [
    'img/Frame 3425.png',
    'img/Frame 3427.png',
    'img/Frame 3428.png',
    'img/Frame 3429.png',
    'img/Frame 3430.png',
    'img/Frame 3431.png',
    'img/Frame 3432.png',
    'img/Frame 3433.png',
    'img/Frame 3434.png'
  ];

  // Web UI Image List
  var webImageList = [
    'img/Frame 3435.png',
    'img/Frame 3436.png',
    'img/Frame 3437.png',
    'img/Frame 3439.png',
    'img/Frame 3440.png',
    'img/Frame 3441.png',
    'img/Frame 3442.png',
    'img/Frame 3443.png',
    'img/Frame 3444.png',
    'img/Frame 3445.png',
    'img/Frame 3446.png'
  ];

  // App UI Image List
  var appImageList = [
    'img/Frame 3455.png',
    'img/Frame 3450.png',
    'img/Frame 3457.png',
    'img/Frame 3454.png',
    'img/Frame 3447.png',
    'img/Frame 3449.png',
    'img/Frame 3453.png',
    'img/Frame 3451.png',
    'img/Frame 3448.png'
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



document.addEventListener('DOMContentLoaded', function() {
  const designElements = document.querySelectorAll('.large-design');

  designElements.forEach(designElement => {
      const observer = new IntersectionObserver(entries => {
          const isIntersecting = entries[0].isIntersecting;

          if (isIntersecting) {
              designElement.style.transform = 'perspective(1000px) rotateX(0deg)';
          } else {
              designElement.style.transform = 'perspective(1000px) rotateX(25deg)';
          }
      }, { threshold: [0] });

      observer.observe(designElement);
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Array of image paths
  var imageList = [
    'img/Frame 3425.png',
    'img/Frame 3427.png',
    'img/Frame 3428.png',
    'img/Frame 3429.png',
    'img/Frame 3430.png',
    'img/Frame 3431.png',
    'img/Frame 3432.png',
    'img/Frame 3433.png',
    'img/Frame 3434.png',
    'img/Frame 3435.png',
    'img/Frame 3436.png',
    'img/Frame 3437.png',
    'img/Frame 3439.png',
    'img/Frame 3440.png',
    'img/Frame 3441.png',
    'img/Frame 3442.png',
    'img/Frame 3443.png',
    'img/Frame 3444.png',
    'img/Frame 3445.png',
    'img/Frame 3446.png',
    'img/Frame 3455.png',
    'img/Frame 3450.png',
    'img/Frame 3457.png',
    'img/Frame 3454.png',
    'img/Frame 3447.png',
    'img/Frame 3449.png',
    'img/Frame 3453.png',
    'img/Frame 3451.png',
    'img/Frame 3448.png'
  ];

  // Function to randomly select an image path from the array
  function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }

  // Function to set random images for each img element
  function setRandomImages(designElement) {
    // Set initial opacity to 0 for transition
    designElement.style.opacity = 0;
    designElement.src = getRandomImage();

    // Immediately transition opacity to 1
    setTimeout(function() {
      designElement.style.opacity = 1;
    }, 100);

    // Wait for a random time before changing the image
    setInterval(function() {
      // Set opacity to 0 for smooth transition
      designElement.style.opacity = 0;

      // Wait for another small delay before changing the image
      setTimeout(function() {
        designElement.src = getRandomImage();

        // Set opacity back to 1 after changing the image
        setTimeout(function() {
          designElement.style.opacity = 1;
        }, 1000); // Delay of 1 second for transition effect
      }, 1000); // Delay of 1 second before changing the image
    }, Math.random() * 7000 + 6000); // Random time between 3 and 10 seconds
  }

  // Select each design element and set random images initially
  var designOne = document.querySelector('.design-one');
  var designTwo = document.querySelector('.design-two');
  var designThree = document.querySelector('.design-three');
  
  // Set random images for each design element
  setRandomImages(designOne);
  setRandomImages(designTwo);
  setRandomImages(designThree);
});

function toggleSearch() {
  var searchInput = document.querySelector(".search-input");
  var searchButton = document.querySelector(".search-button");

  if (!searchInput.classList.contains("active")) {
    // If search input is not active, make it active
    searchInput.classList.add("active");
    searchButton.classList.add("active");
    searchInput.focus(); // Focus on input when it becomes visible
  } else {
    // If search input is active, remove its active class
    searchInput.classList.remove("active");
    searchButton.classList.remove("active");
  }
}

// Add event listener to the document to detect clicks
document.addEventListener("click", function (event) {
  var searchContainer = document.querySelector(".search-container");
  var searchInput = document.querySelector(".search-input");
  var searchButton = document.querySelector(".search-button");

  // Check if the clicked element is outside the search container
  if (!searchContainer.contains(event.target)) {
    searchInput.classList.add("active"); // Hide search input
    searchContainer.classList.add("active"); // Hide search input
    searchButton.classList.remove("active"); // Show search button
  }
});

function toggleSearch() {
  var searchInput = document.querySelector(".search-input");
  var searchButton = document.querySelector(".search-button");
  var searchContainer = document.querySelector(".search-container");

  if (!searchInput.classList.contains("active")) {
    searchInput.classList.add("active");
    searchContainer.classList.add("active")
    searchButton.classList.remove("active");
    searchInput.focus(); // Focus on input when it becomes visible
  } else {
    searchInput.classList.remove("active");
    searchContainer.classList.remove("active")
    searchButton.classList.add("active");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          search(); // Perform search
          hideSearch(); // Hide search box
          this.value = ""; // Empty the search box
      }
  });

  function search() {
    var searchTerm = document.querySelector(".search-input").value.toLowerCase();
    var sections = document.querySelectorAll(".section"); // Target sections with class ".section"
  
    sections.forEach(function(section) {
      var sectionContent = section.textContent.toLowerCase();
      if (sectionContent.includes(searchTerm)) {
        // Scroll to the section's parent element (container)
        section.parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
      }
    });
  }

  function hideSearch() {
      var searchInput = document.querySelector(".search-input");
      var searchContainer = document.querySelector(".search-container");
      var searchButton = document.querySelector(".search-button");

      searchInput.classList.add("active"); // Hide search input
      searchContainer.classList.add("active")
      searchButton.classList.remove("active"); // Show search button
  }
});




function toggleSearchTwo() {
  var searchInput = document.querySelector(".search-input-two");
  var searchButton = document.querySelector(".search-button-two");

  if (!searchInput.classList.contains("active")) {
    // If search input is not active, make it active
    searchInput.classList.add("active");
    searchButton.classList.add("active");
    searchInput.focus(); // Focus on input when it becomes visible
  } else {
    // If search input is active, remove its active class
    searchInput.classList.remove("active");
    searchButton.classList.remove("active");
  }
}

// Add event listener to the document to detect clicks
document.addEventListener("click", function (event) {
  var searchContainer = document.querySelector(".search-container-two");
  var searchInput = document.querySelector(".search-input-two");
  var searchButton = document.querySelector(".search-button-two");

  // Check if the clicked element is outside the search container
  if (!searchContainer.contains(event.target)) {
    searchInput.classList.add("active"); // Hide search input
    searchContainer.classList.add("active"); // Hide search input
    searchButton.classList.remove("active"); // Show search button
  }
});

function toggleSearchTwo() {
  var searchInput = document.querySelector(".search-input-two");
  var searchButton = document.querySelector(".search-button-two");
  var searchContainer = document.querySelector(".search-container-two");

  if (!searchInput.classList.contains("active")) {
    searchInput.classList.add("active");
    searchContainer.classList.add("active")
    searchButton.classList.remove("active");
    searchInput.focus(); // Focus on input when it becomes visible
  } else {
    searchInput.classList.remove("active");
    searchContainer.classList.remove("active")
    searchButton.classList.add("active");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector(".search-input-two");

  searchInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          searchTwo(); // Perform search
          hideSearch(); // Hide search box
          this.value = ""; // Empty the search box
      }
  });

  function searchTwo() {
    var searchTerm = document.querySelector(".search-input-two").value.toLowerCase();
    var sections = document.querySelectorAll(".section"); // Target sections with class ".section"
  
    sections.forEach(function(section) {
      var sectionContent = section.textContent.toLowerCase();
      if (sectionContent.includes(searchTerm)) {
        // Scroll to the section's parent element (container)
        section.parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
      }
    });
  }

  function hideSearch() {
      var searchInput = document.querySelector(".search-input-two");
      var searchContainer = document.querySelector(".search-container-two");
      var searchButton = document.querySelector(".search-button-two");

      searchInput.classList.add("active"); // Hide search input
      searchContainer.classList.add("active")
      searchButton.classList.remove("active"); // Show search button
  }
});




document.addEventListener('DOMContentLoaded', function() {
  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————

  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() *60);
        const end = start + Math.floor(Math.random() * 60);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————

  const phrases = {
    "title-header-h1": ["Hi, I'm Ray Auguste"],
    "about-me-h1": ["About Me"],
    "design-process-h1": ["Design Process"],
    "services-header-h1": ["What Services Do I Offer"],
    "contact-header-h1": ["Get in Touch"]
  };

  const observedElements = {};

  function observeAndScramble(className, phrases) {
    const elements = document.querySelectorAll("." + className);
    elements.forEach((element, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!observedElements[entry.target]) {
              const fx = new TextScramble(entry.target);
              fx.setText(phrases[index]);
              observedElements[entry.target] = true;
            }
          } else {
            // Reset the state when element is out of view
            observedElements[entry.target] = false;
          }
        });
      });
      observer.observe(element);
    });
  }

  // Call the function with class names and their respective phrases
  observeAndScramble("title-header-h1", phrases["title-header-h1"]);
  observeAndScramble("about-me-h1", phrases["about-me-h1"]);
  observeAndScramble("design-process-h1", phrases["design-process-h1"]);
  observeAndScramble("services-header-h1", phrases["services-header-h1"]);
  observeAndScramble("contact-header-h1", phrases["contact-header-h1"]);
});


document.addEventListener('DOMContentLoaded', function() {
  const titleSections = document.querySelectorAll('.title-section, .about-me-section, .design-process-section, .services-section, .contact-section');
  
  titleSections.forEach(titleSection => {
      let isHovering = false; // Flag to track if the mouse is hovering over the div

      titleSection.addEventListener('mouseenter', () => {
          isHovering = true;
      });

      titleSection.addEventListener('mouseleave', () => {
          isHovering = false;
          titleSection.style.transition = 'transform 0.5s ease'; // Apply transition
          titleSection.style.transform = `perspective(1000px) rotateY(0deg)`; // Rotate back to 0 degrees
      });

      document.addEventListener('mousemove', (event) => {
          if (isHovering) {
              const mouseX = event.pageX - titleSection.offsetLeft; // X-coordinate of the cursor relative to the div
              const divWidth = titleSection.offsetWidth;
              const halfWidth = divWidth / 2;

              // Calculate the percentage of cursor position relative to the width of the div
              const cursorPercentage = (mouseX - halfWidth) / halfWidth;

              // Calculate the rotation angle based on the cursor position
              const maxRotation = 5; // Maximum rotation angle
              const rotationAngle = cursorPercentage * maxRotation * -1;

              // Apply the rotation
              titleSection.style.transition = ''; // Remove transition for immediate response
              titleSection.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
          }
      });
  });
});
