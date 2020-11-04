// ici on a besoin d'utiliser la fonction getAverageNumber 
// du module utils, donc on le require
const utils = require('./utils');

const fourchette = {
    minBoundary: 1,
    maxBoundary: 100,
    // optionnel
    // proposition: null,
    getProposition: () => {
        fourchette.proposition = utils.getAverageNumber(fourchette.minBoundary, fourchette.maxBoundary);
        return fourchette.proposition;
    },
    less: () => {
        // méthode qui se charge de stocker la proposition courante
        // dans la propriété maxBoundary
        fourchette.maxBoundary = fourchette.proposition;
    },
    more: () => {
        // méthode qui se charge de stocker la proposition courante
        // dans la propriété minBoundary
        fourchette.minBoundary = fourchette.proposition;
    }
};

// bien penser à exporter le module pour le rendre disponible
module.exports = fourchette;