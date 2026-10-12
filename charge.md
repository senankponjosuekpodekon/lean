Je vais structurer ce projet comme un véritable produit Fintech de demande de financement, avec une architecture exploitable par Figma, Google AI Studio et Windsurf.

L'objectif est de produire une interface cohérente de bout en bout : pages publiques, simulateur de crédit, formulaire multi-étapes, confirmation, version multilingue, états d'erreur, interface mobile et, si nécessaire, espace d'administration.

Un point doit guider toute la conception : le taux annoncé de 3 % par an, les témoignages, les éventuels partenaires financiers et les conditions de crédit doivent correspondre à la réalité du service. Tant que le prêteur, son statut et ses conditions ne sont pas confirmés, les éléments concernés doivent rester configurables et clairement identifiés comme non validés. Le site ne doit ni laisser croire qu'un crédit est garanti ni présenter des témoignages fictifs comme authentiques.

CAHIER DES CHARGES UI/UX — PLATEFORME DE FINANCEMENT EN LIGNE .DE

# CAHIER DES CHARGES UI/UX — PLATEFORME DE FINANCEMENT EN LIGNE `.DE`

**Version :** 1.0
**Périmètre :** conception UX/UI, design system, prototype interactif et préparation au développement
**Marché principal :** Allemagne
**Langues :** allemand, français, espagnol, italien et portugais
**Objectif principal :** permettre à un visiteur de comprendre les conditions de financement, simuler ses mensualités et soumettre une demande en ligne.

---

# 1. VISION DU PRODUIT

## 1.1 Positionnement

Créer un site de financement en ligne moderne, professionnel, rassurant et transparent, inspiré des fintech européennes et des néobanques contemporaines.

Le site doit donner une impression de simplicité et de sérieux sans ressembler à une banque traditionnelle vieillissante, à un site de crédit agressif ou à une plateforme de promesses financières irréalistes.

La conception repose sur quatre principes :

1. **Clarté :** le visiteur comprend immédiatement la nature du service.

2. **Transparence :** le taux, la durée, les mensualités et les frais éventuels sont présentés distinctement.

3. **Simplicité :** le parcours de simulation et de demande est guidé.

4. **Confiance :** identité de l'entreprise, statut du prêteur, politique de confidentialité et conditions accessibles.

## 1.2 Objectifs business

* Présenter les solutions de financement réellement disponibles.

* Permettre de simuler un prêt avant de déposer une demande.

* Transformer les visiteurs intéressés en demandes complètes.

* Réduire les abandons grâce à un formulaire progressif.

* Permettre aux visiteurs de changer de langue à tout moment.

* Fournir une base technique évolutive vers un espace client.

## 1.3 Règles métier

Les valeurs suivantes sont des paramètres configurables, à valider avant publication :

* Taux nominal annuel fixe annoncé : 3 %.

* Montant minimum annoncé : 5 000 €.

* Durée maximale annoncée : 120 mois.

* Durées proposées : 12, 24, 36, 48, 60, 84 et 120 mois.

* Toute demande reste soumise à l'étude et à la décision du prêteur.

* Une simulation n'est pas une offre de crédit.

* L'envoi d'une demande ne garantit pas l'obtention du financement.

* Les frais éventuels et le taux annuel effectif global doivent être traités séparément du taux nominal.

**Condition de lancement :** ne publier les paramètres commerciaux qu'après validation de leur exactitude et de leur applicabilité au produit proposé.

---

# 2. DIRECTION ARTISTIQUE

## 2.1 Concept visuel

**Nom de la direction : Modern European Fintech.**

Combiner une esthétique fintech contemporaine avec la lisibilité d'un service financier européen.

Le résultat doit être :

* premium, sans être luxueux ;

* coloré, sans être excessif ;

* humain, sans être sentimental ;

* professionnel, sans être bureaucratique ;

* orienté conversion, sans pression commerciale.

## 2.2 Palette de couleurs

| Token            | Couleur   | Utilisation                              |
| ---------------- | --------- | ---------------------------------------- |
| Primary          | `#172554` | Titres, navigation, éléments de marque   |
| Primary hover    | `#1E3A8A` | Survol des actions principales           |
| Accent           | `#6558E8` | Éléments interactifs et illustrations    |
| Accent secondary | `#F43F79` | Accent graphique et highlights           |
| Highlight        | `#FFD45A` | Petits éléments de contraste             |
| Background       | `#F8FAFC` | Fond général                             |
| Surface          | `#FFFFFF` | Cartes, formulaires, navigation          |
| Text             | `#172033` | Texte principal                          |
| Text secondary   | `#64748B` | Descriptions et informations secondaires |
| Border           | `#E2E8F0` | Bordures et séparateurs                  |
| Success          | `#15803D` | Confirmation et succès                   |
| Warning          | `#B45309` | Avertissements                           |
| Error            | `#B91C1C` | Erreurs et champs invalides              |

Les accents roses et violets sont utilisés avec parcimonie. Les informations financières importantes restent sur des surfaces neutres, avec un contraste élevé.

## 2.3 Typographie

