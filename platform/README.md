# Plateforme de financement en ligne `.DE`

Prototype Next.js + TypeScript + Tailwind CSS pour une plateforme de financement en ligne multilingue avec simulateur de mensualités et demande guidée.

> **Statut** : prototype fonctionnel. Les paramètres financiers, juridiques et réglementaires sont configurables et doivent être validés avant toute mise en production.

## Commandes

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production
npm run test     # tests unitaires
npm run lint     # linting
```

## Pages implémentées

- `/` → redirection vers `/de`
- `/de` — Accueil (P01)
- `/de/kreditrechner` — Simulateur de crédit (P03)
- `/de/antrag` — Demande multi-étapes (P04)

## Stack technique

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS v4
- Vitest pour les tests unitaires

## Configuration produit

Les paramètres commerciaux sont centralisés dans `lib/loan.ts` :

```ts
export const LOAN_CONFIG = {
  minAmountCents: 500_000,          // 5 000 €
  maxAmountCents: 10_000_000,       // 100 000 € (exemple)
  defaultAmountCents: 1_000_000,    // 10 000 €
  annualRatePercent: 3,             // configurable
  availableTerms: [12, 24, 36, 48, 60, 84, 120],
  defaultTerm: 60,
};
```

**Ces valeurs sont des hypothèses de démonstration.** Elles doivent être confirmées avant publication.

## Calculateur

La formule utilisée est celle du prêt amortissable à mensualités constantes :

```
M = P × i / (1 − (1 + i)^(-n))
```

Où `P` est le capital, `i = r / 12` le taux mensuel et `n` le nombre de mensualités.

Les calculs utilisent des montants en centimes pour limiter les erreurs de flottants. La fonction est testée dans `lib/loan.test.ts`.

## Décisions à confirmer avant lancement

- Nom de marque et domaine `.de`
- Statut de l'opérateur (prêteur, intermédiaire, prototype)
- Taux nominal, TAEG et frais réels
- Montants min/max et critères d'éligibilité
- Pays autorisés et langues effectivement supportées
- Base légale, finalités et conservation des données
- Prestataires email, base de données, stockage de fichiers
- Validation des textes réglementaires et traductions

## À venir

- Routes localisées pour les 5 langues (`/fr`, `/es`, `/it`, `/pt`)
- Pages P02, P06–P13 (solutions, processus, FAQ, contact, légal)
- Backend avec base de données PostgreSQL
- Espace d'administration
- Validation serveur, anti-spam, stockage sécurisé des justificatifs
- Emails transactionnels

## Notes de conformité

Ce prototype ne simule pas une approbation de crédit. Aucune donnée réelle n'est collectée ni stockée. Les témoignages, partenaires et certifications fictifs sont volontairement absents.
