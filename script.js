class Game {
    constructor() {
        this.showName();
        this.room = [];
        this.visitorsArr = [];
        this.visitorCounts = {
            elves: 0,
            humans: 0,
            orgs: 0,
            goblins: 0,
        };
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
        nameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.startGame();
        });
    }
    startGame() {
        const nameInput = document.getElementById("nameInput");
        const userName = nameInput.value.trim().toUpperCase();

        if (userName === "") {
            alert("Please enter a valid name.");
            return;
        }

        const nameForm = document.getElementById("nameForm");
        nameForm.style.display = "none";
        this.hotel = new Hotels("0", "0");
        this.hotel = new Hotels("30", "0");
        this.hotel = new Hotels("60", "0");
        this.hotel = new Hotels("90", "0");

        this.createVisitors();
    }
    createVisitors() {
        let score = 0;

        const parentElm = document.getElementById("board");
        const scoreDisplay = document.createElement("span");
        scoreDisplay.id = "scoreDisplay";
        parentElm.appendChild(scoreDisplay);
        const nameInput = document.getElementById("nameInput");
        const userName = nameInput.value.trim().toUpperCase();

        const generateVisitors = () => {
            for (let i = 0; i < 4; i++) {
                const newVisitor = new Visitors(this);
                this.visitorsArr.push(newVisitor);
                updateVisitorCount(newVisitor.type);
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
            }
        };
        const updateVisitorCount = (type) => {
            console.log("Visitor Counts:", this.visitorCounts);
            return this.visitorCounts[type]++;
        };

        const visitorsMove = setInterval(() => {
            this.visitorsArr.forEach((visitorInstance) => {
                visitorInstance.moveDown();
            });
        }, 50);

        const cleanUpVisitors = () => {
            this.visitorsArr.forEach((visitor) => {
                parentElm.removeChild(visitor.domElement); // Remove visitor DOM element
            });
            this.visitorsArr = []; // Clear the visitors array
        };

        const generateAndClean = () => {
            generateVisitors();
            setTimeout(() => {
                cleanUpVisitors();
            }, 5000);
        };

        generateAndClean();
        setInterval(generateAndClean, 10000); // Call the function every 10 seconds (5s for generation + 5s for cleaning)
    }
    handleVisitorClick(visitor) {
        this.room.push(visitor);
        console.log(
            "Types in room:",
            this.room.map((visitor) => visitor.type)
        );
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
            self.game.handleVisitorClick(self);
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
    moveDown() {
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.addEventListener("click", () => {
            this.positionX = 60;
            this.positionY = 0;
        });
    }
}

this.game = new Game();

document.addEventListener("DOMContentLoaded", () => {
    this.game;
});
