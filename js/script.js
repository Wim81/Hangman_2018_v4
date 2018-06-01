$( document ).ready(function() {

    /* de bibliotheek! */
    var library = ["advertisement", "airplane", "apple", "athletics", "autumn", "awful", "banana", "banner", "beer", "believe", "bicycle", "biology", "blue", "brother", "building", "candle", "cat", "ceiling", "chair", "chemistry", "cherry", "church", "clock", "coffee", "compact", "company", "computer", "concrete", "couch", "country", "cow", "cross", "cucumber", "cumbersome", "cupboard", "cutlery", "darkness", "dog", "early", "enterprise", "everybody", "execution", "expectancy", "expedition", "father", "fence", "floor", "fork", "frail", "game", "garbage", "grapefruit", "grass", "green", "greenhouse", "guitar", "history", "horse", "house", "icon", "implant", "knife", "lemon", "light", "mailman", "major", "material", "mathematics", "meadow", "mechanism", "melon", "meme", "message", "metrics", "minor", "modern", "modest", "mother", "motorway", "mountain", "music", "nation", "nature", "nephew", "night", "noise", "orange", "package", "party", "phoenix", "physics", "piano", "politics", "probably", "pumpkin", "red", "religion", "rhythm", "road", "rock", "seat", "section", "shift", "shower", "sister", "skin", "soccer", "soil", "song", "spoon", "sports", "spring", "stone", "stream", "summer", "sweat", "tea", "tennis", "therapy", "together", "train", "trial", "trust", "village", "voice", "welcome", "window", "winter", "world", "xylophone", "yard", "yellow"];


    //  FUNCTIONS  //

        /* neem een random woord uit de bib */
        function getRandomWord() {
            var x = Math.random() * library.length;
            x = Math.floor(x);
            return library[x];
        }

        /* zet woord om in een array */
        function wordToArray(word) {
            var wordArray = word.split("");
            return wordArray;
        }

        /* maak van array een array met spaties tussen */
        function wordToArrayExtended(wordArray) {
            var wordArrayLength = wordArray.length;
            var wordArrayExtended = [];
            wordArrayExtended[0] = wordArray[0]

            for (var x = 1; x < wordArrayLength; x++) {
                var spacePos = (x*2)-1;
                var letterPos = (x*2);
                wordArrayExtended[spacePos] = " ";
                wordArrayExtended[letterPos] = wordArray[x];
            }
            return wordArrayExtended;
        }

        /* kopie van de array met spaties tussen maar met de letters vervangen door underscores */
        function ExtendedArrayToScreenArray(wordArrayExtended) {
            var screenArray = wordArrayExtended.slice();
            var arrayLength = wordArrayExtended.length;

            for (var x = 0; x < arrayLength; x++) {
                if(wordArrayExtended[x] != " ") {
                    screenArray[x] = "_";
                }
            }
            return screenArray;
        }

        /* plaats de underscore array in de juiste div */
        function placeScreenArray() {
            $("#searchWord").html($screenArray);

            /* styling corrections */
            if($randomWord.length > 12) {
                document.getElementById("searchWord").style.fontSize = "3.0vh";
                document.getElementById("searchWord").style.margin = "10% auto";
            } else if($randomWord.length > 8) {
                document.getElementById("searchWord").style.fontSize = "4.0vh";
                document.getElementById("searchWord").style.margin = "8.5% auto";
            } else {
                document.getElementById("searchWord").style.fontSize = "5.0vh";
                document.getElementById("searchWord").style.margin = "7% auto";
            }
        }

        /* zorg dat alle styling van de knoppen verwijderd is/wordt */
        function resetButtons() {
            $(".letter").removeClass("used success fail");
            $("#btn1").removeClass("highlight");
        }

        /* vul de niet gevonden letters in wanneer spel gedaan (en zet deze in rood) */
        function fillInTheBlanks(array) {
            for (var x = 0; x < array.length; x++) {
                if (array[x] == "_") {
                    array[x] = '<span class="unfound">' + $randomWordArrayExtended[x] + '</span>';
                }
            }
        }


        function initAll() {
            /* initialiseer alle waarden */
            $attempts = 7;
            $image_state = 0;
            $randomWord = getRandomWord();
            $randomWordArray = wordToArray($randomWord);
            $randomWordArrayExtended = wordToArrayExtended($randomWordArray);
            $screenArray = ExtendedArrayToScreenArray($randomWordArrayExtended);
            $("#title").css("background-image", 'url("images/title_en.png")');

            /* toon in console (mag later weg) */
            console.log($attempts);
            console.log($randomWord);
            console.log($randomWordArray);
            console.log($randomWordArrayExtended);
            console.log($screenArray);

            /* plaats de underscore array in de juiste div */
            placeScreenArray();

            /* reset letters */
            resetButtons();

            /* reset image */
            $("#tree_girl_message").removeClass();
            $("#tree_girl_message").addClass("state0");

        }

        /* tel het aantal nog niet gevonden letters */
        function unfoundLetterCount(array) {
            var count = 0;
            for (var x = 0; x < array.length; x++) {
                if (array[x] == "_") {
                    count++;
                }
            }
            return count;
        }

        /* tel het totale aantal letters */
        function totalLetterCount(array) {
            return array.length;
        }

        /* doe wat moet gebeuren als een letter niet in het woord wordt gevonden */
        function checkLetter(letter) {
            $letterCount = 0;
            for (var x = 0; x < $randomWordArrayExtended.length; x++) {
                if ($randomWordArrayExtended[x] == letter) {
                    $screenArray[x] = letter;
                    $letterCount++;
                }
            }
            if ($letterCount == 0) {
                $attempts--;
                $image_state++;
                console.log("state: "+$image_state);
                $("#tree_girl_message").addClass("state" + $image_state);
                $("#" + letter).addClass("used fail");
            } else {
                $("#" + letter).addClass("used success");
            }
        }


    /* initialiseer alles bij het openen van de pagina */
    initAll();


    /* wat te doen bij een klik event */
    $("#alfabet").click( function(e) {

        if (e.target.id == "alfabet") {
        } else {

            checkLetter(e.target.id);
            console.log($screenArray);
            console.log($attempts);
            placeScreenArray();
            $unfoundLetterCount = unfoundLetterCount($screenArray);
            $totalLetterCount = totalLetterCount($randomWord);
            console.log($unfoundLetterCount);
            console.log($totalLetterCount);

            if($attempts != 0 && $unfoundLetterCount != 0 && $unfoundLetterCount != $totalLetterCount) {
                // indien meteen juiste letters worden geselecteerd, verdwijnt de initiële boodschap
                $("#tree_girl_message").removeClass("state0");
            } else if($unfoundLetterCount == 0) {
                // spel gedaan en gewonnen! (toon alles in groen en alfabet knoppen worden onbruikbaar)
                $(".letter").addClass("used");
                $("#btn1").addClass("highlight");
                $("#tree_girl_message").addClass("success_state" + $image_state);

            } else if($attempts == 0) {
                // spel gedaan en verloren! (toon niet gevonden letters in rood en alfabet knoppen worden onbruikbaar)
                $(".letter").addClass("used");
                fillInTheBlanks($screenArray);
                placeScreenArray();
                $("#btn1").addClass("highlight");
                $("#title").slideUp(200, "linear", function() {
                    $("#title").css("background-image", 'url("images/game_over.png")');
                    $("#title").slideDown(200, "linear");
                });
            }
        }
    });

    $("#container1").click( function(e) {
        if (e.target.id == "btn1") {
            e.preventDefault();
             initAll();
        } else {
        }
    });




});