* **Titres :** Manrope, poids 600–700.

* **Texte courant :** Inter, poids 400–500.

* **Montants :** Inter, poids 600–700, chiffres alignés.

* **Boutons :** Inter, poids 600.

Tailles desktop indicatives :

* H1 : 56–64 px.

* H2 : 36–44 px.

* H3 : 24–28 px.

* Texte courant : 16–18 px.

* Métadonnées : 13–14 px.

Tailles mobile :

* H1 : 36–42 px.

* H2 : 28–32 px.

* H3 : 21–24 px.

* Texte courant : 16 px minimum pour les contenus principaux.

## 2.4 Grille et espacement

**Desktop**

* Largeur maximale du contenu : 1 200 px.

* Grille : 12 colonnes.

* Marges latérales : 48–80 px selon la largeur disponible.

* Espacement entre sections : 88–112 px.

* Cartes : rayon de 16–20 px.

* Boutons : hauteur de 48–52 px.

**Mobile**

* Marges latérales : 20 px.

* Espacement entre sections : 56–72 px.

* Cartes : rayon de 14–18 px.

* Boutons principaux : hauteur minimale de 48 px.

* Zones tactiles : au moins 44 × 44 px.

## 2.5 Illustrations et photographies

Préférer :

* des photographies professionnelles de personnes dans des situations quotidiennes réalistes ;

* des scènes de travail, de logement, de véhicule ou de projet personnel ;

* des illustrations abstraites de cartes, de calculs et de parcours financiers ;

* des formes géométriques arrondies et des dégradés subtils.

Éviter :

* les liasses de billets ;

* les promesses de richesse ;

* les photos de faux conseillers bancaires ;

* les faux logos de banques partenaires ;

* les photographies de banques d'images présentées comme des clients ;

* les badges de certification non vérifiés.

Les images doivent provenir de ressources autorisant leur usage commercial. Prévoir des versions optimisées WebP ou AVIF, avec texte alternatif pertinent.

---

# 3. ARCHITECTURE GLOBALE

## 3.1 Pages publiques

| ID  | Écran                          | Route indicative          |
| --- | ------------------------------ | ------------------------- |
| P01 | Accueil                        | `/de`                     |
| P02 | Solutions de financement       | `/de/finanzierung`        |
| P03 | Simulateur de crédit           | `/de/kreditrechner`       |
| P04 | Demande de financement         | `/de/antrag`              |
| P05 | Confirmation de demande        | `/de/antrag/bestaetigung` |
| P06 | Comment ça fonctionne          | `/de/ablauf`              |
| P07 | À propos                       | `/de/ueber-uns`           |
| P08 | FAQ                            | `/de/faq`                 |
| P09 | Contact                        | `/de/kontakt`             |
| P10 | Mentions légales               | `/de/impressum`           |
| P11 | Confidentialité                | `/de/datenschutz`         |
| P12 | Conditions contractuelles      | `/de/bedingungen`         |
| P13 | Informations précontractuelles | `/de/kreditinformationen` |
| P14 | Page d'erreur                  | `/404`                    |

Les routes définitives devront correspondre aux exigences SEO et juridiques du marché cible.

## 3.2 Administration — périmètre conditionnel

Si l'entreprise souhaite traiter les demandes dans son propre outil, prévoir un espace distinct :

* Connexion administrateur.

* Tableau de bord.

* Liste des demandes.

* Détail d'une demande.

* Gestion des statuts.

* Historique des actions.

* Gestion des utilisateurs habilités.

* Paramètres du calculateur et des langues.

* Gestion des contenus publiés.

L'espace d'administration ne doit jamais être accessible sans authentification et contrôle des permissions.

---

# 4. ÉCRAN P01 — ACCUEIL

## 4.1 Header desktop

**Structure :**

* Logo à gauche.

* Navigation au centre.

* Sélecteur de langue.

* CTA principal à droite.

**Navigation :**

* Finanzierung

* Kreditrechner

* Ablauf

* FAQ

* Kontakt

**CTA :** `Kredit beantragen`

Le logo doit être une identité propre à la marque. Ne pas utiliser un nom, un logo ou une présentation pouvant faire croire à une affiliation avec un établissement financier tiers.

**Interactions :**

* Navigation vers les routes correspondantes.

* Sélecteur de langue avec liste des langues disponibles.

* Header fixe après un léger défilement, si cela améliore la navigation.

* Menu mobile accessible au clavier.

## 4.2 Hero

**Layout desktop :** deux colonnes, environ 55 % texte et 45 % visuel.

À gauche :

* Badge de positionnement.

* Titre H1.

* Description.

* CTA principal.

* CTA secondaire.

* Note de transparence.

À droite :

* Illustration éditoriale ou photographie.

* Carte de simulation visuelle.

* Éléments graphiques géométriques.

* Aucun faux tableau de bord ni faux indicateur de performance.

**Texte allemand de référence :**

Badge : `FINANZIERUNG ONLINE ANFRAGEN`

H1 : `Finanzierung, die zu Ihrem Vorhaben passt.`

