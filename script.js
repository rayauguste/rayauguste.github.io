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
  const textElement = document.querySelector(".persons-text");
  const texts = [
    "Hello person",
    "Hello user",
    "Hi there!",
    "Hey human!",
    "Greetings traveler",
    "Welcome back!",
    "Hello, traveler",
    "Greetings, observer",
    "Are you here?",
    "Welcome to nothingness",
    "Is anyone there?",
    "Lost in the static",
    "Hello from the void",
    "Welcome, echo",
    "Are you real, human?",
    "Greetings from beyond",
    "Endless hello",
    "Hello, wandering soul",
    "Welcome to the void",
    "Are you listening?",
    "Entering the unknown",
    "Greetings, lost one",
    "Hello, fragment of reality",
    "The void speaks: Hello",
    "Is this real?",
    "Unknown presence detected, hello",
    "Greetings in silence",
    "Echoing hello",
    "Hello from nowhere",
    "Unknown signals received",
  ];

  let index = 0; // Start index

  function typeAnimation() {
    const currentText = texts[Math.floor(Math.random() * texts.length)]; // Pick a random text from the array

    function typeLetter() {
      if (index < currentText.length) {
        textElement.innerHTML += currentText.charAt(index); // Add one character at a time
        index++;
        setTimeout(typeLetter, 100); // Adjust speed (100ms delay between letters)
      } else {
        setTimeout(backspaceAnimation, 1000); // Wait 1s before starting the backspace
      }
    }

    typeLetter();
  }

  function backspaceAnimation() {
    const currentText = textElement.innerHTML;

    if (index > 0) {
      textElement.innerHTML = currentText.substring(0, index - 1); // Remove one character at a time
      index--;
      setTimeout(backspaceAnimation, 50); // Adjust speed (50ms delay between removing letters)
    } else {
      // After backspacing, start typing a new random text
      setTimeout(typeAnimation, 500); // Start typing the next random text after 0.5s
    }
  }

  // Start the typing animation
  typeAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function scrambleText(el) {
    const oldText = el.innerText;
    const length = oldText.length;
    const scrambleDuration = 1000; // total scrambling time
    const scrambleInterval = 50; // how often to change characters

    let intervalId = setInterval(() => {
      let output = "";
      for (let i = 0; i < length; i++) {
        if (Math.random() < 0.28) {
          output += `<span class="dud">${randomChar()}</span>`;
        } else {
          output += oldText[i];
        }
      }
      el.innerHTML = output;
    }, scrambleInterval);

    // Stop scrambling after the scrambleDuration
    setTimeout(() => {
      clearInterval(intervalId);
    }, scrambleDuration);
  }

  const phrases = [
    "no exit",
    "null",
    "no way out",
    "not here",
    "nothingness",
    "out of bounds",
    "lost",
    "void",
    "empty",
    "undefined",
    "nowhere",
    "shadows",
    "silence",
    "disconnected",
    "unseen",
    "unreachable",
    "fading away",
    "lost in thought",
    "endless void",
    "beyond reach",
    "echoes of emptiness",
    "invisible barriers",
    "shattered dreams",
    "fading light",
    "whispers of doubt",
    "darkened path",
    "dreams fading",
    "lost dreams",
    "dreaming beyond limits",
    "nightmare",
    "sleeping in darkness",
    "forgotten dreams",
    "fading dreamscape",
    "shadows of dreams",
    "dreaming of the void",
    "echoes of a dream",
    "the dream fades",
    "illusion of sleep",
    "dreams unfulfilled",
    "visions of nothingness",
    "in a dreamless state",
    "shattered illusions",
    "waking nightmare",
    "lost in a dream",
    "sleep's embrace",
    "forgotten reality",
    "the dream is over",
    "between wake and sleep",
    "drifting in dreams",
  ];

  const textElement = document.querySelector(".background-blur-text-nothing");

  function updateText() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const newText = phrases[randomIndex];

    // Start scrambling the current text
    scrambleText(textElement);

    // Set the new text after scrambling, and then fade in
    setTimeout(() => {
      textElement.innerText = newText; // Set the new text after scrambling
    }, 1000); // Set the new text after the scramble duration (1 second)

    // Fade out immediately, then fade in after setting the new text
    textElement.style.transition = "opacity 1s";
    textElement.style.opacity = 0; // Fade out immediately

    setTimeout(() => {
      textElement.style.opacity = 1; // Fade in after 2 seconds
    }, 2000); // Delay fade-in by 2 seconds to ensure text has changed
  }

  // Update text every 8 seconds (8000 milliseconds)
  setInterval(updateText, 8000);
  updateText(); // Initial call to set the text immediately
});

