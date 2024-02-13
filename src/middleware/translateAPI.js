const fs = require('fs');
const path = require('path');

// path and file system for the html
const indexPath = path.resolve('.','src','views','index.ejs');
const indexFS = fs.readFileSync(indexPath, "utf-8");

//translation parameters
const projectId = 'hip-informatics-402504';
const location = 'global';
const text = indexFS;

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

async function translateTextToPT() {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/html', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'pt-br',
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
    fs.writeFileSync(indexPath, translation.translatedText)

  }
  
}

async function translateTextToEN() {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/html', // mime types: text/plain, text/html
    sourceLanguageCode: 'pt-br',
    targetLanguageCode: 'en',
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
    fs.writeFileSync(indexPath, translation.translatedText);
    
  }
  
}

translateAPI = (req, res, next) => {
  if (req.body.lang === "pt"){
      translateTextToPT();
      next();
      }
    else if (req.body.lang === "en"){
      translateTextToEN();
      next()
  } else {
    next();
    
  }
}

// // translateTextToPT();
// translateTextToEN();

module.exports = {translateAPI}