export type PolicyBlock =
  | { t: "h2" | "h3" | "p"; text: string }
  | { t: "ul" | "ol" | "meta"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type Policy = {
  id: string;
  label: string;
  title: string;
  pdf: string;
  subtitle?: string;
  meta: string[];
  note?: { label: string; items: string[] };
  blocks: PolicyBlock[];
};

// Text below is copied word for word from the PDFs in public/docs.
export const policies: Policy[] = [
  {
    "id": "terms",
    "label": "Terms of Service",
    "title": "Terms & Conditions",
    "pdf": "/docs/terms-condition.pdf",
    "meta": [
      "Effective Date: May 1, 2026",
      "Version: v1.0.0.0",
      "Platform: LEDDAR",
      "Website: www.myleddar.com",
      "Operator: Leddar Systems Limited"
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "1. Introduction"
      },
      {
        "t": "p",
        "text": "These Terms & Conditions govern access to and use of the LEDDAR platform, including its website, dashboards, forms, messaging tools, production request tools, sample request tools, payment flows, verification flows, and related services."
      },
      {
        "t": "p",
        "text": "By creating an account, applying for access, submitting a request, accepting work, uploading documents, making payment, or otherwise using LEDDAR, you agree to be bound by these Terms."
      },
      {
        "t": "p",
        "text": "If you do not agree, do not use the platform."
      },
      {
        "t": "h2",
        "text": "2. Who These Terms Apply To"
      },
      {
        "t": "p",
        "text": "These Terms apply to all users of LEDDAR, including:"
      },
      {
        "t": "ul",
        "items": [
          "Brands: businesses, founders, consultants, retailers, and other buyers seeking leather production or related manufacturing services.",
          "Artisans: independent makers, workshops, production experts, and manufacturing partners who perform work through the platform.",
          "Visitors: anyone browsing or interacting with the platform before registration."
        ]
      },
      {
        "t": "h2",
        "text": "3. What LEDDAR Is"
      },
      {
        "t": "p",
        "text": "LEDDAR is a technology platform that helps users:"
      },
      {
        "t": "ul",
        "items": [
          "submit and manage production requests",
          "request and review samples",
          "discover and work with verified artisans",
          "track production progress",
          "manage selected payments and records",
          "complete verification and compliance steps",
          "communicate within a structured workflow"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR is not:"
      },
      {
        "t": "ul",
        "items": [
          "the manufacturer of goods",
          "the employer of any artisan",
          "an agent of any user unless expressly stated in writing",
          "a financial institution, bank, or payment processor"
        ]
      },
      {
        "t": "p",
        "text": "Where payments are processed on the platform, they are processed through third-party payment providers selected by LEDDAR. The Central Bank of Nigeria maintains lists of licensed payment operators and processors. (Central Bank of Nigeria)"
      },
      {
        "t": "h2",
        "text": "4. Eligibility"
      },
      {
        "t": "p",
        "text": "To use LEDDAR, you must:"
      },
      {
        "t": "ul",
        "items": [
          "be at least 18 years old",
          "have legal capacity to enter into binding contracts",
          "provide accurate and complete information",
          "use the platform only for lawful business purposes"
        ]
      },
      {
        "t": "p",
        "text": "If you are signing up on behalf of a company or business, you confirm that you are authorized to bind that entity."
      },
      {
        "t": "h2",
        "text": "5. Account Registration"
      },
      {
        "t": "p",
        "text": "To access LEDDAR, users may be required to create an account or apply for access."
      },
      {
        "t": "p",
        "text": "You agree to:"
      },
      {
        "t": "ul",
        "items": [
          "provide current, accurate, and complete information",
          "keep your login credentials secure",
          "notify LEDDAR promptly of any unauthorized use",
          "update your information when it changes"
        ]
      },
      {
        "t": "p",
        "text": "You are responsible for all activity under your account unless caused by LEDDAR’s own fault."
      },
      {
        "t": "p",
        "text": "LEDDAR may reject, suspend, restrict, or remove any account if information provided is false, incomplete, misleading, unlawful, or creates compliance or platform risk."
      },
      {
        "t": "h2",
        "text": "6. Verification and KYC"
      },
      {
        "t": "p",
        "text": "LEDDAR may require identity, business, and compliance checks before certain actions can be taken, including but not limited to:"
      },
      {
        "t": "ul",
        "items": [
          "requesting pricing",
          "paying deposits",
          "requesting samples",
          "proceeding to production",
          "receiving payouts",
          "accessing certain platform features"
        ]
      },
      {
        "t": "p",
        "text": "Verification may include:"
      },
      {
        "t": "ul",
        "items": [
          "personal identification",
          "business details",
          "phone and email verification",
          "bank account validation",
          "any additional checks reasonably required for trust, fraud prevention, or legal compliance"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR may use third-party verification providers for this process."
      },
      {
        "t": "p",
        "text": "Failure to complete required verification may result in restricted access, delayed transactions, inability to proceed with orders, or account suspension."
      },
      {
        "t": "h2",
        "text": "7. User Types and Specific Roles"
      },
      {
        "t": "h3",
        "text": "7.1 Brands"
      },
      {
        "t": "p",
        "text": "Brands use LEDDAR to request samples, request production pricing, place production requests, track orders, review outputs, and make payments."
      },
      {
        "t": "h3",
        "text": "7.2 Artisans"
      },
      {
        "t": "p",
        "text": "Artisans use LEDDAR to receive opportunities, accept assignments, perform production work, provide updates, submit samples or outputs, and receive payments where applicable."
      },
      {
        "t": "h3",
        "text": "7.3 No Employment Relationship"
      },
      {
        "t": "p",
        "text": "Artisans are independent contractors or independent business operators. Nothing in these Terms creates an employment, partnership, agency, joint venture, or fiduciary relationship between LEDDAR and any artisan."
      },
      {
        "t": "h2",
        "text": "8. Platform Access and Approval"
      },
      {
        "t": "p",
        "text": "LEDDAR may operate as an approval-based platform. Access is not automatic. LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "approve or reject applications",
          "restrict certain features until verification is complete",
          "grant, suspend, or remove access based on quality, trust, compliance, performance, fraud risk, or business reasons"
        ]
      },
      {
        "t": "h2",
        "text": "9. Brand Terms"
      },
      {
        "t": "p",
        "text": "If you use LEDDAR as a Brand, you agree to the following."
      },
      {
        "t": "h3",
        "text": "9.1 Accuracy of Requests"
      },
      {
        "t": "p",
        "text": "You must provide clear, accurate, and complete production information, including where relevant:"
      },
      {
        "t": "ul",
        "items": [
          "product type",
          "quantity",
          "reference files",
          "dimensions",
          "materials",
          "timelines",
          "quality expectations",
          "branding and finishing details"
        ]
      },
      {
        "t": "p",
        "text": "You are responsible for delays, errors, or quality issues caused by incomplete or incorrect instructions."
      },
      {
        "t": "h3",
        "text": "9.2 Samples"
      },
      {
        "t": "p",
        "text": "Where LEDDAR offers a sample-first process:"
      },
      {
        "t": "ul",
        "items": [
          "sample fees must be paid before the sample workflow begins",
          "sample terms shown at checkout or on the relevant page apply",
          "sample approval may be required before full production",
          "revisions may be limited",
          "physical delivery of samples may or may not be included depending on the stated process"
        ]
      },
      {
        "t": "h3",
        "text": "9.3 Quotes and Pricing"
      },
      {
        "t": "p",
        "text": "Quotes issued through LEDDAR are based on the information provided and may be subject to:"
      },
      {
        "t": "ul",
        "items": [
          "validity periods",
          "quantity assumptions",
          "material assumptions",
          "revision if scope changes",
          "additional costs for urgent delivery, added complexity, or new requirements"
        ]
      },
      {
        "t": "p",
        "text": "A quote is not an obligation to begin work until all required approvals and payments have been completed."
      },
      {
        "t": "h3",
        "text": "9.4 Production Requests"
      },
      {
        "t": "p",
        "text": "A production request becomes active only when all required conditions are met, which may include:"
      },
      {
        "t": "ul",
        "items": [
          "quote acceptance",
          "verification completion",
          "required payment or deposit",
          "any requested clarification"
        ]
      },
      {
        "t": "h3",
        "text": "9.5 Reviews and Approvals"
      },
      {
        "t": "p",
        "text": "Brands must review samples, updates, outputs, or milestones promptly."
      },
      {
        "t": "p",
        "text": "If a Brand delays review or approval unreasonably, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "mark the item as pending Brand action",
          "pause timelines",
          "delay production progress",
          "treat silence after a defined review period as acceptance where the workflow or order terms expressly allow it"
        ]
      },
      {
        "t": "h3",
        "text": "9.6 Payments"
      },
      {
        "t": "h3",
        "text": "9.6 Payments by Brands"
      },
      {
        "t": "p",
        "text": "Brands agree that where a production order is approved and proceeds through the LEDDAR workflow, payment obligations may include:"
      },
      {
        "t": "ul",
        "items": [
          "any required sample fee;",
          "any required quote or production deposit;",
          "the Brand-side production payment, including LEDDAR’s applicable Brand-side transaction fee; ● any approved additional charges, revisions, taxes, or third-party costs."
        ]
      },
      {
        "t": "p",
        "text": "A Brand acknowledges that LEDDAR’s transaction fee includes a 20% Brand-side fee on eligible production transactions unless otherwise stated in writing or on the platform."
      },
      {
        "t": "p",
        "text": "Failure to make required payment may delay, pause, or cancel production."
      },
      {
        "t": "h3",
        "text": "9.7 No Off-Platform Circumvention"
      },
      {
        "t": "p",
        "text": "A Brand must not use LEDDAR to identify an artisan and then bypass the platform to transact directly where the relationship originated through LEDDAR, for a period of [12 months] from first introduction, unless LEDDAR gives written consent."
      },
      {
        "t": "p",
        "text": "If a Brand circumvents LEDDAR, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "suspend the account",
          "block future access",
          "charge platform fees that would have been earned",
          "pursue any legal remedy available"
        ]
      },
      {
        "t": "h2",
        "text": "10. Artisan Terms"
      },
      {
        "t": "p",
        "text": "If you use LEDDAR as an Artisan, you agree to the following."
      },
      {
        "t": "h3",
        "text": "10.1 Independent Status"
      },
      {
        "t": "p",
        "text": "You act as an independent contractor or business. You are responsible for your own:"
      },
      {
        "t": "ul",
        "items": [
          "taxes",
          "staff",
          "tools",
          "workspace",
          "production methods",
          "legal compliance"
        ]
      },
      {
        "t": "h3",
        "text": "10.2 Accuracy of Profile"
      },
      {
        "t": "p",
        "text": "You must keep your artisan profile accurate, including:"
      },
      {
        "t": "ul",
        "items": [
          "capabilities",
          "specialties",
          "sample work",
          "location",
          "capacity",
          "timelines",
          "availability",
          "verification status"
        ]
      },
      {
        "t": "h3",
        "text": "10.3 Acceptance of Work"
      },
      {
        "t": "p",
        "text": "You must not accept work you cannot deliver."
      },
      {
        "t": "p",
        "text": "By accepting a request or assignment, you confirm that you can meet the agreed:"
      },
      {
        "t": "ul",
        "items": [
          "specifications",
          "quantity",
          "quality level",
          "production timeline"
        ]
      },
      {
        "t": "h3",
        "text": "10.4 Quality and Standards"
      },
      {
        "t": "p",
        "text": "You must perform work in a professional manner and in line with:"
      },
      {
        "t": "ul",
        "items": [
          "the approved brief",
          "the agreed sample",
          "any quality standard communicated through the platform",
          "lawful and safe production practices"
        ]
      },
      {
        "t": "h3",
        "text": "10.5 Updates and Communication"
      },
      {
        "t": "p",
        "text": "You must provide timely and honest updates through the platform and respond reasonably to requests for clarification."
      },
      {
        "t": "h3",
        "text": "10.6 Delays and Issues"
      },
      {
        "t": "p",
        "text": "If you foresee a delay, defect, shortage, or problem, you must notify LEDDAR and the Brand promptly through the platform."
      },
      {
        "t": "p",
        "text": "Failure to disclose material issues may affect payments, future assignments, or account standing."
      },
      {
        "t": "h3",
        "text": "10.7 Payments to Artisans"
      },
      {
        "t": "p",
        "text": "Where the platform facilitates Artisan payouts for production work:"
      },
      {
        "t": "ul",
        "items": [
          "the Artisan acknowledges that LEDDAR applies an 10% Artisan-side platform fee on eligible production transactions unless otherwise stated in writing or on the platform;",
          "such fee may be deducted directly from amounts otherwise payable to the Artisan;",
          "eligible Artisan payouts for production work are ordinarily structured in two tranches of 35% each, being:",
          "the first tranche to commence production; and",
          "the second tranche upon completion of production, subject in each case to the applicable platform workflow, approvals, and payment conditions."
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR may delay, suspend, adjust, or withhold payout where there is a payment failure, suspected fraud, compliance concern, dispute, scope issue, or other valid platform reason."
      },
      {
        "t": "h3",
        "text": "10.8 No Off-Platform Circumvention"
      },
      {
        "t": "p",
        "text": "An Artisan must not use LEDDAR to access Brand opportunities and then move the relationship off-platform where the introduction originated through LEDDAR, for a period of [12 months], unless LEDDAR gives written consent."
      },
      {
        "t": "p",
        "text": "If an Artisan circumvents LEDDAR, LEDDAR may suspend the account, withhold unpaid platform-enabled opportunities where legally permitted, charge lost fees, and pursue any legal remedy available."
      },
      {
        "t": "h2",
        "text": "11. Orders, Samples, Quotes, and Production"
      },
      {
        "t": "p",
        "text": "LEDDAR may support one or more of the following workflows:"
      },
      {
        "t": "ul",
        "items": [
          "sample-only",
          "quote-only",
          "sample to production",
          "direct production",
          "milestone-based production"
        ]
      },
      {
        "t": "p",
        "text": "The exact workflow for any request depends on the product, category, user status, and platform process in force at the time."
      },
      {
        "t": "p",
        "text": "LEDDAR may set rules on:"
      },
      {
        "t": "ul",
        "items": [
          "sample fees",
          "deposit requirements",
          "number of revisions",
          "response deadlines",
          "milestone approvals",
          "delivery conditions",
          "file submission formats",
          "acceptable product categories"
        ]
      },
      {
        "t": "h2",
        "text": "12. Pricing, Fees, and Taxes"
      },
      {
        "t": "h2",
        "text": "12. Pricing, Platform Fees, and Taxes"
      },
      {
        "t": "p",
        "text": "LEDDAR charges a transaction fee of 30% on eligible production orders completed through the platform."
      },
      {
        "t": "p",
        "text": "This fee is structured as follows:"
      },
      {
        "t": "ul",
        "items": [
          "20% is charged on the Brand side as part of the total production payment made through the platform.",
          "10% is charged on the Artisan side and deducted from the Artisan’s production payout."
        ]
      },
      {
        "t": "p",
        "text": "Unless otherwise stated for a specific order, the remaining production value payable to the Artisan shall be structured as follows:"
      },
      {
        "t": "ul",
        "items": [
          "35% as the first tranche to commence production, after all required approvals, verification checks, and payment conditions have been satisfied.",
          "35% upon completion of production, subject to the applicable workflow, confirmation of completion, and any required quality review or acceptance process."
        ]
      },
      {
        "t": "p",
        "text": "For clarity:"
      },
      {
        "t": "ul",
        "items": [
          "the total transaction value for a qualifying production order is allocated across the Brand payment, LEDDAR fee, and Artisan payout according to the platform pricing structure in force at the time of the order;",
          "LEDDAR may deduct its platform fee before disbursing funds to the Artisan;",
          "taxes, payment processing charges, and other applicable charges may be shown separately where required; ● LEDDAR may revise fee structures from time to time, provided such revisions are disclosed before the relevant transaction is confirmed."
        ]
      },
      {
        "t": "p",
        "text": "All prices may be stated exclusive or inclusive of VAT or other taxes, as indicated on the platform or invoice."
      },
      {
        "t": "p",
        "text": "Users are responsible for taxes applicable to their own business unless the law requires otherwise."
      },
      {
        "t": "h2",
        "text": "13. Payments and Third-Party Providers"
      },
      {
        "t": "p",
        "text": "Where a production order proceeds through the platform, payment may be collected and administered according to the applicable production workflow."
      },
      {
        "t": "p",
        "text": "For qualifying production orders:"
      },
      {
        "t": "ul",
        "items": [
          "the Brand may be required to make payment through the platform before production begins;",
          "the first Artisan tranche may be released only after all required preconditions are satisfied, including order confirmation, verification status, and any required deposit or payment confirmation;",
          "the second Artisan tranche may be released only after production completion and satisfaction of the relevant completion conditions under the platform workflow;",
          "LEDDAR may hold, route, deduct, delay, suspend, or reverse amounts as reasonably required for fraud prevention, failed payment, compliance review, platform fee deductions, or other lawful platform controls."
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR is not a bank or financial institution and does not provide regulated banking services. Payment processing is handled through third-party payment providers."
      },
      {
        "t": "h2",
        "text": "14. Invoices, Billing, and Records"
      },
      {
        "t": "p",
        "text": "LEDDAR may issue invoices, receipts, summaries, or payment records through the platform."
      },
      {
        "t": "p",
        "text": "Users are responsible for reviewing invoices and raising any billing question within [7] days of issue."
      },
      {
        "t": "p",
        "text": "If no issue is raised within that period, the invoice or record may be treated as accepted, except in cases of clear fraud or manifest error."
      },
      {
        "t": "h2",
        "text": "15. Delivery, Shipping, and Logistics"
      },
      {
        "t": "p",
        "text": "Unless expressly stated otherwise, LEDDAR is not the shipping carrier and does not itself transport goods."
      },
      {
        "t": "p",
        "text": "LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "facilitate updates",
          "record shipping milestones",
          "help coordinate logistics",
          "integrate logistics partners later"
        ]
      },
      {
        "t": "p",
        "text": "Delivery risk, timelines, carrier performance, and freight terms should be stated in the relevant order workflow or separately agreed."
      },
      {
        "t": "h2",
        "text": "16. Revisions, Changes, and Scope Creep"
      },
      {
        "t": "p",
        "text": "If a Brand changes scope after quote approval or after work has started, LEDDAR or the Artisan may:"
      },
      {
        "t": "ul",
        "items": [
          "revise pricing",
          "revise timelines",
          "require a new sample",
          "pause work until approval is received"
        ]
      },
      {
        "t": "p",
        "text": "A revision request is not the same as a complete redesign."
      },
      {
        "t": "p",
        "text": "LEDDAR may define what counts as:"
      },
      {
        "t": "ul",
        "items": [
          "minor correction",
          "permitted revision",
          "scope change",
          "new request"
        ]
      },
      {
        "t": "h2",
        "text": "17. Cancellations"
      },
      {
        "t": "h3",
        "text": "17.1 By Brands"
      },
      {
        "t": "p",
        "text": "A Brand may cancel only as permitted by the applicable workflow and before certain stages of work have begun."
      },
      {
        "t": "p",
        "text": "If a Brand cancels:"
      },
      {
        "t": "ul",
        "items": [
          "deposits or sample fees may be non-refundable",
          "work already performed may still be chargeable",
          "purchased materials may still be payable",
          "platform fees may still apply where clearly disclosed"
        ]
      },
      {
        "t": "h3",
        "text": "17.2 By Artisans"
      },
      {
        "t": "p",
        "text": "An Artisan may not cancel accepted work without valid reason. If an Artisan cancels:"
      },
      {
        "t": "ul",
        "items": [
          "account standing may be affected",
          "future opportunities may be restricted",
          "any advance payment consequences will be handled under the relevant workflow and law"
        ]
      },
      {
        "t": "h3",
        "text": "17.3 By LEDDAR"
      },
      {
        "t": "p",
        "text": "LEDDAR may pause or cancel a request or account where necessary for:"
      },
      {
        "t": "ul",
        "items": [
          "fraud prevention",
          "legal compliance",
          "safety",
          "abusive conduct",
          "payment failure",
          "severe quality concerns",
          "repeated breach of these Terms"
        ]
      },
      {
        "t": "h3",
        "text": "17.4 Effect of Cancellation on Tranche Payments"
      },
      {
        "t": "p",
        "text": "If a production order is cancelled after the first Artisan tranche has been released:"
      },
      {
        "t": "ul",
        "items": [
          "the first tranche may be treated as earned to the extent work has commenced or materials have been committed;",
          "the second tranche shall not become payable unless the completion conditions are satisfied;",
          "LEDDAR may deduct applicable fees, costs, or offsets before any refund or balance reconciliation is made."
        ]
      },
      {
        "t": "p",
        "text": "If cancellation occurs before production commences, any refund or reversal shall be handled according to the applicable workflow, disclosed fees, and payment provider rules."
      },
      {
        "t": "h2",
        "text": "18. Quality, Acceptance, and Defects"
      },
      {
        "t": "p",
        "text": "LEDDAR may provide workflow tools for review, acceptance, and issue reporting."
      },
      {
        "t": "p",
        "text": "Unless otherwise stated for a particular order:"
      },
      {
        "t": "ul",
        "items": [
          "Brands must inspect and review samples or delivered goods promptly",
          "acceptance may occur through express approval or use of the goods",
          "reported defects must be specific and documented",
          "cosmetic variation inherent in handcrafted work may not always constitute a defect if within the agreed standard"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR may assist communication and workflow handling, but does not guarantee that every dispute will result in a refund, remake, or approval."
      },
      {
        "t": "h2",
        "text": "19. Disputes Between Users"
      },
      {
        "t": "p",
        "text": "Where LEDDAR offers dispute support, it may request evidence from both sides and make platform-level decisions about workflow status, visibility, or next actions."
      },
      {
        "t": "p",
        "text": "LEDDAR may consider:"
      },
      {
        "t": "ul",
        "items": [
          "briefs and approved specifications",
          "sample approval status",
          "uploaded files",
          "timeline records",
          "platform messages",
          "production updates",
          "payment records",
          "delivery records",
          "any other relevant material"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR’s role in a dispute is operational and platform-based. Unless the law requires otherwise, it is not acting as a court, arbitrator, or insurer."
      },
      {
        "t": "h2",
        "text": "20. User Content and Uploaded Materials"
      },
      {
        "t": "p",
        "text": "Users may upload:"
      },
      {
        "t": "ul",
        "items": [
          "designs",
          "specifications",
          "logos",
          "text",
          "measurements",
          "product images",
          "videos",
          "production updates",
          "messages"
        ]
      },
      {
        "t": "p",
        "text": "You remain responsible for what you upload."
      },
      {
        "t": "p",
        "text": "You confirm that you have the right to use and share all content uploaded to LEDDAR."
      },
      {
        "t": "p",
        "text": "You grant LEDDAR a non-exclusive license to host, store, process, display, and use such content as necessary to operate the platform."
      },
      {
        "t": "h2",
        "text": "21. Intellectual Property"
      },
      {
        "t": "h3",
        "text": "21.1 LEDDAR IP"
      },
      {
        "t": "p",
        "text": "All rights in the LEDDAR platform, including software, workflows, branding, interface design, and operating logic, belong to LEDDAR or its licensors."
      },
      {
        "t": "p",
        "text": "You may not:"
      },
      {
        "t": "ul",
        "items": [
          "copy the platform",
          "reverse engineer it",
          "scrape or extract data improperly",
          "create derivative tools from it",
          "misuse its content or branding"
        ]
      },
      {
        "t": "h3",
        "text": "21.2 User IP"
      },
      {
        "t": "p",
        "text": "Brands retain ownership of their designs and materials, except to the extent they grant rights needed for platform operation and production execution."
      },
      {
        "t": "p",
        "text": "Artisans retain ownership of their pre-existing know-how, techniques, and general methods, but not of any Brand-owned design or confidential material."
      },
      {
        "t": "h3",
        "text": "21.3 Feedback"
      },
      {
        "t": "p",
        "text": "If you give LEDDAR suggestions or feedback, LEDDAR may use them without restriction or payment."
      },
      {
        "t": "h2",
        "text": "22. Confidentiality"
      },
      {
        "t": "p",
        "text": "Users must treat non-public commercial and technical information received through LEDDAR as confidential, including:"
      },
      {
        "t": "ul",
        "items": [
          "designs",
          "specs",
          "pricing",
          "customer lists",
          "samples",
          "process details",
          "internal messages"
        ]
      },
      {
        "t": "p",
        "text": "You must not disclose or misuse another user’s confidential information without authority."
      },
      {
        "t": "h2",
        "text": "23. Platform Rules and Prohibited Conduct"
      },
      {
        "t": "p",
        "text": "You must not:"
      },
      {
        "t": "ul",
        "items": [
          "provide false information",
          "impersonate any person or business",
          "misuse another user’s documents or designs",
          "upload unlawful, infringing, or harmful content",
          "interfere with platform security",
          "use the platform to harass, threaten, or defraud",
          "bypass LEDDAR to avoid fees",
          "attempt to manipulate reviews, records, or payment status",
          "use bots, scripts, or scraping tools without permission"
        ]
      },
      {
        "t": "h2",
        "text": "24. Suspensions, Restrictions, and Termination"
      },
      {
        "t": "p",
        "text": "LEDDAR may suspend, restrict, or terminate access if:"
      },
      {
        "t": "ul",
        "items": [
          "you breach these Terms",
          "you fail verification",
          "you create legal, financial, or reputational risk",
          "you engage in fraud, abuse, or circumvention",
          "you repeatedly fail to meet platform standards"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR may also preserve records, block certain features, or keep certain account data where reasonably necessary for compliance, dispute handling, security, or legal obligations."
      },
      {
        "t": "h2",
        "text": "25. Data Protection and Privacy"
      },
      {
        "t": "p",
        "text": "LEDDAR processes personal data in connection with account setup, verification, production workflows, communications, and payment-related activities. Nigeria’s Data Protection Act 2023 established the NDPC and provides for lawful, fair, and accountable processing of personal data, along with data subject rights. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "By using LEDDAR, you acknowledge that:"
      },
      {
        "t": "ul",
        "items": [
          "your data may be processed to provide platform services",
          "your data may be shared with service providers involved in verification, hosting, messaging, analytics, or payment processing ● your data may be processed on lawful bases such as contract, consent, or legal obligation, as applicable"
        ]
      },
      {
        "t": "p",
        "text": "Your privacy rights and our detailed data handling rules should be set out in LEDDAR’s Privacy Policy, which forms part of the platform’s legal framework."
      },
      {
        "t": "h2",
        "text": "26. Availability and Changes to the Platform"
      },
      {
        "t": "p",
        "text": "LEDDAR may update, improve, suspend, or remove features at any time."
      },
      {
        "t": "p",
        "text": "LEDDAR does not guarantee that the platform will always be uninterrupted, error-free, or available on every device or network."
      },
      {
        "t": "h2",
        "text": "27. Disclaimers"
      },
      {
        "t": "p",
        "text": "To the maximum extent permitted by law:"
      },
      {
        "t": "ul",
        "items": [
          "the platform is provided on an “as is” and “as available” basis",
          "LEDDAR does not guarantee uninterrupted service",
          "LEDDAR does not guarantee that every request will receive a quote, sample, match, or successful production outcome ● LEDDAR does not guarantee that every user is suitable for every project ● LEDDAR is not responsible for business losses arising solely from another user’s failure to perform, except to the extent caused by LEDDAR’s own breach or legal responsibility"
        ]
      },
      {
        "t": "h2",
        "text": "28. Limitation of Liability"
      },
      {
        "t": "p",
        "text": "To the fullest extent permitted by law, LEDDAR shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profit, revenue, goodwill, opportunity, or data."
      },
      {
        "t": "p",
        "text": "LEDDAR’s aggregate liability for any claim arising out of or relating to the platform shall not exceed the total fees paid by the claimant to LEDDAR in the [3 months] preceding the event giving rise to the claim, except where the law does not permit such limitation."
      },
      {
        "t": "p",
        "text": "Nothing in these Terms excludes liability that cannot lawfully be excluded."
      },
      {
        "t": "h2",
        "text": "29. Indemnity"
      },
      {
        "t": "p",
        "text": "You agree to indemnify and hold harmless LEDDAR, its affiliates, directors, officers, employees, and agents from claims, losses, costs, and expenses arising from:"
      },
      {
        "t": "ul",
        "items": [
          "your breach of these Terms",
          "your misuse of the platform",
          "your infringement of another person’s rights",
          "your unlawful, fraudulent, or negligent conduct",
          "disputes caused by your false instructions, false content, or undisclosed defects"
        ]
      },
      {
        "t": "h2",
        "text": "30. Notices and Communications"
      },
      {
        "t": "p",
        "text": "LEDDAR may send notices by:"
      },
      {
        "t": "ul",
        "items": [
          "email",
          "dashboard notification",
          "SMS",
          "WhatsApp",
          "website posting",
          "any other contact method you provide"
        ]
      },
      {
        "t": "p",
        "text": "You are responsible for keeping your contact details current."
      },
      {
        "t": "h2",
        "text": "31. Amendments"
      },
      {
        "t": "p",
        "text": "LEDDAR may update these Terms from time to time."
      },
      {
        "t": "p",
        "text": "Where changes are material, LEDDAR may provide notice through the platform or by email. Continued use after the effective date of updated Terms constitutes acceptance."
      },
      {
        "t": "h2",
        "text": "32. Governing Law"
      },
      {
        "t": "p",
        "text": "These Terms shall be governed by the laws of the Federal Republic of Nigeria."
      },
      {
        "t": "h2",
        "text": "33. Dispute Resolution Between You and LEDDAR"
      },
      {
        "t": "p",
        "text": "Before filing a formal claim, you agree to first contact LEDDAR and attempt to resolve the issue in good faith."
      },
      {
        "t": "p",
        "text": "Any dispute between you and LEDDAR that is not resolved informally shall be submitted to the courts of competent jurisdiction in Nigeria, unless LEDDAR specifies arbitration in a separate signed agreement."
      },
      {
        "t": "h2",
        "text": "34. Severability"
      },
      {
        "t": "p",
        "text": "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect."
      },
      {
        "t": "h2",
        "text": "35. Entire Agreement"
      },
      {
        "t": "p",
        "text": "These Terms, together with any incorporated policies, pricing disclosures, workflow rules, Privacy Policy, and any order-specific terms expressly adopted on the platform, form the entire agreement between you and LEDDAR regarding platform use."
      },
      {
        "t": "h2",
        "text": "36. Contact"
      },
      {
        "t": "p",
        "text": "For legal notices or support, contact:"
      },
      {
        "t": "meta",
        "items": [
          "LEDDAR",
          "Leddar Systems Limited",
          "[Insert Address]",
          "[Insert Email]",
          "[Insert Support Email]",
          "[Insert Phone]"
        ]
      }
    ]
  },
  {
    "id": "privacy",
    "label": "Privacy Policy",
    "title": "Privacy Policy",
    "pdf": "/docs/privacy-policy.pdf",
    "meta": [
      "Effective Date: May 1, 2026",
      "Version: v1.0.0.0",
      "Platform: LEDDAR",
      "Website: www.myleddar.com",
      "Operator: Leddar Systems Limited"
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "1. Introduction"
      },
      {
        "t": "p",
        "text": "LEDDAR respects your privacy and is committed to protecting your personal data."
      },
      {
        "t": "p",
        "text": "This Privacy Policy explains how LEDDAR collects, uses, stores, shares, and protects personal data when you:"
      },
      {
        "t": "ul",
        "items": [
          "visit our website",
          "create an account",
          "apply as a Brand or Artisan",
          "complete verification",
          "submit a production request",
          "request a sample",
          "make or receive payments",
          "communicate through the platform",
          "contact support",
          "otherwise use LEDDAR’s services"
        ]
      },
      {
        "t": "p",
        "text": "This Privacy Policy should be read together with our Terms & Conditions and any related policies referenced on the platform."
      },
      {
        "t": "h2",
        "text": "2. Who We Are"
      },
      {
        "t": "p",
        "text": "LEDDAR is a technology platform that connects Brands and Artisans through structured workflows for samples, production requests, production tracking, quality control, and selected payment-related flows."
      },
      {
        "t": "p",
        "text": "For the purposes of applicable data protection law, LEDDAR may act as a data controller in relation to personal data collected for its own platform operations, onboarding, verification, security, support, analytics, and compliance activities. Where necessary, LEDDAR may also engage service providers that process personal data on its behalf. The Nigeria Data Protection Act 2023 recognizes obligations for both data controllers and data processors. (Nigeria Data Protection Commission)"
      },
      {
        "t": "h2",
        "text": "3. Scope of This Policy"
      },
      {
        "t": "p",
        "text": "This Privacy Policy applies to:"
      },
      {
        "t": "ul",
        "items": [
          "Brands",
          "Artisans",
          "website visitors",
          "business contacts",
          "support users",
          "anyone whose personal data is processed by LEDDAR in connection with the platform"
        ]
      },
      {
        "t": "p",
        "text": "It does not apply to third-party websites, services, or payment pages that may be linked from or integrated into the platform. Those providers may have their own privacy policies."
      },
      {
        "t": "h2",
        "text": "4. The Personal Data We Collect"
      },
      {
        "t": "p",
        "text": "Depending on how you use LEDDAR, we may collect the following categories of personal data."
      },
      {
        "t": "h3",
        "text": "4.1 Identity Data"
      },
      {
        "t": "ul",
        "items": [
          "full name",
          "date of birth, where required",
          "gender, where required",
          "government-issued identification details, where required",
          "photograph or selfie, where required for verification"
        ]
      },
      {
        "t": "h3",
        "text": "4.2 Contact Data"
      },
      {
        "t": "ul",
        "items": [
          "email address",
          "phone number",
          "WhatsApp number",
          "business address",
          "delivery address",
          "billing address"
        ]
      },
      {
        "t": "h3",
        "text": "4.3 Business and Profile Data"
      },
      {
        "t": "ul",
        "items": [
          "business name",
          "brand name",
          "workshop or artisan name",
          "role or title",
          "category or specialization",
          "city, state, and country",
          "production capacity or service profile",
          "portfolio and uploaded work samples"
        ]
      },
      {
        "t": "h3",
        "text": "4.4 Verification Data"
      },
      {
        "t": "ul",
        "items": [
          "KYC documents",
          "identity validation results",
          "bank account verification information",
          "compliance-related information",
          "fraud screening results"
        ]
      },
      {
        "t": "h3",
        "text": "4.5 Transaction and Order Data"
      },
      {
        "t": "ul",
        "items": [
          "quote requests",
          "production requests",
          "sample requests",
          "product specifications",
          "quantity and timeline details",
          "invoice details",
          "payment records",
          "payout records",
          "refund or cancellation records",
          "support history related to orders"
        ]
      },
      {
        "t": "h3",
        "text": "4.6 Communications Data"
      },
      {
        "t": "ul",
        "items": [
          "messages sent through the platform",
          "emails to support",
          "WhatsApp or SMS messages sent through LEDDAR channels",
          "call notes where support interactions are recorded internally"
        ]
      },
      {
        "t": "h3",
        "text": "4.7 Technical and Usage Data"
      },
      {
        "t": "ul",
        "items": [
          "IP address",
          "browser type",
          "device type",
          "operating system",
          "pages visited",
          "date and time of access",
          "referring links",
          "actions taken on the platform",
          "cookie and analytics data"
        ]
      },
      {
        "t": "h3",
        "text": "4.8 Sensitive Personal Data"
      },
      {
        "t": "p",
        "text": "Where necessary and lawful, we may process sensitive personal data such as government ID data and certain biometric-style verification inputs used by identity verification providers. Nigeria’s Data Protection Act 2023 specifically addresses sensitive personal data and imposes additional obligations around such processing. (Nigeria Data Protection Commission)"
      },
      {
        "t": "h2",
        "text": "5. How We Collect Personal Data"
      },
      {
        "t": "p",
        "text": "We collect personal data:"
      },
      {
        "t": "h3",
        "text": "5.1 Directly from You"
      },
      {
        "t": "p",
        "text": "When you:"
      },
      {
        "t": "ul",
        "items": [
          "create an account",
          "complete forms",
          "request pricing",
          "request a sample",
          "submit a production request",
          "upload designs, specifications, or KYC documents",
          "contact us"
        ]
      },
      {
        "t": "h3",
        "text": "5.2 Automatically"
      },
      {
        "t": "p",
        "text": "When you use the platform, we may collect technical and usage data through cookies, logs, analytics tools, and related technologies."
      },
      {
        "t": "h3",
        "text": "5.3 From Third Parties"
      },
      {
        "t": "p",
        "text": "We may receive information from:"
      },
      {
        "t": "ul",
        "items": [
          "payment providers",
          "verification providers",
          "analytics providers",
          "fraud prevention tools",
          "customer support tools",
          "publicly available business sources where lawful"
        ]
      },
      {
        "t": "h2",
        "text": "6. Why We Process Your Personal Data"
      },
      {
        "t": "p",
        "text": "We process personal data only where we have a lawful basis and a legitimate operational reason to do so. The NDPA provides recognized lawful bases for processing, including consent, contract, legal obligation, and other lawful grounds. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "We may use your personal data to:"
      },
      {
        "t": "h3",
        "text": "6.1 Provide Platform Services"
      },
      {
        "t": "ul",
        "items": [
          "create and manage accounts",
          "onboard Brands and Artisans",
          "enable quote, sample, and production request workflows",
          "match users where relevant",
          "manage dashboards, records, and support interactions"
        ]
      },
      {
        "t": "h3",
        "text": "6.2 Verify Users and Prevent Fraud"
      },
      {
        "t": "ul",
        "items": [
          "complete KYC checks",
          "validate identity or business details",
          "screen for fraud, abuse, and circumvention risk",
          "enforce platform trust and safety rules"
        ]
      },
      {
        "t": "h3",
        "text": "6.3 Process Payments and Payouts"
      },
      {
        "t": "ul",
        "items": [
          "support billing records",
          "confirm payment status",
          "support artisan payout workflows",
          "handle refunds, reversals, and reconciliation"
        ]
      },
      {
        "t": "h3",
        "text": "6.4 Support Operations and Customer Care"
      },
      {
        "t": "ul",
        "items": [
          "respond to user requests",
          "resolve complaints",
          "investigate incidents",
          "improve user experience"
        ]
      },
      {
        "t": "h3",
        "text": "6.5 Improve the Platform"
      },
      {
        "t": "ul",
        "items": [
          "analyze usage",
          "measure performance",
          "fix bugs",
          "improve features",
          "understand demand and supply behavior"
        ]
      },
      {
        "t": "h3",
        "text": "6.6 Marketing and Communications"
      },
      {
        "t": "p",
        "text": "Where permitted by law, we may send:"
      },
      {
        "t": "ul",
        "items": [
          "product updates",
          "onboarding reminders",
          "transaction notices",
          "service messages",
          "marketing communications"
        ]
      },
      {
        "t": "p",
        "text": "You may opt out of non-essential marketing communications at any time."
      },
      {
        "t": "h3",
        "text": "6.7 Legal and Compliance Purposes"
      },
      {
        "t": "ul",
        "items": [
          "comply with legal obligations",
          "respond to lawful requests",
          "enforce our contracts",
          "investigate fraud or misuse",
          "protect our rights, users, and platform"
        ]
      },
      {
        "t": "h2",
        "text": "7. Lawful Bases for Processing"
      },
      {
        "t": "p",
        "text": "Depending on the context, our lawful basis may include:"
      },
      {
        "t": "ul",
        "items": [
          "Contract: where processing is necessary to provide the platform, manage requests, process production workflows, or administer accounts",
          "Consent: where consent is required, such as some marketing communications or certain optional features",
          "Legal Obligation: where we must comply with law, lawful requests, or regulatory obligations",
          "Legitimate Interests: where necessary for platform security, fraud prevention, support, analytics, service improvement, or business continuity, provided such interests do not override your rights",
          "Protection of Vital or Public Interests: where applicable under law"
        ]
      },
      {
        "t": "p",
        "text": "The NDPA sets out both principles of processing and lawful bases for processing personal data. (Nigeria Data Protection Commission)"
      },
      {
        "t": "h2",
        "text": "8. Cookies and Similar Technologies"
      },
      {
        "t": "p",
        "text": "We may use cookies, session technologies, analytics tools, and similar technologies to:"
      },
      {
        "t": "ul",
        "items": [
          "keep you logged in",
          "remember preferences",
          "improve website performance",
          "understand how users interact with the platform",
          "support security and fraud monitoring"
        ]
      },
      {
        "t": "p",
        "text": "The NDPC’s own privacy materials recognize that websites may use embedded code or cookies to process engagement patterns and support website functionality or preferences. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "You can manage cookies through your browser settings or any cookie controls we make available."
      },
      {
        "t": "h2",
        "text": "9. When We Share Personal Data"
      },
      {
        "t": "p",
        "text": "We do not sell personal data. We may share personal data only where necessary and lawful."
      },
      {
        "t": "h3",
        "text": "9.1 With Service Providers"
      },
      {
        "t": "p",
        "text": "We may share data with vendors that support:"
      },
      {
        "t": "ul",
        "items": [
          "cloud hosting",
          "analytics",
          "messaging",
          "email delivery",
          "KYC and identity verification",
          "payment processing",
          "fraud prevention",
          "customer support",
          "document storage"
        ]
      },
      {
        "t": "p",
        "text": "These providers may process data on our behalf under contractual controls."
      },
      {
        "t": "h3",
        "text": "9.2 Between Platform Users"
      },
      {
        "t": "p",
        "text": "We may share limited information between Brands and Artisans where necessary to perform a transaction or production workflow. We will aim to limit this to what is reasonably needed."
      },
      {
        "t": "h3",
        "text": "9.3 With Regulators, Authorities, or Courts"
      },
      {
        "t": "p",
        "text": "We may disclose personal data where required by law, lawful process, or to protect legal rights."
      },
      {
        "t": "h3",
        "text": "9.4 In a Corporate Transaction"
      },
      {
        "t": "p",
        "text": "If LEDDAR is involved in a merger, acquisition, restructuring, financing, or sale of assets, personal data may be disclosed as part of that process, subject to appropriate safeguards."
      },
      {
        "t": "h2",
        "text": "10. International and Cross-Border Transfers"
      },
      {
        "t": "p",
        "text": "Your data may be stored or processed outside Nigeria where our service providers or infrastructure require it. The NDPA contains rules on cross-border transfers and recognizes adequacy and other lawful bases for such transfers. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "Where we transfer personal data outside Nigeria, we will take reasonable steps to ensure that an appropriate legal basis and reasonable safeguards are in place."
      },
      {
        "t": "h2",
        "text": "11. Data Security"
      },
      {
        "t": "p",
        "text": "We use reasonable technical, administrative, and organizational measures to protect personal data, including measures designed to reduce the risk of:"
      },
      {
        "t": "ul",
        "items": [
          "unauthorized access",
          "loss",
          "misuse",
          "disclosure",
          "alteration",
          "destruction"
        ]
      },
      {
        "t": "p",
        "text": "The NDPA addresses security, integrity, confidentiality, and breach obligations. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "Security measures may include:"
      },
      {
        "t": "ul",
        "items": [
          "access controls",
          "password protection",
          "encrypted transmission where appropriate",
          "role-based permissions",
          "vendor controls",
          "logging and monitoring"
        ]
      },
      {
        "t": "p",
        "text": "No system is completely secure, and we cannot guarantee absolute security."
      },
      {
        "t": "h2",
        "text": "12. Personal Data Breaches"
      },
      {
        "t": "p",
        "text": "If a personal data breach occurs, LEDDAR will assess the incident and respond as required by applicable law. The NDPA includes obligations relating to personal data breaches. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "Where required, we may:"
      },
      {
        "t": "ul",
        "items": [
          "contain and investigate the breach",
          "notify affected parties",
          "notify the appropriate authority",
          "take remedial action"
        ]
      },
      {
        "t": "h2",
        "text": "13. Data Retention"
      },
      {
        "t": "p",
        "text": "We keep personal data only for as long as reasonably necessary for:"
      },
      {
        "t": "ul",
        "items": [
          "account administration",
          "production and transaction records",
          "compliance and audit requirements",
          "dispute handling",
          "fraud prevention",
          "support and legal defense"
        ]
      },
      {
        "t": "p",
        "text": "Retention periods may vary by data type and legal obligation."
      },
      {
        "t": "p",
        "text": "We may retain some information after account closure where necessary for:"
      },
      {
        "t": "ul",
        "items": [
          "tax and accounting records",
          "payment reconciliation",
          "legal claims or defense",
          "fraud prevention",
          "regulatory compliance"
        ]
      },
      {
        "t": "h2",
        "text": "14. Your Rights"
      },
      {
        "t": "p",
        "text": "Under the NDPA, data subjects have rights including the right to be informed, access, rectification, objection, restriction, portability, erasure/being forgotten, and not to be subject to certain automated decision-making, among others. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "Subject to law and verification of your identity, you may request to:"
      },
      {
        "t": "ul",
        "items": [
          "access your personal data",
          "correct inaccurate or incomplete data",
          "withdraw consent where consent is the basis",
          "object to certain processing",
          "restrict certain processing",
          "request deletion where applicable",
          "request portability where applicable",
          "complain to the appropriate authority"
        ]
      },
      {
        "t": "p",
        "text": "To exercise your rights, contact us using the details below."
      },
      {
        "t": "p",
        "text": "We may ask for proof of identity before acting on a request."
      },
      {
        "t": "h2",
        "text": "15. Children"
      },
      {
        "t": "p",
        "text": "LEDDAR is intended for adults and business users. We do not knowingly offer the platform to children or intentionally collect children’s personal data for ordinary platform use. The NDPA contains specific provisions on children and persons lacking legal capacity to consent. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "If you believe a child has provided personal data to LEDDAR improperly, contact us so we can take appropriate action."
      },
      {
        "t": "h2",
        "text": "16. Automated Decision-Making"
      },
      {
        "t": "p",
        "text": "LEDDAR may use rule-based systems or automated checks for risk screening, onboarding prioritization, fraud detection, verification routing, or service optimization. Where applicable, such processing will be conducted in line with applicable law. The NDPA addresses rights relating to automated decision-making. (Nigeria Data Protection Commission)"
      },
      {
        "t": "h2",
        "text": "17. Third-Party Links and Services"
      },
      {
        "t": "p",
        "text": "Our platform may contain links to third-party services or use third-party tools. We are not responsible for the privacy practices of third parties. You should review their privacy policies separately."
      },
      {
        "t": "h2",
        "text": "18. Marketing Communications"
      },
      {
        "t": "p",
        "text": "We may send you service-related communications that are necessary for account and platform operation."
      },
      {
        "t": "p",
        "text": "Where we send optional marketing communications, you may unsubscribe using the available link or by contacting us."
      },
      {
        "t": "h2",
        "text": "19. Changes to This Policy"
      },
      {
        "t": "p",
        "text": "We may update this Privacy Policy from time to time to reflect legal, operational, or platform changes."
      },
      {
        "t": "p",
        "text": "Where changes are material, we may notify users through the website, dashboard, or email."
      },
      {
        "t": "p",
        "text": "The “Effective Date” above shows when this version took effect."
      },
      {
        "t": "h2",
        "text": "20. Contact Us"
      },
      {
        "t": "p",
        "text": "For privacy questions, complaints, or data rights requests, contact:"
      },
      {
        "t": "meta",
        "items": [
          "LEDDAR",
          "Effective Date: May 1, 2026",
          "Platform: LEDDAR",
          "Website: www.myleddar.com",
          "Operator: Leddar Systems Limited"
        ]
      },
      {
        "t": "h2",
        "text": "21. Complaints"
      },
      {
        "t": "p",
        "text": "If you believe your data rights have been violated, you may contact LEDDAR first so we can attempt to resolve the issue. You may also have the right to complain to the Nigeria Data Protection Commission, which is the data protection authority established under the NDPA. (Nigeria Data Protection Commission)"
      }
    ]
  },
  {
    "id": "payment",
    "label": "Payment & Refund",
    "title": "Payment, Refund & Cancellation Policy",
    "pdf": "/docs/payment-refundment-cancellation-policy.pdf",
    "subtitle": "Policy governing fees, payment timing, tranche release, cancellations, reversals, and refunds",
    "meta": [
      "Operator: Leddar Systems Limited",
      "Applies to: Brands and Artisans using LEDDAR",
      "Version: v1.0",
      "Status: Public-facing policy"
    ],
    "note": {
      "label": "Policy intent",
      "items": [
        "Make payment expectations clear before money changes hands.",
        "Reduce confusion around deposits, sample fees, tranche releases, and non-refundable costs.",
        "Protect trust on both sides by connecting payment to workflow milestones."
      ]
    },
    "blocks": [
      {
        "t": "h2",
        "text": "1. Payment model"
      },
      {
        "t": "ul",
        "items": [
          "LEDDAR facilitates payment through licensed third-party providers.",
          "Platform economics currently assume a 30% take rate on eligible production transactions.",
          "Brand-side fee: 20% within the order flow.",
          "Artisan-side fee: 10% deducted from artisan-side transaction economics.",
          "Current production payout structure: 35% to commence production and 35% on completion, subject to workflow conditions."
        ]
      },
      {
        "t": "h2",
        "text": "2. Payment types"
      },
      {
        "t": "table",
        "head": [
          "Payment type",
          "When due",
          "Purpose"
        ],
        "rows": [
          [
            "Sample fee",
            "Before sample work starts",
            "Covers sample workflow and sample production readiness."
          ],
          [
            "Production commencement payment",
            "Before full production starts",
            "Unlocks first production tranche and job activation."
          ],
          [
            "Balance / completion payment",
            "At completion stage",
            "Closes out the order and unlocks final settlement."
          ],
          [
            "Additional charges",
            "As approved",
            "Applies to revisions, scope changes, urgent delivery, taxes, or other approved extras."
          ]
        ]
      },
      {
        "t": "h2",
        "text": "3. When work may start"
      },
      {
        "t": "ul",
        "items": [
          "No sample begins until the sample fee is confirmed.",
          "No production begins until the applicable quote is accepted, verification requirements are met, and the required payment has cleared.",
          "LEDDAR may pause or delay work where payment is pending, reversed, failed, or under review."
        ]
      },
      {
        "t": "h2",
        "text": "4. Sample fees"
      },
      {
        "t": "ul",
        "items": [
          "Sample fees are paid upfront.",
          "Sample fees may be deductible from full production pricing only where the sample workflow or quote expressly says so.",
          "Unless expressly stated otherwise, sample fees are non-refundable once sample work has started or sample resources have been committed."
        ]
      },
      {
        "t": "h2",
        "text": "5. Production payments and tranche release"
      },
      {
        "t": "table",
        "head": [
          "Stage",
          "Payment handling rule"
        ],
        "rows": [
          [
            "Before commencement",
            "Brand-side payment must be confirmed before first production tranche is released."
          ],
          [
            "During production",
            "LEDDAR may monitor milestone updates before allowing further workflow progression."
          ],
          [
            "On completion",
            "Final settlement depends on completion conditions, quality review, and any required approval."
          ],
          [
            "Failed or reversed payment",
            "LEDDAR may pause the order, delay payout, or reverse workflow status where lawfully permitted."
          ]
        ]
      },
      {
        "t": "h2",
        "text": "6. Cancellation by a Brand"
      },
      {
        "t": "table",
        "head": [
          "Cancellation point",
          "Refund position"
        ],
        "rows": [
          [
            "Before sample or production work starts",
            "Refund may be available, less payment charges or non-refundable administrative fees where disclosed."
          ],
          [
            "After sample work starts",
            "Sample fee is ordinarily non-refundable."
          ],
          [
            "After production starts",
            "Amounts already committed to work, labour, materials, or platform processing may remain payable."
          ],
          [
            "After completion or delivery",
            "Refund is not automatic and depends on documented defect or policy-approved exception."
          ]
        ]
      },
      {
        "t": "h2",
        "text": "7. Cancellation by an Artisan"
      },
      {
        "t": "ul",
        "items": [
          "An artisan must not cancel accepted work without valid reason.",
          "If an artisan cancels after commencement, LEDDAR may reassign the work, pause payout, apply account sanctions, or offset losses where permitted.",
          "Any customer refund or remediation will depend on the facts, the stage of work, and the platform workflow."
        ]
      },
      {
        "t": "h2",
        "text": "8. Scope changes and price revisions"
      },
      {
        "t": "ul",
        "items": [
          "A change in design, quantity, materials, branding, finishing, or timeline may trigger a revised quote or new charges.",
          "A request for correction is not the same as a full redesign.",
          "LEDDAR may pause work until revised scope, price, and timing are accepted."
        ]
      },
      {
        "t": "h2",
        "text": "9. Refund rules"
      },
      {
        "t": "ul",
        "items": [
          "Refunds are assessed case by case and only where supported by the workflow, the facts, and applicable policy.",
          "Refunds are not guaranteed merely because a buyer changes mind after work has started.",
          "Payment processing charges, committed material cost, labour already performed, and clearly disclosed platform charges may be deducted from any approved refund.",
          "Where a refund is approved, timing depends on payment provider processing cycles."
        ]
      },
      {
        "t": "h2",
        "text": "10. Chargebacks and disputed payments"
      },
      {
        "t": "ul",
        "items": [
          "If a payment is charged back, reversed, or disputed with a payment provider, LEDDAR may immediately pause the related workflow.",
          "LEDDAR may request evidence from both sides and preserve records while the issue is reviewed.",
          "Users must cooperate in good faith with any payment investigation."
        ]
      },
      {
        "t": "h2",
        "text": "11. Non-refundable items"
      },
      {
        "t": "ul",
        "items": [
          "Sample fees after sample work starts",
          "Production costs already incurred",
          "Approved scope-change costs already committed",
          "Payment processor fees where non-recoverable",
          "Other specifically disclosed non-refundable items"
        ]
      },
      {
        "t": "h2",
        "text": "12. Operational timelines"
      },
      {
        "t": "ul",
        "items": [
          "Refund review target: within 5 business days of receiving complete information.",
          "Approved refund processing target: within 5-15 business days, subject to payment provider timelines.",
          "Payment issues affecting active production are treated as priority cases."
        ]
      },
      {
        "t": "h2",
        "text": "13. Contact and escalation"
      },
      {
        "t": "p",
        "text": "Questions about invoices, payments, refunds, or cancellations should first be raised through official LEDDAR support channels. Users should not rely on informal chat as the sole record for a financial claim."
      }
    ]
  },
  {
    "id": "sample",
    "label": "Sample Policy",
    "title": "Sample Policy",
    "pdf": "/docs/sample-policy.pdf",
    "subtitle": "Policy for sample requests, fees, review, revisions, approval, and movement into production",
    "meta": [
      "Operator: Leddar Systems Limited",
      "Applies to: Brands and Artisans using LEDDAR sample workflows",
      "Version: v1.0",
      "Status: Public-facing policy"
    ],
    "note": {
      "label": "Why this policy exists",
      "items": [
        "Samples reduce buyer risk before full production.",
        "Samples help align quality expectations, finishing, and execution before scale.",
        "The sample stage is a controlled pre-production workflow, not a full production order."
      ]
    },
    "blocks": [
      {
        "t": "h2",
        "text": "1. What a sample is"
      },
      {
        "t": "p",
        "text": "A sample is a pre-production unit or preview workflow used to validate workmanship, finishing, fit, interpretation of brief, and execution quality before moving into full production."
      },
      {
        "t": "h2",
        "text": "2. When a sample may be required"
      },
      {
        "t": "ul",
        "items": [
          "For new brands or first-time working relationships",
          "For new product categories or complex designs",
          "Where LEDDAR determines that a sample-first process is the safest way to reduce production risk",
          "Where the quote or order page explicitly requires sample validation"
        ]
      },
      {
        "t": "h2",
        "text": "3. Sample fee"
      },
      {
        "t": "ul",
        "items": [
          "The sample fee must be paid before sample work starts.",
          "The exact fee is shown in the relevant workflow or quote.",
          "A sample fee may be deductible from the eventual production cost only where this is clearly stated.",
          "Unless explicitly stated otherwise, the sample fee is non-refundable once sample work has begun."
        ]
      },
      {
        "t": "h2",
        "text": "4. What the sample process includes"
      },
      {
        "t": "table",
        "head": [
          "Element",
          "Default rule"
        ],
        "rows": [
          [
            "Brief intake",
            "Brand provides files, dimensions, materials, finishing notes, and usage context."
          ],
          [
            "Artisan assignment",
            "LEDDAR routes the job to a suitable verified artisan or workshop."
          ],
          [
            "Sample execution",
            "Artisan produces the sample or approved preview output."
          ],
          [
            "Review stage",
            "Brand reviews video, images, or physical output depending on the workflow."
          ],
          [
            "Decision",
            "Brand approves, requests permitted corrections, or declines progression to production."
          ]
        ]
      },
      {
        "t": "h2",
        "text": "5. Review format"
      },
      {
        "t": "ul",
        "items": [
          "Sample review may be by video, images, physical delivery, or a combination of these.",
          "The applicable review method will be stated in the workflow or communicated by LEDDAR.",
          "Where the workflow says review is digital only, physical delivery is not included by default."
        ]
      },
      {
        "t": "h2",
        "text": "6. Revisions and corrections"
      },
      {
        "t": "ul",
        "items": [
          "LEDDAR may limit the number of permitted sample corrections.",
          "Minor corrections are not the same as a new design or major redesign.",
          "A major change in design, materials, branding, or structure may require a new sample and additional fees."
        ]
      },
      {
        "t": "h2",
        "text": "7. Sample approval"
      },
      {
        "t": "ul",
        "items": [
          "A sample is treated as approved only when the brand expressly confirms approval or the workflow clearly provides an equivalent approval condition.",
          "Sample approval may lock the quality baseline for full production.",
          "If the brand proceeds into production after sample approval, later objections that contradict the approved sample baseline may not be accepted."
        ]
      },
      {
        "t": "h2",
        "text": "8. When a sample does not move into production"
      },
      {
        "t": "ul",
        "items": [
          "A brand is not automatically required to place a production order after a sample unless separately agreed.",
          "If the brand chooses not to proceed, sample fees and other non-refundable costs remain subject to the payment policy.",
          "Sample outputs, notes, and learning remain part of the workflow record."
        ]
      },
      {
        "t": "h2",
        "text": "9. Timing"
      },
      {
        "t": "ul",
        "items": [
          "Sample timelines are estimates unless a specific timeline is formally agreed.",
          "Delays may arise from incomplete briefs, design changes, material issues, or review delays by the brand.",
          "LEDDAR may pause timing where the brand does not review or respond promptly."
        ]
      },
      {
        "t": "h2",
        "text": "10. Quality expectations"
      },
      {
        "t": "ul",
        "items": [
          "Handcrafted and artisan-led work may have minor natural variation unless a tighter tolerance is expressly agreed.",
          "A sample is meant to confirm practical quality expectations, not promise factory-standard perfection where the process is artisan-led.",
          "Where LEDDAR sets specific quality checkpoints, those checkpoints control the review."
        ]
      },
      {
        "t": "h2",
        "text": "11. Intellectual property and confidentiality"
      },
      {
        "t": "ul",
        "items": [
          "The brand remains responsible for having the right to use all designs, logos, and files submitted.",
          "Artisans must not reuse or disclose brand-specific confidential designs outside the permitted workflow.",
          "LEDDAR may retain sample-related records for support, dispute handling, and workflow quality control."
        ]
      },
      {
        "t": "h2",
        "text": "12. Relationship to production"
      },
      {
        "t": "ul",
        "items": [
          "The sample stage is separate from the production stage.",
          "Full production only starts when the relevant quote, payment, verification, and approval conditions are satisfied.",
          "A sample does not by itself guarantee production timelines until the production order is formally activated."
        ]
      },
      {
        "t": "h2",
        "text": "13. Escalation"
      },
      {
        "t": "p",
        "text": "Questions about sample quality, corrections, delays, or movement into production should be raised through the official support workflow so that the platform can keep a proper record."
      }
    ]
  },
  {
    "id": "kyc",
    "label": "KYC Verification",
    "title": "KYC / Verification Policy",
    "pdf": "/docs/kyc-verification-policy.pdf",
    "meta": [
      "Effective Date: May 1, 2026",
      "Version: v1.0.0.0",
      "Platform: LEDDAR",
      "Website: www.myleddar.com",
      "Operator: Leddar Systems Limited"
    ],
    "blocks": [
      {
        "t": "h2",
        "text": "1. Purpose"
      },
      {
        "t": "p",
        "text": "This KYC / Verification Policy explains how LEDDAR verifies users, businesses, and selected account information to support trust, fraud prevention, payment readiness, compliance, and platform safety."
      },
      {
        "t": "p",
        "text": "This Policy applies to all users of LEDDAR, including:"
      },
      {
        "t": "ul",
        "items": [
          "Brands",
          "Artisans",
          "business representatives",
          "anyone applying to access restricted features of the platform"
        ]
      },
      {
        "t": "h2",
        "text": "2. Why Verification Is Required"
      },
      {
        "t": "p",
        "text": "LEDDAR requires verification to:"
      },
      {
        "t": "ul",
        "items": [
          "confirm that users are real and identifiable",
          "reduce fraud and impersonation",
          "improve trust between Brands and Artisans",
          "support secure payment and payout flows",
          "protect the platform from abuse",
          "meet operational and compliance standards",
          "support lawful cooperation with payment providers and verification providers"
        ]
      },
      {
        "t": "p",
        "text": "Verification is a condition for access to certain platform actions and is not merely optional platform information."
      },
      {
        "t": "h2",
        "text": "3. Legal and Compliance Context"
      },
      {
        "t": "p",
        "text": "LEDDAR processes verification information in line with applicable law and platform controls. Nigeria’s data protection regime requires lawful, fair, and accountable processing of personal data, including sensitive personal data where relevant. The NDPA also provides rights to data subjects and imposes obligations on controllers and processors. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "Where LEDDAR works with banks, payment providers, or verification vendors, additional KYC, fraud, or AML/CFT-related checks may apply through those regulated third parties. The CBN states that AML/CFT supervision in Nigeria is risk-based and that BVN strengthens KYC in the banking system. (Central Bank of Nigeria)"
      },
      {
        "t": "h2",
        "text": "4. Who Must Be Verified"
      },
      {
        "t": "p",
        "text": "Verification may apply differently depending on the user type and the action being taken."
      },
      {
        "t": "h3",
        "text": "4.1 Brands"
      },
      {
        "t": "p",
        "text": "Brands may be required to complete verification before they can:"
      },
      {
        "t": "ul",
        "items": [
          "request production pricing",
          "request samples",
          "pay sample fees or deposits",
          "proceed to production",
          "receive certain platform approvals",
          "access higher-value or repeat transaction features"
        ]
      },
      {
        "t": "h3",
        "text": "4.2 Artisans"
      },
      {
        "t": "p",
        "text": "Artisans may be required to complete verification before they can:"
      },
      {
        "t": "ul",
        "items": [
          "be listed as eligible for work",
          "accept certain orders",
          "receive payouts",
          "access higher-value opportunities",
          "maintain or improve visibility on the platform"
        ]
      },
      {
        "t": "h3",
        "text": "4.3 Representatives"
      },
      {
        "t": "p",
        "text": "Where a user acts on behalf of a company, LEDDAR may require verification of both:"
      },
      {
        "t": "ul",
        "items": [
          "the individual representative",
          "the business entity"
        ]
      },
      {
        "t": "h2",
        "text": "5. Verification Levels"
      },
      {
        "t": "p",
        "text": "LEDDAR may use a tiered verification model."
      },
      {
        "t": "h3",
        "text": "Level 0 — Basic Access"
      },
      {
        "t": "p",
        "text": "This may include:"
      },
      {
        "t": "ul",
        "items": [
          "phone verification",
          "email verification",
          "account creation checks"
        ]
      },
      {
        "t": "p",
        "text": "This level may allow limited browsing or non-transactional use only."
      },
      {
        "t": "h3",
        "text": "Level 1 — Standard Verification"
      },
      {
        "t": "p",
        "text": "This may include:"
      },
      {
        "t": "ul",
        "items": [
          "identity document submission",
          "business name or profile completion",
          "bank account details",
          "selfie or liveness check where required",
          "address or contact validation"
        ]
      },
      {
        "t": "p",
        "text": "This level may unlock core transactional functionality, subject to platform approval."
      },
      {
        "t": "h3",
        "text": "Level 2 — Enhanced Verification"
      },
      {
        "t": "p",
        "text": "This may include:"
      },
      {
        "t": "ul",
        "items": [
          "deeper business review",
          "additional identity checks",
          "bank or payout verification",
          "transaction-risk checks",
          "manual review by LEDDAR or its provider"
        ]
      },
      {
        "t": "p",
        "text": "This level may apply to:"
      },
      {
        "t": "ul",
        "items": [
          "higher-risk users",
          "large-volume accounts",
          "repeat or high-value production flows",
          "users flagged for additional review"
        ]
      },
      {
        "t": "h2",
        "text": "6. Information We May Request"
      },
      {
        "t": "p",
        "text": "Depending on the user type, LEDDAR may request some or all of the following."
      },
      {
        "t": "h3",
        "text": "6.1 For Individuals"
      },
      {
        "t": "ul",
        "items": [
          "full legal name",
          "date of birth",
          "phone number",
          "email address",
          "residential or business address",
          "government-issued ID",
          "selfie or face match image",
          "bank account details for payout readiness"
        ]
      },
      {
        "t": "h3",
        "text": "6.2 For Businesses"
      },
      {
        "t": "ul",
        "items": [
          "registered business name",
          "RC number or equivalent business identifier where applicable",
          "business address",
          "contact person details",
          "tax or registration information where applicable",
          "proof of authority to act for the business",
          "bank account details"
        ]
      },
      {
        "t": "h3",
        "text": "6.3 For Artisans"
      },
      {
        "t": "ul",
        "items": [
          "full name",
          "artisan or workshop name",
          "production category",
          "location",
          "ID details",
          "bank account details",
          "examples of past work",
          "capacity or specialization information"
        ]
      },
      {
        "t": "h2",
        "text": "7. Acceptable Verification Documents"
      },
      {
        "t": "p",
        "text": "LEDDAR may accept one or more of the following, subject to review and provider availability:"
      },
      {
        "t": "ul",
        "items": [
          "National Identification Number-related documents or other government ID",
          "international passport",
          "driver’s licence",
          "voter card",
          "business registration documents",
          "proof of bank account ownership",
          "utility bill or proof of address where necessary",
          "BVN-linked verification support where relevant through payment or banking providers"
        ]
      },
      {
        "t": "p",
        "text": "The exact acceptable documents may change from time to time depending on legal, operational, provider, or fraud requirements."
      },
      {
        "t": "h2",
        "text": "8. Verification Providers"
      },
      {
        "t": "p",
        "text": "LEDDAR may use third-party providers to support:"
      },
      {
        "t": "ul",
        "items": [
          "identity verification",
          "document authentication",
          "liveness checks",
          "bank account validation",
          "fraud screening",
          "payment-linked checks"
        ]
      },
      {
        "t": "p",
        "text": "By using the platform, you authorize LEDDAR to share relevant verification data with such providers as reasonably necessary for verification, compliance, fraud prevention, and secure platform operations."
      },
      {
        "t": "h2",
        "text": "9. How Verification Works"
      },
      {
        "t": "p",
        "text": "The general process may include:"
      },
      {
        "t": "ol",
        "items": [
          "account setup",
          "submission of required information",
          "document upload",
          "automated checks where available",
          "manual review where needed",
          "approval, rejection, or request for additional information"
        ]
      },
      {
        "t": "p",
        "text": "Verification outcomes may include:"
      },
      {
        "t": "ul",
        "items": [
          "approved",
          "pending review",
          "more information required",
          "failed",
          "rejected",
          "suspended for further review"
        ]
      },
      {
        "t": "h2",
        "text": "10. Manual Review and Enhanced Checks"
      },
      {
        "t": "p",
        "text": "LEDDAR may require manual review where:"
      },
      {
        "t": "ul",
        "items": [
          "document quality is poor",
          "records do not match",
          "fraud indicators are present",
          "names are inconsistent",
          "multiple accounts appear linked",
          "the account is high-risk",
          "the transaction value or pattern justifies additional scrutiny"
        ]
      },
      {
        "t": "p",
        "text": "Manual review does not guarantee approval and may take longer than automated review."
      },
      {
        "t": "h2",
        "text": "11. Platform Consequences of Verification Status"
      },
      {
        "t": "p",
        "text": "Your verification status affects your access to the platform."
      },
      {
        "t": "h3",
        "text": "If you are not verified, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "limit visibility of your profile",
          "block access to payments or payouts",
          "prevent sample or production requests",
          "prevent order acceptance",
          "restrict use of selected features",
          "pause transactions pending review"
        ]
      },
      {
        "t": "h3",
        "text": "If verification is approved, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "unlock account features",
          "allow pricing requests, production flows, or payouts",
          "improve visibility or platform standing where relevant"
        ]
      },
      {
        "t": "h3",
        "text": "If verification fails or is rejected, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "request corrected documents",
          "keep your account restricted",
          "suspend or terminate access",
          "refuse future applications where justified"
        ]
      },
      {
        "t": "h2",
        "text": "12. False, Misleading, or Fraudulent Information"
      },
      {
        "t": "p",
        "text": "You must not submit false, manipulated, borrowed, or misleading verification information."
      },
      {
        "t": "p",
        "text": "If LEDDAR reasonably believes that information is false, fraudulent, altered, stolen, or misleading, LEDDAR may:"
      },
      {
        "t": "ul",
        "items": [
          "reject the verification",
          "suspend the account",
          "cancel pending workflows",
          "block payouts",
          "retain records for compliance and fraud prevention",
          "report the matter to relevant providers or authorities where legally required"
        ]
      },
      {
        "t": "h2",
        "text": "13. Re-Verification"
      },
      {
        "t": "p",
        "text": "LEDDAR may require re-verification at any time where reasonably necessary, including where:"
      },
      {
        "t": "ul",
        "items": [
          "your information changes",
          "your account behavior changes",
          "a provider requires fresh validation",
          "fraud risk increases",
          "legal or regulatory changes occur",
          "account inactivity is prolonged",
          "a payout or transaction requires additional checks"
        ]
      },
      {
        "t": "h2",
        "text": "14. Bank Account and Payout Verification"
      },
      {
        "t": "p",
        "text": "Where Artisans or other users are eligible for payout, LEDDAR may require verification of:"
      },
      {
        "t": "ul",
        "items": [
          "account name",
          "account number",
          "bank",
          "bank ownership match",
          "payout eligibility status"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR may refuse payout where account details are invalid, mismatched, suspicious, or incomplete."
      },
      {
        "t": "h2",
        "text": "15. Timing and Service Expectations"
      },
      {
        "t": "p",
        "text": "Verification timing may vary depending on:"
      },
      {
        "t": "ul",
        "items": [
          "completeness of information",
          "provider performance",
          "system availability",
          "queue volume",
          "manual review needs",
          "fraud screening outcomes"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR does not guarantee instant verification."
      },
      {
        "t": "p",
        "text": "Indicative processing times, where shown on the platform, are estimates only."
      },
      {
        "t": "h2",
        "text": "16. Data Protection and Security"
      },
      {
        "t": "p",
        "text": "Verification data often includes sensitive personal data. Nigeria’s NDPA sets out rules on processing sensitive personal data, lawful bases, security, and data subject rights. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "LEDDAR takes reasonable steps to protect verification information, including:"
      },
      {
        "t": "ul",
        "items": [
          "access controls",
          "role-based permissions",
          "restricted internal visibility",
          "secure storage arrangements",
          "vendor controls",
          "confidentiality obligations"
        ]
      },
      {
        "t": "p",
        "text": "Verification data will only be accessed by personnel or vendors who need it for legitimate platform, compliance, or fraud-prevention purposes."
      },
      {
        "t": "h2",
        "text": "17. Retention of Verification Data"
      },
      {
        "t": "p",
        "text": "LEDDAR may retain verification records for as long as reasonably necessary for:"
      },
      {
        "t": "ul",
        "items": [
          "compliance",
          "fraud prevention",
          "dispute handling",
          "legal defense",
          "platform safety",
          "audit trails",
          "support of transaction and payout history"
        ]
      },
      {
        "t": "p",
        "text": "Even if an account is closed, some verification-related information may be retained where necessary for legal, operational, or risk reasons."
      },
      {
        "t": "h2",
        "text": "18. User Rights"
      },
      {
        "t": "p",
        "text": "Subject to applicable law and platform obligations, you may request to:"
      },
      {
        "t": "ul",
        "items": [
          "access your personal data",
          "correct inaccurate information",
          "update records",
          "object to or restrict certain processing",
          "request deletion where legally available",
          "withdraw consent where consent was the basis of processing"
        ]
      },
      {
        "t": "p",
        "text": "Some requests may be limited where LEDDAR must retain data for compliance, security, legal defense, fraud prevention, or transaction history reasons."
      },
      {
        "t": "h2",
        "text": "19. Sharing of Verification Data"
      },
      {
        "t": "p",
        "text": "LEDDAR may share verification-related data only where reasonably necessary, including with:"
      },
      {
        "t": "ul",
        "items": [
          "KYC vendors",
          "payment processors",
          "banking or payout partners",
          "fraud detection tools",
          "legal authorities where required by law",
          "courts, regulators, or law enforcement where lawfully required"
        ]
      },
      {
        "t": "p",
        "text": "LEDDAR does not sell verification data."
      },
      {
        "t": "h2",
        "text": "20. Cross-Border Processing"
      },
      {
        "t": "p",
        "text": "Where verification vendors or infrastructure are located outside Nigeria, verification data may be processed cross-border. The NDPA regulates cross-border data transfers and requires appropriate legal bases and safeguards. (Nigeria Data Protection Commission)"
      },
      {
        "t": "p",
        "text": "By using LEDDAR, you acknowledge that such cross-border processing may occur where reasonably necessary for secure and effective verification."
      },
      {
        "t": "h2",
        "text": "21. No Guarantee of Platform Approval"
      },
      {
        "t": "p",
        "text": "Verification does not guarantee:"
      },
      {
        "t": "ul",
        "items": [
          "work opportunities",
          "quote approval",
          "production approval",
          "payout approval in every case",
          "long-term account standing"
        ]
      },
      {
        "t": "p",
        "text": "Verification only confirms that LEDDAR has accepted the submitted information at the relevant point in time, subject to continuing compliance and platform rules."
      },
      {
        "t": "h2",
        "text": "22. Changes to This Policy"
      },
      {
        "t": "p",
        "text": "LEDDAR may update this KYC / Verification Policy from time to time."
      },
      {
        "t": "p",
        "text": "Where material changes are made, LEDDAR may notify users through the platform, by email, or by other reasonable means."
      },
      {
        "t": "p",
        "text": "Continued use of the platform after such update means you accept the revised policy."
      },
      {
        "t": "h2",
        "text": "23. Contact"
      },
      {
        "t": "p",
        "text": "For verification questions or requests, contact:"
      },
      {
        "t": "meta",
        "items": [
          "LEDDAR",
          "Effective Date: May 1, 2026",
          "Platform: LEDDAR",
          "Website: www.myleddar.com",
          "Operator: Leddar Systems Limited"
        ]
      }
    ]
  }
];
