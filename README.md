[![forthebadge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ronald-fonlebeck)
[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://forthebadge.com)

### Projet :
Création d'un package NPM => https://www.npmjs.com/package/@ronaldfk/check-update-npm qui permetra de connaitre les dépendances d'un projet qui nécessites une mise à jour.

Ce script prendra en entré le fichier de configuration package.json.
En sortie, sera créé un fichier de log qui donnera comme information à l'utisaleur la liste des dépendances pour lesquelles une mise à jour est disponible.

En complément, un fichier en format JSON sera également créé dans le but de regrouper et mettre en forme l'ensemble des dépendances du projet ainsi qu'une description de leur rôle.

A la fin de process, il sera demandé à l'utilisateur dans l'invite de commande s'il souhaite effectuer la mise à jour pour chaque dépendance qui en nécessite une.
<img width="966" alt="image" src="https://github.com/RonaldFK/checkUpdateNpm/assets/90004972/247db0b3-6247-42a6-a344-e3be07e2b509">

### Outils :

- Javascript
- NodeJs

### install :

npm -i @ronaldfk/check-update-npm

### configuration :
add type module to your package.json file,

in your index.js file:
```
import { checkUpdateNpm } from "@ronaldfk/check-update-npm";

checkUpdateNpm();

```
