import Link from 'next/link'
import { getSortedPostsMeta } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getSortedPostsMeta().slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <section className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">
          Welcome
        </p>
        <h1 className="font-display text-3xl mb-4 leading-tight">
          I'm learning finance and CRE in public, and writing down
          everything as I go.
        </h1>
        <p className="text-ink/70 leading-relaxed max-w-xl">
          Check the <Link href="/blog" className="text-slate underline underline-offset-2">Blog</Link> for
          daily notes and learning, the{' '}
          <Link href="/portfolio" className="text-slate underline underline-offset-2">Portfolio</Link> for
          fake deals I've built to practice modeling real assets, or the{' '}
          <Link href="/about" className="text-slate underline underline-offset-2">About</Link> page
          to learn more about me and the site.
        </p>
      </section>

      <div className="rule-line" />
      <div className="flex items-baseline justify-between pt-6 pb-2">
        <h2 className="font-display text-lg">Recent entries</h2>
        <Link href="/blog" className="font-mono text-xs text-ink/50 hover:text-brass">
          view all &rarr;
        </Link>
      </div>
      <div className="divide-y divide-rule">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  )
}
