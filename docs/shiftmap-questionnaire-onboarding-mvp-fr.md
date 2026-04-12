# ShiftMap - Questionnaire client MVP pour feuille de route IA

## Objectif

Collecter le minimum d'informations necessaires pour produire une premiere feuille de route IA personnalisee, sans transformer l'onboarding en audit. Le questionnaire doit pouvoir etre rempli par un dirigeant de PME en **10 a 12 minutes**, avec un maximum de **10 blocs de questions**, dont **9 obligatoires**.

## Principes de conception

- commencer par des questions simples et factuelles pour reduire la friction ;
- faire exprimer les priorites business avant de parler d'IA ;
- cadrer les irritants operationnels avant les outils ;
- limiter les reponses longues a 2 ou 3 champs maximum ;
- privilegier des formats faciles a analyser : listes, choix multiples, echelles et textes courts.

## Structure recommandee

### 1. Profil de l'entreprise

**Question**
Quel est le nom de votre entreprise, son site web, son secteur principal et sa taille ?

**Champs**

- `company_name`
  - Format attendu : texte court
  - Obligatoire : oui
  - Justification : identifie l'entreprise dans le livrable et evite toute ambiguite.
- `company_website`
  - Format attendu : URL
  - Obligatoire : oui
  - Justification : donne un premier niveau de contexte sur l'offre, le positionnement et le marche.
- `industry`
  - Format attendu : liste deroulante + option "autre"
  - Obligatoire : oui
  - Justification : permet d'orienter les cas d'usage IA vers le bon contexte metier.
- `employee_range`
  - Format attendu : choix unique (`1-19`, `20-49`, `50-99`, `100-249`, `250+`)
  - Obligatoire : oui
  - Justification : aide a calibrer le niveau de complexite, les ressources probables et le niveau de structuration.

### 2. Profil du repondant

**Question**
Quel est votre role et votre niveau d'implication dans les decisions de transformation ou d'outillage ?

**Champs**

- `respondent_role`
  - Format attendu : choix unique (`dirigeant`, `DG / direction generale`, `operations`, `commercial`, `finance / admin`, `IT / data`, `autre`)
  - Obligatoire : oui
  - Justification : permet de comprendre l'angle de reponse et le niveau de capacite a lancer ensuite les actions recommandees.
- `decision_scope`
  - Format attendu : choix unique (`je decide directement`, `je co-decide`, `je recommande`, `je contribue seulement`)
  - Obligatoire : oui
  - Justification : aide a ajuster le niveau de pragmatisme et de profondeur de la feuille de route.

### 3. Priorites business a 6-12 mois

**Question**
Quels sont vos 3 objectifs business prioritaires sur les 6 a 12 prochains mois ?

**Champ**

- `business_priorities`
  - Format attendu : choix multiple limite a 3 (`gagner du temps`, `augmenter le chiffre d'affaires`, `ameliorer la marge`, `ameliorer la qualite de service`, `absorber plus de volume sans recruter`, `fiabiliser les operations`, `mieux exploiter les donnees`, `autre`)
  - Obligatoire : oui
  - Justification : force l'alignement des recommandations IA sur les vrais objectifs de l'entreprise plutot que sur des usages "a la mode".

### 4. Equipes ou processus les plus critiques

**Question**
Quelles equipes ou quels processus sont aujourd'hui les plus critiques pour atteindre ces objectifs ?

**Champ**

- `critical_areas`
  - Format attendu : choix multiple limite a 4 (`vente / prospection`, `marketing`, `service client`, `operations / production`, `administratif`, `finance`, `RH`, `direction`, `IT / data`, `autre`)
  - Obligatoire : oui
  - Justification : permet de circonscrire les zones prioritaires a analyser dans la feuille de route.

### 5. Principaux irritants operationnels

**Question**
Sur quels sujets perdez-vous aujourd'hui le plus de temps ou de marge ?

**Champ**

- `main_pains`
  - Format attendu : texte libre court, consigne "listez 2 a 4 irritants concrets"
  - Obligatoire : oui
  - Justification : c'est le meilleur point d'entree pour identifier des cas d'usage a fort impact percu.

### 6. Exemple de tache repetitive a fort volume

**Question**
Donnez 1 a 3 exemples de taches repetitives, manuelles ou chronophages qui reviennent souvent dans vos equipes.

**Champ**

- `repetitive_tasks_examples`
  - Format attendu : texte libre court, idealement sous forme de puces
  - Obligatoire : oui
  - Justification : transforme les irritants generaux en signaux directement exploitables pour proposer des opportunites IA concretes.

### 7. Outils deja utilises

**Question**
Quels sont les principaux outils utilises aujourd'hui dans votre entreprise ?

**Champ**

