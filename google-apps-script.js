// ============================================================================
// Google Apps Script — cripes Candidatures Backend
// ============================================================================
// INSTRUCTIONS :
// 1. Ouvre ton Google Sheet (ex: "Candidatures cripes 2026-2027").
// 2. Sur la première ligne (Row 1), écris les en-têtes :
//    A1: Date | B1: Nom | C1: Email | D1: Filiere | E1: Telephone | F1: Pole | G1: Motivation
// 3. Clique sur "Extensions" > "Apps Script".
// 4. Remplace tout le contenu par le code ci-dessous.
// 5. Clique sur "Enregistrer" (icône disquette).
// 6. Clique sur "Déployer" (bouton bleu en haut à droite) > "Nouveau déploiement".
// 7. Sélectionne le type : "Application Web" (Web App).
// 8. Configuration :
//    - Exécuter en tant que : "Moi" (ton adresse email Google)
//    - Qui a accès : "Tout le monde" (Anyone)  <-- TRÈS IMPORTANT !
// 9. Clique sur "Déployer", autorise les accès Google si demandé.
// 10. Copie l'URL de l'application Web (ex: https://script.google.com/macros/s/.../exec).
// 11. Colle cette URL dans index.html (ligne 921) :
//     const SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/.../exec';
// ============================================================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const p = e.parameter;
    
    // Ajoute la ligne avec les informations soumises
    sheet.appendRow([
      p.date || new Date().toISOString(),
      p.nom || '',
      p.email || '',
      p.filiere || '',
      p.telephone || '',
      p.pole || '',
      p.motivation || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("cripes Apps Script backend is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
