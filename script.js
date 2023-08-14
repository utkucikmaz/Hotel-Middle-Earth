class Game {
    constructor() {
        this.showName();
        this.hotel = null;
        this.visitorsArr = [];
        this.visitorCounts = {
            elves: 0,
            humans: 0,
            orgs: 0,
            goblins: 0,
        };
    }
    showName() {
        // const nameForm = document.createElement("form");
        // nameForm.id = "nameForm";
        // nameForm.style.backgroundColor = "purple";
        // nameForm.innerHTML = `
        // 	<label for="nameInput">Enter your name</label>
        // 	<br/>
        //     <input type="text" id="nameInput" placeholder="Your name" required>
        // 	<br/>
        //     <input id="submit-btn" type="submit" value="Start Game">`;

        // const parentElm = document.getElementById("board");
        // parentElm.appendChild(nameForm);
        // nameForm.addEventListener("submit", (event) => {
        //     event.preventDefault();
        // });
        this.startGame();
    }
    startGame() {
        // const nameInput = document.getElementById("nameInput");
        // const userName = nameInput.value.trim().toUpperCase();

        // if (userName === "") {
        //     alert("Please enter a valid name.");
        //     return;
        // }

        // const nameForm = document.getElementById("nameForm");
        // nameForm.style.display = "none";

        this.hotel = new Hotels("0", "0");
        this.hotel = new Hotels("30", "0");
        this.hotel = new Hotels("60", "0");
        this.hotel = new Hotels("90", "0");

        this.initGameLogic();
    }
    initGameLogic() {
        let score = 0;
        const visitorsArr = [];

        const parentElm = document.getElementById("board");
        const scoreDisplay = document.createElement("span");
        scoreDisplay.id = "scoreDisplay";
        parentElm.appendChild(scoreDisplay);
        // const nameInput = document.getElementById("nameInput");
        // const userName = nameInput.value.trim().toUpperCase();

        // function randomizeColor() {
        //     const red = Math.floor(Math.random() * 256);
        //     const green = Math.floor(Math.random() * 256);
        //     const blue = Math.floor(Math.random() * 256);
        //     return `rgb(${red},${green},${blue})`;
        // }
        const updateVisitorCount = (type) => {
            console.log("Visitor Counts:", this.visitorCounts);
            return this.visitorCounts[type]++;
        };
        const visitorsCreate = setInterval(() => {
            const newVisitor = new Visitors();
            visitorsArr.push(newVisitor);
            updateVisitorCount(newVisitor.type);
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }, 3000);

        const visitorsMove = setInterval(() => {
            visitorsArr.forEach((visitorInstance) => {
                visitorInstance.moveDown();
                console.log(visitorInstance);
                //if (visitorInstance.positionY + visitorInstance.height < 0) {
                //    visitorInstance.domElement.remove();
                //}
            });
        }, 50);
    }
}
class Hotels {
    constructor(positionX, positionY) {
        this.hotel1 = [];
        this.hotel2 = [];
        this.hotel3 = [];
        this.hotel4 = [];
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
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100 - this.height;
        this.createDomElement();
    }

    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.setAttribute("id", "visitor");
        //this.domElement.getElementById("visitor");
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);

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
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new Game();
});
