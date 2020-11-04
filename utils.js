// on prépare un objet dans lequel on va mettre tout ce qu'on veut (ce qui sera probablement utile pour d'autres docs) et le transformer en module

// VOIR COURS E01 ==> exemples de ce qu'on doit faire

// on prépare un objet qui comportera les propriétés et les méthodes qu'on souhaite
// rendre disponible
const utils = {
    /**
     * génère un nombre alétoire entre le min et le max
     * @param {number} min 
     * @param {number} max 
     */
    getRandomNumber: (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min),
    /**
     * trouve le nombre moyen entre le min et le max
     * @param {number} min 
     * @param {number} max 
     */
    getAverageNumber: (min, max) => Math.floor((min + max) / 2),
};







// une fois qu'il est prêt on l'exporte
// on exporte en module l'objet utils qu'on récupérera dans le document nécessaire par const utils = require('...cheminRelatif/utilsFichier')
module.exports = utils; 