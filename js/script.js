$( document ).ready(function() {

    /* de bibliotheek! */
    var library = ["ability", "absence", "abstract", "accelerate", "accept", "accomplishment", "account", "achievement", "acid", "activist", "addition", "address", "adequate", "adjustment", "administration", "admire", "adolescent", "adventure", "advertisement", "aesthetic", "afford", "against", "agency", "agreement", "agriculture", "aim", "air", "airplane", "alien", "alive", "almost", "amazing", "ambassador", "analysis", "angle", "animal", "anniversary", "anonymous", "answer", "anticipate", "anxiety", "anybody", "appearance", "apple", "application", "appointment", "appreciate", "approval", "architect", "article", "artificial", "artist", "assignment", "assistance", "assumption", "athlete", "athletics", "atmosphere", "attendance", "attorney", "audience", "automatic", "autonomy", "autumn", "awake", "award", "awful", "background", "balance", "balloon", "banana", "bank", "banner", "barrier", "baseball", "basketball", "bathroom", "battery", "battle", "beach", "beautiful", "beer", "before", "beginning", "behind", "believe", "beneath", "bicycle", "biography", "biology", "bitter", "blend", "blessing", "block", "blue", "border", "boundary", "boyfriend", "brilliant", "broadcast", "brother", "brown", "bubble", "bucket", "budget", "builder", "building", "bulb", "bull", "burst", "butterfly", "button", "cabin", "cage", "calculation", "calendar", "camera", "campaign", "cancel", "candidate", "candle", "capable", "capacity", "captain", "card", "career", "carrier", "cat", "category", "ceiling", "celebrate", "cemetery", "ceremony", "certain", "chair", "chairman", "challenge", "chance", "character", "charge", "charity", "cheap", "check", "chemical", "chemistry", "cherry", "chicken", "chill", "chocolate", "choice", "church", "cigarette", "circumstance", "citizen", "city", "civilian", "civilization", "clear", "climate", "clinic", "clock", "close", "clothing", "coast", "coffee", "coin", "cold", "collaboration", "collect", "college", "colony", "column", "combination", "comedy", "comfortable", "command", "comment", "commercial", "commitment", "common", "community", "compact", "company", "compare", "compete", "competition", "complete", "complexity", "compliance", "compromise", "computer", "concede", "concentrate", "concept", "concern", "conclusion", "concrete", "conduct", "confession", "confirm", "conflict", "confront", "confusion", "connect", "consecutive", "conservative", "consider", "conspiracy", "consumption", "contact", "container", "content", "context", "continuous", "contractor", "contributor", "control", "controversial", "convenience", "conversion", "conviction", "cookie", "corner", "corporation", "correct", "correspondent", "cost", "cottage", "couch", "counsel", "count", "country", "courtroom", "cow", "crack", "crash", "create", "creativity", "creature", "criminal", "critical", "criticism", "cross", "crowd", "cucumber", "culture", "cumbersome", "cupboard", "curiosity", "currency", "curtain", "customer", "cutlery", "cycle", "daily", "damage", "dancer", "dangerous", "darkness", "database", "daughter", "dawn", "deadline", "dealer", "debate", "debut", "decide", "declare", "decorate", "decrease", "dedicate", "defeat", "defendant", "defensive", "definitely", "definition", "degree", "delay", "deliberately", "delicate", "demonstration", "depression", "depth", "description", "design", "desire", "desperate", "destroy", "destruction", "determination", "devastating", "devil", "diabetes", "diamond", "difference", "difficulty", "dilemma", "dimension", "diminish", "diplomat", "direction", "director", "disability", "disabled", "disagree", "discipline", "discover", "disease", "dismiss", "distance", "distinguish", "distribution", "diverse", "document", "documentary", "dog", "domestic", "donation", "downtown", "dozen", "drain", "drawer", "dream", "dress", "drill", "drink", "drive", "drunk", "duck", "duty", "eager", "early", "earthquake", "easy", "economics", "edition", "education", "effective", "efficiency", "effort", "egg", "either", "elbow", "election", "electricity", "electronics", "element", "elephant", "eleven", "eligible", "eliminate", "elsewhere", "emission", "emotion", "emphasis", "empire", "employee", "employer", "empty", "enable", "end", "endless", "enemy", "energy", "engine", "engineer", "enough", "enterprise", "entertainment", "enthusiasm", "entity", "entrance", "envelope", "environment", "episode", "equality", "equation", "equipment", "equivalent", "essence", "essential", "establishment", "estimate", "evaluation", "evening", "everybody", "everywhere", "evidence", "exam", "exceed", "excellent", "excessive", "excited", "exclusive", "excuse", "execution", "exercise", "exhibition", "existence", "expansion", "expectancy", "expedition", "experience", "experiment", "expert", "explicit", "explore", "exposure", "expression", "extension", "extraordinary", "eyebrow", "facilitate", "factory", "fade", "failure", "false", "fame", "familiar", "family", "fantastic", "fantasy", "farmer", "fascinating", "fashion", "fatal", "father", "favorable", "favorite", "feather", "feature", "feedback", "female", "fence", "festival", "field", "fight", "figure", "film", "finance", "finger", "firm", "first", "fish", "flavor", "floor", "focus", "follow", "food", "force", "foreigner", "forest", "fork", "formation", "fortune", "forward", "foundation", "four", "fragment", "frail", "framework", "freedom", "freeze", "frequency", "friend", "frontier", "frozen", "frustration", "function", "furniture", "future", "galaxy", "game", "garage", "garbage", "garden", "gasoline", "general", "generation", "generous", "gentleman", "gesture", "giant", "girlfriend", "glad", "glance", "global", "goal", "grandparent", "grapefruit", "grass", "grateful", "gravity", "green", "greenhouse", "ground", "guarantee", "guess", "guidance", "guideline", "guilty", "guitar", "gym", "handle", "happiness", "hardware", "harmony", "headache", "headquarters", "heart", "heaven", "heavy", "height", "helicopter", "helmet", "heritage", "hero", "hidden", "highlight", "history", "holiday", "homework", "honor", "horizon", "horse", "hospital", "hotel", "house", "household", "human", "hundred", "hurricane", "ice", "icon", "identity", "ideology", "ignore", "illegal", "illusion", "image", "imagine", "immediate", "impact", "implant", "implementation", "importance", "impossible", "impression", "improve", "impulse", "income", "increase", "incredible", "indication", "individual", "inevitable", "influence", "information", "ingredient", "injury", "innovation", "input", "insert", "inside", "installation", "instinct", "intact", "integrate", "integrity", "intensity", "interaction", "Internet", "interview", "intimate", "invention", "inventory", "investigation", "investment", "invitation", "involvement", "irony", "island", "isolate", "issue", "jaw", "journalism", "joy", "juice", "jump", "jungle", "justice", "kick", "kingdom", "kitchen", "knife", "knowledge", "label", "laboratory", "lamp", "landmark", "landscape", "language", "laser", "laughter", "laundry", "lawmaker", "lawsuit", "leader", "leather", "lecture", "legislation", "legitimate", "lemon", "length", "level", "liberal", "liberty", "license", "lifestyle", "lifetime", "light", "limit", "limitation", "lion", "listen", "literature", "little", "load", "local", "lonely", "loss", "loud", "love", "loyalty", "luck", "machine", "madness", "magic", "mail", "mailman", "mainstream", "maintenance", "major", "majority", "male", "management", "mandate", "manner", "many", "margin", "market", "marriage", "mass", "match", "material", "mathematics", "matter", "maximum", "meadow", "meaning", "meanwhile", "measurement", "mechanism", "medal", "medication", "medicine", "melon", "member", "meme", "merely", "message", "metaphor", "metrics", "middle", "midnight", "military", "minimal", "minister", "minor", "minority", "missile", "mistake", "modern", "modest", "moment", "money", "monitor", "monkey", "monument", "mood", "morning", "mortgage", "mother", "motion", "motorway", "mountain", "mouth", "movement", "multiple", "murder", "museum", "music", "musician", "mutual", "mystery", "naked", "name", "narrow", "nation", "national", "nature", "necessity", "needle", "neither", "nephew", "nervous", "network", "nevertheless", "newspaper", "night", "nightmare", "noise", "normal", "nose", "notebook", "nothing", "notion", "novel", "now", "nuclear", "number", "nurse", "observation", "obstacle", "offensive", "office", "official", "often", "online", "only", "operation", "opinion", "opposition", "optimistic", "orange", "organism", "organization", "original", "other", "outcome", "outdoor", "outfit", "outstanding", "owner", "oxygen", "package", "painting", "palace", "panel", "panic", "paper", "parade", "parent", "parking", "partial", "participant", "particle", "partner", "party", "passage", "passenger", "patch", "patience", "pattern", "payment", "peanut", "penalty", "people", "perceive", "percentage", "perception", "perfect", "performance", "permanent", "permission", "personal", "personnel", "phenomenon", "philosophy", "phoenix", "photograph", "phrase", "physician", "physics", "piano", "picture", "pig", "pillow", "pioneer", "pitch", "pizza", "plain", "plant", "plastic", "platform", "player", "pleasant", "pleasure", "poetry", "point", "police", "politician", "politics", "popularity", "population", "portion", "portrait", "position", "possession", "possibility", "potato", "potential", "pound", "poverty", "powder", "practice", "praise", "precious", "preference", "pregnancy", "preparation", "prescription", "president", "press", "pressure", "prevent", "previous", "price", "primary", "print", "priority", "prisoner", "probably", "proceed", "producer", "production", "profession", "professor", "profound", "program", "promise", "promotion", "proper", "propose", "prosecutor", "protest", "proud", "provide", "provision", "psychology", "public", "publication", "publicity", "publisher", "pumpkin", "punishment", "purchase", "purple", "purpose", "pursuit", "push", "qualify", "quality", "quarter", "question", "quick", "quiet", "quote", "rabbit", "radio", "rain", "random", "rather", "rational", "reaction", "ready", "reality", "reason", "receive", "reception", "recipient", "recognition", "recommendation", "record", "recovery", "red", "reduce", "reference", "reflection", "refrigerator", "refugee", "regardless", "regime", "regulation", "rehabilitation", "relationship", "relative", "relax", "relief", "religion", "reluctant", "remain", "remark", "remind", "remove", "repair", "replacement", "report", "representation", "reputation", "request", "requirement", "rescue", "reservation", "resident", "resign", "resist", "resolution", "resource", "respect", "restaurant", "result", "retirement", "retreat", "revelation", "revolution", "rhythm", "ridiculous", "ritual", "road", "rock", "rocket", "role", "romance", "rose", "routine", "royal", "sacrifice", "safety", "salmon", "sample", "sandwich", "satisfaction", "sauce", "scale", "scandal", "scenario", "schedule", "scholarship", "science", "scientific", "scratch", "screen", "sculpture", "search", "seat", "section", "security", "segment", "seldom", "selection", "sensation", "sentence", "separation", "sequence", "serious", "severe", "shallow", "shareholder", "sharp", "sheet", "shift", "shower", "sidewalk", "significance", "silence", "similar", "sister", "situation", "skill", "skin", "slavery", "sleep", "slide", "smart", "smile", "soap", "soccer", "soften", "software", "soil", "soldier", "solution", "something", "song", "sound", "source", "special", "spectrum", "speculation", "speed", "spirit", "sponsor", "spoon", "sports", "spring", "square", "squeeze", "stability", "standard", "start", "statement", "statistical", "statue", "steel", "stereotype", "stomach", "stone", "stranger", "strategy", "stream", "strength", "stress", "stretch", "strong", "structure", "student", "subject", "subsequent", "substance", "subtle", "success", "sudden", "sugar", "summary", "summer", "sunlight", "supermarket", "surprise", "surveillance", "survey", "survival", "suspicious", "sweat", "sweater", "sweet", "switch", "sword", "symbol", "sympathy", "syndrome", "table", "talent", "talk", "target", "tea", "teacher", "technician", "technology", "teenager", "telephone", "telescope", "television", "temperature", "tendency", "tennis", "terrain", "territory", "testimony", "theater", "theme", "therapy", "thousand", "threat", "threshold", "throat", "timber", "together", "tolerance", "tomorrow", "tongue", "tooth", "total", "tourist", "tower", "trade", "tradition", "trailer", "train", "transaction", "transformation", "translation", "transport", "travel", "tremendous", "trial", "trim", "triumph", "truck", "trust", "ultimate", "understand", "uniform", "unity", "unusual", "update", "utility", "vacation", "value", "variation", "version", "village", "violation", "virtual", "visitor", "vitamin", "voice", "volume", "vulnerable", "wait", "warehouse", "warmth", "warning", "warrior", "watch", "weakness", "wealth", "weapon", "weather", "weekend", "welcome", "whatever", "wheelchair", "whisper", "wildlife", "window", "winter", "wisdom", "without", "wonder", "workplace", "workshop", "world", "worldwide", "worth", "xylophone", "yard", "year", "yellow", "yesterday", "youngster", "youth", "zone"];


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
            $("#help_button").show();

            if ( $("#game_over").is(":visible") ) {
                $("#game_over").delay(250).hide("slide", {direction: "up"}, 350);
                $("#title").show("slide", {direction: "down"}, 600);
            } else if ( $("#alright").is(":visible") ) {
                $("#alright").delay(250).hide("slide", {direction: "up"}, 350);
                $("#title").show("slide", {direction: "down"}, 600);
            } else {
                $("#title").show();
                $("#game_over").hide();
                $("#alright").hide();
            }

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
            $(".tree_girl_message").hide();
            $(".state0").show();

            /* reset top color gradient */
            $("#container1_overlay").animate({opacity: 0}, 1000);
            $("#container1_overlay2").animate({opacity: 0}, 1000);

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
                $previous_bg = ".state" + $image_state;
                $image_state++;
                $current_bg = ".state" + $image_state;
                $($previous_bg).fadeOut(1200);
                $($current_bg).fadeIn(800);
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
            $("#help_button").hide();
            /*console.log($screenArray);*/
            /*console.log($attempts);*/
            placeScreenArray();
            $unfoundLetterCount = unfoundLetterCount($screenArray);
            $totalLetterCount = totalLetterCount($randomWord);
            /*console.log($unfoundLetterCount);*/
            /*console.log($totalLetterCount);*/


            if($attempts != 0 && $unfoundLetterCount != 0 && $unfoundLetterCount != $totalLetterCount) {
                // indien meteen juiste letters worden geselecteerd, verdwijnt de initiële boodschap

            } else if($unfoundLetterCount == 0) {
                // spel gedaan en gewonnen! (toon alles in groen en alfabet knoppen worden onbruikbaar)
                $(".letter").addClass("used");
                $("#btn1").addClass("highlight");
                $("#title").delay(250).hide("slide", {direction: "up"}, 350);
                $("#alright").show("slide", {direction: "down"}, 600);
                $("#container1_overlay2").animate({opacity: 1}, 2000);

            } else if($attempts == 0) {
                // spel gedaan en verloren! (toon niet gevonden letters in rood en alfabet knoppen worden onbruikbaar)
                $(".letter").addClass("used");
                fillInTheBlanks($screenArray);
                placeScreenArray();
                $("#btn1").addClass("highlight");
                $("#title").delay(250).hide("slide", {direction: "up"}, 350);
                $("#game_over").show("slide", {direction: "down"}, 600);
                $("#container1_overlay").animate({opacity: 1}, 2000);
            }
        }
    });

    /* klik op new word button */
    $("#container1").click( function(e) {
        if (e.target.id == "btn1") {
            e.preventDefault();
             initAll();
        } else {
        }
    });

    /* Help section toggle */
    $("#help_button").click( function() {
        $("#help_section_outer").css("display", "flex");
    });

    $("#help_section_outer").click( function() {
        $("#help_section_outer").css("display", "none");
    });

    /* intro screen */
    window.setTimeout(function(){$(".txt1").addClass("appear");}, 500);
    window.setTimeout(function(){$(".txt2").addClass("appear");}, 1500);
    window.setTimeout(function(){$(".txt3").addClass("appear");}, 3000);
    window.setTimeout(function(){$(".txt4").addClass("appear");}, 4000);
    window.setTimeout(function(){$("#intro_text").css("background-color", "transparent");}, 5000);
    $("#intro_image").delay(7000).hide("fade", 2000);
    $("#intro_outer").delay(9000).hide("fade", 1000);
    $("#intro_text").delay(7000).hide("fade", 1000);


});