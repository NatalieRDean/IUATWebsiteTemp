/* Text content in different languages */
var homeAboutTextEN = `
    <p class="homeAboutIntroText">
        Learn About IUAT and Its Format
    </p>`;

var homeAboutTextFR = `
    <p class="homeAboutIntroText">
        Learn About IUAT and Its Format (Translate to french)
    </p>`;

var aboutTextEN = `
    <p class="aboutIntroText">
        Re-established in 2023, the Inter University Archery Tournament (IUAT) serves as the only national tournament 
        for Canadian postsecondary archery clubs. Previously, postsecondary archery clubs did not have a space to connect 
        and compete with other schools in an organised setting. IUAT aims to fill this gap. As of 2025, there are ten 
        participating schools. 
        <br>
        <br>
        It is organised by students, for students. 
        <br>
        <br>
        Participating schools may either mail in scores or send archers to the tournament space. They are able to compete 
        in one of five categories: Olympic, Novice, Barebow, Compound, or Traditional. IUAT is an inclusive tournament, 
        offering divisions for male, female, and open competitors. As well, accommodations are offered for para-archers 
        wishing to participate. For any inquiries on how your club can get involved, please refer to our "Get Involved" section.
    </p>`;

var aboutTextFR = `
    <p class="aboutIntroText">
        Rétabli en 2023, l'Inter University Archery Tournament (IUAT) servit comme le seul tournoi national pour les clubs de
        tir à l'arc postsecondaires canadiens. Précédemment, les clubs de tir à l'arc postsecondaires n'avaient pas d'espace
        pour se connecter et se concurrencer avec les autres écoles dans un lieu organisé. IUAT aspire à combler cette lacune.
        A partir de 2025, il y a dix écoles participantes. 
        <br>
        <br>
        Il est organisé par des étudiants, pour des étudiants.
        <br>
        <br>
        Les écoles participantes peuvent envoyer leurs scores ou envoyer des archers sur le site du tournoi. Ils peuvent concourir
        dans l'une des cinq catégories suivantes: classique, novice, barebow, poulies, ou traditionnel. L'IUAT est un tournoi inclusif,
        avec des divisions pour les hommes, les femmes, et l'ouvert. En plus, des hébergements sont proposés pour les para-archers
        souhaitant participer. Pour toute question sur la manière dont votre club peut s'impliquer, veuillez consulter notre section
        "S'engager"
    </p>`;

var eventsTextEN = `
    <p class="IUAT2025IntroText">
        The winter 2025 IUAT will be taking place on _. It is being hosted by York University's Lions Archery Club and will take place in the _.
        <br><br>Add more info about this year's IUAT.
    </p>`;

var eventsTextFR = `
    <p class="IUAT2025IntroText">
        Add FR translations.
    </p>`;

