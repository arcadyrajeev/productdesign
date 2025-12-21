// components/FintechClarityPatternSection.tsx

import React from "react";

const FintechClarityPatternSection = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          max-w-5xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-[10vw] sm:py-16 md:py-18 lg:py-12
          text-left
        "
      >
        {/* Eyebrow */}
        <p className="text-xs tracking-wide text-neutral-500 mb-8 sm:mb-10">
          A recurring pattern in fintech
        </p>

        {/* Primary Statement */}
        <h2
          className="
            text-xl sm:text-2xl md:text-3xl lg:text-5xl
            heading
            tracking-tight
            text-primary-text
            max-w-3xl
            mx-auto lg:mx-0
            leading-tight
          "
        >
          Most fintech products don’t fail.
          <br />
          They become hard to explain.
        </h2>

        {/* Intentional Pause */}
        <div className="h-10 sm:h-20 lg:h-24" />

        {/* Secondary Thought */}
        <p
          className="
            max-w-3xl
            mx-auto lg:mx-0
            text-base sm:text-lg
            text-neutral-700
            leading-relaxed
          "
        >
          Internally, the system is coherent. Decisions were made carefully.
          Trade-offs are understood. Over time, that coherence becomes harder to
          communicate externally, and friction accumulates quietly.
        </p>

        {/* Concept Blocks */}
        <div
          className="
           mt-16 sm:mt-20 lg:mt-24
            space-y-16 sm:space-y-20 portrait:lg:space-y-18 landscape:space-y-22
            max-w-3xl
            mx-auto lg:mx-0
          "
        >
          {/* Block 1 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Product signals
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Individual product decisions exist, but they don’t resolve into a
              clear business story.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Narrative drift
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              The explanation shifts depending on who’s in the room.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Metrics without meaning
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Numbers are tracked, but they don’t settle the underlying
              questions.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Trust lag
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Conviction takes longer than it should.
            </p>
          </div>
        </div>

        {/* Closing Reflection */}
        <p
          className="
            mt-12 sm:mt-18 lg:mt-24 
            max-w-3xl
            mx-auto lg:mx-0
            text-neutral-600
            italic
          "
        >
          When clarity breaks, progress slows — even if nothing is technically
          wrong.
        </p>
      </div>
    </section>
  );
};

export default FintechClarityPatternSection;
