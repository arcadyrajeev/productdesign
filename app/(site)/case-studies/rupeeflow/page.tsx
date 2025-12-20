// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RupeeFlow — Fintech Case Study",
  description:
    "Designing a fintech system to be legible to users, investors, and the market.",
};

export default function RupeeFlowCaseStudy() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            RupeeFlow
          </h1>
          <p className="mt-6 text-xl md:text-2xl leading-snug text-neutral-800">
            Designing a fintech system to be legible to users, investors, and
            the market
          </p>
          <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-2xl">
            Built from scratch with brand, product, and narrative designed as a
            single, coherent system rather than disconnected deliverables.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Fintech</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Brand, Website, Product, Pitch
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Role</dt>
              <dd className="mt-1 font-medium">
                Brand, Product & Narrative Partner
              </dd>
            </div>
          </dl>
        </header>
      </section>

      {/* Context */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">Context</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            RupeeFlow is a fintech platform designed to handle financial flows
            where trust, correctness, and clarity are non-negotiable. The
            product was conceived and built from zero, without legacy
            constraints or inherited assumptions.
          </p>
          <p>
            At this stage, the primary risk was not technical feasibility. The
            risk was misinterpretation — by users evaluating safety, by
            investors evaluating viability, and by the market evaluating
            seriousness.
          </p>
          <p>
            Early clarity matters disproportionately in fintech. Ambiguity
            compounds faster than progress, especially in regulated or
            trust-sensitive systems.
          </p>
        </div>
      </section>

      {/* Core Challenge */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">
          The Core Challenge
        </h2>
        <div className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            Early-stage fintechs are judged less on polish and more on whether
            the business can be clearly understood and responsibly trusted.
            Execution was not the bottleneck.
          </p>
          <p className="mt-4">
            The challenge was making the business legible from day one.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>
              <span className="font-medium text-neutral-900">Trust:</span>{" "}
              Signaling financial credibility without over-assertion.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Market understanding:
              </span>{" "}
              Demonstrating a precise grasp of where the product fits.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Investor interpretation:
              </span>{" "}
              Making assumptions visible and structurally defensible.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Product clarity:
              </span>{" "}
              Showing how money moves, why it moves, and what outcomes result.
            </li>
          </ul>
        </div>
      </section>

      {/* Section A */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">
          Brand, Website & Product Design
        </h2>

        {/* Brand & Positioning */}
        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold">Brand & Positioning</h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The brand was anchored in financial credibility and operational
            seriousness. Instead of aspirational language or future-heavy
            promises, the positioning focused on what the system enables today
            and how reliably it does so.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Visual and verbal decisions were filtered through one question:
            does this increase perceived legitimacy in a regulated context?
          </p>
        </div>

        {/* Website & External Communication */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold">
            Website & External Communication
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The website was treated as a clarity surface, not a marketing asset.
            Its role was to reduce explanation overhead in conversations with
            users, partners, and investors.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Messaging, structure, and flow were aligned so that external
            interpretation matched internal intent, minimizing ambiguity across
            audiences.
          </p>
        </div>

        {/* Product & UX */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold">Product & UX</h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The product was structured around financial decisions rather than
            feature lists. Interfaces prioritize visibility of flows, balances,
            and outcomes over secondary controls.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            By reducing cognitive load, the system allows users to understand
            state and consequence without constant interpretation.
          </p>
        </div>

        {/* Image Grid Placeholder */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="aspect-[4/3] bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm text-neutral-500">
            Product Interface
          </div>
          <div className="aspect-[4/3] bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm text-neutral-500">
            Dashboard View
          </div>
        </div>
      </section>

      {/* Section B */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">
          Pitch Design & Investor Narrative
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The pitch was designed as a parallel system to the product. Logic,
            sequencing, and framing mirrored how the business actually works,
            rather than how it could be rhetorically positioned.
          </p>
          <p>
            Market framing focused on a clearly defined beachhead, with
            assumptions surfaced explicitly. This allowed investors to evaluate
            the model without hidden leaps of faith.
          </p>
          <p>
            The narrative was optimized for legibility, not persuasion. The goal
            was shared understanding, not compression into slogans.
          </p>
        </div>

        <aside className="mt-10 max-w-3xl border-l-2 border-neutral-300 pl-6 text-neutral-800">
          <p className="italic">
            “The goal was not to predict outcomes, but to frame the business so
            it could be evaluated clearly under uncertainty.”
          </p>
        </aside>
      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">Outcome</h2>
        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Coherent brand, product, and narrative from day one</li>
          <li>Reduced explanation during demos and strategic conversations</li>
          <li>Stronger trust signals in a regulated fintech context</li>
          <li>Business perceived as intentional rather than experimental</li>
        </ul>
      </section>

      {/* Insight */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-semibold tracking-tight">Insight</h2>
        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
          “In fintech, the first version sets the trust ceiling.”
        </blockquote>
        <p className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          Early alignment between brand, product, and narrative compounds over
          time. Clarity reduces friction, accelerates decision-making, and
          becomes a durable financial advantage rather than a cosmetic one.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            If clarity is the bottleneck, this work helps.
          </p>
          <a
            href="/contact"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </main>
  );
}