Description : `Informieren Sie sich über unsere Finanzierungsmöglichkeiten, berechnen Sie eine unverbindliche Monatsrate und stellen Sie Ihre Anfrage online.`

CTA principal : `Finanzierung anfragen`

CTA secondaire : `Monatsrate berechnen`

Note : `Eine Anfrage ist unverbindlich. Eine Finanzierung erfolgt nur nach Prüfung und Annahme durch den zuständigen Kreditgeber.`

**Interactions :**

* CTA principal → P04.

* CTA secondaire → P03.

* L'illustration reste décorative et ne bloque pas l'accès aux CTA.

## 4.3 Section avantages

Titre : `Klarheit von Anfang an`

Description : `Die wichtigsten Informationen zu Ihrer Finanzierung auf einen Blick.`

Trois cartes :

**Carte 1 — Transparente Konditionen**

`Zinssatz, Laufzeit und mögliche zusätzliche Kosten werden nachvollziehbar dargestellt.`

**Carte 2 — Online-Anfrage**

`Übermitteln Sie Ihre Anfrage Schritt für Schritt über ein übersichtliches Online-Formular.`

**Carte 3 — Individuelle Prüfung**

`Die Entscheidung richtet sich nach Ihrer Situation und den geltenden Vergabekriterien.`

Icônes simples, style outline, sans animation obligatoire.

## 4.4 Section simulateur

Titre : `Berechnen Sie Ihre mögliche Monatsrate`

Description : `Passen Sie den Kreditbetrag und die Laufzeit an, um eine unverbindliche Schätzung zu erhalten.`

Éléments :

* Slider du montant.

* Champ numérique synchronisé.

* Sélecteur de durée.

* Taux nominal affiché, si confirmé.

* Résultat mensuel.

* Coût total estimé.

* Intérêts estimés.

* Avertissement sur les frais non inclus.

* CTA `Zum Kreditrechner`.

Les paramètres doivent être modifiables sans intervention sur le code applicatif.

## 4.5 Section « Comment ça fonctionne »

Titre : `In fünf Schritten zu Ihrer Anfrage`

1. `Anfrage starten` — Remplissez les informations nécessaires.

2. `Angaben prüfen` — Vérifiez l'exactitude des informations.

3. `Unterlagen einreichen` — Transmettez uniquement les documents nécessaires, si demandés.

4. `Prüfung abwarten` — Le prêteur examine la demande.

5. `Entscheidung erhalten` — Vous recevez la décision et, le cas échéant, les conditions applicables.

CTA : `Ablauf ansehen`

Ne pas présenter ces étapes comme un délai garanti ou une approbation automatique.

## 4.6 Section usages

Titre : `Wofür planen Sie eine Finanzierung?`

Cartes :

* `Persönliches Vorhaben`

* `Fahrzeug`

* `Renovierung`

* `Berufliches Projekt`

* `Liquiditätsbedarf`

Chaque carte comporte une illustration ou une icône et une description courte. Les catégories ne doivent être affichées que si le prêteur propose effectivement ces usages.

Interaction : clic sur une carte → P02 avec la catégorie sélectionnée, si cette catégorie est prise en charge.

## 4.7 Section transparence

Titre : `Finanzielle Entscheidungen verdienen klare Informationen.`

Texte :

`Bevor Sie eine Entscheidung treffen, sollen Sie die wesentlichen Konditionen verstehen. Deshalb stellen wir Zinssatz, Laufzeit, mögliche Kosten und den Ablauf der Prüfung nachvollziehbar dar.`

Liens :

* `Informationen zum Kredit`

* `Datenschutz`

* `Häufige Fragen`

Visuel : carte blanche avec icône de document, fond clair et accent violet discret.

## 4.8 Témoignages

Cette section est **désactivée par défaut**.

Elle ne peut être activée que si l'entreprise dispose de témoignages authentiques, utilisés avec autorisation et présentés sans altération trompeuse.

À défaut, remplacer cette section par :

Titre : `Was Sie vor einer Anfrage wissen sollten`

Cartes :

* `Keine automatische Zusage`

* `Klare Informationen`

* `Sorgfältige Prüfung`

Ne pas inventer des noms, pays, notes cinq étoiles, nombres de clients ou taux de satisfaction.

## 4.9 FAQ courte

Titre : `Häufige Fragen`

Questions :

* `Wie funktioniert eine Finanzierungsanfrage?`

* `Ist die Monatsrate verbindlich?`

* `Welche Unterlagen können erforderlich sein?`

* `Ist eine Zusage garantiert?`

Interaction : accordéon accessible au clavier, une ou plusieurs réponses ouvertes selon le choix UX.

CTA : `Alle Fragen ansehen`

## 4.10 CTA final

Titre : `Sie möchten Ihr Vorhaben planen?`

Texte : `Informieren Sie sich über die Bedingungen und berechnen Sie zunächst eine unverbindliche Monatsrate.`

Boutons :

* `Monatsrate berechnen`

* `Finanzierung anfragen`

## 4.11 Footer

Colonnes :

* Logo et présentation.

* Navigation.

* Informations financières.

* Contact.

* Mentions légales et confidentialité.

