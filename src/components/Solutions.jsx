import { Sparkles, Megaphone, Tv, Globe, Shield, Code } from 'lucide-react';

const solutions = [
  {
    icon: Megaphone,
    title: 'Brand Storytelling',
    desc: 'Campaigns and content that cut through the noise and connect with audiences.',
    tags: ['Campaigns', 'Creative', 'Copy'],
  },
  {
    icon: Tv,
    title: 'Video & Production',
    desc: 'Full-service production from concept to post with broadcast-quality output.',
    tags: ['Directing', 'Editing', 'Motion'],
  },
  {
    icon: Globe,
    title: 'Streaming & Platforms',
    desc: 'Reliable live streaming and OTT experiences ready to scale globally.',
    tags: ['Live', 'OTT', 'CDN'],
  },
  {
    icon: Code,
    title: 'Web Experiences',
    desc: 'High-performance websites and interactive launches built for conversion.',
    tags: ['Web', 'Interactive', 'SEO'],
  },
  {
    icon: Shield,
    title: 'Rights & Delivery',
    desc: 'Secure content pipelines with DRM, metadata, and multi-channel delivery.',
    tags: ['DRM', 'QC', 'Distribution'],
  },
  {
    icon: Sparkles,
    title: 'Social & Growth',
    desc: 'Always-on social strategies that keep your brand top-of-mind.',
    tags: ['Social', 'UGC', 'Paid'],
  },
];

const caseStudies = [
  {
    title: 'Global Product Launch',
    summary: 'Orchestrated a multilingual streaming event reaching 1.2M live viewers with 99.99% uptime.',
    image:
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Docu-series for Streaming',
    summary: 'Produced a 6-part series from concept to delivery for a major OTT platform.',
    image:
      'https://images.unsplash.com/photo-1515387784663-e2e29a23f69a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Retail Brand Refresh',
    summary: 'End-to-end creative and social launch, driving 3x engagement in the first month.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-28 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Solutions for every screen</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              From bold ideas to flawless delivery — we help brands plan, produce, and scale media that
              performs across platforms.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-white text-black px-4 py-2 text-sm font-medium">Get a proposal</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <s.icon size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="work" className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-white">Selected work</h3>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Work with us</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((c) => (
              <article key={c.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="text-white font-semibold">{c.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{c.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
