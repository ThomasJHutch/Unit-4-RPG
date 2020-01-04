$(document).ready(function () {
    var characters = {
        "Obi-Wan Kenobi": {
            name: "Obi-Wan Kenobi",
            health: 115,
            attack: 8,
            imageUrl: "assets/images/obi-wan.jpg",
            enemyAttackBack: 15
        },
        "Anakin Skywalker": {
            name: "Anakin Skywalker",
            health: 150,
            attack: 12,
            imageUrl: "assets/images/anakin.jpg",
            enemyAttackBack: 18
        },
        "Baby Yoda": {
            name: "Baby Yoda",
            health: 40,
            attack: 60,
            imageUrl: "assets/images/luke.jpg",
            enemyAttackBack: 8
        },
        "Darth Maul": {
            name: "Darth Maul",
            health: 169,
            attack: 8,
            imageUrl: "assets/images/darth_maul.jpg",
            enemyAttackBack: 25
        },
        "Darth Vader": {
            name: "Darth Vader",
            health: 80,
            attack: 10,
            imageUrl: "assets/images/vader.jpg",
            enemyAttackBack: 16
        }
    };
    // will be populated when the player selects the character
    var currSelectedCharacter;
    // populated with all the characters the players didnt select
    var combatants = [];
    // will keep track of the turns during combat. used
    var currDefender;
    // will keep track of turns during combat. used for calculating player damage
    var turnCounter = 1;

    var killCount = 0;

    // function will render a character card to the page.
    // character rendered and the area they are rendered to.
    var renderOne = function (character, renderArea, charStatus) {
        var charDiv = $("<div class='character' data-name' " + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);

        // if the character is an enemy or defender (active opponent), add the appropriate class
        if (charStatus === "enemy") {
            $(charDiv).addClass("enemy");
        }
        else if (charStatus === "defender") {
            // populate currDefender with the selected opponents info
            currDefender = character;
            $(charDiv).addClass("target-enemy");
        }
    };


    var renderMessage = function (message) {
        var gameMessageSet = $("#game-message");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);

        if (message === "clearMessage") {
            gameMessageSet.text("");
        }

    };


    // handles the rendering of characters based on which area they are to be rendered in
    var renderCharacters = function (charObj, areaRender) {

        // "characters-section" is the dic where all of our characters begin
        // if true, render all characters in this area. 
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            //loop through the character object and call the renderOne on each character to render their card
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, "");
                }
            }
        }

        // "selected-character" is the div where our selected character appears.
        // if true, render the selected player character to this area.
        if (areaRender === "#selected-character") {
            renderOne(charObj, areaRender)
        };

        // "available-to-attack" is the div where our "inactive" opponents reside
        // if true, render the selected character to this area.
        if (areaRender === "#available-to-attack-section") {

            // loop through the combatants array and call the renderOne function to e...
            for (var i = 0; i < charObj.length; i++) {
                renderOne(charObj[i], areaRender, "enemy");
            }

            // creates an on click for each enemy
            $(document).on("click", ".enemy", function () {
                var name = ($(this).attr("data-name"));

                // if there is no defender, the clicked enemy will become the defender
                if ($("#defender").children().length === 0) {
                    renderCharacters(name, "#defender");
                    $(this).hide();
                    renderMessage("clearMessage");
                }
            });
        }

        // "defender is the div where the active opponent appears.
        // if true, render the selected enemy in this location
        if (areaRender === "#defender") {
            $(areaRender).empty();
            for (var i = 0; i < combatants.length; i++) {
                if (combatants[i].name === charObj) {
                    renderOne(combatants[i], areaRender, "defender");
                }
            }
        }

        // re-render defender when attacked
        if (areaRender === "playerDamage") {
            $("#defender").empty();
            renderOne(charObj, "#defender", "defender");
        }

        // re-render the player character when attacked
        if (areaRender === "enemyDamage") {
            $("#selected-character").empty();
            renderOne(charObj, "#selected-character", "")
        }

        // remove defeated enemy
        if (areaRender === "enemyDefeated") {
            $("#defender").empty();
            var gameStateMessage = "you have defeated " + charObj.name + ", you can choose to fight another enemy."
        };
        renderMessage(gameStateMessage);
    }
});


var restartGame = function (inputEndGame) {

    var restart = $("<button>Restart</button>").click(function () {
        location.reload();
    });

    var gameState = $("<div>").text(inputEndGame);

    $("body").append(gameState);
    $("body").append(restart);
};

// render characters on the page when the game starts
renderCharacters(characters, "#character-section");

// render all characters to the page when the game starts 
$(document).on("click", ".character", function () {
    // saving teh clicked character's name.
    var name = $(this).attr("data-name");
    console.log(name);

    // if a player character has not been chosen
    if (!currSelectedCharacter) {
        // we populate currSelectedCharacter with the selected characters info
        currSelectedCharacter = characters[name];
        // we loop through the remaining characters and push them to the combatant
        for (var key in characters) {
            if (key !== name) {
                combatants.push(characters[key]);
            }
        }

        console.log(combatants);
        // hide the character select div.
        $("characters-section").hide();

        // then render our selected character and our combatants.
        renderCharacters(currSelectedCharacter, "#selected-character");
        renderCharacters(combatants, "#available-to-attack-section")
    }
});
// when you click the attack button, run the following logic
$("#attack-button").on("click", function () {

    if $("#defender").children().length !== 0) {

        var attackMessage = "You attack " + currDefender.name + " for " + (currSelectedCharacter.attack * turnCounter) + " damage.";
        var attackMessage = currDefender.name + " attacked you back for  " + currDefender.enemyAttackBack + " damage.";
        renderMessage("clearMessage");
        // reduce defender's health by your attack value.
        currDefender.health -= (currSelectedCharacter.attack * turnCounter);

        // if the enemy still has health 
        if (currDefender.health > 0) {



            // render the enemy updated character card
            renderCharacters(currDefender, "playerDamage");

            renderMessage(attackMessage);
            renderMessage(CounterAttackMessage);

            // reduce your health by the opponenets attack value
            currSelectedCharacter.health -= currDefender.enemyAttackBack;

            // render the players updated character card 
            renderCharacters(currSelectedCharacter, "enemyDamage");

            if (currSelectedCharacter.health <= 0) {
                renderMessage("clearMessage");
                restartGame("I Find Your Lack Of Faith Disturbing");
                $("#attack-button").unbind("click");

            }
        }
    }
    // if the enemy has less than zero health they are defeated
    else {
        // remove enemy card
        renderCharacters(currDefender, "enemyDefeated");
        killCount++;

        if (killCount >= 3) {
            renderMessage("clearMessage");
            restartGame("You defeated the empire!!!");

        }
    }

    turnCounter++
});