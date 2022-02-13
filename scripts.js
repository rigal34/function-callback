const tableau1 = [1,2,3];// tableau1 contient [1,2,3]
//console.log(tableau1);

//je créer une fonction classique
//cette fonction sert à prendre un tableau et effectuer des action dessus avec des action callback
//et de retourner un nouveau tableau avec les nouvelles valeurs '"""'c'est de la méthode map"""
//************************************************************************************************* */

//C'EST LA MEME METHODE QUE LA METHODE MAP

//tableau == contient array(3) [ 1, 2, 3 ]
//monCallback == contient "fonction bruno"
function maFunction(tableau,monCallback){
 
    const nouveauTableau = [];//contient les valeur multiplier par 2
//console.log(monCallback);

//ON APPEL monCallback(.1.)

    for (i = 0; i < tableau.length; i++){
        nouveauTableau.push(monCallback(tableau[i]))
        //console.log(monCallback);
    }


    return nouveauTableau;
}

//*************************************************************************************************** */



//ON DEFINIT NOTRE FONCTION (.2.)pour retourner à chaque fois 'bruno X 2'

//const resultat = maFunction(tableau1, (bruno) => {

//return bruno * 2 ;
//});

//console.log(resultat);//affiche: Array(3) [ 2, 4, 6 ]


//VERSION SIMPLIFIE
//tableau1 contient  Array(3) [ 1, 2, 3 ]


const resultat = maFunction(tableau1, bruno => bruno * 2);

//console.log(resultat);//Array(3) [ 2, 4, 6 ]

///****************************************************************************** */

//JE FAIS UN MAP

console.log(
    tableau1.map(bruno => bruno * 2)//Array(3) [ 2, 4, 6 ]
);

/******************************************************************************** */



//setTimeout et aussi une fonction de rappelle
//je peux appeller quelque chose au bout d'une seconde 4 seconde etc....
setTimeout(() => {
    console.log("hello timeout");
}, 4000);

/************************************************************************************* */


//Dés que je déclenche l'évvènement click j'envoie cette fonction de rappel 
window.addEventListener("click", () => {
console.log("window click");
})