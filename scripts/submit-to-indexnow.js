require('dotenv/config');
const { IndexNowSubmitter } = require('indexnow-submitter');

// Hardcoded blog post slugs since we can't import the TypeScript file directly
const blogPostSlugs = [
  'guide-ultime-roast-maitriser-art-vanne-piquante'
];

async function submitUrls() {
  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const key = process.env.INDEXNOW_API_KEY;

  if (!host) {
    console.error('Missing NEXT_PUBLIC_SITE_URL environment variable for IndexNow.');
    console.error('Please set NEXT_PUBLIC_SITE_URL in your environment variables.');
    process.exit(1);
  }

  if (!key) {
    console.error('Missing INDEXNOW_API_KEY environment variable for IndexNow.');
    console.error('Please set INDEXNOW_API_KEY in your environment variables.');
    process.exit(1);
  }

  const submitter = new IndexNowSubmitter({
    host,
    key,
  });

  if (!blogPostSlugs || blogPostSlugs.length === 0) {
    console.error('No blog post slugs found to submit to IndexNow.');
    process.exit(1);
  }

  const urls = blogPostSlugs.map(slug => `${host}/blog/${slug}`);
  
  console.log(`Preparing to submit ${urls.length} URLs to IndexNow...`);
  console.log(`Host: ${host}`);
  console.log(`URLs to submit:`, urls);

  try {
    const result = await submitter.submitUrls(urls);
    console.log('IndexNow submission result:', result);
    console.log(`Successfully submitted ${urls.length} URLs to IndexNow`);
  } catch (error) {
    console.error('Failed to submit URLs to IndexNow:', error.message);
    if (error.response) {
      console.error('Response details:', error.response.data);
    }
  }
}

submitUrls();
