$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "C'est plus !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Juste ce qu'il faut !";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "C'est moins !";
    }
}

$bouton.onclick = verifier;
