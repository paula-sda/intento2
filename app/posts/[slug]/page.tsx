import FoodSelector from '../../components/FoodSelector';
import { postsData } from '../lib/postsData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Carousel from "@/app/components/Carousel";
import Sitios from "@/app/components/Sitios";
import Intro from "@/app/components/Intro";
import Curiosidades from "@/app/components/Curiosidades";
import { components as globalComponents } from '@/mdx-components'; // Importa los componentes globales

const postsDirectory = path.join(process.cwd(), 'posts');

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) return <div>Error: Slug no definido</div>;

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Separar frontmatter y contenido
  const matterResult = matter(fileContents);
  
  // Obtener solo el contenido MDX sin el frontmatter
  const { content: mdxContent } = matterResult;

  // Combinar componentes globales con los componentes específicos de la página
  const allComponents = {
    ...globalComponents,
    Intro: (props: any) => (
      <>
        <Intro>{props.children}</Intro>
        <Sitios sitios={postsData[slug as keyof typeof postsData].sitios} />
        <FoodSelector foods={postsData[slug as keyof typeof postsData].comidas} />
      </>
    ),
    Curiosidades: (props: any) => (
      <>
        <Curiosidades>{props.children}</Curiosidades>
        <Carousel galeria={postsData[slug as keyof typeof postsData].galeria} />
      </>
    ),
  };

  return (
    <>
      <Header />

      {/* Header con título y descripción del frontmatter */}
      <header className="aboutHeader">
        <h1>{matterResult.data.title}</h1>
        <p>{matterResult.data.description}</p>
      </header>

      {/* Render del MDX con todos los componentes */}
      <MDXRemote 
        source={mdxContent}
        components={allComponents}
      />

      <Footer />
    </>
  );
}