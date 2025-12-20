// components/HowIWorkFocusSection.tsx

import React from "react";

const HowIWorkFocusSection = () => {
  return (
    <section className="w-full box-border bg-neutral-50">
      <div
        className="max-w-5xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-8 sm:py-20 lg:py-32
          text-center lg:text-left"
      >
        {/* Right-aligned container */}
        <div className=" max-w-3xl text-center lg:text-right">
          {/* Eyebrow */}
          <p className="text-xs tracking-wide text-neutral-500 mb-10">
            Where I focus
          </p>

          {/* Primary Statement */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl  heading tracking-tight text-primary-text leading-tight">
            Hit hard at the point where
            <br />
            product, narrative, and trust intersect.
          </h2>

          {/* Intentional Pause */}
          <div className="h-24" />

          {/* Framing Paragraph */}
          <p className="text-lg text-neutral-700 leading-relaxed">
            The work happens early, before decisions harden and explanations
            calcify. This is the moment where structure still matters more than
            polish.
          </p>

          {/* Focus Areas */}
          <div className="mt-32 space-y-24">
            {/* Block 1 */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Product structure
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                How decisions surface, flow, and eventually resolve.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Narrative coherence
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Ensuring the explanation holds across rooms.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Financial logic
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Making assumptions visible and defensible.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Trust signals
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Designing for scrutiny, not confidence.
              </p>
            </div>
          </div>

          {/* Closing Reflection */}
          <p className="mt-32 text-neutral-600 italic">
            The goal isn’t persuasion.
            <br />
            It’s to make the business understandable without explanation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkFocusSection;
