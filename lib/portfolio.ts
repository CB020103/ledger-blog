import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio')

export type AssetMeta = {
  slug: string
  name: string
  assetType: string
  location: string
  thesis: string
  metrics?: string[]
}

function ensureDirExists() {
  if (!fs.existsSync(portfolioDirectory)) {
    fs.mkdirSync(portfolioDirectory, { recursive: true })
  }
}

export function getAllAssetsMeta(): AssetMeta[] {
  ensureDirExists()
  const fileNames = fs.readdirSync(portfolioDirectory).filter((f) => f.endsWith('.md'))
  const assets = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(portfolioDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      name: data.name,
      assetType: data.assetType,
      location: data.location,
      thesis: data.thesis,
      metrics: data.metrics || [],
    }
  })
  return assets
}

export function getAllAssetSlugs() {
  ensureDirExists()
  const fileNames = fs.readdirSync(portfolioDirectory).filter((f) => f.endsWith('.md'))
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getAssetBySlug(slug: string) {
  const fullPath = path.join(portfolioDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(remarkGfm).use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    name: data.name as string,
    assetType: data.assetType as string,
    location: data.location as string,
    thesis: data.thesis as string,
    metrics: (data.metrics as string[]) || [],
    contentHtml,
  }
}
