export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">
        About
      </p>
      <h1 className="font-display text-3xl mb-6 leading-tight">
        Connor Buck
      </h1>

      <div className="prose-ledger max-w-xl">
        <p>
          I'm a student at Princeton University, Class of 2027, studying
          Operations Research &amp; Financial Engineering (ORFE). I'm
          currently interning in commercial real estate, and this site is
          where I write down what I'm actually learning &mdash; models,
          concepts, and the occasional mistake &mdash; as I go.
        </p>
        <p>
          The idea is simple: instead of a resume line that just says
          "interested in CRE," this is an actual running record of the
          work. Some of it is rough, some of it I got wrong the first
          time and had to fix &mdash; that's on purpose. It's meant to be
          honest, not polished.
        </p>
        <p>
          A few things you'll find around the site:
        </p>
        <ul>
          <li><strong>Blog</strong> &mdash; daily notes, concepts I'm learning, and the occasional fun tangent</li>
          <li><strong>Portfolio</strong> &mdash; fictional practice deals I've built to sharpen underwriting skills, entirely invented so as not to touch any real client work</li>
        </ul>
        <p>
          Feel free to reach out if you want to talk finance, CRE, or
          anything else on the site.
        </p>
      </div>
    </div>
  )
}
