[![forthebadge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ronald-fonlebeck)
[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://forthebadge.com)

### Projet :
Faire un script qui permetra de connaitre les dépendances d'un projet qui nécessites une mise à jour.

Ce script prendra en entré le fichier de configuration package.json.
En sortie, sera créé un fichier de log qui donnera comme information à l'utisaleur la liste des dépendances pour lesquelles une mise à jour est disponible.

En complément, un fichier en format JSON sera également créé dans le but de regrouper et mettre en forme l'ensemble des dépendances du projet ainsi qu'une description de leur rôle.

A la fin de process, il sera demandé à l'utilisateur dans l'invite de commande s'il souhaite effectuer la mise à jour pour chaque dépendance qui en nécessite une.
=> https://www.npmjs.com/package/@ronaldfk/check-update-npm

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