document.addEventListener("DOMContentLoaded", function () {
  let playTimeText = document.querySelector(".play-time-text");
  let startTime = Date.now(); // Records the starting time

  function formatTime(timeInMilliseconds) {
    let hours = Math.floor(timeInMilliseconds / (1000 * 60 * 60));
    let minutes = Math.floor(
      (timeInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((timeInMilliseconds % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((timeInMilliseconds % 1000) / 10); // get 2 digits for milliseconds

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      ":" +
      String(milliseconds).padStart(2, "0")
    );
  }

  function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;
    playTimeText.textContent = formatTime(elapsedTime);
  }

  setInterval(updateTimer, 10); // Updates every 10ms for millisecond accuracy
});

document.addEventListener("DOMContentLoaded", function () {
  const breathingElement = document.querySelector(".breathing-effect");

  function randomBreathing() {
    const randomDuration = (Math.random() * 2 + 5).toFixed(2); // Between 5 and 7 seconds
    breathingElement.style.animationDuration = `${randomDuration}s`;
  }

  // Call the randomBreathing function periodically to change the timing
  setInterval(randomBreathing, 7000); // Change duration every 7 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".persons-text");
  const text = "Hello person"; // The text you want to animate
  let index = 0; // Start index

  function typeAnimation() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index); // Add one character at a time
      index++;
      setTimeout(typeAnimation, 100); // Adjust speed (100ms delay between letters)
    }
  }

  typeAnimation(); // Call the function to start typing
});

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Set the threshold for when the background should start darkening
    const scrollThreshold = 7000; // Adjust this value as needed

    // Calculate the darkening factor based on scroll position
    const darkeningFactor = Math.min((scrollY - scrollThreshold) / 1000, 1);

    // Darken the background if above the threshold
    if (scrollY > scrollThreshold) {
      const backgroundColorValue = 255 - darkeningFactor * 500; // Adjust for darker colors
      document.body.style.backgroundColor = `rgb(${backgroundColorValue}, ${backgroundColorValue}, ${backgroundColorValue})`;
    } else {
      // Reset the background color when below the threshold
      document.body.style.backgroundColor = `rgb(246, 253, 255)`; // Original color
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //3D card effect
  const introductionText = document.querySelector(".introduction-text");
  introductionText.addEventListener("mouseenter", function () {
    this.style.transition = "none"; // Disable transition on hover
    this.style.transition = "transform 0.1s ease";
    this.addEventListener("mousemove", function (event) {
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

  introductionText.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //3D card effect
  const contactButton = document.querySelector(".contact-button");
  contactButton.addEventListener("mouseenter", function () {
    this.style.transition = "none"; // Disable transition on hover
    this.style.transition = "transform 0.1s ease";
    this.addEventListener("mousemove", function (event) {
      const boundingRect = this.getBoundingClientRect();
      const centerX = boundingRect.left + boundingRect.width / 2; // X-coordinate of the center of the image
      const centerY = boundingRect.top + boundingRect.height / 2; // Y-coordinate of the center of the image

      const mouseX = event.clientX - centerX; // X-coordinate of the mouse relative to the center of the image
      const mouseY = event.clientY - centerY; // Y-coordinate of the mouse relative to the center of the image

      // Calculate the rotation angles based on mouse position
      const maxRotation = 150; // Maximum rotation angle
      const rotationX = (mouseY / centerY) * maxRotation; // Rotation around the X-axis
      const rotationY = -(mouseX / centerX) * maxRotation; // Rotation around the Y-axis

      // Apply the rotation to the image
      this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateX(-50%)`;
    });
  });

  contactButton.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(-50%)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //3D card effect
  const reachMeButtonsContainer = document.querySelector(
    ".reach-me-buttons-container"
  );
  reachMeButtonsContainer.addEventListener("mouseenter", function () {
    this.style.transition = "none"; // Disable transition on hover
    this.style.transition = "transform 0.1s ease";
    this.addEventListener("mousemove", function (event) {
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
      this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateX(-50%)`;
    });
  });

  reachMeButtonsContainer.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(-50%)";
  });
});

// Array of image URLs
const imageUrls = [
  "img/GameUI/game_ui_one.png",
  "img/GameUI/game_ui_two.png",
  "img/GameUI/game_ui_three.png",
  "img/GameUI/game_ui_four.png",
  "img/GameUI/game_ui_five.png",
  "img/GameUI/game_ui_six.png",
  "img/GameUI/game_ui_seven.png",
  "img/GameUI/game_ui_eight.png",
  "img/GameUI/game_ui_nine.png",
  "img/GameUI/game_ui_ten.png",
  "img/GameUI/game_ui_eleven.png",
  "img/GameUI/game_ui_twelve.png",
  "img/GameUI/game_ui_thirteen.png",
  "img/GameUI/game_ui_fourteen.png",
  "img/GameUI/game_ui_fifteen.png",
  // Add more image URLs as needed

  "img/WebUI/web_ui_one.png",
  "img/WebUI/web_ui_two.png",
  "img/WebUI/web_ui_three.png",
  "img/WebUI/web_ui_four.png",
  "img/WebUI/web_ui_five.png",
  "img/WebUI/web_ui_six.png",
  "img/WebUI/web_ui_seven.png",
  "img/WebUI/web_ui_eight.png",
  "img/WebUI/web_ui_nine.png",
  "img/WebUI/web_ui_ten.png",
  "img/WebUI/web_ui_eleven.png",
  "img/WebUI/web_ui_twelve.png",
  "img/WebUI/web_ui_thirteen.png",
  "img/WebUI/web_ui_fourteen.png",
  "img/WebUI/web_ui_fifteen.png",
  "img/WebUI/web_ui_sixteen.png",
  "img/WebUI/web_ui_seventeen.png",
  "img/WebUI/web_ui_eighteen.png",
  "img/WebUI/web_ui_nineteen.png",
  "img/WebUI/web_ui_twenty.png",
  // Add more image URLs as needed

  "img/AppUI/app_ui_one.png",
  "img/AppUI/app_ui_two.png",
  "img/AppUI/app_ui_three.png",
  "img/AppUI/app_ui_four.png",
  "img/AppUI/app_ui_five.png",
  "img/AppUI/app_ui_six.png",
  "img/AppUI/app_ui_seven.png",
  "img/AppUI/app_ui_eight.png",
  "img/AppUI/app_ui_nine.png",
  "img/AppUI/app_ui_ten.png",
  // Add more image URLs as needed
];

// Function to create and append an image to the body at a specified position
function createImage(imageUrl, top = "0px", left = "0px", className = "") {
  // Create a new img element
  const imgElement = document.createElement("img");

  // Set the src attribute to the provided image URL
  imgElement.src = imageUrl;

  // Optionally add a class to the img element
  if (className) {
    imgElement.className = className;
  }

  // Set the position of the image
  imgElement.style.position = "absolute";
  imgElement.style.top = top;
  imgElement.style.left = left;
  imgElement.style.opacity = "1";
  imgElement.style.transition = "opacity 0.5s";

  // Store the last known position as data attributes
  imgElement.dataset.top = top;
  imgElement.dataset.left = left;

  // Prevent default drag behavior
  imgElement.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  // Make the image draggable
  makeDraggable(imgElement);

  // Append the img element directly to the body
  document.body.appendChild(imgElement);
}

// Function to make an element draggable
function makeDraggable(element) {
  let offsetX, offsetY;

  element.addEventListener("mousedown", (event) => {
    // Calculate the offset relative to the element's position
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
      // Update the position considering the current scroll
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY + window.scrollY}px`;

      // Update the data attributes for the new position
      element.dataset.top = element.style.top;
      element.dataset.left = element.style.left;
    }

    function mouseUpHandler() {
      // Remove event listeners when dragging stops
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    // Attach the move and up event listeners
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
}

// Function to change the image every 10 seconds
function changeImage() {
  // Get all images
  const existingImages = document.querySelectorAll("img.design-item");

  existingImages.forEach((img) => {
    // Fade out the image
    img.style.opacity = "0";

    // After the fade-out transition, change the image source
    setTimeout(() => {
      // Get a random image URL from the array
      const randomImageUrl =
        imageUrls[Math.floor(Math.random() * imageUrls.length)];

      // Update the src attribute of the image
      img.src = randomImageUrl;

      // Retain the last position
      img.style.top = img.dataset.top;
      img.style.left = img.dataset.left;

      // Fade in the image
      img.style.opacity = "1";
    }, 500); // Wait for the fade-out duration
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Fixed Y positions for the images
  const yPositions = ["3550px", "3930px", "3500px", "3900px", "3550px"];

  // Fixed X positions for the images
  const xPositions = ["100px", "400px", "700px", "1000px", "1300px"];

  // Create initial images at specified Y and X positions
  for (let i = 0; i < yPositions.length; i++) {
    createImage(
      imageUrls[Math.floor(Math.random() * imageUrls.length)],
      yPositions[i], // Set Y position from the array
      xPositions[i], // Set X position from the array
      "design-item"
    );
  }

  // Change images every 10 seconds
  setInterval(changeImage, 10000);
});
