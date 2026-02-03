import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function migrateBlogs() {
  const sourceDir = path.join(__dirname, '../new/app/thoughts/_articles');
  const targetDir = path.join(__dirname, '../docs');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = await glob('*.mdx', { cwd: sourceDir });

  console.log(`Found ${files.length} files to migrate...`);

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    // Extract metadata using regex
    const metadataMatch = content.match(/export const metadata = ({[\s\S]*?})/);
    
    if (metadataMatch) {
      try {
        // Unsafe eval but okay for this specific migration task with trusted local files
        // We wrap it in parentheses to make it an expression
        const metadata = eval(`(${metadataMatch[1]})`);
        
        // Remove the metadata block from content
        let markdownContent = content.replace(metadataMatch[0], '').trim();

        // Construct YAML frontmatter
        const frontmatter = [
          '---',
          `title: ${JSON.stringify(metadata.title)}`, // Use JSON.stringify to handle quotes safely
          `date: '${metadata.date}'`,
          `excerpt: ${JSON.stringify(metadata.description || '')}`,
          '---',
          '',
          markdownContent
        ].join('\n');

        const targetFile = path.join(targetDir, file.replace('.mdx', '.md'));
        fs.writeFileSync(targetFile, frontmatter, 'utf-8');
        console.log(`✅ Migrated: ${file} -> ${path.basename(targetFile)}`);

      } catch (e) {
        console.error(`❌ Failed to parse metadata for ${file}:`, e);
      }
    } else {
      console.warn(`⚠️ No metadata found in ${file}, skipping...`);
    }
  }
}

migrateBlogs().catch(console.error);