- `current_tools`
  - Format attendu : choix multiple + champ libre complementaire (`CRM`, `ERP`, `tableurs`, `email`, `helpdesk`, `SIRH`, `outil comptable / finance`, `outil projet`, `BI / reporting`, `aucun outil structurant`, `autre`)
  - Obligatoire : oui
  - Justification : aide a evaluer le niveau de faisabilite a court terme et les points d'appui existants.

### 8. Maturite IA actuelle

**Question**
Ou en etes-vous aujourd'hui sur l'usage de l'IA dans l'entreprise ?

**Champs**

- `ai_maturity_level`
  - Format attendu : choix unique (`aucun usage`, `quelques essais individuels`, `usage ponctuel dans certaines equipes`, `plusieurs usages deja en place`)
  - Obligatoire : oui
  - Justification : evite de recommander un point de depart trop basique ou, a l'inverse, trop ambitieux.
- `existing_ai_examples`
  - Format attendu : texte libre tres court
  - Obligatoire : conditionnel, seulement si la reponse precedente n'est pas `aucun usage`
  - Justification : permet d'identifier ce qui existe deja et d'eviter les doublons dans la feuille de route.

### 9. Contraintes majeures

**Question**
Quelle est aujourd'hui votre principale contrainte pour avancer sur l'IA ?

**Champ**

- `main_constraint`
  - Format attendu : choix unique (`manque de temps`, `manque de budget`, `manque de competences internes`, `donnees peu structurees`, `outils trop fragmentes`, `risques juridiques / conformite`, `pas d'alignement interne`, `autre`)
  - Obligatoire : oui
  - Justification : permet de recommander des actions realistes et de filtrer les pistes qui seraient bloquees des le depart.

### 10. Critere de valeur immediate

**Question**
Quel resultat concret vous ferait dire dans 90 jours que cette premiere demarche IA valait la peine ?

**Champ**

- `success_criteria_90_days`
  - Format attendu : texte libre court
  - Obligatoire : non
  - Justification : donne un critere de succes simple pour prioriser les recommandations les plus defendables cote direction.

## Ordre recommande de presentation

1. Profil de l'entreprise
2. Role du repondant
3. Priorites business
4. Equipes ou processus critiques
5. Principaux irritants operationnels
6. Exemples de taches repetitives
7. Outils deja utilises
8. Maturite IA actuelle
9. Contraintes majeures
10. Critere de valeur immediate

## Recommandations de formulation pour garder le formulaire sous 15 minutes

- afficher une estimation de temps des l'introduction : "10 a 12 minutes" ;
- limiter a 3 selections maximum sur les questions de priorites ;
- utiliser des choix pre-remplis partout ou c'est possible ;
- reserver les champs texte libre aux irritants, exemples de taches et critere de succes ;
- rendre le champ `existing_ai_examples` conditionnel pour ne pas penaliser les entreprises debutantes ;
- ne pas demander de documents, de KPI detailles ou de cartographie exhaustive a ce stade.

## Version courte exploitable en formulaire

Les **10 blocs de questions** ci-dessus se traduisent en **15 champs** concrets a configurer dans un formulaire.

| Ordre | Intitule du champ | Type de reponse | Obligatoire | Pourquoi ce champ existe |
| --- | --- | --- | --- | --- |
| 1 | Nom de l'entreprise | Texte court | Oui | Identifier le client dans le livrable |
| 2 | Site web | URL | Oui | Comprendre rapidement le contexte |
| 3 | Secteur principal | Liste deroulante | Oui | Orienter les cas d'usage metier |
| 4 | Taille de l'entreprise | Choix unique | Oui | Calibrer complexite et faisabilite |
| 5 | Role du repondant | Choix unique | Oui | Comprendre le point de vue |
| 6 | Niveau de decision | Choix unique | Oui | Ajuster le niveau de recommandation |
| 7 | 3 priorites business | Choix multiple | Oui | Aligner la feuille de route sur les enjeux |
| 8 | Equipes / processus critiques | Choix multiple | Oui | Cibler les zones a analyser |
| 9 | Principaux irritants | Texte court | Oui | Detecter les problemes a traiter |
| 10 | Exemples de taches repetitives | Texte court | Oui | Identifier des cas d'usage concrets |
| 11 | Outils actuels | Choix multiple + texte libre | Oui | Evaluer les points d'appui existants |
| 12 | Maturite IA | Choix unique | Oui | Adapter l'ambition des recommandations |
| 13 | Exemples d'usages IA deja testes | Texte court conditionnel | Non | Eviter les doublons |
| 14 | Contrainte majeure | Choix unique | Oui | Filtrer les pistes irrealisables |
| 15 | Resultat attendu a 90 jours | Texte court | Non | Prioriser la valeur immediate |

## Recommandation finale

Pour le MVP, conserver la structure ci-dessus sans ajouter de questions sur le budget detaille, l'organigramme, la stack technique complete ou les KPI financiers. Ces informations pourront etre collectees plus tard dans un call de cadrage ou dans une version v2 du formulaire si elles s'averent necessaires.
