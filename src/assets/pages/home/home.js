"use strict";

const hamburgerMenuBTN = document.querySelector(".mobileNavBTN");
const mobileNavContent = document.querySelector(".mobileNavDropdown");
const closeMobileNavBTN = document.querySelector(".closeMobileNavBTN");

function handleMobileNavClick() {
  console.log(window.scrollY);
  if (mobileNavContent.style.display === "flex") {
    mobileNavContent.style.display = "none";

    document.body.style.overflow = "auto";
  } else {
    mobileNavContent.style.display = "flex";
    mobileNavContent.style.top = `${window.scrollY}px`;
    document.body.style.overflow = "hidden";
  }
}

[hamburgerMenuBTN, closeMobileNavBTN].forEach((btn) => {
  btn.addEventListener("click", handleMobileNavClick);
});