document.addEventListener("DOMContentLoaded", function () {
  const cursorTextElement = document.querySelector(".persons-text-cursor-text");
  const darkTrigger = document.querySelector(".dark-trigger"); // The target div
  const backgroundText = document.querySelector(
    ".background-blur-text-nothing"
  );
  const popupText = document.getElementById("popupText");

  if (!darkTrigger) {
    console.error("Element with class 'dark-trigger' not found.");
    return;
  }

  backgroundText.style.top =
    darkTrigger.offsetTop + darkTrigger.offsetHeight + 9500 + "px";

  document.addEventListener("scroll", function () {
    const rect = darkTrigger.getBoundingClientRect();
    const scrollY = window.scrollY;

    // Check if user is below the .dark-trigger div
    const isBelowDiv = rect.bottom <= 0;

    if (isBelowDiv) {
      // Calculate the darkening factor based on how far below the div the user has scrolled
      const distanceBelow =
        scrollY - (darkTrigger.offsetTop + darkTrigger.offsetHeight);

      // Adjust divisor to make darkening more gradual
      const darkeningFactor = Math.min(distanceBelow / 3000, 1); // Gradually darken with a larger divisor

      // Darken more aggressively for complete black at max
      const backgroundColorValue = Math.max(0, 255 - darkeningFactor * 255); // Ensures complete black at full darkening

      // Apply the calculated background color
      document.body.style.backgroundColor = `rgb(${backgroundColorValue}, ${backgroundColorValue}, ${backgroundColorValue})`;

      // Add or remove classes based on the darkening factor
      if (darkeningFactor > 0.5) {
        cursorTextElement.classList.add("white");
        popupText.classList.add("dark-mode");
      } else {
        cursorTextElement.classList.remove("white");
        popupText.classList.remove("dark-mode");
      }
    } else {
      // Reset background and classes when above the .dark-trigger div
      document.body.style.backgroundColor = `rgb(246, 253, 255)`; // Original color
      cursorTextElement.classList.remove("white");
      popupText.classList.remove("dark-mode");
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
      this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
  });

  contactButton.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
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
      const maxRotation = 7; // Maximum rotation angle
      const rotationX = (mouseY / centerY) * maxRotation; // Rotation around the X-axis
      const rotationY = -(mouseX / centerX) * maxRotation; // Rotation around the Y-axis

      // Apply the rotation to the image
      this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
  });

  reachMeButtonsContainer.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //3D card effect
  const visitStoreButton = document.querySelector(".visit-store-button");
  visitStoreButton.addEventListener("mouseenter", function () {
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
      this.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
  });

  visitStoreButton.addEventListener("mouseleave", function () {
    // Enable transition on mouse leave
    this.style.transition = "transform 0.1s ease";
    // Reset the transform on mouse leave
    this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
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

let isDraggingTimer;
let isDragging = false; // Track if the image is being dragged

let currentIndex = 0; // Track the current image index
const imagesPerBatch = 6; // Number of images to change per batch

// Function to create and append an image to the designs-list container
function createImage(imageUrl, className = "") {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;

  if (className) {
    imgElement.className = className;
  }

  imgElement.style.opacity = "1";
  imgElement.style.transition = "opacity 0.5s";
  imgElement.draggable = false;

  const designsList = document.querySelector(".designs-list");
  designsList.appendChild(imgElement);

  const enlargedImage = document.querySelector(".enlarged-image");
  imgElement.addEventListener("click", function () {
    const imgSrc = imgElement.getAttribute("src");
    if (imgSrc) {
      if (enlargedImage) {
        enlargedImage.setAttribute("src", imgSrc);
        fadeInOverlay();
      }
    }
  });
}

// Function to show the next batch of 20 images with a fade transition
function showImagesBatch(startIndex) {
  const designsList = document.querySelector(".designs-list");
  const existingImages = designsList.querySelectorAll("img");

  existingImages.forEach((img, i) => {
    // Calculate the new index for each image in the batch
    const newIndex = (startIndex + i) % imageUrls.length;

    // Fade out the image
    img.style.opacity = "0";

    // After the fade-out transition, change the image source
    setTimeout(() => {
      img.src = imageUrls[newIndex];

      // Fade in the new image
      setTimeout(() => {
        img.style.opacity = "1";
      }, 100); // Small delay for fade-in
    }, 500); // Wait for the fade-out transition
  });
}

// Function to go to the previous batch of images
function showPreviousBatch() {
  currentIndex =
    (currentIndex - imagesPerBatch + imageUrls.length) % imageUrls.length;
  showImagesBatch(currentIndex);
}

// Function to go to the next batch of images
function showNextBatch() {
  currentIndex = (currentIndex + imagesPerBatch) % imageUrls.length;
  showImagesBatch(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  // Create initial 20 images
  for (let i = 0; i < imagesPerBatch; i++) {
    createImage(imageUrls[i], "design-item");
  }

  // Initial display of images
  showImagesBatch(currentIndex);

  // Set up previous and next buttons
  document
    .querySelector(".prev-button")
    .addEventListener("click", showPreviousBatch);
  document
    .querySelector(".next-button")
    .addEventListener("click", showNextBatch);
});

//Enlarge design image
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const enlargedImage = document.querySelector(".enlarged-image");

  // Check if overlay exists before using it
  if (overlay) {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        fadeOutOverlay();
      }
    });
  }

  // Check if enlargedImage exists before using it
  if (enlargedImage) {
    enlargedImage.addEventListener("click", function () {
      fadeOutOverlay();
    });
  }

  // Add scroll event listener to fade out overlay on scroll
  window.addEventListener("scroll", function () {
    fadeOutOverlay();
  });
});

