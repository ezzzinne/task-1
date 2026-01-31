const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const connectBtn = document.getElementById("connect-btn");
const modal = document.getElementById("modal-dialog");
const closeModal = document.querySelector(".close-modal");
const submitBtn = document.querySelector(".submit-btn");
const walletInput = document.getElementById("wallet");
const locationInput = document.getElementById("location");
const images = document.querySelectorAll(".image");
const imageContainer = document.querySelector(".image-container");
const locationToggle = document.getElementById("location-toggle");
const cards = document.querySelectorAll(".card");
const locationTag = document.querySelectorAll(".location-tag");

let filtersOn = false;
let selectedLocation = null;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

connectBtn.addEventListener("click", () => {
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close();
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (walletInput.value.trim() === "") {
        alert("Please enter your wallet address.");
        return;
    }

    alert("Your wallet is connected!")
})

if (locationInput) {
    locationInput.addEventListener("input", () => {
        const searchValue = locationInput.value.toLowerCase();
    
        images.forEach(image => {
            const location = image.dataset.location;
    
            if (location.includes(searchValue)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        })
    })
}

if (locationToggle) {
    locationToggle.addEventListener("click", () => {
        filtersOn = !filtersOn;
    
        if (filtersOn){
            cards.forEach(card => {
                card.style.display = "block";
            }) 
        }

        if (filtersOn) {
            locationToggle.classList.add("active")
        } else {
            locationToggle.classList.remove("active")
        }
    
        locationTag.forEach(tag => {
            tag.classList.remove("active")
        })
        selectedLocation = null;
        cards.forEach(card => {
            card.style.display = "block";
        });
    });
}

locationTag.forEach(tag => {
    tag.addEventListener("click", () => {
        if(!filtersOn) return;

        selectedLocation = tag.dataset.location;

        locationTag.forEach(tag => tag.classList.remove("active"));
        tag.classList.add("active");

        cards.forEach(card => {
            card.style.display = card.dataset.location === selectedLocation ? "block" : "none";
        })
    })
})

