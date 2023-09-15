// Génération d'un nombre aléatoire entre 1 et 100
var nombreAleatoire = Math.floor(Math.random() * 100) + 1;


// Initialisation du compteur de tentatives
var tentatives = 0;


// Fonction pour vérifier la devinette de l'utilisateur
function verifierDevine() {
    // Récupération de la valeur saisie par l'utilisateur
    var devine = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));


    // Vérification si la valeur est un nombre valide
    if (isNaN(devine)) {
        alert("Veuillez entrer un nombre valide.");
    } else {
        // Incrémentation du compteur de tentatives
        tentatives++;


        // Vérification de la devinette
        if (devine === nombreAleatoire) {
            alert("Bravo ! Vous avez deviné le nombre en " + tentatives + " tentatives.");
        } else if (devine < nombreAleatoire) {
            alert("Le nombre est plus grand. Essayez encore.");
        } else {
            alert("Le nombre est plus petit. Essayez encore.");
        }
    }
}


// Appel de la fonction pour commencer le jeu
verifierDevine();