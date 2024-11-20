// Fonction qui vérifie la largeur de la fenêtre
function checkWindowSize() {
    if (window.innerWidth < 600) {
        alert('La largeur de la fenêtre est inférieure à 300px !');
    }
}
// Ajout d'un écouteur d'événement pour détecter les redimensionnements
window.addEventListener('resize', checkWindowSize);
// Vérifie immédiatement si la fenêtre est déjà inférieure à 300px
checkWindowSize();