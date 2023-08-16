class Game {
    constructor() {
        this.showName();
        this.room = [];
        this.score = 0;
        this.health = 5;
        this.visitorsArr = [];
        this.visitorCounts = {
            elves: 0,
            humans: 0,
            orgs: 0,
            goblins: 0,
        };
        this.currentVisitorType = null;
        this.isDarkVersionActive = false;
        this.scoreDisplay = null;
        this.healthDisplay = this.health;
    }

    showName() {
        const nameForm = document.createElement("form");
        nameForm.id = "nameForm";
        nameForm.style.backgroundColor = "purple";
        nameForm.innerHTML = `
        	<label for="nameInput">Enter your name</label>
        	<br/>
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
        <p id="instruction-title">Welcome to the game! Here are the instructions:</p>
        <ul id="instruction-list">
            <li>Collect elves and humans to score points.</li>
            <li>Avoid orgs and goblins to maintain your health.</li>
            <li>Dark mode will activate periodically, be cautious!</li>
        </ul>
        <button id="backButton">Back</button>
    `;

        parentElm.innerHTML = ""; // Clear existing content
        parentElm.appendChild(instructionsContainer); // Append the instructions container

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

        this.hotel = new Hotels("0", "0");
        this.hotel = new Hotels("30", "0");
        this.hotel = new Hotels("60", "0");
        this.hotel = new Hotels("90", "0");

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
        newBackground.style.backgroundColor = this.isDarkVersionActive
            ? "gray"
            : "purple";
        this.isDarkVersionActive = !this.isDarkVersionActive;

        setTimeout(() => {
            newBackground.style.backgroundColor = "gray";
            this.isDarkVersionActive = false;
        }, 20000);
    }
    handleVisitorClick(visitor) {
        if (visitor.type === "humans" || visitor.type === "elves") {
            this.room.push(visitor);
            this.score++;
        } else {
            this.room.pop(visitor);
            this.score--;
            this.health--;
        }

        localStorage.setItem("score", this.score.toString());
        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.finishGame();

        console.log(
            "Types in room:",
            this.room.map((visitor) => visitor.type)
        );
    }
    handleVisitorClickEvil(visitor) {
        if (visitor.type === "orgs" || visitor.type === "goblins") {
            this.room.push(visitor);
            this.score++;
        } else {
            this.room.pop(visitor);
            this.score--;
            this.health--;
        }

        localStorage.setItem("score", this.score.toString());
        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.finishGame();

        console.log(
            "Types in room:",
            this.room.map((visitor) => visitor.type)
        );
    }
    updateScoreDisplay() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
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
        clearInterval(this.generateAndCleanInterval); // Clear the interval for visitor generation
        clearInterval(this.darkSideInterval);
        clearInterval(this.interval1);
        clearInterval(this.interval2);
        // const gameOverGif = document.createElement("img");
        // gameOverGif.className = "over-gif";
        // gameOverGif.setAttribute("src", "./images/erdogan-over.gif");
        // gameOverGif.setAttribute("alt", "beautiful image of jail");

        const parentElm = document.getElementById("board");

        this.visitorsArr.forEach((visitor) => {
            if (
                visitor.domElement &&
                visitor.domElement.parentNode === parentElm
            ) {
                parentElm.removeChild(visitor.domElement);
            }
        });
        parentElm.innerHTML = "";

        const gameOverGif = document.createElement("div");
        gameOverGif.className = "over-gif";

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "game-over";
        gameOverDiv.innerText = `
			You Lost :(

		${this.userName} Has ${this.score} `;

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
        if (this.health === 0) {
            return this.gameOver();
        }
    }
}

class Hotels {
    constructor(positionX, positionY) {
        this.width = 10;
        this.height = 10;
        this.positionX = positionX;
        this.positionY = positionY;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.id = "hotel";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
}
class Visitors {
    constructor(game) {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = Math.floor(
            Math.random() * (100 - this.height - this.height + 1) + this.height
        );
        this.game = game;
        this.createDomElement();
    }

    createDomElement() {
        const parentElm = document.getElementById("board");
        this.domElement = document.createElement("button");
        this.domElement.setAttribute("id", "visitor");
        //this.domElement.getElementById("visitor");
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
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
            this.type = "elves";
            this.domElement.className = "elvish";
        } else if (randomNumber === 2) {
            this.type = "humans";
            this.domElement.className = "human";
        } else if (randomNumber === 3) {
            this.type = "orgs";
            this.domElement.className = "org";
        } else if (randomNumber === 4) {
            this.type = "goblins";
            this.domElement.className = "goblin";
        }
    }
    moveDownGood() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        if (this.type === "humans") {
            this.positionX = 60;
            this.positionY = 0;
        } else if (this.type === "elves") {
            this.positionX = 90;
            this.positionY = 0;
        } else if (this.type === "goblins") {
            this.positionX = 60;
            this.positionY = 0;
        } else if (this.type === "orgs") {
            this.positionX = 90;
            this.positionY = 0;
        }
    }
    moveDownEvil() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        if (this.type === "humans") {
            this.positionX = 0;
            this.positionY = 0;
        } else if (this.type === "elves") {
            this.positionX = 30;
            this.positionY = 0;
        } else if (this.type === "goblins") {
            this.positionX = 0;
            this.positionY = 0;
        } else if (this.type === "orgs") {
            this.positionX = 30;
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
                self.moveDownGood(); // Call the method to change position
            }, 50);
        }
    }
}

this.game = new Game();

document.addEventListener("DOMContentLoaded", () => {
    this.game;
});
