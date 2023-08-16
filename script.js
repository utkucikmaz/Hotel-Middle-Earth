class Game {
    constructor() {
        this.showName();
        this.room = [];
        this.score = 0;
        this.health = 5;
        this.hotelsArray = [];
        this.visitorsArr = [];
        this.visitorCounts = {
            elf: 0,
            human: 0,
            org: 0,
            goblin: 0,
        };
        this.currentVisitorType = null;
        this.isDarkVersionActive = false;
        this.scoreDisplay = null;
        this.healthDisplay = this.health;
        this.ringDisplay = null;
        this.darkWinsArr = [];
        this.goodWinsArr = [];
        this.hasRing = false;
    }

    showName() {
        const nameForm = document.createElement("form");
        nameForm.id = "nameForm";
        nameForm.innerHTML = `
        	<label for="nameInput">Hotel Middle Earth</label>
        	<br/>
            <p id="your-name" >Please enter your name</p>
            <input type="text" id="nameInput" placeholder="Your name" required>
        	<br/>
            <input id="submit-btn" type="submit" value="Start Game">`;

        const parentElm = document.getElementById("board");
        parentElm.appendChild(nameForm);

        const instructionsButton = document.createElement("button");
        instructionsButton.id = "instructions-button";
        instructionsButton.textContent = "Instructions";
        instructionsButton.addEventListener("click", () => {
            this.showInstructions();
        });
        nameForm.appendChild(instructionsButton);

        nameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.startGame();
        });
    }

    showInstructions() {
        const parentElm = document.getElementById("board");
        const instructionsContainer = document.createElement("div");
        instructionsContainer.id = "instructionsContainer";
        instructionsContainer.innerHTML = `
        <p id="instruction-title">Welcome to the Hotel Middle Earth!</p>
        <p id="instruction-title">Here are the instructions</p>
        <ul id="instruction-list">
            <li>Collect elves and humans to score points.</li>
            <li>Avoid orgs and goblins to maintain your health.</li>
            <li>If you find both the Ring and Gandalf. Minas Tirith wins!</li>
            <li>Be careful about the Gollum if you have the ring, the little thief.</li>
            <br/>
            <li>Eye mode will activate periodically, be cautious!</li>
            <li>Eye mode you must obey Sauron and collect orgs and goblins.</li>
            <li>If you find both the Ring and Sauron. Mordor wins!</li>
            <li>Even though you serve Sauron, Gollum is still an enemy.</li>
            <br/>
            <li>Every time you serve the wrong leader you lose health.</li>
            <li>If you choose Sauron and Gandalf in the wrong time, you lose more.</li>
            <br/>
            <li>The most important rule is don't forget to have fun!!</li>
            </ul>
        <button id="backButton">Back</button>
    `;

        parentElm.innerHTML = "";
        parentElm.appendChild(instructionsContainer);

        const backButton = instructionsContainer.querySelector("#backButton");
        backButton.addEventListener("click", () => {
            this.showName();
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement);
            });
            parentElm.removeChild(instructionsContainer);
        });
    }

    startGame() {
        const nameInput = document.getElementById("nameInput");
        this.userName = nameInput.value.trim().toUpperCase();

        if (this.userName === "") {
            alert("Please enter a valid name.");
            return;
        }

        localStorage.setItem("this.userName", this.userName);
        localStorage.setItem("score", 0);

        const nameForm = document.getElementById("nameForm");
        nameForm.style.display = "none";

        this.hotelsArray.push(new Hotels());

        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            console.log("Stored userName:", storedUserName);
        } else {
            console.log("userName not found in local storage.");
        }

        // const storedScore = localStorage.getItem("score");
        // if (storedScore !== null) {
        //     console.log("Stored score:", parseInt(storedScore));
        // } else {
        //     console.log("Score not found in local storage.");
        // }

        this.createVisitors();
    }
    createVisitors() {
        const parentElm = document.getElementById("board");

        const scoreDisplay = document.createElement("span");
        scoreDisplay.id = "scoreDisplay";
        parentElm.appendChild(scoreDisplay);
        this.scoreDisplay = scoreDisplay;

        const healthDisplay = document.createElement("span");
        healthDisplay.id = "healthDisplay";
        parentElm.appendChild(healthDisplay);
        this.healthDisplay = healthDisplay;

        const ringDisplay = document.createElement("span");
        ringDisplay.id = "ringDisplay";
        parentElm.appendChild(ringDisplay);
        this.ringDisplay = ringDisplay;

        const nameInput = document.getElementById("nameInput");
        const userName = nameInput.value.trim().toUpperCase();

        const generateVisitors = () => {
            for (let i = 0; i < 4; i++) {
                const newVisitor = new Visitors(this);
                this.visitorsArr.push(newVisitor);
                updateVisitorCount(newVisitor.type);
            }
        };
        const updateVisitorCount = (type) => {
            console.log("Visitor Counts:", this.visitorCounts);
            return this.visitorCounts[type]++;
        };

        const cleanUpVisitors = () => {
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement);
            });
            this.visitorsArr = [];
        };
        const generateAndClean = () => {
            generateVisitors();
            setTimeout(() => {
                cleanUpVisitors();
            }, 5000);
        };

        const darkSide = () => {
            generateAndClean();
            this.interval2 = setInterval(generateAndClean, 10000);

            const darkTimeoutId = setTimeout(() => {
                this.darkVersion();
            }, 19000);
        };

        darkSide();
        this.interval1 = setInterval(darkSide, 40000);
    }
    darkVersion() {
        const newBackground = document.getElementById("board");

        newBackground.style.backgroundImage = this.isDarkVersionActive
            ? "url('./images/bcg.jpg')"
            : "url('./images/dark-bcg.jpg')";
        this.isDarkVersionActive = !this.isDarkVersionActive;

        setTimeout(() => {
            newBackground.style.backgroundImage = "url('./images/bcg.jpg')";
            this.isDarkVersionActive = false;
        }, 20000);
    }
    handleVisitorClick(visitor) {
        if (visitor.type === "human" || visitor.type === "elf") {
            this.room.push(visitor);
            this.score++;
        } else if (visitor.type === "org" || visitor.type === "goblin") {
            this.room.pop(visitor);
            this.score--;
            this.health--;
        } else if (
            visitor.type === "gandalf" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.score += 100;
            this.goodWinsArr.push(visitor);
            this.gandalfWins();
        } else if (visitor.type === "ring" && this.goodWinsArr.length === 0) {
            this.goodWinsArr.push("ring");
            this.hasRing = true;
        } else if (
            visitor.type === "gollum" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.darkWinsArr.pop("ring");
            this.hasRing = false;
        } else if (
            visitor.type === "gollum" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.goodWinsArr.pop("ring");
            this.hasRing = false;
        } else if (visitor.type === "sauron") {
            this.score -= 20;
            this.health -= 2;
        }

        console.log(this.darkWinsArr);
        console.log(this.goodWinsArr);
        console.log(this.hasRing);

        localStorage.setItem("score", this.score.toString());
        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.updateRingDisplay();
        this.finishGame();

        console.log(
            "Types in room:",
            this.room.map((visitor) => visitor.type)
        );
    }
    handleVisitorClickEvil(visitor) {
        if (visitor.type === "org" || visitor.type === "goblin") {
            this.room.push(visitor);
            this.score++;
        } else if (visitor.type === "human" || visitor.type === "elf") {
            this.room.pop(visitor);
            this.score--;
            this.health--;
        } else if (
            visitor.type === "sauron" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.score += 100;
            this.darkWinsArr.push(visitor);
            this.sauronWins();
        } else if (visitor.type === "ring" && this.darkWinsArr.length === 0) {
            this.darkWinsArr.push("ring");
            this.hasRing = true;
        } else if (
            visitor.type === "gollum" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.darkWinsArr.pop("ring");
            this.hasRing = false;
        } else if (
            visitor.type === "gollum" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.goodWinsArr.pop("ring");
            this.hasRing = false;
        } else if (visitor.type === "gandalf") {
            this.score -= 20;
            this.health -= 2;
        }

        console.log(this.darkWinsArr);
        console.log(this.goodWinsArr);
        console.log(this.hasRing);

        localStorage.setItem("score", this.score.toString());
        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.updateRingDisplay();
        this.finishGame();

        console.log(
            "Types in room:",
            this.room.map((visitor) => visitor.type)
        );
    }
    updateScoreDisplay() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }
    updateRingDisplay() {
        if (this.hasRing) {
            const ringImage = document.createElement("img");
            ringImage.setAttribute("src", "./images/ring.png");
            ringImage.setAttribute("alt", "beautiful image of the ring");
            ringImage.id = "ring-image";

            this.ringDisplay.innerHTML = "";

            this.ringDisplay.appendChild(ringImage);
        } else {
            this.ringDisplay.innerHTML = "";
        }
    }
    updateHealthDisplay() {
        const heartImage = document.createElement("img");
        heartImage.setAttribute("src", "./images/heart.png");
        heartImage.setAttribute("alt", "beautiful image of the life");
        heartImage.id = "heart-image";

        this.healthDisplay.innerHTML = "";

        this.healthDisplay.appendChild(heartImage);

        const heartCounter = this.health;
        this.healthDisplay.appendChild(
            document.createTextNode(` ${heartCounter}`)
        );
    }
    gameOver() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        // const gameOverGif = document.createElement("img");
        // gameOverGif.className = "over-gif";
        // gameOverGif.setAttribute("src", "./images/erdogan-over.gif");
        // gameOverGif.setAttribute("alt", "beautiful image of jail");

        const parentElm = document.getElementById("board");

        const deleteInterval = () => {
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement);
            });
            parentElm.innerHTML = "";
        };
        deleteInterval();
        setInterval(deleteInterval, 3000);

        const gameOverGif = document.createElement("img");
        gameOverGif.className = "over-gif";
        gameOverGif.setAttribute("src", "./images/over.gif");
        gameOverGif.setAttribute("alt", "ring couldn't be destroyed");

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "game-over";
        gameOverDiv.innerHTML = `
			<p class="over-title">${this.userName} couldn't destroy the ring.</p>
            
            <p>I don't say it was ${this.userName}'s fault, but only ${this.score} ? </p>
            
            <p>Middle Earth needs better fighters</p>`;

        parentElm.appendChild(gameOverDiv);

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(restartDiv);

        this.visitorsArr.forEach((element) => {
            element.domElement.remove();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === " ") {
                location.assign("index.html");
            }
        });
    }
    finishGame() {
        if (this.health === 0 || this.health < 0) {
            return this.gameOver();
        }
    }
    sauronWins() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        // const gameOverGif = document.createElement("img");
        // gameOverGif.className = "over-gif";
        // gameOverGif.setAttribute("src", "./images/erdogan-over.gif");
        // gameOverGif.setAttribute("alt", "beautiful image of jail");

        const parentElm = document.getElementById("board");

        const deleteInterval = () => {
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement);
            });
            parentElm.innerHTML = "";
        };
        deleteInterval();
        setInterval(deleteInterval, 4000);

        const gameOverGif = document.createElement("img");
        gameOverGif.id = "sauron-won";
        gameOverGif.setAttribute("src", "./images/sauron-won.gif");
        gameOverGif.setAttribute("alt", "a powerful image of sauron");

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "sauron-class";
        gameOverDiv.innerHTML = `
		<p class="over-title">Sauron took the Middle Earth over.</p>
        
        <p>Now everyone must obey the dark lord.</p>
       
		<p>${this.userName} served Sauron loyally...</p>
        <p>Sauron gave ${this.userName} ${this.score} soldiers to invade more!</p>`;

        parentElm.appendChild(gameOverDiv);

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(restartDiv);

        this.visitorsArr.forEach((element) => {
            element.domElement.remove();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === " ") {
                location.assign("index.html");
            }
        });
    }
    gandalfWins() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        // const gameOverGif = document.createElement("img");
        // gameOverGif.className = "over-gif";
        // gameOverGif.setAttribute("src", "./images/erdogan-over.gif");
        // gameOverGif.setAttribute("alt", "beautiful image of jail");

        const parentElm = document.getElementById("board");

        const deleteInterval = () => {
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement);
            });
            parentElm.innerHTML = "";
        };
        deleteInterval();
        setInterval(deleteInterval, 4000);

        const gameOverGif = document.createElement("img");
        gameOverGif.id = "gandalf-won";
        gameOverGif.setAttribute("src", "./images/gandalf-won.gif");
        gameOverGif.setAttribute("alt", "a beautiful image of gandalf");

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "gandalf-class";
        gameOverDiv.innerHTML = `
            <p class="over-title">Now Middle Earth is Free!!</p>
            <p>Gandalf has really come on time as he promised to Aragorn</p>
            <p><i>"Look to my coming on the first light of the fifth day, at dawn
                look to the east..."</i></p>
            <p>${this.userName} helped Gandalf and all his friends during the wars.</p>
            <p>${this.userName} found ${this.score} soldiers and ran to the heart of the enemy.</p>
`;

        parentElm.appendChild(gameOverDiv);

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(restartDiv);

        this.visitorsArr.forEach((element) => {
            element.domElement.remove();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === " ") {
                location.assign("index.html");
            }
        });
    }
}