* Sélecteur de langue.

Informations à afficher selon le statut réel de l'entreprise :

* Dénomination sociale.

* Adresse et coordonnées.

* Informations d'immatriculation applicables.

* Identité du prêteur ou rôle exact de l'intermédiaire.

* Informations réglementaires pertinentes.

Aucune donnée légale fictive ne doit être publiée.

---

# 5. ÉCRAN P02 — SOLUTIONS DE FINANCEMENT

## Objectif

Présenter les financements disponibles, leurs conditions et les critères applicables, sans suggérer que toutes les demandes seront acceptées.

## Structure

### Section 1 — Hero

H1 : `Finanzierungsmöglichkeiten im Überblick`

Texte : `Informieren Sie sich über die verfügbaren Finanzierungslösungen und prüfen Sie, welche davon zu Ihrem Vorhaben passen könnte.`

CTA : `Monatsrate berechnen`

### Section 2 — Cartes de financement

Chaque carte comprend :

* Nom du produit.

* Description.

* Montant minimum et maximum confirmés.

* Durées disponibles.

* Taux nominal et TAEG, lorsque déterminés et applicables.

* Frais connus.

* Conditions d'éligibilité.

* CTA `Konditionen ansehen`.

Ne pas afficher des plafonds, taux, durées ou catégories non validés.

### Section 3 — Comparaison

Tableau desktop :

* Produit.

* Montant.

* Durée.

* Taux et coûts.

* Conditions.

* Action.

Mobile : cartes empilées avec les informations principales, puis détails développables.

### Section 4 — Informations importantes

Présenter clairement :

* critères de demande ;

* éventuels documents nécessaires ;

* conditions de décision ;

* frais ;

* modalités de remboursement anticipé, le cas échéant.

CTA final : `Kreditrechner öffnen`

---

# 6. ÉCRAN P03 — SIMULATEUR DE CRÉDIT

## 6.1 Objectif UX

Le visiteur doit pouvoir modifier ses paramètres et voir les résultats immédiatement, sans rechargement de page.

## 6.2 Layout desktop

Deux colonnes :

**Colonne gauche — 58 %**

* Montant souhaité.

* Slider du montant.

* Durée.

* Sélecteur de durée.

* Taux annuel nominal applicable.

* Frais configurables, si connus.

**Colonne droite — 42 %**

* Carte de résultat.

* Mensualité estimée.

* Montant emprunté.

* Coût total estimé.

* Intérêts estimés.

* Frais pris en compte.

* Avertissement.

* CTA `Finanzierung anfragen`.

La carte de résultat peut rester visible pendant le défilement, sans masquer les autres contenus.

## 6.3 Layout mobile

Ordre :

1. Titre.

2. Explication.

3. Montant.

4. Durée.

5. Résultat.

6. Détail du calcul.

7. Avertissement.

8. CTA.

Le résultat ne doit pas obliger l'utilisateur à effectuer un défilement horizontal.

## 6.4 Composants et interactions

### Montant

* Champ numérique en euros.

* Slider synchronisé avec le champ.

* Valeur minimale configurable.

* Valeur maximale définie par le produit réellement proposé.

* Validation immédiate.

* Formatage selon la locale.

### Durée

* Options disponibles sous forme de boutons radio ou de sélecteur.

* Mise à jour automatique du calcul.

* Durée indisponible désactivée avec une explication si nécessaire.

### Résultats

Libellés :

* `Voraussichtliche Monatsrate`

* `Kreditbetrag`

* `Laufzeit`

* `Geschätzte Gesamtzahlung`

* `Geschätzte Zinskosten`

* `Zusätzliche Kosten`

Avertissement :

`Diese Berechnung ist unverbindlich und stellt kein Kreditangebot dar. Die tatsächlichen Konditionen hängen von der Prüfung Ihrer Anfrage und den vertraglich vereinbarten Bedingungen ab.`

## 6.5 Logique de calcul

Pour un prêt amortissable avec mensualités constantes :

* (P) : montant emprunté.

* (r) : taux nominal annuel exprimé en décimal.

* (i = r/12) : taux mensuel, si cette convention est celle du contrat.

* (n) : nombre de mensualités.

Mensualité :

$$
M = \\frac{P \\times i}{1-(1+i)^{-n}}  
$$

Si le taux est nul :

$$
M = \\frac{P}{n}  
$$

Le total des remboursements estimé correspond à la mensualité multipliée par le nombre de mensualités, après application des règles d'arrondi. Les intérêts estimés sont le total remboursé moins le capital, hors frais supplémentaires.

**Exigences :**

* Utiliser une fonction centrale de calcul, testée et documentée.

* Éviter les incohérences entre le frontend et le backend.

* Utiliser des calculs décimaux fiables pour les montants monétaires.

* Arrondir les montants affichés à deux décimales.

* Distinguer le taux nominal annuel du taux annuel effectif global.

* Intégrer les frais dans le calcul lorsque la structure du produit l'exige.

* Faire valider le calcul et les informations réglementaires avant publication.

### Exemple de test

