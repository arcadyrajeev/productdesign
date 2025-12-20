// components/FinalCTASection.tsx

import React from "react";
import Link from "next/link";

const FinalCTASection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24 py-24">
        <div
          className="
            w-full
            border border-neutral-700/40
            rounded-2xl
            px-8 sm:px-12
            py-16
          "
        >
          <div
            className="
              flex flex-col
              gap-12
              items-center text-center
              lg:flex-row lg:items-center lg:justify-between
              lg:text-left
            "
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 max-w-xl">
              If the problem feels familiar,
              <br className="hidden sm:block" />a conversation usually helps.
            </h2>

            {/* CTA */}
          </div>
          <div className="w-full justify-center lg:justify-end flex">
            {" "}
            <Link
              href="/contact"
              className="
                text-sm sm:text-base
                font-medium
                border border-neutral-700
                p-4 rounded-full
                text-neutral-900
               
                hover:text-neutral-700
                transition-colors
              "
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
