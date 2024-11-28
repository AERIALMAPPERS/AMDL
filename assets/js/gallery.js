const imageSets = {
    Festival: ["./assets/img/Gallery/festival/Ganesha.jpeg",
        "./assets/img/Gallery/festival/First.jpg",
        "./assets/img/Gallery/festival/Festival-2.jpeg", "./assets/img/Gallery/festival/Festival-1.jpeg",
        "./assets/img/Gallery/festival/Festival-3.1.jpeg", "./assets/img/Gallery/festival/Festival-5.jpeg",
        "./assets/img/Gallery/festival/Festival-6.jpeg", "./assets/img/Gallery/festival/Festival-4.1.jpeg",
        "./assets/img/Gallery/festival/Festival-7.jpeg", "./assets/img/Gallery/festival/Festival-10.jpeg",
        //  "./assets/img/Gallery/festival/MyPic.jpeg", 
        //  " ./assets/img/Gallery/festival/DasaraVideo.mp4"        
    ],
    Labs: ["./assets/img/Gallery/labs/Lab-1.jpeg", "./assets/img/Gallery/labs/Lab2.jpeg",
        "./assets/img/Gallery/labs/Lab-3.jpeg", "./assets/img/Gallery/labs/Lab4.jpeg",
        "./assets/img/Gallery/labs/Lab3.jpeg",
        "./assets/img/Gallery/labs/Lab5.jpeg", "./assets/img/Gallery/labs/Lab8.jpeg",
        "./assets/img/Gallery/labs/Lab7.jpeg", "./assets/img/Gallery/labs/Lab9.jpeg",
    ],

    Team: ["./assets/img/Gallery/team/Team-1.jpeg", "./assets/img/Gallery/team/Team-2.jpeg",
        "./assets/img/Gallery/team/Team-3.jpeg", "./assets/img/Gallery/team/Team-4.jpeg",
        "./assets/img/Gallery/team/Team-5.jpeg", "./assets/img/Gallery/team/Team-6.jpeg",
    ],

    Site: ["./assets/img/Gallery/site/Site-1.png ", "./assets/img/Gallery/site/Site-2.png ",
        "./assets/img/Gallery/site/Site-3.jpg ", "./assets/img/Gallery/site/Site-4.png ",
        "./assets/img/Gallery/site/Site-5.jpeg ", "./assets/img/Gallery/site/Site-5.1.jpeg"  ,
        "./assets/img/Gallery/site/Site-6.png ", 
        // "./assets/img/Gallery/site/Site-7.png ",
        // "./assets/img/Gallery/site/Site-8.png ", 
        "./assets/img/Gallery/site/Site-9.png",
        "./assets/img/Gallery/site/Site-10.jpg", "./assets/img/Gallery/site/Site-11.jpg ",
        // "./assets/img/Gallery/site/Site-12.jpg ",
         "./assets/img/Gallery/site/Site-13.jpeg",
    ]
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