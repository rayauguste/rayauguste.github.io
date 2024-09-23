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
