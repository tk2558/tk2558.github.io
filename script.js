// Switch between Light and Dark Mode
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.getElementById("back-container");
    const iconSun = document.querySelector(".icon-sun");
    const iconMoon = document.querySelector(".icon-moon");
    
    const profile = document.getElementById("profile");
    const profileImg = document.getElementById("profile-image");
    const description = document.getElementById("description");

    const skillTitles = document.querySelectorAll(".skill-title");
    const centerCircles = document.querySelectorAll(".center-circle");
    const outerCircles = document.querySelectorAll(".outer-circle");
    const langCircles = document.querySelectorAll(".lang-circle");
    const FECircles = document.querySelectorAll(".FE-circle");
    const BECircles = document.querySelectorAll(".BE-circle");

    themeToggle.addEventListener("click", () => {
        iconSun.classList.toggle("active");
        iconMoon.classList.toggle("active");

        body.classList.toggle("switch-mode");
        description.classList.toggle("description-switch-mode");
        profile.classList.toggle("profile-switch-mode");
        profileImg.classList.toggle("profile-image-switch-mode");

        skillTitles.forEach(title => { title.classList.toggle("skill-title-switch-mode"); });
        centerCircles.forEach(circle => { circle.classList.toggle("center-circle-switch-mode") });
        outerCircles.forEach(circle => { circle.classList.toggle("outer-circle-switch-mode"); });       
        langCircles.forEach(circle => { circle.classList.toggle("lang-circle-switch-mode"); }); 
        FECircles.forEach(circle => { circle.classList.toggle("FE-circle-switch-mode"); });
        BECircles.forEach(circle => { circle.classList.toggle("BE-circle-switch-mode"); });
    });
});

// Skill Wheel Button Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    const PLCenter = document.getElementById("pl-center-circle");
    const PLtextElement = PLCenter.querySelector("#pl-name");
    const PLimgElement = PLCenter.querySelector("#pl-img");
    const langCircles = document.querySelectorAll(".lang-circle");
 
    langCircles.forEach(circle => { 
        circle.addEventListener("click", () => {
            PLtextElement.textContent = circle.dataset.lang;
            PLimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");;
        });
    }); 

    const FECenter = document.getElementById("FE-center-circle");
    const FEtextElement = FECenter.querySelector("#FE-name");
    const FEimgElement = FECenter.querySelector("#FE-img");
    const FECircles = document.querySelectorAll(".FE-circle");
 
    FECircles.forEach(circle => { 
        circle.addEventListener("click", () => {
            FEtextElement.textContent = circle.dataset.lang;
            FEimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");;
        });
    }); 

    const BECenter = document.getElementById("BE-center-circle");
    const BEtextElement = BECenter.querySelector("#BE-name");
    const BEimgElement = BECenter.querySelector("#BE-img");
    const BECircles = document.querySelectorAll(".BE-circle");
 
    BECircles.forEach(circle => { 
        circle.addEventListener("click", () => {
            BEtextElement.textContent = circle.dataset.lang;
            BEimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");;
        });
    }); 
});