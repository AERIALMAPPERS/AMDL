const imageSets = {
    Festival: ["./assets/img/Gallery/Festival1.jpeg", "./assets/img/Gallery/Festival2.jpeg",
        "./assets/img/Gallery/Festival3.jpeg", "./assets/img/Gallery/Festival4.jpeg",
    "./assets/img/Gallery/Festival5.jpeg", "./assets/img/Gallery/Ganesha.jpeg"],
    Labs: ["./assets/img/Gallery/Lab1.jpeg", "./assets/img/Gallery/Lab2.jpeg"],
    Survey: ["./assets/img/Gallery/Team1.jpeg", "./assets/img/Gallery/Team2.jpeg", 
        "./assets/img/Gallery/Team3.jpeg", "./assets/img/Gallery/Team4.jpeg", 
        "./assets/img/Gallery/Team5.jpeg"]
};

let currentIndex = 0;
let currentImages = [];

function openModal(section) {
    currentImages = imageSets[section];
    currentIndex = 0;
    document.getElementById("modalTitle").innerText = `${section} Viewer`;
    document.getElementById("modalImage").src = currentImages[currentIndex];
    document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    document.getElementById("modalImage").src = currentImages[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    document.getElementById("modalImage").src = currentImages[currentIndex];
}