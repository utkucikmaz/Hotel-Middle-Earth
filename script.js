class Game {
    constructor() {
        this.showName();
        this.room = [];
        this.score = 0;
        this.health = 5;
        this.hotelsArray = [];
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
            <li>Dark mode will activate periodically, be cautious!</li>
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
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        // const gameOverGif = document.createElement("img");
        // gameOverGif.className = "over-gif";
        // gameOverGif.setAttribute("src", "./images/erdogan-over.gif");
        // gameOverGif.setAttribute("alt", "beautiful image of jail");

        const parentElm = document.getElementById("board");

        this.visitorsArr.forEach((visitor) => {
            parentElm.removeChild(visitor.domElement);
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
            this.type = "elves";
            this.domElement.className = "elvish";
            this.domElement.setAttribute("src", "./images/elf.png");
        } else if (randomNumber === 2) {
            this.type = "humans";
            this.domElement.className = "human";
            this.domElement.setAttribute("src", "./images/human.png");
        } else if (randomNumber === 3) {
            this.type = "orgs";
            this.domElement.className = "org";
            this.domElement.setAttribute("src", "./images/org.png");
        } else if (randomNumber === 4) {
            this.type = "goblins";
            this.domElement.className = "goblin";
            this.domElement.setAttribute("src", "./images/goblin.png");
        }
    }
    moveDownGood() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        if (this.type === "humans") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "elves") {
            this.positionX = 82;
            this.positionY = 0;
        } else if (this.type === "goblins") {
            this.positionX = 55;
            this.positionY = 0;
        } else if (this.type === "orgs") {
            this.positionX = 87;
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
            this.positionX = 22;
            this.positionY = 0;
        } else if (this.type === "goblins") {
            this.positionX = 0;
            this.positionY = 0;
        } else if (this.type === "orgs") {
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
