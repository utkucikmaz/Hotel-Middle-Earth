class Game {
    constructor() {
        this.showName();
        this.room = [];
        this.score = 0;
        this.userName = null;
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
        this.backgroundMusic = document.getElementById("backgroundMusic");
        this.backgroundMusic.volume = 0.3;
        this.badSound = document.getElementById("bad-sound");
        this.goodSound = document.getElementById("good-sound");
        this.gollumSound = document.getElementById("gollum-sound");
        this.gandalfSound = document.getElementById("gandalf-sound");
        this.sauronSound = document.getElementById("sauron-sound");
        this.ringSound = document.getElementById("ring-sound");
        this.storeData();
    }
    storeData() {
        if (!this.userName) {
            console.error(
                "User name is null or empty. Data will not be stored."
            );
            return;
        }
        const firebaseConfig = {
            apiKey: "AIzaSyBJ9aJ0Uw7CtfszGxi9zr5n79k650gpYo4",
            authDomain: "hotel-middle-earth.firebaseapp.com",
            projectId: "hotel-middle-earth",
            storageBucket: "hotel-middle-earth.appspot.com",
            messagingSenderId: "285009011754",
            appId: "1:285009011754:web:9567a429298ed847d14f53",
        };

        firebase.initializeApp(firebaseConfig);
        const firestore = firebase.firestore();
        const usersCollection = firestore.collection("users");

        usersCollection
            .add({
                userName: this.userName,
                score: this.score,
            })
            .then((docRef) => {
                console.log("Document written with ID:", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document:", error);
            });

        usersCollection
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    console.log(
                        "User:",
                        userData.userName,
                        "Score:",
                        userData.score
                    );
                });
            })
            .catch((error) => {
                console.error("Error getting documents:", error);
            });
    }

    showName() {
        const nameForm = document.createElement("form");
        nameForm.id = "nameForm";
        nameForm.innerHTML = `
        	<label for="nameInput">Hotel Middle Earth</label>
        	<br/>
            <input type="text" id="nameInput" placeholder="Please enter your name" required>
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
            this.startBackgroundMusic();
        });
    }

    showInstructions() {
        const elf = '<img src="./images/elf.png" class = "inst-char"></img>';
        const human =
            '<img src="./images/human.png" class = "inst-char"></img>';
        const org = '<img src="./images/org.png" class = "inst-char"></img>';
        const goblin =
            '<img src="./images/goblin.png" class = "inst-char"></img>';
        const gandalf =
            '<img src="./images/gandalf.png" class = "inst-char"></img>';
        const sauron =
            '<img src="./images/sauron.png" class = "inst-char"></img>';
        const gollum =
            '<img src="./images/gollum.png" class = "inst-char" id="gollum-inst"></img>';
        const ring =
            '<img src="./images/ring.png" class = "inst-char" id="ring-inst"></img>';
        const hotel1 =
            '<img src="./images/hotel1.png" class = "inst-char"></img>';
        const hotel2 =
            '<img src="./images/hotel2.png" class = "inst-char"></img>';
        const hotel3 =
            '<img src="./images/hotel3.png" class = "inst-char"></img>';
        const hotel4 =
            '<img src="./images/hotel4.png" class = "inst-char"></img>';

        const parentElm = document.getElementById("board");
        const instructionsContainer = document.createElement("div");
        instructionsContainer.id = "instructionsContainer";
        instructionsContainer.innerHTML = `
        <h1 id="instruction-title">Welcome to the Hotel Middle Earth!</h1>
            <div id="backbutton-container">
                <button id="backButton">Back</button>
            </div>
                <br/>
            <ul id="instruction-list">
             <div id="inst-good">
                <li>Collect ${elf} and ${human} to score points.</li>
                <li>Avoid ${org} and ${goblin} to maintain your health.</li>
                <li>Be careful about the ${gollum} if you have the ${ring}, he is a filthy thief.</li>
                <li>If you serve ${sauron} you lose double health and score.</li>
                <li>If you lose all your health before you destroy the ring, it is game over.</li>
                <li>If you find both the ${ring} and ${gandalf}.  ${hotel3} wins!</li>
             </div>
             <div id ="inst-bad">
                <li>Eye mode will activate periodically, be cautious!</li>
                <li>On the eye mode you must obey ${sauron} and collect ${org} and ${goblin}.</li>
                <li>Even though you serve ${sauron}, ${gollum} is still a thief.</li>
                <li>If you serve ${gandalf} you lose double health and score.</li>
                <li>If you lose all your health before you destroy the ring, it is game over.</li>
                <li>If you find both the ${ring} and ${sauron}.  ${hotel2} wins!</li>
             </div>
            </ul>
            
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

        const nameForm = document.getElementById("nameForm");
        nameForm.style.display = "none";

        this.hotelsArray.push(new Hotels());

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
        const parentElm = document.getElementById("board");
        function createInfo(infoText) {
            const info = document.createElement("p");
            info.id = "info-text";
            parentElm.appendChild(info);
            info.innerHTML = infoText;

            setTimeout(() => {
                parentElm.removeChild(info);
            }, 2000);
        }
        const ringInfo = `You captured the Ring. Find Gandalf to destroy it.`;
        const gollumWithRing = `Gollum stole your Ring!`;
        const gollumWithoutRing = `You don't have the Ring, Gollum run away.`;
        const gandalfWithoutRing = `You should find the Ring before Gandalf!`;
        const sauronGoodSide = `The power of Sauron is limited on this side.`;

        if (visitor.type === "human" || visitor.type === "elf") {
            this.room.push(visitor);
            this.score += 10;
            this.goodSound.play();
        } else if (visitor.type === "org" || visitor.type === "goblin") {
            this.room.pop(visitor);
            this.score -= 10;
            this.health--;
            this.badSound.play();
        } else if (
            visitor.type === "gandalf" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.gandalfSound.play();
            this.score += 100;
            this.goodWinsArr.push(visitor);
            this.gandalfWins();
        } else if (visitor.type === "ring" && this.goodWinsArr.length === 0) {
            this.ringSound.play();
            this.goodWinsArr.push("ring");
            this.hasRing = true;
            createInfo(ringInfo);
        } else if (
            visitor.type === "gollum" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.darkWinsArr.pop("ring");
            this.hasRing = false;
            this.gollumSound.play();
            createInfo(gollumWithRing);
        } else if (
            visitor.type === "gollum" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.goodWinsArr.pop("ring");
            this.hasRing = false;
            this.gollumSound.play();
            createInfo(gollumWithRing);
        } else if (visitor.type === "sauron") {
            this.sauronSound.play();
            this.score -= 20;
            this.health -= 2;
            createInfo(sauronGoodSide);
        } else if (
            visitor.type === "gandalf" &&
            !this.goodWinsArr.includes("ring")
        ) {
            this.gandalfSound.play();
            createInfo(gandalfWithoutRing);
        } else if (
            visitor.type === "gollum" &&
            !this.goodWinsArr.includes("ring")
        ) {
            createInfo(gollumWithoutRing);
        } else if (
            visitor.type === "gollum" &&
            !this.darkWinsArr.includes("ring")
        ) {
            createInfo(gollumWithoutRing);
        }

        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.updateRingDisplay();
        this.finishGame();
    }
    handleVisitorClickEvil(visitor) {
        const parentElm = document.getElementById("board");

        function createInfo(infoText) {
            const info = document.createElement("p");
            info.id = "info-text";
            parentElm.appendChild(info);
            info.innerHTML = infoText;

            setTimeout(() => {
                parentElm.removeChild(info);
            }, 2000);
        }
        const ringInfo = `You captured the Ring. Find Sauron to rule the Middle Earth!.`;
        const gollumWithRing = `Gollum stole your Ring!`;
        const gollumWithoutRing = `You don't have the Ring, Gollum run away.`;
        const sauronWithoutRing = `You should find the Ring before Sauron!`;
        const gandalfEvilSide = `The power of Gandalf is limited on this side.`;

        if (visitor.type === "org" || visitor.type === "goblin") {
            this.room.push(visitor);
            this.score += 10;
            this.badSound.play();
        } else if (visitor.type === "human" || visitor.type === "elf") {
            this.room.pop(visitor);
            this.score -= 10;
            this.health--;
            this.goodSound.play();
        } else if (
            visitor.type === "sauron" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.sauronSound.play();
            this.score += 100;
            this.darkWinsArr.push(visitor);
            this.sauronWins();
        } else if (visitor.type === "ring" && this.darkWinsArr.length === 0) {
            this.ringSound.play();
            this.darkWinsArr.push("ring");
            this.hasRing = true;
            createInfo(ringInfo);
        } else if (
            visitor.type === "gollum" &&
            this.darkWinsArr.includes("ring")
        ) {
            this.darkWinsArr.pop("ring");
            this.hasRing = false;
            this.gollumSound.play();
            createInfo(gollumWithRing);
        } else if (
            visitor.type === "gollum" &&
            this.goodWinsArr.includes("ring")
        ) {
            this.goodWinsArr.pop("ring");
            this.hasRing = false;
            this.gollumSound.play();
            createInfo(gollumWithRing);
        } else if (visitor.type === "gandalf") {
            this.gandalfSound.play();
            this.score -= 20;
            this.health -= 2;
            createInfo(gandalfEvilSide);
        } else if (
            visitor.type === "sauron" &&
            !this.goodWinsArr.includes("ring")
        ) {
            this.sauronSound.play();
            createInfo(sauronWithoutRing);
        } else if (
            visitor.type === "gollum" &&
            !this.goodWinsArr.includes("ring")
        ) {
            createInfo(gollumWithoutRing);
        } else if (
            visitor.type === "gollum" &&
            !this.darkWinsArr.includes("ring")
        ) {
            createInfo(gollumWithoutRing);
        }

        this.updateScoreDisplay();
        this.updateHealthDisplay();
        this.updateRingDisplay();
        this.finishGame();
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
    startBackgroundMusic() {
        this.backgroundMusic.play();
    }

    stopBackgroundMusic() {
        this.backgroundMusic.pause();
    }

    gameOver() {
        this.storeData();
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        const parentElm = document.getElementById("board");

        this.visitorsArr.forEach((visitor) => {
            parentElm.removeChild(visitor.domElement);
        });
        parentElm.innerHTML = "";

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

        const showPlayersButton = document.createElement("button");
        showPlayersButton.id = "players-button";
        showPlayersButton.textContent = "Top Players";
        showPlayersButton.addEventListener("click", (event) => {
            this.showTopPlayers();
        });

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(showPlayersButton);
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
        this.storeData();
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        const parentElm = document.getElementById("board");

        this.visitorsArr.forEach((visitor) => {
            parentElm.removeChild(visitor.domElement);
        });
        parentElm.innerHTML = "";

        const gameOverGif = document.createElement("img");
        gameOverGif.id = "sauron-won";
        gameOverGif.setAttribute("src", "./images/sauron-won.gif");
        gameOverGif.setAttribute("alt", "a powerful image of sauron");

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "sauron-class";
        gameOverDiv.innerHTML = `
		<p class="over-title">Sauron took the Middle Earth over.</p>
        <div class="sauron-info-container">
        <p>Now everyone must obey the dark lord.</p>
		<p>${this.userName} served Sauron loyally...</p>
        <p>Sauron gave ${this.userName} ${this.score} soldiers to invade more!</p>
        <br/>
        </div>`;

        parentElm.appendChild(gameOverDiv);

        const showPlayersButton = document.createElement("button");
        showPlayersButton.id = "players-button";
        showPlayersButton.textContent = "Top Players";
        showPlayersButton.addEventListener("click", () => {
            this.showTopPlayers();
        });

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(showPlayersButton);
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
        this.storeData();
        clearInterval(this.interval1);
        clearInterval(this.interval2);

        const parentElm = document.getElementById("board");

        this.visitorsArr.forEach((visitor) => {
            parentElm.removeChild(visitor.domElement);
        });
        parentElm.innerHTML = "";

        const gameOverGif = document.createElement("img");
        gameOverGif.id = "gandalf-won";
        gameOverGif.setAttribute("src", "./images/gandalf-won.gif");
        gameOverGif.setAttribute("alt", "a beautiful image of gandalf");

        const gameOverDiv = document.createElement("p");
        gameOverDiv.className = "gandalf-class";
        gameOverDiv.innerHTML = `
            <p class="over-title">Now Middle Earth is Free!!</p>
            <div id="gandalf-info-container">
            <p>Gandalf has really come on time as he promised to Aragorn</p>
            <p><i>"Look to my coming on the first light of the fifth day, at dawn
                look to the east..."</i></p>
            <p>${this.userName} helped Gandalf and all his friends during the wars.</p>
            <p>${this.userName} found ${this.score} soldiers and ran to the heart of the enemy.</p>
            </div>
`;

        parentElm.appendChild(gameOverDiv);

        const showPlayersButton = document.createElement("button");
        showPlayersButton.id = "players-button";
        showPlayersButton.textContent = "Top Players";
        showPlayersButton.addEventListener("click", () => {
            this.showTopPlayers();
        });

        const restartDiv = document.createElement("p");
        restartDiv.className = "restart";
        restartDiv.innerText = "Press space to restart";

        gameOverDiv.appendChild(gameOverGif);
        gameOverDiv.appendChild(showPlayersButton);
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
    showTopPlayers() {
        const parentElm = document.getElementById("board");

        const topPlayersContainer = document.createElement("div");
        topPlayersContainer.id = "topPlayersContainer";

        const title = document.createElement("p");
        title.textContent = "Top Players";
        title.className = "top-players-title";
        topPlayersContainer.appendChild(title);

        const playerList = document.createElement("ol");
        playerList.className = "player-list";
        topPlayersContainer.appendChild(playerList);

        const firestore = firebase.firestore();
        const usersCollection = firestore.collection("users");

        usersCollection
            .orderBy("score", "desc")
            .limit(10)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    const listItem = document.createElement("li");
                    listItem.textContent = `${userData.userName}: ${userData.score}`;
                    playerList.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error("Error getting top players:", error);
            });

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.className = "back-button";
        backButton.addEventListener("click", () => {
            location.assign("index.html");
        });

        parentElm.innerHTML = "";
        parentElm.appendChild(topPlayersContainer);
        topPlayersContainer.appendChild(backButton);
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

document.addEventListener("DOMContentLoaded", () => {
    this.game = new Game();
});
