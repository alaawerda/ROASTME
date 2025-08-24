import { IndexNowSubmitter } from 'indexnow-submitter';

// Try to import blog data with fallback
let blogPosts: any[] = [];
try {
  console.log('Attempting to import blog data...');
  console.log('Current working directory:', process.cwd());
  console.log('Attempting to require: ../app/lib/blog-data');
  
  const blogDataModule = require('../app/lib/blog-data');

  
  console.log('Blog data module loaded:', Object.keys(blogDataModule));
  blogPosts = blogDataModule.blogPosts || [];
  console.log(`Found ${blogPosts.length} blog posts`);
} catch (error: any) {
  console.error('Failed to import blog data:', error);
  console.error('Current working directory:', process.cwd());
  console.error('Error details:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}

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

  if (!blogPosts || blogPosts.length === 0) {
    console.error('No blog posts found to submit to IndexNow.');
    process.exit(1);
  }

  const urls = blogPosts.map(post => `${host}/blog/${post.slug}`);
  
  console.log(`Preparing to submit ${urls.length} URLs to IndexNow...`);
  console.log(`Host: ${host}`);
  console.log(`First few URLs:`, urls.slice(0, 3));

  try {
    const result = await submitter.submitUrls(urls);
    console.log('IndexNow submission result:', result);
    console.log(`Successfully submitted ${urls.length} URLs to IndexNow`);
  } catch (error: any) {
    console.error('Failed to submit URLs to IndexNow:', error.message);
    if (error.response) {
      console.error('Response details:', error.response.data);
    }
  }
}

submitUrls();
