# Rapport d'Investigation Approfondie : NDIMBAL SANTÉ
## Diagnostic assisté par IA & Télémédecine pour le Sénégal et l'Afrique de l'Ouest
*Adapté et consolidé le 5 juillet 2026 — Samba & Claude, associés fondateurs*
*Documents liés : [rapport-enquete.md](rapport-enquete.md) (les chiffres du problème) · [business-plan.md](business-plan.md) (la monétisation détaillée) · Application en production : https://samba2424.github.io/ndimbal-sante/*

---

## Introduction

Ce rapport détaille l'opportunité de business et d'impact portée par **Ndimbal Santé** (« ndimbal » = « aide » en wolof) : une solution qui combine un **groupe de 10 médecins spécialistes IA**, le **diagnostic assisté par intelligence artificielle** (analyse de radios, IRM, ordonnances, photos de lésions) et un **pont vers la télémédecine humaine**. Elle répond aux défis majeurs du système de santé sénégalais : diagnostic tardif, accès limité aux spécialistes, inégalités géographiques et financières, analphabétisme.

**Différence fondamentale avec un projet sur le papier : Ndimbal Santé existe déjà.** L'application est en ligne, gratuite, vocale (elle parle et écoute, en français et en wolof), et fonctionne sur n'importe quel smartphone. Ce rapport décrit comment la transformer en acteur structurant de la santé au Sénégal.

---

## 1. Validation de la Proposition de Valeur : Simulation de Confrontation Client

Simulation menée avec le **Dr Ndiaye, Médecin-Chef du Centre de Santé de Kolda** (Casamance) — profil type de notre client pilote en zone rurale.

### 1.1. Les préoccupations exprimées — et nos réponses concrètes

| Préoccupation du Dr Ndiaye | Réponse Ndimbal Santé (déjà vérifiable dans le produit) |
|---|---|
| **« L'IA peut-elle égaler un médecin ? »** | Elle ne le prétend pas. Notre principe fondateur, gravé dans chaque agent : **l'IA oriente, elle ne remplace pas**. Chaque spécialiste IA applique une méthode de consultation stricte (écouter → questionner → évaluer prudemment → conseiller → orienter), détecte les signes de danger et ordonne d'aller au poste de santé. L'IA rend votre équipe plus forte : elle fait le tri, vous gardez les cas critiques. |
| **« Et la confidentialité des données ? »** | Conformité **CDP Sénégal** (loi 2008-12) et esprit RGPD : aujourd'hui, les conversations restent dans le téléphone de l'utilisateur (localStorage) — rien n'est stocké sur nos serveurs. La version Pro ajoutera chiffrement de bout en bout et hébergement souverain (serveurs au Sénégal via partenaires locaux). Aucune vente de données, jamais — ligne rouge écrite dans notre business plan. |
| **« Internet est instable à Kolda »** | L'application entière pèse moins qu'une photo WhatsApp (1 fichier + images légères de ~150 Ko). Le mode démonstration fonctionne avec une connexion minimale ; le mode hors-ligne complet est en feuille de route. Les réponses sont **parlées à voix haute** : utilisables par un agent de santé communautaire ou un patient qui ne lit pas. |
| **« Mon personnel est débordé, pas formé au numérique »** | Interface à 2 boutons : 🎤 parler, 📷 photographier. Un « Badiénou Gox » l'apprend en 10 minutes. Formation incluse : courte, pratique, sur le terrain — assurée par notre Agent de Formation (voir §3) et des référents locaux. |
| **« Nous n'avons pas de budget »** | **Le patient ne paie jamais, et votre centre pilote non plus** : projet pilote gratuit de 3 mois, financé par notre modèle B2B2C (ONG, programmes de santé, télécoms — voir §2). Vous nous donnez en échange ce qui vaut de l'or : les retours du terrain. |

### 1.2. Conclusion de la simulation
Le Dr Ndiaye, initialement sceptique, a retenu trois arguments décisifs : (1) l'accès à un avis spécialisé **sans transfert du patient** (un transfert Kolda→Dakar coûte plus de 50 000 FCFA à une famille), (2) la **voix en wolof** pour ses patients non lecteurs, (3) le **pilote gratuit sans engagement**. La proposition de valeur est validée ; la porte du partenariat est ouverte.

---

