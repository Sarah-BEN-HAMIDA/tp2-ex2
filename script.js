// function afficherMessage() {
//   alert("vous avez clicque sur le button 1");
// }
// function afficherMessage() {
//   alert("vous avez quitter sur le button 2");
// }
function gereEvenemnet(valeur) {
  switch (valeur) {
    case 1:
      alert("vous avez clicque sur le button 1");
      break;
    case 2:
      alert("vous avez clicque sur le button 2");
      break;
    default:
      console.log("action non reconnue");
      break;
  }
}
