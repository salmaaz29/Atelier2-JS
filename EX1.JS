let Voiture = function(model, marque, annee, type, carburant){
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}
Voiture.prototype.Afficher = function(){
    console.log(`les infos de cette voiture : model :${this.model}
                                              marque :${this.marque}
                                              annee : ${this.annee}
                                              type : ${this.type}
                                              carburant : ${this.carburant}`);
}

// la classe Hyndai
let Hyndai = function(model, marque, annee, type, carburant, série, hybride ){
    Voiture.call(this,model, marque, annee, type, carburant);
    this.série = série;
    this.hybride = hybride;
}
Hyndai.prototype = Object.create(Voiture.prototype);
Hyndai.prototype.constructor = Hyndai;
Hyndai.prototype.Alarmer = function(){
    console.log("Alarme activee");
}

// la classe Ford 
let Ford = function(model, marque, annee, type, carburant,options){
    Voiture.call(this,model,marque,annee,type,carburant);
    this.options = [];
}
Ford.prototype = Object.create(Voiture.prototype);
Ford.constructor = Ford;
Ford.prototype.Afficher = function(){
    Voiture.prototype.Afficher.call(this);
    console.log(`les options de cette voiture sont : ${this.options}`);
}

// liste des voitures 
let ListeVoitures = [ new Voiture("A3", "Audi", 2019, "Sedan", "Diesel"),
    new Voiture("A4", "Audi", 2018, "Sedan", "Essence"),
    new Voiture("A5", "Audi", 2017, "Sedan", "Diesel"),
    new Voiture("Clio", "Renault", 2024, "SUV", "Electrique")];
// affichage avant le tri 
console.log("Affichage avant le tri :");
for (let i=0; i<ListeVoitures.length; i++) {
    ListeVoitures[i].Afficher();
    console.log("**********************************");
}

// tri des voiture selon l'annee :
 ListeVoitures.sort((voit1, voit2)=> voit1.annee - voit2.annee);

// affichage apres le tri 
console.log("Affichage apres le tri :");
for (let i=0; i<ListeVoitures.length; i++) {
    ListeVoitures[i].Afficher();
    console.log("**********************************");
}
