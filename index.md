<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Star Wars Episode 3.1: Jar Jar's Return</title>

    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" />

    <!-- font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
        </script>

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />

    <!-- my js -->
    <script type="text/javascript" src="assets/javascript/game.js"></script>


</head>


<body>
    <div class="row">
        <div class="col-md-6" style="margin:auto; padding:25px;">
            <img src="assets/images/SWLogo.png" class="img-fluid" alt="Responsive image">
        </div>
    </div>

    <div id="main-game-section">
        <!-- where characters are before character selection -->
        <div id="character-section">
            <div class="section-title">Select your Character</div>
        </div>

        <!-- where selected character goes -->
        <div id="selected-character-section">
            <div class="section-title">Your Character</div>
            <!-- where selected char appears -->
            <div id="selected-character">
            </div>

            <div id="available-to-attack-section">
                <div class="section-title">Enemies to Defeat</div>
            </div>

            <div class="section-title">Duel Section</div>
            <div id="fight-section">
                <button id="attack-button">Duel</button>
            </div>

            <div id="action">
                <div class="character-section">
                    <div class="section-title">Defender</div>
                    <!-- where the enemy appears -->
                </div>
            </div>
        </div>
        <div id="game-message"></div>

</body>

</html>
