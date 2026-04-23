"use client";

import { useState } from "react";
import { faqs } from "@/lib/home-data";
import { SectionLabel } from "./SectionLabel";

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream px-16 py-20 max-lg:px-8 max-lg:py-[60px]">
      <div className="mx-auto max-w-[800px]">
        <header className="mb-12 text-center">
          <SectionLabel text="HAVE A LOOK AT OUR FAQ" centered />
          <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] font-extrabold text-dark">Frequently Asked Questions</h2>
        </header>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <article
                key={faq.q}
                className={[
                  "overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow",
                  isOpen ? "bg-amber shadow-[0_8px_32px_rgba(245,166,35,0.25)]" : "",
                ].join(" ")}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left text-[15px] font-bold text-dark"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-light transition-all",
                      isOpen ? "bg-[rgba(255,255,255,0.25)] text-dark" : "bg-[rgba(245,166,35,0.15)] text-amber",
                    ].join(" ")}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && faq.a ? <div className="px-6 pb-5 text-sm leading-[1.7] text-dark/85">{faq.a}</div> : null}
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-dark bg-transparent px-6 py-[11px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-all hover:bg-dark hover:text-white">
            VIEW ALL FAQ ->
          </button>
        </div>
      </div>
    </section>
  );
}