class Hotels {
    constructor() {
        this.createContainer();
        this.createDomElement();
    }
    createContainer() {
        this.containerElement = document.createElement("div");
        this.containerElement.id = "hotel-container";
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.containerElement);
    }
    createDomElement() {
        const hotelIds = ["hotel1", "hotel2", "hotel3", "hotel4"];

        hotelIds.forEach((id) => {
            const hotelImage = document.createElement("img");
            hotelImage.id = id;
            hotelImage.setAttribute("src", `./images/${id}.png`);
            this.containerElement.appendChild(hotelImage);
        });
    }
}
class Visitors {
    constructor(game) {
        this.positionX = Math.floor(Math.random() * (80 + 1));
        this.positionY = Math.floor(Math.random() * (50 + 1) + 25);
        this.game = game;
        this.createDomElement();
    }

    createDomElement() {
        const parentElm = document.getElementById("board");
        this.domElement = document.createElement("img");
        this.domElement.setAttribute("id", "visitor");
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        parentElm.appendChild(this.domElement);

        const self = this;
        this.domElement.addEventListener("click", function () {
            if (self.game.isDarkVersionActive) {
                self.game.handleVisitorClickEvil(self);
                self.startMoving();
            } else {
                self.game.handleVisitorClick(self);
                self.startMoving();
            }
        });

        let randomNumber = Math.floor(Math.random() * 4) + 1;

        if (randomNumber === 1) {
            this.type = "elf";
            this.domElement.className = "elvish";
            this.domElement.setAttribute("src", "./images/elf.png");
        } else if (randomNumber === 2) {
            this.type = "human";
            this.domElement.className = "human";
            this.domElement.setAttribute("src", "./images/human.png");
        } else if (randomNumber === 3) {
            this.type = "org";
            this.domElement.className = "org";
            this.domElement.setAttribute("src", "./images/org.png");
        } else if (randomNumber === 4) {
            this.type = "goblin";
            this.domElement.className = "goblin";
            this.domElement.setAttribute("src", "./images/goblin.png");
        }

        let randomUniqueNumber = Math.floor(Math.random() * 24) + 1;

        if (randomUniqueNumber === 4 && !this.game.hasRing) {
            this.ring = document.createElement("img");
            parentElm.appendChild(this.ring);
            this.type = "ring";
            this.domElement.className = "ring";
            this.domElement.setAttribute("src", "./images/ring.png");
        } else if (randomUniqueNumber === 2) {
            this.sauron = document.createElement("img");
            parentElm.appendChild(this.sauron);
            this.type = "sauron";
            this.domElement.className = "sauron";
            this.domElement.setAttribute("src", "./images/sauron.png");
        } else if (randomUniqueNumber === 3) {
            this.gandalf = document.createElement("img");
            parentElm.appendChild(this.gandalf);
            this.type = "gandalf";
            this.domElement.className = "gandalf";
            this.domElement.setAttribute("src", "./images/gandalf.png");
        }

        let randomGollumNumber = Math.floor(Math.random() * 5) + 1;
        if (randomGollumNumber === 1) {
            this.gollum = document.createElement("img");
            parentElm.appendChild(this.gollum);
            this.type = "gollum";
            this.domElement.className = "gollum";
            this.domElement.setAttribute("src", "./images/gollum.png");
        }
    }
    moveDownGood() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        if (this.type === "human") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "elf") {
            this.positionX = 82;
            this.positionY = 0;
        } else if (this.type === "goblin") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "org") {
            this.positionX = 87;
            this.positionY = 0;
        } else if (this.type === "sauron") {
            this.positionX = 25;
            this.positionY = 0;
        } else if (this.type === "gandalf") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "ring") {
            this.positionX = 58;
            this.positionY = 5;
        } else if (this.type === "gollum") {
            this.positionX = 55;
            this.positionY = 0;
        }
    }
    moveDownEvil() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        if (this.type === "human") {
            this.positionX = 0;
            this.positionY = 0;
        } else if (this.type === "elf") {
            this.positionX = 22;
            this.positionY = 0;
        } else if (this.type === "goblin") {
            this.positionX = 0;
            this.positionY = 0;
        } else if (this.type === "org") {
            this.positionX = 25;
            this.positionY = 0;
        } else if (this.type === "sauron") {
            this.positionX = 25;
            this.positionY = 0;
        } else if (this.type === "gandalf") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "ring") {
            this.positionX = 28;
            this.positionY = 5;
        } else if (this.type === "gollum") {
            this.positionX = 25;
            this.positionY = 0;
        }
    }
    startMoving() {
        const self = this;
        if (this.game.isDarkVersionActive) {
            setInterval(() => {
                self.moveDownEvil();
            }, 50);
        } else {
            setInterval(() => {
                self.moveDownGood();
            }, 50);
        }
    }
}

this.game = new Game();

document.addEventListener("DOMContentLoaded", () => {
    this.game;
});
