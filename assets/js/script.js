"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});

// testimonials variables (optional)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
	modalContainer.classList.toggle("active");
	overlay.classList.toggle("active");
};

// add click event to all modal items (guarded if present)
if (testimonialsItem && testimonialsItem.length && modalContainer && overlay) {
	for (let i = 0; i < testimonialsItem.length; i++) {
		testimonialsItem[i].addEventListener("click", function () {
			modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
			modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
			modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
			modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

			testimonialsModalFunc();
		});
	}
	if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
	overlay.addEventListener("click", testimonialsModalFunc);
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
	select.addEventListener("click", function () {
		elementToggleFunc(this);
	});
}

// add event in all select items
if (selectItems && selectItems.length) {
	for (let i = 0; i < selectItems.length; i++) {
		selectItems[i].addEventListener("click", function () {
			let selectedValue = this.innerText.toLowerCase();
			if (selectValue) selectValue.innerText = this.innerText;
			if (select) elementToggleFunc(select);
			filterFunc(selectedValue);
		});
	}
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue === "all") {
			filterItems[i].classList.add("active");
		} else if (selectedValue === filterItems[i].dataset.category) {
			filterItems[i].classList.add("active");
		} else {
			filterItems[i].classList.remove("active");
		}
	}
};

// add event in all filter button items for large screen
if (filterBtn && filterBtn.length) {
	let lastClickedBtn = filterBtn[0];

	for (let i = 0; i < filterBtn.length; i++) {
		filterBtn[i].addEventListener("click", function () {
			let selectedValue = this.innerText.toLowerCase();
			if (selectValue) selectValue.innerText = this.innerText;
			filterFunc(selectedValue);

			if (lastClickedBtn) lastClickedBtn.classList.remove("active");
			this.classList.add("active");
			lastClickedBtn = this;
		});
	}
}

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
// 	formInputs[i].addEventListener("input", function () {
// 		console.log(formInputs[1].value);
// 		// check form validation
// 		if (form.checkValidity()) {
// 			formBtn.removeAttribute("disabled");
// 		} else {
// 			formBtn.setAttribute("disabled", "");
// 		}
// 	});
// }

// //email sender
// function sendEmail() {
// 	Email.send({
// 		Host: "smtp.gmail.com",
// 		Username: "hellotirthjivani@gmail.com",
// 		Password: "Tirth#@!17",
// 		To: formInputs[1].value,
// 		From: "hellotirthjivani@gmail.com",
// 		Subject: "Hey " + formInputs[0].value,
// 		Body: "Hello, Thank you for appraoching me! First of all so glad you came accross my portfolio! And secondly; How can I help you? \n\n Dhruvi!",
// 	}).then(function (message) {
// 		alert("mail sent successfully");
// 	});
// }

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
				pages[i].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove("active");
				navigationLinks[i].classList.remove("active");
			}
		}
	});
}

// Resume request CTA: single button opens mailto dialog
const resumeRequestCta = document.getElementById("resume-request-cta");
if (resumeRequestCta) {
  resumeRequestCta.addEventListener("click", function () {
    const subject = encodeURIComponent("Resume Request via Portfolio");
    const body = encodeURIComponent(
      "Hi Dhruvi,\n\nPlease share your latest resume. I'm reaching out from [Company] for [Role].\n\nThanks!"
    );
    window.location.href = `mailto:dhruvikothari1993@gmail.com?subject=${subject}&body=${body}`;
  });
}
