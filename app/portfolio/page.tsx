import Link from 'next/link'
import Ticker from '@/components/Ticker'
import { getAllAssetsMeta } from '@/lib/portfolio'

export default function Portfolio() {
  const assets = getAllAssetsMeta()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-display text-3xl mb-2 leading-tight">Portfolio</h1>
      <p className="text-ink/70 mb-8 max-w-xl">
        A set of fake deals I've built to practice underwriting real assets —
        purchase price, rent roll, NOI, cap rate, the works. None of these
        are real transactions, just practice reps.
      </p>
      <div className="rule-line" />
      {assets.length === 0 && (
        <p className="text-ink/50 font-mono text-sm py-8">
          No assets yet — first one's coming soon.
        </p>
      )}
      <div className="divide-y divide-rule">
        {assets.map((asset, i) => (
          <article key={asset.slug} className="py-6">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-ink/50 pt-1 w-8 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <Link href={`/portfolio/${asset.slug}`} className="group">
                    <h2 className="font-display text-xl group-hover:text-brass transition-colors">
                      {asset.name}
                    </h2>
                  </Link>
                  <span className="font-mono text-xs text-ink/50 shrink-0">
                    {asset.assetType} · {asset.location}
                  </span>
                </div>
                <p className="text-ink/70 mt-1 mb-2 leading-relaxed">{asset.thesis}</p>
                <Ticker items={asset.metrics || []} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
