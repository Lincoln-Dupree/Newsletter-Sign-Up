// const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
// this is for testing valid email format

const emailForm = document.querySelector(".email-form");

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("this works");
})