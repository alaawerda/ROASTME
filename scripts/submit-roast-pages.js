const https = require('https');

// URLs à soumettre pour indexation (français + anglais)
const urlsToSubmit = [
  'https://roastme.chat',
  'https://roastme.chat/roast',
  'https://roastme.chat/roast-me',
  'https://roastme.chat/en',
  'https://roastme.chat/en/roast',
  'https://roastme.chat/en/roast-me'
];

// Fonction pour soumettre à Google
function submitToGoogle(url) {
  return new Promise((resolve, reject) => {
    const submitUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent('https://roastme.chat/sitemap.xml')}`;
    
    https.get(submitUrl, (res) => {
      console.log(`✅ Sitemap soumis à Google - Status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.error(`❌ Erreur Google: ${err.message}`);
      reject(err);
    });
  });
}

// Fonction pour soumettre à Bing
function submitToBing(url) {
  return new Promise((resolve, reject) => {
    const submitUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent('https://roastme.chat/sitemap.xml')}`;
    
    https.get(submitUrl, (res) => {
      console.log(`✅ Sitemap soumis à Bing - Status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.error(`❌ Erreur Bing: ${err.message}`);
      reject(err);
    });
  });
}

// Fonction pour soumettre à IndexNow
function submitToIndexNow() {
  return new Promise((resolve, reject) => {
    const indexNowData = JSON.stringify({
      host: "roastme.chat",
      key: "c4a33c0b-9e4b-4f8a-a4e9-d4e5f6a7b8c9",
      keyLocation: "https://roastme.chat/c4a33c0b-9e4b-4f8a-a4e9-d4e5f6a7b8c9.txt",
      urlList: urlsToSubmit
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(indexNowData)
      }
    };

    const req = https.request(options, (res) => {
      console.log(`✅ URLs soumises à IndexNow - Status: ${res.statusCode}`);
      resolve(res.statusCode);
    });

    req.on('error', (err) => {
      console.error(`❌ Erreur IndexNow: ${err.message}`);
      reject(err);
    });

    req.write(indexNowData);
    req.end();
  });
}

// Fonction principale
async function submitAllPages() {
  console.log('🚀 Début de la soumission des pages optimisées pour "roast" et "roast me" (FR + EN)...\n');
  
  try {
    // Soumettre à Google
    console.log('📊 Soumission à Google...');
    await submitToGoogle();
    
    // Soumettre à Bing  
    console.log('📊 Soumission à Bing...');
    await submitToBing();
    
    // Soumettre à IndexNow
    console.log('📊 Soumission à IndexNow...');
    await submitToIndexNow();
    
    console.log('\n🎉 Toutes les soumissions terminées avec succès !');
    console.log('\n📋 URLs soumises (Français + Anglais):');
    urlsToSubmit.forEach(url => console.log(`   - ${url}`));
    
    console.log('\n🌍 Marchés ciblés:');
    console.log('   🇫🇷 France: "roast me", "roast"');
    console.log('   🇺🇸🇬🇧 USA/UK: "roast me", "roast"');
    
    console.log('\n📈 Prochaines étapes:');
    console.log('   1. Vérifier Google Search Console dans 24-48h');
    console.log('   2. Surveiller les positions pour "roast" et "roast me" (EN + FR)');
    console.log('   3. Analyser le trafic organique dans Google Analytics');
    console.log('   4. Surveiller Google.com (EN) et Google.fr (FR)');
    
  } catch (error) {
    console.error('\n❌ Erreur lors de la soumission:', error.message);
  }
}

// Exécuter le script
submitAllPages();
