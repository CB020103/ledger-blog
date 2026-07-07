import { getSortedPostsMeta } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getSortedPostsMeta()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <section className="mb-10">
        <h1 className="font-display text-3xl mb-3 leading-tight">
          Notes from the process of learning, kept honest.
        </h1>
        <p className="text-ink/70 leading-relaxed max-w-xl">
          Everything here is something I actually worked through — DCFs, CRE
          models, the mistakes and the fixes. Posted as I go, not cleaned up
          after the fact.
        </p>
      </section>

      <div className="rule-line" />
      <div className="divide-y divide-rule">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  )
}
