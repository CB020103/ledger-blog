import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import Ticker from '@/components/Ticker'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <Link href="/" className="font-mono text-xs text-ink/50 hover:text-brass">
        &larr; back to the ledger
      </Link>

      <h1 className="font-display text-3xl mt-4 mb-2 leading-tight">{post.title}</h1>
      <p className="font-mono text-xs text-ink/50 mb-4">{post.date}</p>

      <Ticker items={post.metrics} />

      <div
        className="prose-ledger mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}
