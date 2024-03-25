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
    var hamburgers = document.querySelectorAll('.hamburger');
    var element = document.querySelector('#burger-menu');
    var closeButton = document.getElementById('close-button');
  
    hamburgers.forEach(function(hamburger) {
      var bodyClick = null;
  
      if (hamburger && element && closeButton) {
        hamburger.addEventListener('change', function() {
          console.log('Checkbox state changed');
          var isChecked = this.checked;
  
          // Toggle the 'move-left' class based on the state of the checkbox
          if (isChecked) {
            element.classList.remove('move-left');
            closeButton.classList.remove('move-left'); // Remove 'move-left' from close button
          } else {
            element.classList.add('move-left');
            closeButton.classList.add('move-left'); // Add 'move-left' to close button
          }
  
          // Check if the hamburger is checked and if the bodyClick exists
          if (isChecked) {
            // create a new div element and assign an id
            bodyClick = document.createElement('div');
            bodyClick.id = 'bodyClick';
            // apply the CSS style using style.cssText
            bodyClick.style.cssText = "height: 100%; width: 100%; position: fixed; top: 0; left: auto; right: 0; z-index: 5;";
            // append the div element to the document body
            document.body.appendChild(bodyClick);
          } else if (!isChecked && bodyClick) {
            // remove the div element from the document body
            document.body.removeChild(bodyClick);
            // set the variable to null
            bodyClick = null;
          }
        });
      }
    });
  });
  
