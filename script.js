"use strict";

const emailForm = document.querySelector(".email-form");
const mainPage = document.querySelector(".main-container");
const subscribedPage = document.querySelector(".subscribed-popup");
const clearBtn = document.querySelector(".clear-popup-btn");

const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        errorMsg.textContent = "Valid email required";
        errorMsg.style.display = "block";

        emailInput.style.borderColor = "var(--Red)";
        emailInput.style.backgroundColor = "var(--Red-bg)";
        emailInput.style.color = "var(--Red)";
        return;
    }

    errorMsg.textContent = "";
    errorMsg.style.display = "none";

    emailInput.style.borderColor = "var(--Blue-800)";
    emailInput.style.backgroundColor = "white";
    emailInput.style.color = "var(--Blue-800)";

    mainPage.style.display = "none";
    subscribedPage.style.display = "flex";

    const confirmationText = subscribedPage.querySelector(".subscribed-text b");
    if (confirmationText) confirmationText.textContent = email;
});

clearBtn.addEventListener("click", function () {
    mainPage.style.display = "flex";
    subscribedPage.style.display = "none";

    emailInput.value = "";
    errorMsg.textContent = "";
    errorMsg.style.display = "none";
    emailInput.style.borderColor = "var(--Blue-800)";
    emailInput.style.backgroundColor = "white";
    emailInput.style.color = "var(--Blue-800)";
});