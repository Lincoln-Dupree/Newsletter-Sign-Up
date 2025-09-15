"use strict";

const emailForm = document.querySelector(".email-form");
const mainPage = document.querySelector(".main-container");
const subscribedPage = document.querySelector(".subscribed-popup");
const clearBtn = document.querySelector(".clear-popup-btn");

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    mainPage.style.display = "none";

    subscribedPage.style.display = "flex";
});

clearBtn.addEventListener("click", function () {
    mainPage.style.display = "flex";

    subscribedPage.style.display = "none";
});
