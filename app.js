// rapatrier le module qui va nous servir pour poser notre question

// require vient nous aider a ramener une brique de logique, un bout de code, 
// qui sera dans un autre fichier, généralement ce qu'on récupère
// sera un objet
const readline = require('readline');

// raptrier le module OS pour utiliser ensuite la méthode EOL
const os = require('os');

// avec un module custom, il faut préciser le chemin relatif
// pas besoin de préciser le .js à la fin du nom du fichier
const fourchette = require('./fourchette');

// à la place de notre ancienne fonction, on vient utiliser
// la méthode getAverageNumber de notre module custom utils
// let proposition = fourchette.getProposition();

// on prépare l'interface qui va gérer les flux d'entrée et de sortie côté terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// on crée une fonction pour poser la question à l'utilisateur
const ask = () => {
    // on pose la première question à l'utilisateur
    rl.question(`Est-ce que c'est ${fourchette.getProposition()} ?${os.EOL}`, (answer) => {

        // en fonction de la réponse
        switch (answer) {
            // on aura différents cas
            case 'moins':
            case '-':
                fourchette.less();
                break;
            case 'plus':
            case '+':
                fourchette.more();
                break;
            default:
                console.log('Gagné');
                // on n'oublie pas de sortir du process quand on a fini, pour reprendre la main
                // sur le terminal
                process.exit();
        }

        // on vient générer une nouvelle proposition avec les nouvelles limites
        // proposition = fourchette.getProposition();

        console.log('nouvelle proposition', fourchette.getProposition());
        // une fois qu'on a une nouvelle proposition
        // on relance la fonction qui pose la question
        // => recursivité
        ask();
    });
}

ask();
