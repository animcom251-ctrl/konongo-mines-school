// =====================================
// KONONGO MINES SCHOOL WEBSITE
// =====================================

alert("JavaScript is working!");


// =====================================
// MOBILE MENU
// =====================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton) {
    menuButton.onclick = function () {
        navLinks.classList.toggle("active");
    };
}


// =====================================
// ADMISSION FORM
// =====================================

const form = document.getElementById("applicationForm");
const submitButton = form ? form.querySelector("button[type='submit']") : null;

if (submitButton) {

    submitButton.onclick = function (event) {

        event.preventDefault();

        const nameInput = document.getElementById("parentName");

        let name = "Parent/Guardian";

        if (nameInput && nameInput.value.trim() !== "") {
            name = nameInput.value.trim();
        }

        alert(
            "Thank you, " + name +
            "!\n\nYour admission enquiry has been received."
        );

    };
}