//Click off burger menu
document.addEventListener('DOMContentLoaded', function() {
  var elements = [document.querySelector('#burger-menu'), document.querySelector('#close-button')];

  document.addEventListener("click", function(event) {
    if (event.target.id === "bodyClick") {
      // Uncheck the checkbox for all elements with class .hamburger
      document.querySelectorAll('.hamburger').forEach(function(hamburger) {
        hamburger.checked = false;
      });
      // Remove the class "move-left" from the elements
      elements.forEach(function(element) {
        element.classList.add("move-left");
      });
      // Remove the bodyClick element
      var bodyClick = document.getElementById("bodyClick");
      if (bodyClick) {
        document.body.removeChild(bodyClick);
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.getElementById('close-button');
  var elements = [document.querySelector('#burger-menu'), document.querySelector('#close-button')];
  var hamburgerElements = document.querySelectorAll('.hamburger');

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      // Uncheck the checkboxes for all elements with class .hamburger
      hamburgerElements.forEach(function(hamburger) {
        hamburger.checked = false;
      });
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

      // Update the design list title based on the variable value
      const designListTitle = document.querySelector(".design-list-title");
      if (designListTitle) {
          switch (variable) {
              case 'game':
                  designListTitle.textContent = "VIDEO GAME UI";
                  break;
              case 'web':
                  designListTitle.textContent = "WEBSITE UI";
                  break;
              case 'app':
                  designListTitle.textContent = "MOBILE APP UI";
                  break;
              default:
                  designListTitle.textContent = "UNKNOWN UI";
          }
      }
      
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
    'img/GameUI/Frame 3425.png',
    'img/GameUI/Frame 3427.png',
    'img/GameUI/Frame 3428.png',
    'img/GameUI/Frame 3484.png',
    'img/GameUI/Frame 3486.png',
    'img/GameUI/Frame 3429.png',
    'img/GameUI/Frame 3430.png',
    'img/GameUI/Frame 3431.png',
    'img/GameUI/Frame 3432.png',
    'img/GameUI/Frame 3433.png',
    'img/GameUI/Frame 3434.png',
    'img/GameUI/Frame 3476.png',
    'img/GameUI/Frame 3483.png',
    'img/GameUI/Frame 3502.png',
    'img/GameUI/Frame 3501.png',
    'img/GameUI/Frame 3503.png'
  ];

  // Web UI Image List
  var webImageList = [
    'img/WebUI/Frame 3435.png',
    'img/WebUI/Frame 3436.png',
    'img/WebUI/Frame 3437.png',
    'img/WebUI/Frame 3439.png',
    'img/WebUI/Frame 3440.png',
    'img/WebUI/Frame 3441.png',
    'img/WebUI/Frame 3442.png',
    'img/WebUI/Frame 3443.png',
    'img/WebUI/Frame 3444.png',
    'img/WebUI/Frame 3445.png',
    'img/WebUI/Frame 3446.png'
  ];

  // App UI Image List
  var appImageList = [
    'img/AppUI/Frame 3455.png',
    'img/AppUI/Frame 3450.png',
    'img/AppUI/Frame 3457.png',
    'img/AppUI/Frame 3454.png',
    'img/AppUI/Frame 3447.png',
    'img/AppUI/Frame 3449.png',
    'img/AppUI/Frame 3453.png',
    'img/AppUI/Frame 3451.png',
    'img/AppUI/Frame 3448.png'
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

//Scroll designs 3D card animations
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

//Random background images overtime
document.addEventListener('DOMContentLoaded', function() {
  // Array of image paths
  var imageList = [
    'img/GameUI/Frame 3425.png',
    'img/GameUI/Frame 3427.png',
    'img/GameUI/Frame 3428.png',
    'img/GameUI/Frame 3484.png',
    'img/GameUI/Frame 3486.png',
    'img/GameUI/Frame 3429.png',
    'img/GameUI/Frame 3430.png',
    'img/GameUI/Frame 3431.png',
    'img/GameUI/Frame 3432.png',
    'img/GameUI/Frame 3433.png',
    'img/GameUI/Frame 3434.png',
    'img/GameUI/Frame 3476.png',
    'img/GameUI/Frame 3483.png',
    'img/GameUI/Frame 3502.png',
    'img/GameUI/Frame 3501.png',
    'img/GameUI/Frame 3503.png',
    'img/WebUI/Frame 3435.png',
    'img/WebUI/Frame 3436.png',
    'img/WebUI/Frame 3437.png',
    'img/WebUI/Frame 3439.png',
    'img/WebUI/Frame 3440.png',
    'img/WebUI/Frame 3441.png',
    'img/WebUI/Frame 3442.png',
    'img/WebUI/Frame 3443.png',
    'img/WebUI/Frame 3444.png',
    'img/WebUI/Frame 3445.png',
    'img/WebUI/Frame 3446.png',
    'img/AppUI/Frame 3455.png',
    'img/AppUI/Frame 3450.png',
    'img/AppUI/Frame 3457.png',
    'img/AppUI/Frame 3454.png',
    'img/AppUI/Frame 3447.png',
    'img/AppUI/Frame 3449.png',
    'img/AppUI/Frame 3453.png',
    'img/AppUI/Frame 3451.png',
    'img/AppUI/Frame 3448.png'
  ];

  // Function to randomly select an image path from the array
  function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }

  // Function to set random images for each img element
  function setRandomImages(designElement) {
    // Check if designElement is valid
    if (!designElement || !(designElement instanceof HTMLElement)) {
      return; // Exit the function silently if designElement is invalid
    }
  
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

// Add event listener to the document to detect clicks
document.addEventListener("click", function (event) {
  // Get search container
  var searchContainer = document.querySelector(".search-container");
  // Check if searchContainer is valid
  if (!searchContainer || !(searchContainer instanceof HTMLElement)) {
    return; // Exit the function silently if searchContainer is invalid
  }

  // Get search input
  var searchInput = document.querySelector(".search-input");
  // Check if searchInput is valid
  if (!searchInput || !(searchInput instanceof HTMLElement)) {
    return; // Exit the function silently if searchInput is invalid
  }

  // Get search button
  var searchButton = document.querySelector(".search-button");
  // Check if searchButton is valid
  if (!searchButton || !(searchButton instanceof HTMLElement)) {
    return; // Exit the function silently if searchButton is invalid
  }

  // Check if the clicked element is outside the search container
  if (!searchContainer.contains(event.target)) {
    // Hide search input
    searchInput.classList.add("active");
    // Hide search container
    searchContainer.classList.add("active");
    // Show search button
    searchButton.classList.remove("active");
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
  } else {
    searchInput.classList.remove("active");
    searchContainer.classList.remove("active")
    searchButton.classList.add("active");
    searchInput.focus(); // Focus on input when it becomes visible
  }
}

//On enter search
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector(".search-input");

  // Check if searchInput is valid
if (searchInput && searchInput instanceof HTMLElement) {
  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      search(); // Perform search
      hideSearch(); // Hide search box
      this.value = ""; // Empty the search box
    }
  });
}

function search() {
  var searchTerm = document.querySelector(".search-input").value.toLowerCase();
  var sections = document.querySelectorAll(".section"); // Target sections with class ".section"

  sections.forEach(function(section) {
    var sectionContent = section.textContent.toLowerCase();
    if (sectionContent.includes(searchTerm)) {
      // Scroll to the section containing the word
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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

// Add event listener to the document to detect clicks
document.addEventListener("click", function (event) {
  // Get search container
  var searchContainer = document.querySelector(".search-container-two");
  // Check if searchContainer is valid
  if (!searchContainer || !(searchContainer instanceof HTMLElement)) {
    return; // Exit the function silently if searchContainer is invalid
  }

  // Get search input
  var searchInput = document.querySelector(".search-input-two");
  // Check if searchInput is valid
  if (!searchInput || !(searchInput instanceof HTMLElement)) {
    return; // Exit the function silently if searchInput is invalid
  }

  // Get search button
  var searchButton = document.querySelector(".search-button-two");
  // Check if searchButton is valid
  if (!searchButton || !(searchButton instanceof HTMLElement)) {
    return; // Exit the function silently if searchButton is invalid
  }

  // Check if the clicked element is outside the search container
  if (!searchContainer.contains(event.target)) {
    // Hide search input
    searchInput.classList.add("active");
    // Hide search container
    searchContainer.classList.add("active");
    // Show search button
    searchButton.classList.remove("active");
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
  } else {
    searchInput.classList.remove("active");
    searchContainer.classList.remove("active")
    searchButton.classList.add("active");
    searchInput.focus(); // Focus on input when it becomes visible
  }
}

//On enter search
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector(".search-input-two");

  // Check if searchInput is valid
if (searchInput && searchInput instanceof HTMLElement) {
  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchTwo(); // Perform search
      hideSearch(); // Hide search box
      this.value = ""; // Empty the search box
    }
  });
}

function searchTwo() {
  var searchTerm = document.querySelector(".search-input-two").value.toLowerCase();
  var sections = document.querySelectorAll(".section"); // Target sections with class ".section"

  sections.forEach(function(section) {
    var sectionContent = section.textContent.toLowerCase();
    if (sectionContent.includes(searchTerm)) {
      // Scroll to the section containing the word
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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

// Glitch text
document.addEventListener('DOMContentLoaded', function() {
    // Glitch text
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
                const start = Math.floor(Math.random() * 100);
                const end = start + Math.floor(Math.random() * 100);
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

    // Example
    const phrases = {
        "title-header-h1": ["Hi, I'm Ray Auguste"],
        "contact-header-h1": ["Get in Touch"]
    };

    function observeAndScramble(className, phrases) {
      const elements = document.querySelectorAll("." + className);
      elements.forEach((element, index) => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              if (!observedElements[entry.target]) {
                const fx = new TextScramble(entry.target);
                fx.setText(phrases[index]);
                observedElements[entry.target] = true;
              }
            } else {
              // Reset the state when element is out of view or not sufficiently visible
              observedElements[entry.target] = false;
            }
          });
        }, { threshold: 0.5 }); // Set threshold to trigger when at least 50% of the element is visible
        observer.observe(element);
      });
    }

    // Initialize observed elements map
    const observedElements = {};

    // Call the function with class names and their respective phrases
    observeAndScramble("title-header-h1", phrases["title-header-h1"]);
    observeAndScramble("contact-header-h1", phrases["contact-header-h1"]);
});


//3D Card flip effect
document.addEventListener('DOMContentLoaded', function() {
  const titleSections = document.querySelectorAll('.section');
  
  // Function to check if the section has translation 0 in X-axis
  function isSectionTranslatedX(section) {
    const style = getComputedStyle(section);
    const transitionDuration = parseFloat(style.transitionDuration) * 1000; // Convert transition duration from seconds to milliseconds
    const transitionDelay = parseFloat(style.transitionDelay) * 1000; // Convert transition delay from seconds to milliseconds
    const currentTime = performance.now(); // Get the current time in milliseconds
    
    // Check if the section has started transition yet
    if (!section.__transitionStartTime) {
        section.__transitionStartTime = currentTime; // Store the start time of the transition
        return false; // Return false until the transition starts
    }
    
    // Calculate elapsed time since transition started
    const elapsedTime = currentTime - section.__transitionStartTime;
    
    // Calculate total duration of the transition including delay
    const totalDuration = transitionDuration + transitionDelay;
    
    // Check if the elapsed time exceeds the total duration
    if (elapsedTime >= totalDuration) {
        return true; // Return true once the transition is completed
    }
    
    // Calculate progress of the transition
    const progress = elapsedTime / totalDuration;
    
    // Check if the transition progress is greater than or equal to 90%
    return progress >= 0.7;
}



  titleSections.forEach(titleSection => {
    let isHovering = false; // Flag to track if the mouse is hovering over the div

    titleSection.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    titleSection.addEventListener('mouseleave', () => {
      isHovering = false;
      if (isSectionTranslatedX(titleSection)) {
        titleSection.style.transition = 'transform 0.5s ease'; // Apply transition
        titleSection.style.transform = `perspective(1000px) rotateY(0deg)`; // Rotate back to 0 degrees
      }
    });

    document.addEventListener('mousemove', (event) => {
      if (isHovering && isSectionTranslatedX(titleSection)) {
        const mouseX = event.pageX - titleSection.offsetLeft; // X-coordinate of the cursor relative to the div
        const divWidth = titleSection.offsetWidth;
        const halfWidth = divWidth / 2;

        // Calculate the percentage of cursor position relative to the width of the div
        const cursorPercentage = (mouseX - halfWidth) / halfWidth;

        // Calculate the rotation angle based on the cursor position
        const maxRotation = 5; // Maximum rotation angle
        const rotationAngle = cursorPercentage * maxRotation * -1;

        // Apply the rotation
        titleSection.style.transition = 'transform 0.1s ease'; // Remove transition for immediate response
        titleSection.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
      }
    });
  });
});

//Drag gallery cards
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables to store mouse position and the active draggable element
  let offsetX, offsetY;
  let active = false;
  let activeDraggable = null;
  const defaultLocations = {
    'design-one': { top: 1107, left: -40 },
    'design-two': { top: 1754, right: -201 },
    'design-three': { top: 2554, left: 305 }
  };
  const timers = new Map(); // Store timers for each draggable element

  // Mouse move event on window
  window.addEventListener('mousemove', (e) => {
    if (!active || !activeDraggable) return;
    // Calculate new element position considering scroll
    const posX = e.pageX - offsetX;
    const posY = e.pageY - offsetY;

    // Update element position
    if (activeDraggable.classList.contains('design-two')) {
      activeDraggable.style.transition = 'opacity 1s ease'; // Disable transition
      activeDraggable.style.right = (window.innerWidth - posX - activeDraggable.offsetWidth) + 'px';
    } else {
      activeDraggable.style.transition = 'opacity 1s ease'; // Disable transition
      activeDraggable.style.left = posX + 'px';
    }
    activeDraggable.style.top = posY + 'px';
  });

  // Mouse up event on window
  window.addEventListener('mouseup', (e) => {
    // Stop dragging
    active = false;
    if (activeDraggable) {
      activeDraggable.style.transition = ''; // Re-enable transition
      startResetTimer(activeDraggable); // Start reset timer when dragging stops
    }
  });

  // Get all draggable elements
  const draggables = document.querySelectorAll('.design-one, .design-two, .design-three');

  // Iterate over each draggable element and add event listeners
  draggables.forEach(draggable => {
    // Mouse down event
    draggable.addEventListener('mousedown', (e) => {
      // Prevent default browser drag behavior
      e.preventDefault();
      
      active = true;
      activeDraggable = draggable;
      // Store the offset between mouse position and element position
      const rect = activeDraggable.getBoundingClientRect();
      offsetX = e.pageX - rect.left - window.scrollX;
      offsetY = e.pageY - rect.top - window.scrollY;

      // Stop the reset timer when dragging starts
      stopResetTimer(activeDraggable);
    });

    // Mouse up event
    draggable.addEventListener('mouseup', (e) => {
      // Start the reset timer when dragging stops
      startResetTimer(activeDraggable);
    });
  });

  // Function to start the reset timer for a draggable element
  function startResetTimer(draggable) {
    const className = draggable.classList[0]; // Get the first class name
    if (!timers.has(className)) {
      timers.set(className, setTimeout(() => {
        resetPosition(draggable);
        timers.delete(className); // Remove timer after reset
      }, 5000)); // Reset after 3 seconds
    }
  }

  // Function to stop the reset timer for a draggable element
  function stopResetTimer(draggable) {
    const className = draggable.classList[0]; // Get the first class name
    if (timers.has(className)) {
      clearTimeout(timers.get(className));
      timers.delete(className);
    }
  }

  // Function to reset position of a draggable element
  function resetPosition(draggable) {
    const className = draggable.classList[0]; // Get the first class name
    const defaultLocation = defaultLocations[className];
    if (defaultLocation) {
      const { top, left, right } = defaultLocation;
      draggable.style.transition = ''; // Re-enable transition
      draggable.style.position = 'absolute';
      draggable.style.top = top + 'px';
      if (className === 'design-two') {
        draggable.style.left = ''; // Clear left value
        draggable.style.right = right + 'px'; // Set right value directly
      } else {
        draggable.style.left = left + 'px';
        draggable.style.right = ''; // Clear right value for other classes
      }
      draggable.style.opacity = 1; // Reset opacity
    } else {
      console.error(`Default location for the draggable element is undefined.`);
    }
  }

  // Reset position of all draggable elements on initial load
  draggables.forEach(draggable => {
    resetPosition(draggable);
  });
});

//Slide sections
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  // Define options for the IntersectionObserver
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px 100px', // Margin of 100px on each side of the viewport
    threshold: 0.2 // Trigger when at least 50% of the section is visible
  };

  // Callback function for the IntersectionObserver
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Check if at least 50% of the section is visible
        if (entry.intersectionRatio >= 0.2) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing the section
        }
      }
    });
  }

  // Create a new IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe each section immediately
  sections.forEach(section => {
    observer.observe(section);
  });
});

