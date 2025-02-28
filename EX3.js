// class vecteur 2D
class Vecteur2D{
    constructor(x=0, y=0){
        this.x = x; 
        this.y = y;
    }

    Afficher() {
        console.log("Les coordonnees de ce vecteur sont : x = " + this.x + "et y = " + this.y);
    }

   Addition(vect){
    let x = this.x + vect.x;
    let y = this.y + vect.y;
    return new Vecteur2D(x,y);
   }
}

let vect1 = new Vecteur2D();
let vect2 = new Vecteur2D(1,3);
let vect3 = new Vecteur2D(2,4);
vect1.Afficher();
vect2.Afficher();
vect3.Afficher();
console.log("Addition de vect2 et vect3 :");
let vect4 = vect3.Addition(vect2);
vect4.Afficher();

// class rectangle 

class Rectangle{
    constructor(l=0, L=0, attribut="rectangle"){
        this.l =l;
        this.L =L;
        this.attribut = attribut;
    }
    Afficher(){
        console.log("Les dimensions de ce rectangle sont : longueur = " + this.l + " et largeur = " + this.L);
    }
    Surface(){
        return (this.l * this.L);
    }
}

let rect1 = new Rectangle();
let rect2 = new Rectangle(3,4);
rect2.Afficher();
console.log("La surface de ce rectangle est : " + rect2.Surface());

//class carre herite de rectangle 

class Carre extends Rectangle{
    constructor(cote=0, attribut="carre"){
        super(cote, cote, attribut);
    }
}

let carre1 = new Carre();
let carre2 = new Carre(5);
carre2.Afficher();
console.log("La surface de ce carre est : " + carre2.Surface());

// class point 
class Point {
    constructor(x=0.0, y=0.0){
        this.x = x;
        this.y = y;
    }
}
 
// class segment

class Segment {
    constructor(x1, x2, y1, y2){
        this.orig = new Point(x1, x2);
        this.extrem = new Point(y1, y2);    
    }
    Afficher(){
        console.log("Les coordonnees de ce segment sont : origine : x = " + this.orig.x + " et y = " + this.orig.y + " et extremite : x = " + this.extrem.x + " et y = " + this.extrem.y);
    }
}
    let seg1 = new Segment(1,2,3,4);
    seg1.Afficher();