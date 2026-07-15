import { getAllMacroSlugs, getMacroBySlug } from '@/lib/macro'
import Ticker from '@/components/Ticker'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllMacroSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function MacroPost({ params }: { params: { slug: string } }) {
  const post = await getMacroBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <Link href="/macro" className="font-mono text-xs text-ink/50 hover:text-brass">
        &larr; back to macro perspectives
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