Pour 10 000 €, 60 mois et 3 % de taux nominal annuel, sans frais et selon la formule ci-dessus :

* Mensualité indicative : environ 179,69 €.

* Total indicatif : environ 10 781,40 €.

* Intérêts indicatifs : environ 781,40 €.

## 6.6 Passage à la demande

Au clic sur `Finanzierung anfragen` :

* conserver le montant et la durée sélectionnés ;

* ouvrir P04 ;

* préremplir les champs correspondants ;

* permettre leur modification ;

* afficher une note indiquant que la simulation n'est pas une offre contractuelle.

---

# 7. ÉCRAN P04 — FORMULAIRE DE DEMANDE

## 7.1 Principes

Le formulaire doit être progressif, accessible et utilisable sur mobile.

Ne demander que les données nécessaires à l'étape concernée. Les documents d'identité, relevés bancaires et justificatifs ne doivent pas être collectés sans nécessité établie ni stockés dans des espaces publics.

## 7.2 Structure générale

**Desktop**

* Colonne principale : formulaire.

* Colonne latérale : récapitulatif du financement.

* Indicateur de progression.

* Boutons `Zurück` et `Weiter`.

**Mobile**

* Une seule colonne.

* Barre de progression.

* Résumé du prêt dans un panneau repliable.

* Boutons pleine largeur.

* Conservation temporaire sécurisée de l'état du formulaire, selon la politique de confidentialité.

## 7.3 Étape 1 — Financement souhaité

Titre : `Welche Finanzierung wünschen Sie?`

Champs :

* `Gewünschter Kreditbetrag`

* `Gewünschte Laufzeit`

* `Verwendungszweck`

* `Beschreibung des Vorhabens`

Options d'objet :

* `Persönliches Vorhaben`

* `Fahrzeug`

* `Renovierung`

* `Berufliches Projekt`

* `Investition`

* `Liquiditätsbedarf`

* `Sonstiges`

Interactions :

* préremplissage depuis le simulateur ;

* validation du montant et de la durée ;

* description obligatoire uniquement si justifiée par le processus d'évaluation ;

* compteur de caractères si une limite est définie.

CTA : `Weiter`

## 7.4 Étape 2 — Informations personnelles

Titre : `Ihre persönlichen Angaben`

Champs, sous réserve de nécessité :

* `Vorname`

* `Nachname`

* `Geburtsdatum`

* `Wohnsitzland`

* `Straße und Hausnummer`

* `Postleitzahl`

* `Wohnort`

* `E-Mail-Adresse`

* `Telefonnummer`

Règles :

* validation du format de l'adresse e-mail ;

* validation du téléphone selon le pays ;

* format de date explicite ;

* aucun envoi d'informations sensibles dans les paramètres URL ;

* messages d'erreur placés à côté des champs concernés.

CTA : `Weiter`

## 7.5 Étape 3 — Situation professionnelle

Titre : `Ihre berufliche Situation`

Champ `Beruflicher Status` :

* `Angestellt`

* `Selbstständig`

* `Unternehmer/in`

* `Beamte/r`

* `Im Ruhestand`

* `Sonstiges`

Champs complémentaires, selon le besoin réel :

* `Beruf oder Tätigkeit`

* `Arbeitgeber oder Unternehmen`

* `Dauer der aktuellen Tätigkeit`

Les champs non pertinents doivent être masqués ou facultatifs selon le statut sélectionné.

CTA : `Weiter`

## 7.6 Étape 4 — Situation financière

Titre : `Ihre finanzielle Situation`

Champs :

* `Monatliches Nettoeinkommen`

* `Weitere monatliche Einkünfte`

* `Monatliche Fixkosten`

* `Bestehende Kredite`

Pour `Bestehende Kredite` :

* `Ja`

* `Nein`

Si `Ja` :

* afficher `Monatliche Kreditraten insgesamt`.

Tous les montants sont saisis en euros et validés côté serveur.

Ne pas afficher de diagnostic de solvabilité automatique non validé ou de promesse d'acceptation basée uniquement sur ces chiffres.

CTA : `Weiter`

## 7.7 Étape 5 — Justificatifs, si nécessaires

Titre : `Erforderliche Unterlagen`

Texte :

`Je nach Finanzierung und Prüfung können zusätzliche Unterlagen erforderlich sein. Wir informieren Sie darüber, welche Dokumente benötigt werden und wie Sie diese sicher übermitteln können.`

Le téléchargement n'est activé que si le processus réel l'exige.

Composants :

* zone de dépôt ;

* bouton `Datei auswählen` ;

* liste des fichiers ajoutés ;

* indication des formats et limites autorisés ;

* progression du transfert ;

* possibilité de retirer un fichier avant envoi.

Mesures techniques :

* contrôle de type MIME réel ;

* limite de taille ;

* analyse antivirus appropriée ;

* stockage privé ;

* URL signées temporaires ;

* accès limité aux personnes autorisées ;

* journalisation des accès pertinents.

Ne pas stocker de justificatifs dans un répertoire public du frontend ou dans un stockage temporaire non adapté aux données sensibles.

CTA : `Weiter`

