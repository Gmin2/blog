import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processBlogPosts() {
  const docsDir = path.join(__dirname, '../docs');
  const outputFile = path.join(__dirname, '../src/data/blogData.ts');

  // Find all markdown files in docs/
  const files = await glob('**/*.md', { cwd: docsDir });

  const posts = [];

  for (const file of files) {
    const filePath = path.join(docsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContent);

    // Generate ID from filename
    const id = path.basename(file, '.md');

    posts.push({
      id,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: content.trim(),
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Anonymous',
      readTime: data.readTime || '5 min read',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
    });
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate TypeScript file
  const output = `// This file is auto-generated from markdown files in docs/
// Do not edit manually - run 'pnpm run process-blog' to regenerate

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
`;

  fs.writeFileSync(outputFile, output, 'utf-8');
  console.log(`✅ Processed ${posts.length} blog posts from docs/`);
  console.log(`📝 Generated: ${outputFile}`);
}

processBlogPosts().catch(console.error);
