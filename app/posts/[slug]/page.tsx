export async function generateStaticParams() {
  return [
    { slug: 'post1' },
    { slug: 'post2' },
    { slug: 'post3' }
  ];
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {  
  const { slug } = await params
  console.log('Slug:', slug);
  
  if (!slug) {
    return <div>Error: Slug no definido</div>;
  }

  const { default: Post } = await import(`@/posts/${slug}.md`)
 
  return (
      <Post />
  )
}

export const dynamicParams = false;