//fix bug where the screen is aligned to the right
document.addEventListener('DOMContentLoaded', function() {
  // Scroll the page to the left
  window.scrollTo({left: 0, behavior: 'smooth'});
});

//fix bug where the screen is aligned to the right
document.addEventListener('DOMContentLoaded', function() {
  // Set a delay of 1000 milliseconds (1 second) before scrolling
  setTimeout(function() {
      // Scroll the page to the left
      window.scrollTo({left: 0, behavior: 'smooth'});
  }, 500); // Adjust the delay time (in milliseconds) as needed
});

//Enlarge design image
document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector(".overlay");
  const enlargedImage = document.querySelector(".enlarged-image");
  const closeBtn = document.querySelector(".close-btn");

  // Check if overlay exists before using it
  if (overlay) {
    overlay.addEventListener("click", function(event) {
      if (event.target === overlay) {
        fadeOutOverlay();
      }
    });
  }

  function fadeInOverlay() {
    if (overlay) {
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.style.opacity = 1;
      }, 50); // Adjust delay time as needed
    }
  }

  function fadeOutOverlay() {
    if (overlay) {
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.style.display = "none";
      }, 500); // Adjust delay time to match transition duration
    }
  }

  // Check if closeBtn exists before using it
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      fadeOutOverlay();
    });
  }

  // Show overlay and fade in on large design click
  const largeDesigns = document.querySelectorAll(".large-design");
  largeDesigns.forEach(function(largeDesign) {
    largeDesign.addEventListener("click", function() {
      const img = this.querySelector("img");
      if (img) {
        const imgSrc = img.getAttribute("src");
        if (imgSrc) {
          // Check if enlargedImage exists before using it
          if (enlargedImage) {
            enlargedImage.setAttribute("src", imgSrc);
            fadeInOverlay();
          }
        }
      }
    });
  });
});

