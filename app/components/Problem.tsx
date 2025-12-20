// components/FintechClarityPatternSection.tsx

import React from "react";

const FintechClarityPatternSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl text-center lg:text-left mx-auto px-6 sm:px-10 lg:px-24 py-32">
        {/* Eyebrow */}
        <p className="text-xs tracking-wide text-neutral-500 mb-10">
          A recurring pattern in fintech
        </p>

        {/* Primary Statement */}
        <h2 className="text-4xl  sm:text-5xl  heading tracking-tight text-primary-text max-w-3xl leading-tight">
          Most fintech products don’t fail.
          <br />
          They become hard to explain.
        </h2>

        {/* Intentional Pause */}
        <div className="h-24" />

        {/* Secondary Thought */}
        <p className="max-w-3xl text-lg text-neutral-700 leading-relaxed">
          Internally, the system is coherent. Decisions were made carefully.
          Trade-offs are understood. Over time, that coherence becomes harder to
          communicate externally, and friction accumulates quietly.
        </p>

        {/* Concept Blocks */}
        <div className="mt-32 space-y-24 max-w-3xl">
          {/* Block 1 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Product signals
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Individual product decisions exist, but they don’t resolve into a
              clear business story.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Narrative drift
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              The explanation shifts depending on who’s in the room.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Metrics without meaning
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Numbers are tracked, but they don’t settle the underlying
              questions.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">
              Trust lag
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Conviction takes longer than it should.
            </p>
          </div>
        </div>

        {/* Closing Reflection */}
        <p className="mt-32 max-w-3xl text-neutral-600 italic">
          When clarity breaks, progress slows — even if nothing is technically
          wrong.
        </p>
      </div>
    </section>
  );
};

export default FintechClarityPatternSection;
