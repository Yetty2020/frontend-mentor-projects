"use strict";

// Get the button element
const validateButton = document.querySelector(".validate-button");
const dismissButton = document.querySelector(".succes-button");

// Attach click event listener to the button
validateButton.addEventListener("click", function () {
  // Get the email input value
  var email = document.querySelector("input").value;
  console.log(email);

  // Regular expression for validating email addresses
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regex pattern
  if (emailRegex.test(email)) {
    document.querySelector("#succes-message").style.display = "flex";
    document.querySelector("main").style.display = "none";
    console.log("valid");
  } else {
    document.querySelector(".invalid-email").style.color = "red";
    console.log("invalid");
  }
});

// TO RETURN BACK TO NORMAL STATE
dismissButton.addEventListener("click", function () {
  document.querySelector("#succes-message").style.display = "none";
  document.querySelector("main").style.display = "flex";
  document.querySelector("input").innerHTML.placeho = "";
});
