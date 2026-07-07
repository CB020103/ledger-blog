import { getAllAssetSlugs, getAssetBySlug } from '@/lib/portfolio'
import Ticker from '@/components/Ticker'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllAssetSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Asset({ params }: { params: { slug: string } }) {
  const asset = await getAssetBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <Link href="/portfolio" className="font-mono text-xs text-ink/50 hover:text-brass">
        &larr; back to portfolio
      </Link>

      <h1 className="font-display text-3xl mt-4 mb-1 leading-tight">{asset.name}</h1>
      <p className="font-mono text-xs text-ink/50 mb-4">
        {asset.assetType} · {asset.location}
      </p>

      <Ticker items={asset.metrics} />

      <div
        className="prose-ledger mt-8"
        dangerouslySetInnerHTML={{ __html: asset.contentHtml }}
      />
    </article>
  )
}
