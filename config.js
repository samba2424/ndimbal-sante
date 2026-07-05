/* ============================================================
   NDIMBAL SANTÉ — Configuration de déploiement
   ============================================================
   Mets ta clé API Anthropic ci-dessous au moment du déploiement :
   tous les utilisateurs de cette installation auront l'IA activée
   sans rien configurer.

   ⚠️ ATTENTION SÉCURITÉ — lis bien ceci :
   - Ne mets JAMAIS une vraie clé dans un site PUBLIC (GitHub public,
     lien ouvert à tous) : n'importe qui pourrait la voler et vider
     ton crédit. Anthropic la désactiverait automatiquement.
   - Ce mode est fait pour : ton téléphone, une tablette de poste de
     santé, un déploiement privé ou un pilote contrôlé.
   - Pour le grand public, la bonne solution est un petit serveur
     qui garde la clé secrète (Phase 2 de notre feuille de route).
   ============================================================ */
window.NDIMBAL_CONFIG = {
  apiKey: ""   // ← colle ta clé ici, entre les guillemets : "sk-ant-..."
};
