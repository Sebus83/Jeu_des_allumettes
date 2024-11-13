let totalAllumette = 50;
let resteAllumette = totalAllumette;
let tableauJoueur = [];

function nbreDeJoueur() {
  let nbJoueur = parseInt(prompt("Combien de joueurs êtes-vous ?"));
  for (let i = 0; i < nbJoueur; i++) {
    let nomDujoueur = prompt(`Nom du joueur ${i + 1}`);
    tableauJoueur.push(nomDujoueur);
  }
  return tableauJoueur;
}

function enleverAllumette(nbAllumettes) {
  resteAllumette -= nbAllumettes;
  alert(`Il reste ${resteAllumette} allumettes.`);
  if (resteAllumette <= 0) {
    alert("Bravo, vous avez ramassé la dernière allumette, vous avez mis le feu !!!");
  } 
  // else {
   
  //   tourJoueur(tableauJoueur, resteAllumette);
  // }
}

function tourJoueur(tableauJoueur, resteAllumette) {
  let joueurActuel = 0;
  while (resteAllumette > 0) {
    console.log("toto")
    let nomDujoueur = tableauJoueur[joueurActuel];
    let nbAllumettes = parseInt(prompt(`${nomDujoueur}, Combien d'allumettes souhaitez-vous retirer entre 1 et 6 ?`));
    
    if (nbAllumettes < 1 || nbAllumettes > 6 || nbAllumettes > resteAllumette) {
      nbAllumettes = parseInt(prompt(`${nomDujoueur}, merci de saisir une valeur comprise entre 1 et 6 ?`));
    }
  
    joueurActuel = (joueurActuel + 1) % tableauJoueur.length;
    enleverAllumette(nbAllumettes);
    
  }
}

tourJoueur(nbreDeJoueur(), resteAllumette);