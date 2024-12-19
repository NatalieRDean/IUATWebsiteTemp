/* Text content in different languages */
var homeTextEN = `
    <p>
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

var homeTextFR = `
    <p>
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

function loadDefaultHomeText(){
    $('.homeText').html(homeTextEN);
}

function loadTranslations(){

    //Operations for when language is changed to english.
    $('.ENButton').click(function (e) {
        if($('.langButton').text()=="EN") return; //Do nothing if the page is already in english.
        $('.langButton').text("EN");
        $('#homeButton').text("Home");
        $('#aboutButton').text("About");
        $('#eventsButton').text("Events");
        $('.homeText').html(homeTextEN);
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
        $('.homeText').html(homeTextFR);
        $('#linksHeading').text("Liens Rapides");
        $('#contactHeading').text("Contactez-Nous");
    });
}