## 7.8 Étape 6 — Récapitulatif et consentements

Titre : `Bitte prüfen Sie Ihre Angaben`

Afficher :

* montant souhaité ;

* durée ;

* objet ;

* coordonnées ;

* situation professionnelle ;

* éléments financiers nécessaires ;

* liste des pièces jointes, le cas échéant.

Chaque groupe comporte un lien `Bearbeiten`.

Cases à cocher :

* `Ich bestätige, dass meine Angaben nach bestem Wissen richtig und vollständig sind.`

* `Ich habe die Datenschutzhinweise gelesen.`

Toute acceptation contractuelle distincte doit être séparée et ne pas être précochée. Le consentement marketing, s'il existe, doit être facultatif et distinct.

CTA principal : `Anfrage sicher absenden`

Note :

`Das Absenden Ihrer Anfrage garantiert keine Kreditzusage. Eine Entscheidung erfolgt erst nach der erforderlichen Prüfung.`

## 7.9 États du formulaire

Prévoir les états suivants :

* initial ;

* champ invalide ;

* étape valide ;

* sauvegarde en cours ;

* téléchargement en cours ;

* erreur serveur ;

* perte de connexion ;

* envoi en cours ;

* envoi réussi ;

* doublon détecté ;

* session expirée.

Ne jamais afficher un succès si le serveur n'a pas confirmé l'enregistrement.

---

# 8. ÉCRAN P05 — CONFIRMATION

## État de succès

Titre : `Vielen Dank für Ihre Anfrage`

Texte :

`Ihre Anfrage wurde erfolgreich übermittelt. Wir prüfen die übermittelten Angaben und informieren Sie über die nächsten Schritte, sofern eine weitere Bearbeitung möglich ist.`

Afficher :

* numéro de référence non sensible ;

* date de réception ;

* résumé succinct de la demande ;

* étapes suivantes réellement prévues ;

* moyen de contact officiel ;

* lien vers les informations de confidentialité.

CTA secondaire : `Zur Startseite`

Un e-mail de confirmation ne doit être envoyé qu'après réception et enregistrement effectifs de la demande.

Ne pas afficher :

* une approbation de crédit ;

* une date de déblocage garantie ;

* une promesse de transfert des fonds ;

* un montant approuvé avant décision effective.

## État d'échec

Titre : `Ihre Anfrage konnte nicht übermittelt werden`

Texte :

`Beim Übermitteln Ihrer Anfrage ist ein Fehler aufgetreten. Ihre Angaben wurden möglicherweise nicht vollständig gespeichert. Bitte versuchen Sie es erneut.`

Actions :

* `Erneut versuchen`

* `Kontakt aufnehmen`

Si possible, préserver les champs non sensibles de la session, sans réafficher inutilement des données financières après une erreur.

---

# 9. ÉCRAN P06 — COMMENT ÇA FONCTIONNE

Hero :

* H1 : `So funktioniert Ihre Finanzierungsanfrage`

* Description : `Von der ersten Berechnung bis zur Entscheidung: Hier erfahren Sie, welche Schritte vorgesehen sind.`

Timeline :

1. Simulation.

2. Transmission de la demande.

3. Vérification des informations.

4. Étude par le prêteur.

5. Communication de la décision et des conditions éventuelles.

Section complémentaire : `Welche Unterlagen können erforderlich sein?`

Expliquer que les justificatifs dépendent du produit et de la situation.

CTA :

* `Kreditrechner öffnen`

* `Finanzierung anfragen`

Ne pas annoncer de délai fixe si celui-ci n'est pas réellement garanti.

---

# 10. ÉCRAN P07 — À PROPOS

Hero :

* H1 : `Unser Anspruch: verständliche Finanzierung`

* Description : `Wir möchten den Ablauf einer Finanzierungsanfrage nachvollziehbar und zugänglich gestalten.`

Sections :

1. Mission réelle de l'entreprise.

2. Présentation de l'entité juridique.

3. Rôle exact dans le financement : prêteur ou intermédiaire.

4. Processus de traitement.

5. Protection des données.

6. Coordonnées et informations légales.

N'afficher des certifications, autorisations, partenariats ou années d'expérience que si ces éléments ont été vérifiés.

CTA : `Kontakt aufnehmen`

---

# 11. ÉCRAN P08 — FAQ

Titre : `Häufige Fragen zur Finanzierung`

Questions et réponses à préparer :

**1. Ist die Berechnung verbindlich?**

`Nein. Der Kreditrechner liefert eine unverbindliche Schätzung auf Basis der eingegebenen Werte. Maßgeblich sind die tatsächlichen Konditionen und ein gegebenenfalls abgeschlossener Vertrag.`

**2. Wird jede Anfrage angenommen?**

`Nein. Jede Anfrage unterliegt der erforderlichen Prüfung und einer Entscheidung des zuständigen Kreditgebers.`

**3. Welche Unterlagen werden benötigt?**

`Die benötigten Unterlagen hängen vom Finanzierungsprodukt und der individuellen Situation ab. Sie werden im jeweiligen Prozess mitgeteilt.`

