// ## Exo1

// ### Créer une class Objet
// ### _Propriétés : nom, prix

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

class Objet {
    constructor(nom, prix) {
        this.nom = nom,
        this.prix = prix
    }
}

let table = new Objet ("table", 15);
let chaise = new Objet ("chaise", 10);

let tab = [table, chaise];

class Personnage extends Objet {
    constructor (nom, sac, argent, prix) {
        super(prix),
        this.nom = nom,
        this.sac = sac,
        this.argent = argent
    }
    prendre(objet) {
        this.sac.push(objet);
        tab.splice(tab.indexOf(objet), 1)
    }
    acheter(vendeur,objet) {
        console.log(objet);
        if (this.argent >= vendeur.sac[vendeur.sac.indexOf(table)].prix) {
            console.log(objet.prix);
            this.sac.push(objet);
            vendeur.sac.splice(tab.indexOf(objet), 1);
        }
    }
}

let jeanPaul = new Personnage("Jean-Paul", [], 20);
let jeanne = new Personnage("Jeanne", [], 10);

jeanne.prendre(table);
jeanPaul.prendre(chaise);
jeanPaul.acheter(jeanne, table);
