# 🩺 NDIMBAL SANTÉ — Guide de Samba

## C'est quoi ?
Ton agence de **10 médecins spécialistes IA** pour l'Afrique. Ils parlent à voix haute 🔊 et écoutent au micro 🎤 — conçus pour être utiles même aux personnes qui ne savent pas lire.

## Comment l'ouvrir ?
**Option 1 (la plus simple)** : double-clique sur le fichier `index.html` → il s'ouvre dans ton navigateur. C'est tout.

**Option 2 (avec serveur, recommandé pour le micro)** : dans un terminal, tape :
```
node ndimbal-serve.js
```
(depuis le dossier INSIVIA) puis ouvre **http://localhost:3007**

> ⚠️ **Le micro : les 3 règles pour qu'il marche**
> 1. Ouvre l'app via le serveur (`node ndimbal-serve.js` → http://localhost:3007) ou en ligne — **pas en double-cliquant le fichier** (le navigateur bloque le micro en mode `file://`)
> 2. Utilise **Google Chrome** ou **Microsoft Edge** (la reconnaissance vocale a besoin d'internet)
> 3. Quand le navigateur demande l'autorisation du microphone : clique **Autoriser** (si tu as refusé par erreur : icône 🔒 à gauche de l'adresse → Microphone → Autoriser)
>
> L'app te guide maintenant elle-même : si le micro est bloqué, le médecin t'explique quoi faire.

## Les deux modes de l'application

| Mode | Comment | Ce que ça donne |
|---|---|---|
| **Démonstration** (par défaut) | Rien à faire | Chaque médecin répond aux cas les plus fréquents (fièvre, palu, grossesse, tension…) avec des réponses médicales préparées et vérifiées |
| **Intelligence Claude** (le vrai pouvoir) | Bouton « ⚙️ Connexion IA » en haut → colle ta clé API Anthropic | Chaque médecin devient une vraie IA qui comprend N'IMPORTE quelle question, avec sa personnalité et ses garde-fous de sécurité |

Pour obtenir une clé API : crée un compte sur **console.anthropic.com** → « API Keys » → « Create Key ». La clé reste uniquement dans ton navigateur.

## Ce qui est déjà intégré (v2)
- ✅ 10 spécialistes avec identité, **photo hyperréaliste** (dossier `avatars/`), voix et domaine d'expertise
- ✅ Avatars **vivants** : respiration, clignement des yeux (avatars dessinés), halo doré + mouvement quand le médecin parle
- ✅ Synthèse vocale améliorée (choix automatique de la meilleure voix française du téléphone)
- ✅ Micro à **états colorés** : or = prêt, **rouge pulsant = je vous écoute** (avec bandeau), gris = le médecin réfléchit
- ✅ **Mode conversation 🔁** : après chaque réponse du médecin, le micro se rallume tout seul — dialogue mains libres
- ✅ **Interface bilingue Français / Wolof 🇸🇳** (bouton en haut) ; avec la clé IA, les médecins répondent en wolof
- ✅ 📷 **Analyse de photos** (avec clé IA) : radio, IRM, échographie, ordonnance, analyse de sang, photo de peau ou d'œil — le médecin explique en mots simples et oriente. Jamais de diagnostic définitif.
- ✅ Détecteur de **signes de danger** → alerte urgence immédiate, prioritaire sur tout
- ✅ **Conversations mémorisées** : chaque médecin se souvient de votre dernière discussion (bouton 🗑️ pour effacer)
- ✅ 📢 **Campagnes de prévention** audio (palu, vaccins, tension, eau propre) — à écouter et partager
- ✅ 📍 Bouton « Trouver un centre de santé proche » (ouvre la carte)
- ✅ Message éthique : l'app **oriente** vers les vrais soignants, elle ne les remplace pas

## Les fichiers du projet
- `index.html` — toute l'application (un seul fichier !)
- `avatars/1.webp … 10.webp` — les portraits générés par IA (si un portrait manque, l'avatar dessiné prend le relais)
- `rapport-enquete.md` — l'enquête complète sur la pénurie de spécialistes en Afrique (le document fondateur)
- `business-plan.md` — la stratégie de monétisation et le pitch
- `README.md` — ce guide

## Les prochaines étapes (notre feuille de route)
1. **Tester avec de vraies personnes** autour de toi — leurs retours valent de l'or
2. **Mettre en ligne** (gratuit) : Netlify, Vercel ou GitHub Pages → accessible à n'importe qui avec un lien
3. **Voix wolof naturelle** : la synthèse du navigateur n'a pas de voix wolof — il faudra une voix cloud (ex. voix clonée éthiquement) pour lire le wolof correctement
4. **Version WhatsApp** : là où sont vraiment les gens (via l'API WhatsApp Business)
5. **Mode hors-ligne** : pour les zones sans internet stable
6. **Monétisation** : suivre le plan dans `business-plan.md` (ONG, campagnes sponsorisées, télécoms, version Pro soignants)
