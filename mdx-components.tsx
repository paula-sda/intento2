import type { MDXComponents } from 'mdx/types'
import Intro from '@/app/components/Intro'
import Curiosidades from '@/app/components/Curiosidades'

 
const components: MDXComponents = {
  Intro,
  Curiosidades,
  h1: (props) => <h1 style={{ fontSize: '2rem', color: '#ff7a00', textAlign: 'center', marginBottom: '1rem' }} {...props} />,
  p: (props) => <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.6, fontSize: '1.1rem', color: '#555', textAlign: 'center' }} {...props} />,
}

// Exportamos el objeto components para poder importarlo en otros archivos
export { components }
 
export function useMDXComponents(): MDXComponents {
  return components
}