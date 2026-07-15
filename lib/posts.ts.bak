import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  metrics?: string[]
}

export function getSortedPostsMeta(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      metrics: data.metrics || [],
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(remarkGfm).use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    metrics: (data.metrics as string[]) || [],
    contentHtml,
  }
}
