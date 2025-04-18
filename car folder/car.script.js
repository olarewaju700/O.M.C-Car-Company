// Modal setup
const modal = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-btn");
const viewDetailsBtns = document.querySelectorAll(".view-details");
const carImages = document.querySelectorAll(".car-toggle-img");

// Modal function to show car details
viewDetailsBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modalContent = document.getElementById(modalId);

        // Display modal
        modalContent.style.display = "block";

        // Add large image to modal
        const carImg = carImages[index];
        const modalImage = modalContent.querySelector(".modal-content");
        modalImage.src = carImg.src; // Change the modal image to clicked image
    });
});

// Close modal functionality
closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.forEach((m) => {
            m.style.display = "none";
        });
    });
});

// Click outside the modal to close
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.forEach((m) => {
            m.style.display = "none";
        });
    }
});

// Image toggle functionality (Click on image to toggle between smaller and larger size)
carImages.forEach((img) => {
    img.addEventListener("click", () => {
        // Toggle between small and large image size
        if (img.style.width === "100%") {
            img.style.width = "50%"; // Set back to smaller size
        } else {
            img.style.width = "100%"; // Set to larger size
        }
    });
});
