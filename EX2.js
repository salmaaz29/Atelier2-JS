// 1er objt native Etudiant 
let Etudiant = {
    nom : "youness",
    prenom : "azhich",
    age : 21,
    cne : "A138012343",
    // étudier()  a l’objet  Etudiant,
    etudier : function(){
        console.log(`${this.nom} ${this.prenom} est en train d'étudier.`);
    }
};

// 2eme objt native Professeur
let Professeur = {
    nom : "Mohammed",
    age : 45,
    cin : "AS23456",
// méthode enseigner() a l’objet Professeur.
    enseigner : function(){
        console.log(`${this.nom} est en train d'enseigner.`);
    }
};

// creer une liste des etudiants 
let ListeEtudiants = [
            {nom : "mohammed", prenom : "azhich", age : 19, cne : "A138012865"},
            {nom : "khalid", prenom : "amrani", age : 20, cne : "S345801234"},
            {nom : "sara", prenom : "nasiri", age : 21, cne : "B984012345"},
            {nom : "mohammed", prenom : "rahmouni", age : 22, cne : "C123456789"}
];
// affichage de la liste avant le tri : 
console.log("Affichage avant le tri :");

for (let i=0; i<ListeEtudiants.length; i++) {
    console.log(`nom : ${ListeEtudiants[i].nom}
        prenom : ${ListeEtudiants[i].prenom}
        age : ${ListeEtudiants[i].age}
        cne : ${ListeEtudiants[i].cne}`);
    console.log("**********************************");

}
// on fait le tri dabord selon le nom et si ils ont meme nom on passe au prenom 
ListeEtudiants.sort((etud1, etud2)=> {
    if(etud1.nom === etud2.nom){
        return etud1.prenom.localeCompare(etud2.prenom);
    }
    return etud1.nom.localeCompare(etud2.nom);
});
// affichage apres le tri :
console.log("Affichage apres le tri :");

for (let i=0; i<ListeEtudiants.length; i++) {
    console.log(`nom : ${ListeEtudiants[i].nom}
        prenom : ${ListeEtudiants[i].prenom}
        age : ${ListeEtudiants[i].age}
        cne : ${ListeEtudiants[i].cne}`);
    console.log("**********************************");

}
// Etudiant.etudier();
// Professeur.enseigner();