**4. Welche Kosten können entstehen?**

`Mögliche Kosten müssen anhand des konkreten Produkts ausgewiesen werden. Prüfen Sie die vorvertraglichen Informationen, insbesondere den effektiven Jahreszins und die Gesamtkosten.`

**5. Kann ich meine Anfrage zurückziehen?**

Réponse à définir selon le processus et les règles applicables.

**6. Wie werden meine Daten geschützt?**

`Informationen zur Verarbeitung, zu Speicherfristen und zu Ihren Rechten finden Sie in den Datenschutzhinweisen.`

**7. Wie kann ich den Kundenservice erreichen?**

Afficher uniquement les coordonnées réelles et surveillées.

Interactions :

* accordéons accessibles ;

* navigation clavier ;

* liens internes vers les pages pertinentes ;

* aucune réponse générée dynamiquement qui modifierait les conditions financières officielles.

---

# 12. ÉCRAN P09 — CONTACT

Titre : `Wie können wir Ihnen helfen?`

Description : `Kontaktieren Sie uns bei Fragen zum Ablauf oder zu den verfügbaren Informationen.`

Champs :

* `Name`, si nécessaire.

* `E-Mail-Adresse`.

* `Betreff`.

* `Nachricht`.

CTA : `Nachricht senden`

Prévoir :

* validation des champs ;

* protection anti-spam ;

* confirmation après réception ;

* politique de conservation ;

* aucun partage de données bancaires ou de justificatifs sensibles via un formulaire de contact générique.

Afficher les coordonnées réelles de l'entreprise et ses horaires si confirmés.

---

# 13. PAGES JURIDIQUES

Prévoir :

* mentions légales ;

* politique de confidentialité ;

* conditions d'utilisation ;

* informations précontractuelles ;

* informations sur le prêteur et son statut ;

* cookies et préférences de consentement, lorsque nécessaires.

Ces pages doivent être rédigées et validées pour le pays ciblé et le produit réellement proposé.

Ne pas utiliser de textes génériques comme substitut à une validation juridique. Les obligations exactes dépendent notamment du statut de l'opérateur, de la nature du crédit et du parcours de souscription.

---

# 14. MULTILINGUE

## Langues

* Allemand : `de`

* Français : `fr`

* Espagnol : `es`

* Italien : `it`

* Portugais : `pt`

## Comportement

* L'allemand est la langue par défaut si le site cible principalement l'Allemagne.

* Les URLs doivent être distinctes par langue.

* Le sélecteur de langue doit être visible sur desktop et mobile.

* Lors d'un changement de langue, conserver si possible la page équivalente.

* Si une page n'existe pas dans la langue demandée, rediriger vers une solution cohérente plutôt que vers une page vide.

* Traduire les champs, les erreurs, les confirmations, les e-mails et les métadonnées SEO.

* Utiliser une gestion des traductions centralisée.

* Utiliser `hreflang` et des URLs canoniques adaptées.

* Formater les montants, les dates et les nombres selon la locale.

Les traductions des conditions de crédit doivent être validées : ne pas traduire automatiquement une formulation réglementaire sans contrôle.

---

# 15. RESPONSIVE DESIGN

## Desktop — à partir de 1 024 px

* Navigation horizontale.

* Grilles de deux ou trois colonnes.

* Résultat du calculateur dans un panneau latéral.

* Formulaire avec récapitulatif à droite.

* Tableaux de comparaison lorsque leur lecture reste confortable.

## Tablette — 768 à 1 023 px

* Réduction du nombre de colonnes.

* Navigation simplifiée si nécessaire.

* Simulateur en deux colonnes seulement si l'espace le permet.

* Formulaire sur une colonne ou avec résumé repliable.

## Mobile — 320 à 767 px

* Navigation sous forme de menu accessible.

* Hero empilé : texte puis visuel.

* CTA principal pleine largeur.

* Cartes empilées.

* Sliders accompagnés de champs numériques accessibles.

* Aucun tableau nécessitant un défilement horizontal non maîtrisé.

* Formulaire multi-étapes sur une colonne.

* Boutons Retour et Continuer clairement distincts.

* Résumé du crédit repliable.

* Clavier numérique adapté aux champs monétaires.

* Aucun contenu important uniquement accessible au survol.

Tester au minimum les largeurs suivantes :
320, 360, 375, 390, 414, 768, 1024, 1280, 1440 et 1920 px.

---

# 16. DESIGN SYSTEM ET COMPOSANTS

Créer les composants réutilisables suivants :

**Navigation**

* `HeaderDesktop`

* `HeaderMobile`

* `LanguageSwitcher`

* `Footer`

* `Breadcrumbs`

**Interface**

* `Button`

* `IconButton`

* `Badge`

* `Card`

* `Tooltip`

* `Modal`

* `Accordion`

* `Tabs`

* `Alert`

* `Toast`

* `Skeleton`

* `EmptyState`

* `ErrorState`

**Financement**

* `LoanAmountInput`

* `LoanAmountSlider`

* `LoanTermSelector`

* `LoanSummaryCard`

* `MonthlyPaymentDisplay`