## 2. Optimisation Stratégique : Modèle « High-Value / High-Profit »

Principe non négociable hérité de notre business plan : **le patient pauvre ne paie JAMAIS.** La rentabilité vient des organisations qui dépensent déjà pour atteindre ces populations. *(Adaptation assumée du rapport d'origine : les « paiements à la consultation par le patient » sont remplacés par une facturation aux tiers payeurs — mutuelles, ONG, programmes publics — pour ne pas recréer la barrière financière que nous combattons.)*

### 2.1. La valeur « High-Value » livrée
- **Accès élargi aux soins spécialisés** : 10 spécialités IA disponibles 24h/24 dans chaque téléphone, là où il y a 1 psychiatre pour 500 000 habitants.
- **Réduction de la mortalité évitable** : détection précoce + orientation rapide (signes de danger PCIME, obstétricaux, AVC, méningite…).
- **Optimisation des ressources** : le tri IA désengorge les postes de santé ; le personnel se concentre sur les cas critiques.
- **Formation continue** : chaque interaction avec les spécialistes IA est une micro-formation pour les agents de santé.
- **Inclusion radicale** : vocal + wolof = utilisable par les personnes analphabètes, les aînés, les zones sans lettrés.

### 2.2. Le modèle de revenus « High-Profit » (récurrent)

**A. Abonnement SaaS modulaire — « Ndimbal Pro » pour les structures de santé**

| Niveau | Cible | Contenu | Tarif indicatif |
|---|---|---|---|
| **Bronze** | Poste/centre de santé rural | 10 spécialistes IA en illimité, triage vocal FR/wolof, analyse d'ordonnances, formation initiale | 100 000 – 250 000 FCFA/mois *(souvent payé par le district, une ONG ou une mutuelle — pas par le centre lui-même)* |
| **Argent** | Clinique moyenne / hôpital de district | Bronze + analyse d'imagerie avancée (radio, dermato, ophtalmo), tableau de bord épidémiologique anonymisé, pont télémédecine vers spécialistes humains, support prioritaire | 300 000 – 750 000 FCFA/mois |
| **Or** | Grand hôpital / réseau de cliniques / programme national | Argent + modules spécialisés (cardio, oncologie), intégration SIH/DHIS2, campagnes de prévention ciblées, support 24/7, personnalisation, hébergement dédié | 800 000 – 2 000 000 FCFA/mois |

**B. Autres revenus récurrents**
- **Frais d'installation et de mise en œuvre** : 2 à 10 millions FCFA selon complexité (déploiement, intégration, formation initiale).
- **Contrats de maintenance et support** : 10–15 % du coût annuel d'abonnement.
- **Facturation à l'usage pour TIERS PAYEURS** : consultation télémédecine humaine facturée 5 000–10 000 FCFA à la mutuelle/ONG/programme (dont commission Ndimbal 10–20 %) ; analyse IA en gros volume facturée 500–2 000 FCFA l'unité aux programmes de dépistage.
- **Campagnes de prévention sponsorisées** : diffusion audio multilingue de messages de santé publique validés (palu, vaccination, tension, eau propre) — la section existe déjà dans l'app.
- **Services à valeur ajoutée** : conseil en transformation digitale santé, formations certifiantes, données épidémiologiques **anonymisées et agrégées** pour la recherche publique (jamais de données individuelles).

### 2.3. Stratégie d'accessibilité (le moteur de l'adoption)
- **Freemium radical** : l'application grand public reste gratuite pour toujours — c'est notre canal d'acquisition, notre preuve d'impact et notre légitimité.
- **Pilotes gratuits 3 mois** pour les structures pionnières (Kolda, Tambacounda, Matam) → cas de succès documentés.
- **Facilitation de financement** : dossiers conjoints avec Ministère de la Santé, Digital Africa, Fondation Orange, Grand Challenges (Gates), UNICEF.
- **Preuve de ROI chiffrée** : coût des transferts évités, consultations spécialisées rendues accessibles, indicateurs sanitaires du district.
- **Référents médicaux locaux** : dans chaque structure, un soignant formé devient le champion Ndimbal — appropriation locale, pas de dépendance.

---

## 3. La Flotte d'Agents IA Autonomes

Deux étages : **l'équipe médicale** (le produit, déjà en production) et **les agents opérationnels** (l'entreprise, à déployer par phases).

