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

    const folderWires = document.querySelectorAll(".folderWires");
    const multiFolderContainer = document.getElementById("multiFolder-container");

    const train = document.getElementById("train-container");

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
 
        folderWires.forEach(wire => { wire.classList.toggle("folderWires-switch-mode"); });
        multiFolderContainer.classList.toggle("multiFolder-container-switch-mode");
        train.classList.toggle("train-container-switch-mode");
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
            PLimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");
        });
    }); 

    const FECenter = document.getElementById("FE-center-circle");
    const FEtextElement = FECenter.querySelector("#FE-name");
    const FEimgElement = FECenter.querySelector("#FE-img");
    const FECircles = document.querySelectorAll(".FE-circle");
 
    FECircles.forEach(circle => { 
        circle.addEventListener("click", () => {
            FEtextElement.textContent = circle.dataset.lang;
            FEimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");
        });
    }); 

    const BECenter = document.getElementById("BE-center-circle");
    const BEtextElement = BECenter.querySelector("#BE-name");
    const BEimgElement = BECenter.querySelector("#BE-img");
    const BECircles = document.querySelectorAll(".BE-circle");
 
    BECircles.forEach(circle => { 
        circle.addEventListener("click", () => {
            BEtextElement.textContent = circle.dataset.lang;
            BEimgElement.src = circle.getElementsByTagName("img")[0].getAttribute("src");
        });
    }); 
});

document.addEventListener("DOMContentLoaded", () => {
    function startOrbiting(selector, radius, speed) {
        const circles = document.querySelectorAll(selector);
        const totalCircles = circles.length;
        let angle = 0;

        function animate() {
            angle += speed * 0.01; // rotation speed
            circles.forEach((circle, index) => {
                const step = (2 * Math.PI) / totalCircles;
                const currentAngle = angle + index * step;

                const x = Math.cos(currentAngle) * radius;
                const y = Math.sin(currentAngle) * radius;

                circle.style.left = `calc(50% + ${x}px)`;
                circle.style.top = `calc(50% + ${y}px)`;
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    startOrbiting(".lang-circle", 240, .75); // (selector, radius, speed)
    startOrbiting(".FE-circle", 240, .8);
    startOrbiting(".BE-circle", 240, .75);
});

// Random Folder Button
document.addEventListener("DOMContentLoaded", () => {
    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const folder = document.getElementById("folder3");
    const randomFolder = document.getElementById("randomFolder");
    folder.addEventListener("click", () => {
        const githubLinks = [
            "https://github.com/tk2558/OpenWeatherAPI-Web-Application",
            "https://github.com/tk2558/Discord-Game-Bot",
            "https://github.com/tk2558/Franka-Emika-Panda-Robot-Simulation",
            "https://github.com/tk2558/Java-Tic-Tac-Toe-",
            "https://github.com/tk2558/Airline-Website-Database-Project",
            "https://github.com/tk2558/QuickDraw-Paste",
            "https://github.com/tk2558/Sudoku_Fast_React",
            "https://github.com/tk2558/Sudoku_Python",
            "https://github.com/tk2558/Balloono-Single-Player",
            "https://github.com/tk2558/Sudoku-Generator-and-Solver",
            "https://github.com/tk2558/Python-Snake-Game",
            "https://github.com/tk2558/Coin-Detection/tree/main",
            "https://github.com/tk2558/Fish-Tracking/tree/main",
            "https://github.com/tk2558/tk2558.github.io/tree/main"
        ]
        const link = getRandomElement(githubLinks);
        randomFolder.setAttribute("href", link);
    });
});