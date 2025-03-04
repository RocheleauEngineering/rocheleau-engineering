function showMessage() { 
    // Defines a function named `showMessage` that will be executed when the button is clicked.
    
    document.getElementById("message").innerText = "Hello, world!"; 
    // Finds the paragraph with ID "message" and changes its text content to "Hello, world!".
}
const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Detailed description of Project 1.",
        images: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"]
    },
    {
        id: 2,
        title: "Project 2",
        description: "Detailed description of Project 2.",
        images: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"]
    },
    {
        id: 3,
        title: "Project 3",
        description: "Detailed description of Project 3.",
        images: ["project3-1.jpg", "project3-2.jpg", "project3-3.jpg"]
    }
];

let currentProject = null;
let currentImageIndex = 0;

function openProject(projectId) {
    currentProject = projects.find(p => p.id === projectId);
    if (!currentProject) return;

    document.getElementById("project-title").innerText = currentProject.title;
    document.getElementById("project-description").innerText = currentProject.description;
    currentImageIndex = 0;
    document.getElementById("slider-image").src = currentProject.images[currentImageIndex];

    document.getElementById("project-modal").style.display = "flex";
}

function closeProject() {
    document.getElementById("project-modal").style.display = "none";
}

function prevSlide() {
    if (currentProject && currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById("slider-image").src = currentProject.images[currentImageIndex];
    }
}

function nextSlide() {
    if (currentProject && currentImageIndex < currentProject.images.length - 1) {
        currentImageIndex++;
        document.getElementById("slider-image").src = currentProject.image
    }
}