* `CostBreakdown`

* `LoanDisclaimer`

* `FinancingProductCard`

**Formulaires**

* `TextInput`

* `EmailInput`

* `PhoneInput`

* `DateInput`

* `CurrencyInput`

* `RadioGroup`

* `Checkbox`

* `Textarea`

* `FileUpload`

* `FormStepper`

* `ReviewSection`

* `FieldError`

Tous les composants doivent partager les mêmes tokens de couleurs, typographie, espacements, rayons et états.

Créer les variantes :

* default ;

* hover ;

* focus ;

* active ;

* disabled ;

* loading ;

* error ;

* success.

---

# 17. INTERACTIONS ET MICRO-ANIMATIONS

Les animations doivent renforcer la compréhension, jamais retarder une action financière.

* Transitions des boutons : 150–200 ms.

* Apparition des sections : légère transition d'opacité et de position.

* Mise à jour des résultats du simulateur : immédiate, sans animation perturbante.

* Validation du formulaire : message explicite au niveau du champ.

* Étapes du formulaire : transition courte et respectueuse de `prefers-reduced-motion`.

* Cartes : élévation subtile au survol sur les appareils compatibles.

* Menu mobile : ouverture et fermeture fluides.

Aucune animation ne doit masquer un avertissement, un coût ou une information contractuelle.

---

# 18. SÉCURITÉ ET PROTECTION DES DONNÉES

Exigences fonctionnelles et techniques :

* validation côté serveur de tous les champs ;

* protection anti-spam et limitation des requêtes ;

* contrôle d'accès aux données des demandes ;

* authentification forte pour l'administration ;

* journalisation des actions administratives pertinentes ;

* chiffrement des communications ;

* stockage sécurisé des secrets ;

* politique de conservation et de suppression ;

* mécanisme de gestion des droits et demandes de confidentialité ;

* absence de données sensibles dans les URLs, logs ou outils analytiques ;

* accès restreint aux justificatifs ;

* tests de sécurité avant mise en production.

Le site ne doit jamais demander de frais préalables comme condition d'une prétendue libération de crédit sans base contractuelle et légale réelle. Toute modalité de frais doit être explicitement justifiée, documentée et présentée conformément aux règles applicables.

---

# 19. CRITÈRES D'ACCEPTATION

Le produit est considéré prêt pour validation lorsque :

* toutes les routes prévues sont accessibles ;

* chaque CTA conduit vers une destination fonctionnelle ;

* le calculateur fonctionne pour les valeurs limites et les durées disponibles ;

* les calculs sont testés et cohérents avec les conditions contractuelles ;

* le formulaire est utilisable de bout en bout ;

* les erreurs sont compréhensibles ;

* une confirmation n'apparaît qu'après un enregistrement confirmé ;

* toutes les pages s'adaptent aux tailles d'écran définies ;

* le sélecteur de langue fonctionne ;

* les contenus traduits sont cohérents ;

* les formulaires et fichiers bénéficient des contrôles de sécurité appropriés ;

* les informations légales et financières ont été validées ;

* les pages respectent les exigences d'accessibilité retenues ;

* les états de chargement, erreur, vide et succès sont conçus ;

* aucune donnée, aucun témoignage et aucun partenaire fictif ne sont présentés comme réels.

---

# 20. LIVRABLES ATTENDUS

## Figma

* plan du site ;

* wireframes desktop et mobile ;

* maquettes haute fidélité ;

* design system ;

* composants et variantes ;

* prototype interactif ;

* états des formulaires ;

* spécifications de responsive design.

## Google AI Studio

* prototype navigable ;

* composants interactifs ;

* calculateur fonctionnel ;

* formulaire multi-étapes ;

* gestion des langues ;

* données de démonstration clairement identifiées.

## Windsurf

* architecture de code maintenable ;

* routes et composants réutilisables ;

* calculateur testé ;

* formulaires avec validation client et serveur ;

* intégration backend et stockage sécurisé ;

* tests unitaires et tests de parcours ;

* documentation d'installation et de déploiement.

Ne pas considérer un prototype visuel comme une application financière prête à recevoir de véritables demandes tant que le backend, la sécurité, les règles métier et les obligations applicables ne sont pas validés.

## 21. Ordre de réalisation recommandé

1. Architecture et wireframes Figma — valider les parcours, les contenus et les versions desktop/mobile.

2. Design system et maquettes haute fidélité — définir les composants et la direction artistique.

3. Prototype Google AI Studio — tester le simulateur, le formulaire et la navigation.

4. Développement Windsurf — implémenter le frontend, le backend et les validations.

5. Recette et mise en production — vérifier les calculs, la sécurité, les traductions et les contenus financiers avant d'ouvrir le service au public.

Point important : je recommande de commencer par les écrans P01, P03 et P04. Ce sont eux qui déterminent l'identité visuelle, le fonctionnement du calculateur et la conversion principale. Les autres pages pourront ensuite réutiliser les mêmes composants.

Pour la mise en production, il faudra confirmer le nom de marque, le domaine `.de`, l'identité du prêteur et les conditions de financement réellement applicables.
