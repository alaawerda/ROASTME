// Test script to verify blog data import
console.log('Testing blog data import...');
console.log('Current working directory:', process.cwd());

try {
  const blogDataModule = require('../app/lib/blog-data');
  console.log('✅ Blog data module loaded successfully');
  console.log('Available exports:', Object.keys(blogDataModule));
  
  if (blogDataModule.blogPosts) {
    console.log(`✅ Found ${blogDataModule.blogPosts.length} blog posts`);
    if (blogDataModule.blogPosts.length > 0) {
      console.log('First blog post:', {
        slug: blogDataModule.blogPosts[0].slug,
        title: blogDataModule.blogPosts[0].title?.en || 'No English title'
      });
    }
  } else {
    console.log('❌ No blogPosts export found');
  }
} catch (error) {
  console.error('❌ Failed to import blog data:', error);
  process.exit(1);
}

console.log('✅ Import test completed successfully');
