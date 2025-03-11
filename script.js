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
    const ticketLeft = document.getElementById("left-ticket");
    const ticketRight = document.getElementById("right-ticket");
    const ticketForm = document.getElementById("ticket-form");
    const ticketHoles = document.querySelectorAll(".ticket-hole");

    /*
    ticketLeft.classList.toggle("left-ticket-switch-mode");
    ticketRight.classList.toggle("right-ticket-switch-mode");
    ticketForm.classList.toggle("form-border-switch");
    */
   
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
        ticketLeft.classList.toggle("left-ticket-switch-mode");
        ticketRight.classList.toggle("right-ticket-switch-mode");
        ticketForm.classList.toggle("form-border-switch");
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
    const outerCircle = document.getElementById('pl-outer-circle');
    const diameter = outerCircle.getBoundingClientRect().height;

    startOrbiting(".lang-circle", diameter/2, .75); // (selector, radius, speed)
    startOrbiting(".FE-circle", diameter/2, .8);
    startOrbiting(".BE-circle", diameter/2, .75);

    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      }
      
      window.addEventListener('resize', debounce(function() {
        const newOuterCircle = document.getElementById('pl-outer-circle');
        const newDiameter = newOuterCircle.getBoundingClientRect().height;
    
        startOrbiting(".lang-circle", newDiameter/2, .75); // (selector, radius, speed)
        startOrbiting(".FE-circle", newDiameter/2, .8);
        startOrbiting(".BE-circle", newDiameter/2, .75);
      }, 250));
});

// Document Buttons
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

    document.getElementById("ticket-btn").addEventListener("click", async function (event) {
        event.preventDefault(); // Prevent default form submission
        const form = document.getElementById("ticket-form");
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        // Validation: Check if fields are empty
        if (!name || !email || !message) {
            alert("Please fill out all fields before sending.");
            return;
        }
        /*
        if (email.toLowerCase() === "thomaskong101@gmail.com") {
            alert("You cannot use your own email to send a message.");
            return;
        }
        */

        const formData = new FormData(form);
        try {
            const response = await fetch("https://formsubmit.co/el/yacoba", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
    
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    });
});