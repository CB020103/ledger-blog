import Link from 'next/link'
import Ticker from './Ticker'
import { MacroMeta } from '@/lib/macro'

export default function MacroCard({ post, index }: { post: MacroMeta; index: number }) {
  return (
    <article className="py-6">
      <div className="flex items-start gap-4">
        <span className="font-mono text-xs text-ink/50 pt-1 w-8 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <span className="font-mono text-[10px] tracking-widest uppercase text-signal">Macro</span>
          <div className="flex items-baseline justify-between gap-4">
            <Link href={`/macro/${post.slug}`} className="group">
              <h2 className="font-display font-semibold text-xl group-hover:text-signal transition-colors">
                {post.title}
              </h2>
            </Link>
            <span className="font-mono text-xs text-ink/50 shrink-0">{post.date}</span>
          </div>
          <p className="text-ink/70 mt-1 mb-2 leading-relaxed">{post.summary}</p>
          <Ticker items={post.metrics || []} />
        </div>
      </div>
    </article>
  )
}
