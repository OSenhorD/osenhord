import fs from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

import { profile, projects, siteUrl } from './src/data/portfolio.ts'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Gera dist/projetos/<slug>.html (servido em /projetos/<slug> pelo cleanUrls da Vercel) com título, descrição e imagem de prévia
// de cada projeto, para que os links compartilhados mostrem a prévia certa.
// Também gera o sitemap.xml com todas as páginas.
function projectPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'project-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const pages = projects.filter((project) => project.slug)

      for (const project of pages) {
        const url = `${siteUrl}/projetos/${project.slug}`
        const title = escapeHtml(`${project.title} · ${profile.name}`)
        const description = escapeHtml(project.description)
        const html = template
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:image" content=")[^"]*/, `$1${siteUrl}/og/${project.slug}.jpg`)
          .replace(/(<meta property="og:image:alt" content=")[^"]*/, `$1${escapeHtml(project.title)}`)
        fs.mkdirSync(path.join(outDir, 'projetos'), { recursive: true })
        fs.writeFileSync(path.join(outDir, 'projetos', `${project.slug}.html`), html)
      }

      const urls = [`${siteUrl}/`, ...pages.map((project) => `${siteUrl}/projetos/${project.slug}`)]
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>
`
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), projectPages()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
