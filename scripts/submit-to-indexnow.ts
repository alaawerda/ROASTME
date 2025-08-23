import 'dotenv/config';
import { IndexNowSubmitter } from 'indexnow-submitter';
import { blogPosts } from '../app/lib/blog-data';

async function submitUrls() {
  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const key = process.env.INDEXNOW_API_KEY;

  if (!host || !key) {
    console.error('Missing required environment variables for IndexNow.');
    process.exit(1);
  }



  const submitter = new IndexNowSubmitter({
    host,
    key,
  });

  const urls = blogPosts.map(post => `${host}/blog/${post.slug}`);

  try {
    const result = await submitter.submitUrls(urls);
    console.log('IndexNow submission result:', result);
  } catch (error: any) {
    console.error('Failed to submit URLs to IndexNow:', error.message);
  }
}

submitUrls();
