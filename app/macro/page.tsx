import { getSortedMacroMeta } from '@/lib/macro'
import MacroCard from '@/components/MacroCard'

export default function Macro() {
  const posts = getSortedMacroMeta()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-display text-3xl mb-2 leading-tight">Macro Perspectives</h1>
      <p className="text-ink/70 mb-8 max-w-xl">
        Tracking macro and geopolitical trends and how they filter down into
        the real estate I care about.
      </p>
      <div className="rule-line" />
      {posts.length === 0 && (
        <p className="text-ink/50 font-mono text-sm py-8">
          No posts yet, first one's coming soon.
        </p>
      )}
      <div className="divide-y divide-rule">
        {posts.map((post, i) => (
          <MacroCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  )
}
