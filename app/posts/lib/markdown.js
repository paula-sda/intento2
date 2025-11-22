import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(slug) {
  try {
    if (!slug || typeof slug !== 'string') {
      return null;
    }

    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    if (!fileContents.trim()) {
      return null;
    }
    
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  } catch (error) {
    console.error('Error en getPostData:', error.message);
    return null;
  }
}