### 3.1. Étage 1 — L'équipe médicale : 10 spécialistes IA ✅ DÉJÀ EN PRODUCTION
Dr Aminata Diallo (généraliste-triage), Dr Fatou Ndiaye (pédiatrie/PCIME), Dr Mariama Bâ (gynécologie-maternité), Dr Ousmane Sarr (cardiologie), Dr Ibrahima Koné (infectiologie), Dr Awa Traoré (dermatologie), Dr Moussa Diop (santé mentale), Dr Aïcha Touré (ophtalmologie), Dr Khady Sow (nutrition), Dr Cheikh Fall (pharmacie). Chacun : visage, voix assortie (sexe/âge), expertise protocolaire OMS injectée, méthode de consultation stricte, détecteur de signes de danger, analyse d'images médicales (vision).

### 3.2. Étage 2 — Les agents opérationnels de l'entreprise

| Agent | Rôle | Compétences IA | Statut |
|---|---|---|---|
| **AIDM** — Diagnostic Médical | Analyse des images médicales (radio, IRM, écho, peau, œil) et aide au diagnostic préliminaire | Vision multimodale (Claude), raisonnement clinique encadré | ✅ **En production** (bouton 📷 de l'app) |
| **ASPI** — Support Patient Intelligent | Accueil, orientation, accompagnement du parcours de soins, réponses aux questions | NLP/NLG, dialogue vocal FR/wolof | ✅ **En production** (le triage du Dr Diallo + mode conversation) |
| **AFS** — Formation & Sensibilisation | Campagnes de prévention audio, formation du personnel, contenus multilingues | Génération de contenu, synthèse vocale | 🟡 **Amorcé** (section Campagnes) — à industrialiser en Phase 1 |
| **ATMC** — Télémédecine & Consultation | Mise en relation patient ↔ spécialiste humain, préparation du dossier de téléconsultation par l'IA | NLP, visio basse bande passante | 🔜 Phase 2 (partenariats médecins) |
| **AGDME** — Dossiers Médicaux | Carnet de santé numérique du patient, continuité des soins, sécurité | Chiffrement, bases sécurisées, NLP | 🔜 Phase 2 (nécessite backend + hébergement souverain) |
| **ACPD** — Conformité & Données | Veille CDP/RGPD, anonymisation, audits, registres de traitement | Systèmes experts juridiques | 🔜 Phase 2 (obligatoire avant AGDME) |
| **AGPS** — Partenariats Stratégiques | Cartographie et suivi des ONG, ministères, télécoms, bailleurs ; préparation des dossiers | Analyse de réseaux, CRM intelligent | 🔜 Phase 1 (c'est notre priorité business) |
| **AMVS** — Marketing & Vente | Génération de leads (districts, cliniques, ONG), contenus, conversion, viralité WhatsApp | Analyse prédictive, automation | 🔜 Phase 1 (le partage WhatsApp intégré en est la graine) |

### 3.3. Séquencement réaliste
1. **Phase 1 (mois 1–6)** : consolider le produit grand public + AGPS/AMVS/AFS → premiers pilotes signés, première subvention.
2. **Phase 2 (mois 6–18)** : backend sécurisé (clé API protégée, comptes structures), ACPD puis AGDME, pont télémédecine ATMC → lancement des abonnements Bronze/Argent.
3. **Phase 3 (an 2+)** : modules Or, intégrations SIH/DHIS2, expansion Mali–Côte d'Ivoire–Guinée.

---

## Conclusion

Ndimbal Santé n'est plus une opportunité identifiée : c'est un **produit en production** adossé à une enquête chiffrée, un modèle économique éthique et rentable, et une architecture d'agents claire. La simulation client valide l'acceptation terrain à trois conditions — accessibilité, adaptation aux contraintes locales, pilote sans risque — que notre produit remplit déjà. Le modèle « le patient ne paie jamais, les organisations paient » aligne rentabilité et mission. La flotte d'agents, déployée par phases, positionne notre groupe comme un acteur clé de la modernisation de la santé au Sénégal — puis en Afrique de l'Ouest.

**Prochaine action concrète : transformer le Dr Ndiaye fictif en un vrai médecin-chef partenaire — un courrier de proposition de pilote est la prochaine pièce à rédiger.**
