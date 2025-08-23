// Test script to verify basic functionality
console.log('Testing basic functionality...');
console.log('Current working directory:', process.cwd());

// Check if we can access environment variables
const host = process.env.NEXT_PUBLIC_SITE_URL;
const key = process.env.INDEXNOW_API_KEY;

console.log('Environment variables:');
console.log('- NEXT_PUBLIC_SITE_URL:', host ? '✅ Set' : '❌ Missing');
console.log('- INDEXNOW_API_KEY:', key ? '✅ Set' : '❌ Missing');

// Check if we can require the indexnow-submitter package
try {
  const { IndexNowSubmitter } = require('indexnow-submitter');
  console.log('✅ IndexNow submitter package loaded successfully');
} catch (error) {
  console.error('❌ Failed to load IndexNow submitter package:', error.message);
}

console.log('✅ Basic functionality test completed');
