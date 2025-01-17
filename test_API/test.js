var monBouton = document.getElementById = ("leBouton");

function envoyerUntruc() {
    let valeurDeMonChamp = document.getElementById = ("leNom");
    fetch(" la ROUTE ",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ "nom": valeurDeMonChamp })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

monBouton; addEventListener("click", envoyerUntruc);


var maDiv = document.getElementById("listeMed");

fetch('http://192.168.65.179:8080/Route1', {
    header: {
        Accept: 'application/json'
    }
}).then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw new Error('Erreur serveur', { cause: response })
    }
}).then(result => {
    console.log('La liste des articles : ', result)
    maDiv.innerHTML = JSON.stringify(result);
}).catch(error => {
    console.error('Une erreur est survenue', error)
});