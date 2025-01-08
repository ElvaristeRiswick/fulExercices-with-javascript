let jusu = 100;
let jean = 10;
let uion = jusu + jean;
//console.log(uion);

//exercice 1
let prixProduit = 200;
let rabais = 40;
let tax = 12;
let prixFnal = rabais - tax;
// le prix final du produit est
//console.log(prixProduit - prixFnal);

// exercice 2
let acheter = 100;
let suplementeire = 30;
let resulta = acheter + suplementeire;
// le prix de vent du produit est
//console.log(100 + 30);

// exercices trois

let budget = 250;
let remise = 50;
prixProduit = 300;
pixRduit = 250;
let peutAchter = true;

let bidgetTotal = budget >= pixRduit || peutAchter;
//Sconsole.log("Est ce dans le limide de sont  bidget" + "  " + bidgetTotal);

// exercice array 2

let produit = ["orange", "banana", "ananas"];
//console.log(produit[1]);
produit[3] = "noteBooks";
//console.log(produit);

let client = ["Elvariste", "Riswick", "Richecorv"];
client[4] = "webster";
//console.log(client);
delete client[4];
//console.log(client);

// exercice 3

let produits = {
  nom: "laptup",
  prix: 200,
  quantite: 10,
};

//console.log(produits.nom);
produits.prix = 120;
//console.log(produits);

// exercice 4
let vent = {
  client: "Elvariste",
  produit: "crema",
  valeur: 200,
};

//console.log(vent);
vent.popriete = "marque";
delete vent.produit;
//console.log(vent);

// exercice 5

let stock = [12, 34, 65, 78, 66];
//let newStock = stock;
let newStock = [...stock];
newStock[0] = 90;
//console.log(newStock);
//console.log(stock);

let employer = {
  travail: "technologie",
  lheure: "2h",
  salaire: "us  888  ",
};

//let nouvelEmployer = employer;
let nouvelEmployer = { ...employer };
nouvelEmployer.salaire = "10000 Euro";
console.log(nouvelEmployer);
//console.log(employer);
