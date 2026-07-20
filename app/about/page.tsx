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
          where I write down what I'm actually learning: models,
          concepts, and the occasional mistake, as I go.
        </p>
        <p>
          The idea is simple: instead of a resume line that just says
          "interested in CRE," this is an actual running record of the
          work. Some of it is rough, some of it I got wrong the first
          time and had to fix - that's on purpose. It's meant to be
          honest, not polished.
        </p>
        <p>
          It actually started with a single conversation with a Princeton
          alum working in CRE, which sent me on a journey of reaching out
          to and calling as many people in the industry as I could,
          something I'm still doing today. Along the way, I got involved
          with the <strong>Princeton Undergraduate Real Estate Group
          (PUREG)</strong>, where I now serve as Co-President. PUREG brings
          in speakers from across the CRE industry, connects undergrads
          with opportunities, and hopefully gets more students excited
          about the field the way those early conversations did for me.
        </p>
        <p>
          What's kept me hooked through hundreds of those conversations is
          how much of this business runs on the human side of things:
          relationships, trust, and people actually picking up the phone
          for each other. That's a big part of why I find CRE so
          compelling.
        </p>
        <p>
          I'm currently exploring opportunities in commercial real estate
          ahead of graduation. Feel free to reach out - happy to talk
          CRE, or anything else on the site:{' '}
          <a href="mailto:cb2119@princeton.edu" className="text-slate underline underline-offset-2">
            cb2119@princeton.edu
          </a>
        </p>
        <p>
          A few things you'll find around the site:
        </p>
        <ul>
          <li><strong>Blog</strong>: daily notes, concepts I'm learning, and the occasional fun tangent</li>
          <li><strong>Macro Perspectives</strong>: how current macro and geopolitical trends filter down into CRE</li>
          <li><strong>Portfolio</strong>: fictional practice deals I've built to sharpen underwriting skills, entirely invented so as not to touch any real client work</li>
        </ul>
      </div>
    </div>
  )
}