//3D card effect
document.addEventListener('DOMContentLoaded', function() {
  const enlargedImage = document.querySelector('.enlarged-image');

  // Check if enlargedImage exists before adding event listeners
  if (enlargedImage) {
    enlargedImage.addEventListener('mouseenter', function() {
      this.style.transition = 'none'; // Disable transition on hover
      this.addEventListener('mousemove', function(event) {
        const boundingRect = this.getBoundingClientRect();
        const centerX = boundingRect.left + boundingRect.width / 2; // X-coordinate of the center of the image
        const centerY = boundingRect.top + boundingRect.height / 2; // Y-coordinate of the center of the image
        
        const mouseX = event.clientX - centerX; // X-coordinate of the mouse relative to the center of the image
        const mouseY = event.clientY - centerY; // Y-coordinate of the mouse relative to the center of the image
        
        // Calculate the rotation angles based on mouse position
        const maxRotation = 10; // Maximum rotation angle
        const rotationX = (mouseY / centerY) * maxRotation; // Rotation around the X-axis
        const rotationY = -(mouseX / centerX) * maxRotation; // Rotation around the Y-axis
        
        // Apply the rotation to the image
        this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      });
    });

    enlargedImage.addEventListener('mouseleave', function() {
      // Enable transition on mouse leave
      this.style.transition = 'transform 0.5s ease';
      // Reset the transform on mouse leave
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const designCategories = document.querySelectorAll(".cat-info");
  let completedAnimations = 0;

  // Set initial rotation for each .cat-info element
  designCategories.forEach(function(category) {
    category.style.transform = "perspective(1000px) rotateY(50deg)"; // Set initial Y rotation
  });

  // Function to fade in each .design-categories element with staggered delays
  function fadeInDesignCategories() {
    designCategories.forEach(function(category, index) {
      const delay = index * 250; // Delay multiplier (0.5s for each element)
      setTimeout(function() {
        category.style.opacity = 1;
        if (!category.classList.contains('hovered')) {
          category.style.transform = "perspective(1000px) rotateY(0deg)"; // Apply default rotation transform
        }
        completedAnimations++;

        // Check if all elements have finished animating
        if (completedAnimations === designCategories.length) {
          // All animations are complete, stop the timer here
          clearTimeout(timer);
        }
      }, delay);
    });
  }

  // Call the function to fade in .design-categories elements after a small delay
  const timer = setTimeout(fadeInDesignCategories, 200); // Adjust delay time as needed

  // Add event listeners for hover effect
  designCategories.forEach(function(category) {
    category.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
      this.style.transform = ""; // Reset transform on hover
    });
    category.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
  });
});