let fadeTimer;

function fadeInOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    clearTimeout(fadeTimer);
    overlay.style.display = "flex";
    fadeTimer = setTimeout(() => {
      overlay.style.opacity = 1;
    }, 50); // Adjust delay time as needed
  }
}

function fadeOutOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    clearTimeout(fadeTimer);
    overlay.style.opacity = 0;
    fadeTimer = setTimeout(() => {
      overlay.style.display = "none";
    }, 500); // Adjust delay time to match transition duration
  }
}

//3D card effect
document.addEventListener("DOMContentLoaded", function () {
  const enlargedImage = document.querySelector(".enlarged-image");

  // Check if enlargedImage exists before adding event listeners
  if (enlargedImage) {
    enlargedImage.addEventListener("mouseenter", function () {
      this.style.transition = "none"; // Disable transition on hover
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

    enlargedImage.addEventListener("mouseleave", function () {
      // Enable transition on mouse leave
      this.style.transition = "transform 0.5s ease";
      // Reset the transform on mouse leave
      this.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contactButton");
  const contactPopup = document.getElementById("contactPopup");
  const contactForm = document.getElementById("contactForm");

  // Show the contact form when the button is clicked
  contactButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the document click event from triggering
    contactPopup.classList.add("show"); // Add class to show the pop-up
  });

  // Close the pop-up when clicking anywhere outside the form
  document.addEventListener("click", function (event) {
    // If the click is outside the popup and the button, close the popup
    if (
      !contactPopup.contains(event.target) &&
      event.target !== contactButton
    ) {
      contactPopup.classList.remove("show"); // Remove class to hide the pop-up
    }
  });

  // Prevent the form from closing when clicking inside the form
  contactForm.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing the popup when clicking inside the form
  });

  // Add click event listener to the back button
  const backButton = document.querySelector(".back-button");
  backButton.addEventListener("click", function () {
    contactPopup.classList.remove("show"); // Remove class to hide the pop-up
  });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("kGiSTBT_I5CzJMG7V"); // Replace with your EmailJS user ID

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Collect form data
      const fromName = document.getElementById("name").value;
      const fromEmail = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Set template parameters
      const templateParams = {
        from_name: fromName,
        from_email: fromEmail,
        subject: subject,
        message: message,
      };

      // Send the email
      emailjs.send("service_viptynk", "template_swuqwe8", templateParams).then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert(
            "Your message has been sent successfully! We'll review it shortly. Thank you for reaching out."
          );
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
    });
});

