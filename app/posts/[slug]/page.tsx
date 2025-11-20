import FoodSelector from '../../components/FoodSelector';
import { postsData } from '../lib/postsData';
import { getPostData } from '../lib/markdown';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';


const postsDirectory = path.join(process.cwd(), 'posts');

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('Slug:', slug);
  // const metadata: any = getPostData(slug);

  if (!slug) {
    return <div>Error: Slug no definido</div>;
  }
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const { default: Post } = await import(`@/posts/${slug}.md`);
  console.log(Post);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  console.log('Metadata:', matterResult.data);

  return (
    <>
    <header>{matterResult.data.title}</header>
      <Post />
      <FoodSelector foods={postsData[slug as keyof typeof postsData].comidas} />
    <footer></footer>
    </>
  )
}