var eventsItineraryEN = `
    <div id="itineraryTable-1" class="itineraryTable">
        <p id="homeHeading2-1" class="homeHeading2">Flight 1: Olympic</p>
        <table class="tableItinerary">
            <tr class="tableItinerary">
                <th class="thTime">9:00am:</th>
                <th class="thEvent">Doors open, Setup</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">9:30am:</th>
                <th class="thEvent">Rules, Welcome, 3 Warmup rounds</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">10:00am:</th>
                <th class="thEvent">Scoring starts</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">11:30am:</th>
                <th class="thEvent">Scoring ends, Food</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">12:15pm:</th>
                <th class="thEvent">Announce winners</th>
            </tr>
        </table>
    </div>
    <div id="itineraryTable-2" class="itineraryTable">
        <p id="homeHeading2-2" class="homeHeading2">Flight 2: Novice</p>
        <table class="tableItinerary">
            <tr class="tableItinerary">
                <th class="thTime">12:00pm:</th>
                <th class="thEvent">Doors open, Setup</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">12:30pm:</th>
                <th class="thEvent">Rules, Welcome, 3 Warmup rounds</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">1:00pm:</th>
                <th class="thEvent">Scoring starts (10 minute break at end 5)</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">2:40pm:</th>
                <th class="thEvent">Scoring ends, Food</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">3:25pm:</th>
                <th class="thEvent">Announce winners</th>
            </tr>
        </table>
    </div>
    <div id="itineraryTable-3" class="itineraryTable">
        <p id="homeHeading2-3" class="homeHeading2">Flight 3: Compound, Traditional, Barebow</p>
        <table class="tableItinerary">
            <tr class="tableItinerary">
                <th class="thTime">3:10pm:</th>
                <th class="thEvent">Doors open, Setup</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">3:40pm:</th>
                <th class="thEvent">Rules, Welcome, 3 Warmup rounds</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">4:10pm:</th>
                <th class="thEvent">Scoring starts</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">5:40pm:</th>
                <th class="thEvent">Scoring ends, Food</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">6:25pm:</th>
                <th class="thEvent">Announce winners, Begin clean up</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">6:30pm:</th>
                <th class="thEvent">Team pictures/media</th>
            </tr>
            <tr class="tableItinerary">
                <th class="thTime">8:00pm:</th>
                <th class="thEvent">Finish clean up, Leave gym</th>
            </tr>
        </table>
    </div>`;

var eventsItineraryFR = `<p>Add translations.</p>`;


const loadDefaultPageText = {
    "IUAT": () => {
        $('.homeAboutText').html(homeAboutTextEN);     
    },
    "about": () => {
        $('.aboutText').html(aboutTextEN);
    },
    "events": () => {
        $('.eventsText').html(eventsTextEN);
        $('.itineraryTables').html(eventsItineraryEN);
    }
};

function loadDefaultText(){
    const page = window.location.pathname.split('/').filter(Boolean).pop();
    loadDefaultPageText[page]();
}


//Page specific english translation operations.
const translatePageEN = {
    "IUAT": () => {
      $('.homeText').html(homeAboutTextEN);      
    },
    "about": () => {
        $('.aboutTitle').text("About")
        $('.aboutHeading1').text("What is IUAT?");
        $('.aboutText').html(aboutTextEN);
    },
    "events": () => {
        $('.itineraryTables').html(eventsItineraryEN);
    }
};

//Page specific french translation operations.
const translatePageFR = {
    "IUAT": () => {
      $('.homeText').html(homeAboutTextFR);
    },
    "about": () => {
        $('.aboutTitle').text("À Propos")
        $('.aboutHeading1').text("Qu'est-ce que l'IUAT?");
        $('.aboutText').html(aboutTextFR);
    },
    "events": () => {
        $('.itineraryTables').html(eventsItineraryFR);
    }
};

function loadTranslations(){
    const page = window.location.pathname.split('/').filter(Boolean).pop();

    //Operations for when language is changed to english.
    $('.ENButton').click(function (e) {
        if($('.langButton').text()=="EN") return; //Do nothing if the page is already in english.
        $('.langButton').text("EN");
        $('#homeButton').text("Home");
        $('#aboutButton').text("About");
        $('#eventsButton').text("Events");
        $('#galleryButton').text("Gallery");
        translatePageEN[page](); //Page specific translation operations.        
        $('#linksHeading').text("Quick Links");
        $('#contactHeading').text("Contact Us");
    });

    //Operations for when language is changed to french.
    $('.FRButton').click(function (e) {
        if($('.langButton').text()=="FR") return; //Do nothing if the page is already in french.
        $('.langButton').text("FR");
        $('#homeButton').text("Accueil");
        $('#aboutButton').text("À Propos");
        $('#eventsButton').text("Événements");
        $('#galleryButton').text("Galerie");
        translatePageFR[page](); //Page specific translation operations. 
        $('#linksHeading').text("Liens Rapides");
        $('#contactHeading').text("Contactez-Nous");
    });
}