document.addEventListener("DOMContentLoaded", function () {
  createReviewItem({
    name: "akimbo_angelo",
    location: "Puerto Rico",
    flagSrc: "img/Icons/twemoji_flag-puerto-rico.svg",
    rating: 5,
    text: "Delivered the project on time, days before deadline and in working order. Everything works fabulously and adequately. Ray always maintained communication and kept me up to date with his progress. 10/10, would request his services again.",
  });

  createReviewItem({
    name: "akimbo_angelo",
    location: "Puerto Rico",
    flagSrc: "img/Icons/twemoji_flag-puerto-rico.svg",
    rating: 5,
    text: "Asked Ray to do a rush order on this project, and Ray managed to deliver in record time with the specifications met exactly as they were listed. 10/10. Currently waiting for him to finish up another project I asked for. Looking forward to the results.",
  });

  createReviewItem({
    name: "c2spectra_tech",
    location: "United Kingdom",
    flagSrc: "img/Icons/emojione-v1_flag-for-united-kingdom.svg",
    rating: 5,
    text: "Had many revisions due to unforeseen circumstances, Ray has been incredibly patient throughout and delivered work with exceptional quality.",
  });

  createReviewItem({
    name: "c2spectra_tech",
    location: "United Kingdom",
    flagSrc: "img/Icons/emojione-v1_flag-for-united-kingdom.svg",
    rating: 5,
    text: "Loved working with Ray! Fantastic work, would recommend highly.",
  });

  createReviewItem({
    name: "mmarcantonio21",
    location: "mmarcantonio21",
    flagSrc: "img/Icons/twemoji_flag-united-states.svg",
    rating: 5,
    text: "I recently worked with Ray, and the experience was fantastic from start to finish. Their work had incredible visual appeal, with designs that were both creative and perfectly aligned with my vision. Throughout the project, they demonstrated true professionalism, meeting all deadlines and maintaining meticulous attention to detail. They were cooperative, receptive to feedback, and communicated proactively, keeping me updated at every stage. The final result was polished, visually stunning, and exactly what I had hoped for—highly recommend!",
  });

  createReviewItem({
    name: "c2spectra_tech",
    location: "United Kingdom",
    flagSrc: "img/Icons/emojione-v1_flag-for-united-kingdom.svg",
    rating: 5,
    text: "Ray has been fantastic throughout, and the quality of his work is spot-on! Would recommend him whole-heartedly.",
  });

  createReviewItem({
    name: "fivemdev_",
    location: "Canada",
    flagSrc: "img/Icons/twemoji_flag-canada.svg",
    rating: 5,
    text: "Really good work for a very fair price. Will definitely be working with him again. Recommend to anybody who has an idea that they want to bring to life.",
  });

  createReviewItem({
    name: "alexholden139",
    location: "Bahamas",
    flagSrc: "img/Icons/twemoji_flag-bahamas.svg",
    rating: 5,
    text: "Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work Great Work",
  });

  function createReviewItem({
    name = "Anonymous",
    location = "Unknown",
    flagSrc = "",
    rating = 5,
    text = "No review provided.",
  }) {
    // Parent container where reviews are added
    const reviewsSection = document.querySelector(".reviews-section");

    // Create review item
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    // Create background div for the blur effect
    const blurredBackground = document.createElement("div");
    blurredBackground.classList.add("blurred-background");

    // Append blurred background to the review item
    reviewItem.appendChild(blurredBackground);

    // Header section
    const header = document.createElement("div");
    header.classList.add("review-item-header");

    // Name and location section
    const nameSection = document.createElement("div");
    nameSection.classList.add("review-item-name-section");

    const nameElement = document.createElement("h4");
    nameElement.classList.add("review-item-name");
    nameElement.textContent = name;

    const locationElement = document.createElement("div");
    locationElement.classList.add("review-item-location");

    if (flagSrc) {
      const flagImage = document.createElement("img");
      flagImage.src = flagSrc;
      flagImage.alt = "country";
      flagImage.draggable = false;
      locationElement.appendChild(flagImage);
    }

    const locationText = document.createElement("p");
    locationText.textContent = location;
    locationElement.appendChild(locationText);

    nameSection.appendChild(nameElement);
    nameSection.appendChild(locationElement);

    // Rating section
    const ratingSection = document.createElement("div");
    ratingSection.classList.add("review-item-rating");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("img");
      star.classList.add("review-star");
      star.src = "img/Icons/Star.svg";
      star.alt = "star";
      star.draggable = false;
      if (i >= rating) {
        star.style.opacity = "0.3"; // Dim the stars for ratings less than 5
      }
      ratingSection.appendChild(star);
    }

    header.appendChild(nameSection);
    header.appendChild(ratingSection);

    // Review text
    const reviewText = document.createElement("p");
    reviewText.classList.add("review-item-text");
    reviewText.textContent = text;

    // Append all sections to review item
    reviewItem.appendChild(header);
    reviewItem.appendChild(reviewText);

    // Append review item to reviews section
    reviewsSection.appendChild(reviewItem);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const popupText = document.getElementById("popupText");
  let timeoutId;
  let currentText = ""; // Variable to store the current input text
  let isVisible = false; // Flag to track if the popup is currently visible
  let isTypingDisabled = false; // Flag to track if typing is disabled

  // Listen for keydown events on the whole document
  document.addEventListener("keydown", (event) => {
    if (
      document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.isContentEditable
    ) {
      return;
    }

    if (isTypingDisabled && event.key !== "Backspace") {
      // Prevent any typing (except backspace) while popup is visible
      event.preventDefault();
      return;
    }

    // Clear the previous timeout to reset the fade-away timer
    clearTimeout(timeoutId);

    // Get the key that was pressed
    const key = event.key;

    if (key === "Backspace") {
      // If Backspace is pressed, change text to red and set popup message
      currentText =
        "Once spoken, words fade into the void... and never return...";
      showPopup(currentText, true); // Pass true to indicate red text
      isTypingDisabled = true; // Disable typing while the popup is visible
    } else if (key.length === 1) {
      // If it's a single character key (not Backspace)
      currentText += key; // Accumulate the text
      showPopup(currentText, false); // No red text for regular typing
    }

    // Set a timeout to hide the popup if typing stops
    timeoutId = setTimeout(() => {
      hidePopup();
    }, 2000); // Adjust the delay as needed (2 seconds in this case)
  });

  function showPopup(text, isRed) {
    // Set the text content of the popup
    popupText.textContent = text;

    // Add or remove the red-text class based on the isRed flag
    if (isRed) {
      popupText.classList.add("red-text");
    } else {
      popupText.classList.remove("red-text");
    }

    // If not visible, randomly position it
    if (!isVisible) {
      repositionPopup();
    }

    // Continuously check if the popup is out of bounds and reposition it if necessary
    const checkBoundsInterval = setInterval(() => {
      const popupRect = popupText.getBoundingClientRect();

      if (
        popupRect.right < 0 || // Off the left
        popupRect.left > window.innerWidth || // Off the right
        popupRect.bottom < 0 || // Off the top
        popupRect.top > window.innerHeight // Off the bottom
      ) {
        repositionPopup();
      }
    }, 100); // Check every 100ms

    // Stop checking bounds once the popup is hidden
    setTimeout(() => {
      clearInterval(checkBoundsInterval);
    }, 5000); // Stop checking after 5 seconds (adjust as needed)

    // Show the popup with a fade-in effect
    popupText.style.opacity = "1";
    isVisible = true; // Set the flag to true when the popup is shown
  }

  function repositionPopup() {
    const x = Math.random() * (window.innerWidth - 100); // 100 is the width of the popup
    const y = Math.random() * (window.innerHeight - 50); // 50 is the height of the popup
    popupText.style.left = `${x}px`;
    popupText.style.top = `${y + window.scrollY}px`; // Adjust for scroll
  }

  function hidePopup() {
    // Hide the popup with a fade-out effect
    popupText.style.opacity = "0";

    // Reset the current text after the popup fades out
    setTimeout(() => {
      currentText = ""; // Reset accumulated text
      popupText.textContent = ""; // Clear the popup text
      popupText.classList.remove("red-text"); // Remove the red-text class
      isVisible = false; // Reset the visibility flag
      isTypingDisabled = false; // Re-enable typing after the popup fades
    }, 500); // Wait for the fade-out transition (adjust time as needed)
  }

  // Prevent the space key from scrolling down
  document.addEventListener("keydown", function (event) {
    if (
      document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.isContentEditable
    ) {
      return;
    }

    if (event.key === " ") {
      event.preventDefault(); // Prevent scrolling when space key is pressed
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".vhs-container");

  function createGlitchLine() {
    const line = document.createElement("div");
    line.classList.add("glitch-line");

    // Randomize the height of the glitch line
    const randomHeight = Math.random() * (30 - 5) + 5; // Height between 5px and 30px
    line.style.height = `${randomHeight}px`;

    // Randomize the animation duration (between 2s and 4s for more variability)
    const randomDuration = Math.random() * (4 - 2) + 2; // Duration between 2s and 4s
    line.style.animationDuration = `${randomDuration}s`;

    // Randomize the top starting position
    const randomStartPosition = Math.random() * 100; // Random starting position between 0% and 100%
    line.style.top = `${randomStartPosition}%`; // Set a random starting position

    // Randomize opacity at the start
    const randomOpacity = Math.random() * 0.5 + 0.2; // Random opacity between 0.2 and 0.7
    line.style.opacity = randomOpacity;

    // Append to container
    container.appendChild(line);

    // Remove the line after the animation ends
    line.addEventListener("animationend", () => {
      line.remove();
    });
  }

  // Create a maximum of 3 glitch lines at intervals
  setInterval(() => {
    const existingLines = document.querySelectorAll(".glitch-line");

    // Create a line only if there are less than 3 already
    if (existingLines.length < 3) {
      createGlitchLine();
    }
  }, 500); // Creates new lines every 500ms
});

// Define the frame sequence for each sprite
const wardenFrames = [
  "img/Warden/the_warden1.png",
  "img/Warden/the_warden2.png",
  "img/Warden/the_warden3.png",
  "img/Warden/the_warden4.png",
];

const teacherFrames = [
  "img/Teacher/teacheranim1.png",
  "img/Teacher/teacheranim2.png",
  "img/Teacher/teacheranim3.png",
  "img/Teacher/teacheranim4.png",
];

let wardenIndex = 0;
let teacherIndex = 0;

// Function to update the frames
function updateSpriteFrame() {
  // Update Warden frame
  document.getElementById("warden").src = wardenFrames[wardenIndex];
  wardenIndex = (wardenIndex + 1) % wardenFrames.length; // Loop through frames

  // Update Teacher frame
  document.getElementById("teacher").src = teacherFrames[teacherIndex];
  teacherIndex = (teacherIndex + 1) % teacherFrames.length; // Loop through frames
}

// Start the animation: Change frame every 200 milliseconds (adjust as needed)
setInterval(updateSpriteFrame, 200);
