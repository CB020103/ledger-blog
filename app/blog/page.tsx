import { getSortedPostsMeta } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Blog() {
  const posts = getSortedPostsMeta()

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-display text-3xl mb-2 leading-tight">Blog</h1>
      <p className="text-ink/70 mb-8">
        Everything I've written, newest first.
      </p>
      <div className="rule-line" />
      <div className="divide-y divide-rule">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  )
}
