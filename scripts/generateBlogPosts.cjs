const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const contentDir = path.join(__dirname, '../content/blog');
const outputFile = path.join(__dirname, '../data/blogPosts.js');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function generateBlogPosts() {
  const files = getAllMarkdownFiles(contentDir);
  const posts = files.map(filePath => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = path.basename(filePath, '.md');
    const htmlContent = marked(content);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      author: data.author || '',
      content: htmlContent.trim()
    };
  });

  const fileContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)};\n`;

  fs.writeFileSync(outputFile, fileContent, 'utf8');
  console.log(`Generated ${posts.length} blog posts to ${outputFile}`);
}

generateBlogPosts();
