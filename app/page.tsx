"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Languages,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Scale,
  Clock,
  IndianRupee,
  Star,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge: string | null;
}

interface Testimonial {
  name: string;
  role: string;
  firm: string;
  city: string;
  quote: string;
  rating: number;
}

const features: Feature[] = [
  {
    icon: <Languages className="w-6 h-6 text-indigo-600" />,
    title: "Vernacular Translation",
    description:
      "Translate English legal documents to Telugu, Hindi, Tamil, and Kannada with legal-term accuracy. No generic machine translation.",
  },
  {
    icon: <FileText className="w-6 h-6 text-indigo-600" />,
    title: "Plain-Language Summaries",
    description:
      "Auto-generate client-friendly summaries in regional languages so rural clients understand their case without a translator.",
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    title: "Draft Response Templates",
    description:
      "Get a ready-to-edit draft petition, notice, or contract response in seconds — saving 2+ hours per document.",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    title: "Indian Legal Terminology",
    description:
      "Trained on IPC, CPC, CrPC, and landmark judgments. Understands bare acts, section references, and Indian court formats.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Team Collaboration",
    description:
      "Share documents across your firm. Junior associates and senior partners work from the same translated source.",
  },
  {
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    title: "NGO-Friendly Pricing",
    description:
      "Special plans for legal aid NGOs. Serve more clients without ballooning translation costs or hiring extra staff.",
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Paste or Upload",
    description:
      "Drop in any English legal document — contract, petition, judgment, notice, or FIR — via paste or PDF upload.",
  },
  {
    number: "02",
    title: "Choose Language & Output",
    description:
      "Select your target regional language (Telugu, Hindi, Tamil, Kannada) and pick: translation, summary, or draft template.",
  },
  {
    number: "03",
    title: "Review & Export",
    description:
      "VakīlAI returns a legally-faithful output in under 60 seconds. Review, edit if needed, then export as PDF or Word.",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Perfect for solo lawyers or small practices getting started.",
    features: [
      "50 document translations/month",
      "2 regional languages",
      "Plain-language summaries",
      "PDF & Word export",
      "Email support",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    description: "Built for 1–5 lawyer firms with daily translation needs.",
    features: [
      "Unlimited translations",
      "All 4 regional languages",
      "Draft response templates",
      "Team collaboration (5 seats)",
      "Priority support",
      "API access",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "NGO Plan",
    price: "₹799",
    period: "/month",
    description: "Subsidised pricing for registered legal aid organisations.",
    features: [
      "200 translations/month",
      "All 4 regional languages",
      "Client summary sheets",
      "10 team seats",
      "Dedicated onboarding",
      "Grant documentation support",
    ],
    highlighted: false,
    badge: "NGO Special",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Advocate Ramesh Babu",
    role: "Senior Partner",
    firm: "Babu & Associates",
    city: "Hyderabad",
    quote:
      "Earlier we were paying Rs. 1,200 per page to translators. Now we translate a 10-page contract in 2 minutes and our clients actually understand what they are signing.",
    rating: 5,
  },
  {
    name: "Priya Sundarajan",
    role: "Legal Aid Coordinator",
    firm: "Tamil Nadu Legal Services",
    city: "Chennai",
    quote:
      "Our field workers visit villages where no one reads English. VakīlAI summaries in Tamil have cut our client explanation time from 90 minutes to 20 minutes.",
    rating: 5,
  },
  {
    name: "Advocate Srinivas K.",
    role: "Founder",
    firm: "Srinivas Law Chambers",
    city: "Bengaluru",
    quote:
      "The Kannada translation quality is surprisingly good for legal text. It understands section references and does not just do word-for-word translation.",
    rating: 4,
  },
];

const languageLabels = ["తెలుగు", "हिन्दी", "தமிழ்", "ಕನ್ನಡ"];

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">VakīlAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-600 hidden md:inline-flex">
              Log In
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-200 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-200 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {languageLabels.map((label) => (
              <Badge
                key={label}
                variant="secondary"
                className="text-indigo-700 bg-indigo-100 border-0 text-sm px-3 py-1"
              >
                {label}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Legal Documents in{" "}
            <span className="text-indigo-600">Your Client&apos;s Language</span>
            <br />
            — Instantly.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            VakīlAI drafts, translates, and explains Indian legal documents in Telugu, Hindi,
            Tamil, and Kannada. Built for small law firms and legal aid NGOs tired of paying
            Rs. 500–2,000 per page to translators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Start Free — No Card Needed
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-slate-700 border-slate-300 text-lg px-8 py-6 rounded-xl hover:bg-slate-50"
            >
              See a Live Demo
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Clock className="w-5 h-5 text-indigo-600" />, stat: "60 sec", label: "Average translation time" },
              { icon: <IndianRupee className="w-5 h-5 text-green-600" />, stat: "90% cost savings", label: "vs. freelance translators" },
              { icon: <FileText className="w-5 h-5 text-purple-600" />, stat: "4 languages", label: "Telugu, Hindi, Tamil, Kannada" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-2xl font-bold text-slate-900">{item.stat}</span>
                </div>
                <p className="text-sm text-slate-500 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-red-900/50 text-red-300 border-red-800 text-sm">
            The Real Cost of the Status Quo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Every Day Without VakīlAI Costs You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                value: "₹500–2,000",
                unit: "per page",
                label: "Paid to freelance translators for every legal document",
                color: "text-red-400",
              },
              {
                value: "60–90",
                unit: "minutes",
                label: "Spent manually explaining English judgments to rural clients",
                color: "text-orange-400",
              },
              {
                value: "0",
                unit: "good options",
                label: "Enterprise tools like SpotDraft cost $500+/mo — out of reach for 1–5 lawyer firms",
                color: "text-yellow-400",
              },
            ].map((item) => (
              <div
                key={item.unit}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
              >
                <div className={`text-4xl font-extrabold mb-1 ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide mb-3">
                  {item.unit}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-0">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything a Busy Lawyer Needs
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Purpose-built for Indian legal practice — not a generic AI tool with an Indian skin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all rounded-2xl"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Tabs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Works Across All Document Types
            </h2>
            <p className="text-slate-500">
              VakīlAI handles the full spectrum of Indian legal paperwork.
            </p>
          </div>
          <Tabs defaultValue="contracts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white border border-slate-200 rounded-xl p-1 mb-6">
              <TabsTrigger value="contracts" className="rounded-lg text-sm">
                Contracts
              </TabsTrigger>
              <TabsTrigger value="petitions" className="rounded-lg text-sm">
                Petitions
              </TabsTrigger>
              <TabsTrigger value="notices" className="rounded-lg text-sm">
                Notices
              </TabsTrigger>
              <TabsTrigger value="judgments" className="rounded-lg text-sm">
                Judgments
              </TabsTrigger>
            </TabsList>
            {[
              {
                value: "contracts",
                title: "Sale Deeds, Rental Agreements & MOUs",
                body: "Translate property sale deeds, tenancy agreements, and business MOUs. VakīlAI preserves clause numbering, party names, and monetary amounts — critical for legal validity.",
                bullets: ["Rental & Lease Agreements", "Property Sale Deeds", "Business MOUs & Partnerships", "Employment Contracts"],
              },
              {
                value: "petitions",
                title: "Writ Petitions, PILs & Civil Suits",
                body: "Draft and translate court petitions with correct procedural language. Supports High Court and District Court formats across Andhra Pradesh, Tamil Nadu, Karnataka, and UP.",
                bullets: ["Writ Petitions (HC)", "Civil Suit Plaints", "Criminal Complaints", "PIL Drafts"],
              },
              {
                value: "notices",
                title: "Legal Notices & Demand Letters",
                body: "Generate bilingual legal notices under Section 80 CPC, consumer notices, and demand letters. Send in English with a vernacular copy for your client.",
                bullets: ["Section 80 CPC Notices", "Consumer Forum Notices", "Eviction Notices", "Cheque Bounce Notices (138 NI Act)"],
              },
              {
                value: "judgments",
                title: "Court Orders & Case Summaries",
                body: "Paste a High Court or Supreme Court judgment and get a plain-language summary in your client&apos;s language — what it means, what happens next, and key dates.",
                bullets: ["HC & SC Judgment Summaries", "District Court Orders", "Tribunal Decisions", "Next Steps for Clients"],
              },
            ].map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <Card className="border-slate-200 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{tab.title}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{tab.body}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {tab.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-0">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From English Document to Vernacular Output in 3 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-0.5 bg-indigo-100 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-0">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Lawyers and NGOs Love VakīlAI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-white border-0 shadow-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-700 font-bold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-slate-500 text-xs">
                        {t.role}, {t.firm} · {t.city}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-0">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Affordable for Every Indian Firm
            </h2>
            <p className="text-slate-500 text-lg">
              No $500/month enterprise contracts. Just fair rupee pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`rounded-2xl border-2 relative ${
                  plan.highlighted
                    ? "border-indigo-600 shadow-xl shadow-indigo-100"
                    : "border-slate-100"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      className={`text-xs px-3 py-1 ${
                        plan.highlighted
                          ? "bg-indigo-600 text-white border-0"
                          : "bg-orange-500 text-white border-0"
                      }`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pt-8 pb-4">
                  <CardTitle className="text-xl text-slate-900">{plan.name}</CardTitle>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 text-sm pb-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-xl ${
                      plan.highlighted
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Paying Rs. 2,000/Page to Translators
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join hundreds of small law firms and legal aid NGOs across Hyderabad, Chennai,
            Bengaluru, and Lucknow. Start translating in 60 seconds — free for 14 days.
          </p>
          {submitted ? (
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 inline-block">
              <CheckCircle className="w-12 h-12 text-white mx-auto mb-3" />
              <p className="text-white font-semibold text-lg">
                You&apos;re on the list! We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@lawfirm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-slate-900 border-0 rounded-xl placeholder:text-slate-400 flex-1"
              />
              <Button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 whitespace-nowrap"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VakīlAI</span>
            </div>
            <p className="text-slate-400 text-sm text-center">
              AI that drafts, translates and explains Indian legal documents in regional languages.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              {"\u00A9"} 2024 VakīlAI. Built for Indian lawyers, in India.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {languageLabels.map((label) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="text-slate-400 border-slate-700 text-xs"
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}