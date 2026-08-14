# Amelie Énergie + PompiHouse

Les deux sites sont organisés en workspaces npm. Les dépendances sont donc
installées depuis la racine et un seul build génère les deux exports statiques.

Installation et développement :

```bash
npm install
npm run dev
```

Les sites sont disponibles sur http://localhost:4000 et http://localhost:4001.

Pour produire les deux sites :

```bash
npm run build
```

En production, Docker sert les dossiers statiques avec un seul processus Node,
ce qui évite de faire tourner deux serveurs Next.js sur la petite machine :

```bash
docker compose up --build -d
```
