"use client";

import { useMemo, useState } from "react";

const Catogeries = [
  { key: "getting-started", label: "Getting Started" },
  { key: "billing", label: "Billing & Payments" },
  { key: "accounts", label: "Accounts & Security" },
  { key: "integrations", label: "Integrations" },
  { key: "troubleshooting", label: "Troubleshooting" },
  { key: "developers", label: "Developers" },
];

const Artcles = [
  {
    id: 1,
    title: "Create your first project",
    category: "getting-started",
    excerpt: "A quick walkthrough to set up your workspace and invite teammates.",
    read: "4 min read",
    updated: "Aug 12, 2025",
  },
  {
    id: 2,
    title: "Connect a payment method",
    category: "billing",
    excerpt: "Add a debit/credit card, set a default, and manage invoices.",
    read: "3 min read",
    updated: "Jul 30, 2025",
  },
  {
    id: 3,
    title: "Two‑factor authentication (2FA)",
    category: "accounts",
    excerpt: "Secure your account with authenticator apps or SMS codes.",
    read: "5 min read",
    updated: "Aug 01, 2025",
  },
  {
    id: 4,
    title: "Fix common sign‑in issues",
    category: "troubleshooting",
    excerpt: "Password resets, locked accounts, and email verification tips.",
    read: "6 min read",
    updated: "Jun 18, 2025",
  },
  {
    id: 5,
    title: "Use webhooks",
    category: "developers",
    excerpt: "Receive real‑time events and process them in your backend.",
    read: "7 min read",
    updated: "May 25, 2025",
  },
  {
    id: 6,
    title: "Install the Slack app",
    category: "integrations",
    excerpt: "Get instant alerts and take action without leaving Slack.",
    read: "4 min read",
    updated: "Aug 10, 2025",
  },
  {
    id: 7,
    title: "Download VAT invoices",
    category: "billing",
    excerpt: "Find, download, and share invoices for any billing cycle.",
    read: "2 min read",
    updated: "Apr 03, 2025",
  },
  {
    id: 8,
    title: "Manage team roles",
    category: "accounts",
    excerpt: "Owner, Admin, Member — what each role can do.",
    read: "3 min read",
    updated: "Mar 14, 2025",
  },
];

const FAQS = [
  {
    q: "How do I reset my password?",
    a: "Go to Settings → Security → Reset Password. You'll receive a link via email valid for 15 minutes.",
  },
  {
    q: "Which cards do you accept?",
    a: "We accept Visa, Mastercard, Amex, and most debit cards. Prepaid cards may require additional verification.",
  },
  {
    q: "How can I contact support?",
    a: "Open a ticket from the Help page, or email support@example.com. Priority chat is available on paid plans.",
  },
  {
    q: "Is there an API?",
    a: "Yes - see Developers → API Reference. You can generate personal access tokens from your account settings.",
  },
];

export default function HelpPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return Artcles.filter((a) =>
      (!active || a.category === active) &&
      (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    );
  }, [query, active]);

  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 md:px-10 pt-10 pb-6 lg:bg-gradient-to-b from-indigo-50 to-white border-b border-gray-200 mr-10 lg:mr-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <span>Home</span>
            <span>›</span>
            <span className="text-gray-700 font-medium">Help Center</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">How can we help?</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Find guides, troubleshoot issues, and learn best practices.
          </p>

          
          <div className="flex flex-wrap gap-2 mt-6">
            {Catogeries.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive((prev) => (prev === c.key ? null : c.key))}
                className={`px-3 py-1.5 rounded-full border text-sm transition ${
                  active === c.key
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                }`}
              >
                {c.label}
              </button>
            ))}

          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
    <div className="lg:col-span-8 space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">{query || active ? "Results" : "Popular articles"}</h2>
                <span className="text-xs text-gray-500">{filtered.length} items</span>
              </div>
              <ul className="divide-y divide-gray-200">
                {filtered.map((a) => (
                  <li key={a.id} className="py-4 first:pt-0 last:pb-0">
                    <a href="#" className="group block">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-indigo-600">
                            {a.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{a.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                              {Catogeries.find((c) => c.key === a.category)?.label}
                            </span>
                            <span>•</span>
                            <span>{a.read}</span>
                            <span>•</span>
                            <span>Updated {a.updated}</span>
                          </div>
                        </div>
                        <div className="hidden sm:block shrink-0 text-gray-400 group-hover:text-indigo-500">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="p-4 md:p-5 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Frequently asked questions</h2>
                <p className="text-sm text-gray-600">Quick answers for common tasks</p>
              </div>
              <div className="p-4 md:p-5">
                <div className="space-y-3">
                  {FAQS.map((f, i) => (
                    <details key={i} className="group border border-gray-200 rounded-lg p-4 open:shadow-sm">
                      <summary className="cursor-pointer list-none flex items-center justify-between">
                        <span className="font-medium text-gray-900">{f.q}</span>
                        <span className="text-gray-400 group-open:rotate-180 transition">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                      </summary>
                      <p className="text-sm text-gray-600 mt-3">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

      
          <aside className="lg:col-span-4 space-y-6">
         
            <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold">Quick links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="text-indigo-600 hover:underline" href="#">Status page</a></li>
                <li><a className="text-indigo-600 hover:underline" href="#">API reference</a></li>
                <li><a className="text-indigo-600 hover:underline" href="#">Pricing & plans</a></li>
                <li><a className="text-indigo-600 hover:underline" href="#">Report an issue</a></li>
              </ul>
            </div>


            <div className="bg-gray-100 text-black rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold">Still need help?</h3>
              <p className="text-black text-sm mt-1">
                Our support team typically replies within a few hours.
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white text-indigo-700 font-medium hover:bg-indigo-50">Open a ticket</a>
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-indigo-400 text-white font-medium hover:bg-indigo-500/90">Live chat</a>
              </div>
            </div>

       
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5">
              <h3 className="font-semibold">Getting started tips</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>✔ Invite your team to collaborate.</li>
                <li>✔ Enable 2FA for extra security.</li>
                <li>✔ Connect Slack to receive alerts.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r bg-gray-100 text-black p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-black">Can’t find what you’re looking for?</h3>
              <p className="text-black text-sm mt-1">Try refining your search or contact our support team.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white text-indigo-700 font-medium hover:bg-indigo-50">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  );
}