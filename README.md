# 🚗 EX1 :  Voitures en JavaScript
## Les fonctionnalités :
- Définir deux sous-classes : Hyndai et Ford, qui héritent de Voiture.
- Utiliser prototype pour ajouter des méthodes.
- Tri d'une liste de voitures selon l'année de fabrication.
  
#  Explication du Code 
1) Classe Voiture:
Cette classe définit une voiture avec les propriétés suivantes :
- model : Modèle du véhicule.
- marque : Marque de la voiture.
- annee : Année de fabrication.
- type : Type du véhicule (SUV, Sedan...).
- carburant : Type de carburant (Diesel, Essence...).
  Elle possède une méthode :
- Afficher() : Affiche les informations du voiture dans la console.

2) Classe Hyndai :
Ajoute deux nouvelles propriétés :
- série : Série du modèle.
- hybride : Indique si la voiture est hybride.

Ajoute une méthode :
- Alarmer() : Active une alarme.

3)  Classe Ford :
Ajoute une propriété :
- options : Liste des options disponibles.
  
Redéfinit la méthode Afficher() pour afficher les options aussi.

 Liste et Tri des Voitures
- Une liste ListeVoitures est créée avec plusieurs voitures.
- Affichage des voitures avant et après un tri par année croissante.


  # 🎓 EX2 : Etudiants + Professeurs
  ## Les fonctionnalités :
- Définition d'un objet Etudiant.
- Définition d'un objet Professeur.
- Création d'une liste d'étudiants et affichage avant/après tri.
- Tri des étudiants par nom, et en cas d’égalité, par prénom.
  
#  Explication du Code 
1) Objet Etudiant:
Cet objet représente un étudiant avec les propriétés suivantes  :
nom : Nom de l’étudiant.
prenom : Prénom de l’étudiant.
age : Âge de l’étudiant.
cne : Code national étudiant.

Méthode associée :
etudier() : Affiche un message indiquant que l’étudiant est en train d’étudier.

2) Objet Professeur :
Cet objet représente un professeur avec les propriétés suivantes  :
nom : Nom du professeur.
age : Âge du professeur.
cin : Carte d'identité nationale du professeur.

Méthode associée :
enseigner() : Affiche un message indiquant que le professeur est en train d’enseigner.

3) Liste et Tri des Étudiants :
- Une liste ListeEtudiants est créée contenant plusieurs étudiants.
- Un premier affichage est réalisé avant le tri.
- Un tri est effectué d’abord sur le nom, puis sur le prénom si les noms sont identiques.
- Un second affichage est réalisé après le tri.

  # 📐EX3 : Vecteurs, Rectangles et Segments
## Les fonctionnalités :
-Classe Vecteur2D : Représente un vecteur en 2D avec addition de vecteurs.
-Classe Rectangle : Définit un rectangle avec calcul de surface.
-Classe Carre : Hérite de Rectangle pour représenter un carré.
-Classe Point : Représente un point dans un plan.
-Classe Segment : Définit un segment entre deux points avec affichage des coordonnées.

#  Explication du Code 
1) Classe Vecteur2D :
Cette classe représente un vecteur avec les propriétés suivantes :
x : Coordonnée sur l’axe des abscisses.
y : Coordonnée sur l’axe des ordonnées.
Méthodes associées :

Afficher() : Affiche les coordonnées du vecteur.
Addition(vect) : Additionne deux vecteurs et retourne un nouveau vecteur résultant.

2) Classe Rectangle :
Cette classe définit un rectangle avec les propriétés suivantes :
l : Longueur du rectangle.
L : Largeur du rectangle.
Méthodes associées :

Afficher() : Affiche les dimensions du rectangle.
Surface() : Retourne la surface du rectangle (l * L).

3) Classe Carre (Héritage de Rectangle) :
Un carré étant un rectangle particulier, cette classe hérite de Rectangle en utilisant la même longueur et largeur (côté).

4) Classe Point :
Représente un point avec des coordonnées x et y.

5) Classe Segment :
Un segment est défini par:
orig : Point d’origine.
extrem : Point d’extrémité.
Méthode associée :

Afficher() : Affiche les coordonnées des deux points du segment.

## 📰 EX4 :mini blog
# Les fonctionnalités: 
-Affichage de la liste des articles publiés par les utilisateurs.
-Inscription et connexion des utilisateurs.
-Ajout d'un nouvel article avec un titre et une description.
-Sauvegarde des articles et des utilisateurs dans localStorage.

# Structure des fichiers: 
-home.html : Page principale affichant les articles et permettant d'en ajouter: 
### Résumé du fonctionnement général
-Affichage des articles : Récupération et affichage des articles stockés dans localStorage sous forme de cartes.
-Ajout d'un article : Formulaire caché affiché sur clic, validation et stockage de l'article en localStorage.
-Vérification de connexion : Redirection vers la page de connexion si l'utilisateur n'est pas authentifié.
-Gestion de l'affichage du formulaire : Bouton pour afficher/masquer le formulaire d'ajout d'article.

-sign_up.html : Page d'inscription des utilisateurs :
### Résumé du fonctionnement général
-L'utilisateur remplit les champs et clique sur "S'inscrire"
-Le script vérifie que tous les champs sont remplis
-Il vérifie si l'email est déjà utilisé
-Si l'email est unique, l'utilisateur est ajouté à localStorage
-Un message de confirmation s'affiche
-L'utilisateur est redirigé vers la page de connexion (login.html).

-login.html : Page de connexion des utilisateurs:
### Résumé du fonctionnement général
-Formulaire de connexion : L'utilisateur entre son nom et son email.
-Validation des champs : Vérifie si les champs ne sont pas vides avant soumission.
-Vérification de l'utilisateur : Recherche l'utilisateur dans localStorage.
-Authentification : Si l'utilisateur est trouvé, il est redirigé vers home.html et sauvegardé dans localStorage.
-Gestion des erreurs : Affiche un message d'alerte si l'utilisateur n'est pas trouvé.
-Lien d'inscription : Permet à l'utilisateur de s'inscrire via sign_up.html.

-Blogs.html : Affichages des article de l'utilisateur connecté et le donner la possibilité de se déconnecter:
### Résumé du fonctionnement général
-Affichage des articles : Récupère et affiche les articles associés à l'utilisateur connecté.
-Vérification de connexion : Si l'utilisateur n'est pas connecté, redirection vers login.html.
-Stockage des données : Utilisation de localStorage pour gérer les utilisateurs et leurs articles.
-Affichage dynamique : Création d'éléments HTML pour afficher les articles de l'utilisateur.
-Bouton de déconnexion : Déconnecte l'utilisateur et le redirige vers login.html.

  
