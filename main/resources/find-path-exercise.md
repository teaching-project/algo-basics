# Chemin le plus court

Ecrire un algorithme en pseudo code, permettant de trouver le chemin le plus court pour aller de A vers H

![find path exercise](./findpath.png "FindPath")

Les segments modélisent les seules routes qu'il est possible d'emprunter, en se déplaçant d'un point à un autre. Les segments colorés sont potentiellement FERMES.

Instructions à utiliser :
 - Aller de A vers B
 - Ecrire ...
 - Lire nom_variable
 - SI {CONDITION}
    - ALORS {INSTRUCTION}
    - SINON {INSTRUCTION}

Il n'est possible de demander l'état d'un segment qu'à partir d'un de ses côtés.

---

CORRECTION
```
LIRE chemin_rouge_ouvert

SI chemin_rouge_ouvert TRUE
    ALORS
        Aller A -> C
        Allez C -> F
        Allez F -> H

    SINON
        Aller A -> B

ECRIRE "Le chemin jaune est il ouvert"
LIRE chemin_jaune_ouvert

SI chemin_jaune_ouvert TRUE
    ALORS
        Allez B->C 
        Allez C->F
        Allez F->H
    SINON
        Allez B-> D
        Allez D->E
        Allez E->F
        Allez F->H
```