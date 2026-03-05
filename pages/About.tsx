import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, ShieldCheck, Sparkles, ArrowRight, Quote, FileText } from 'lucide-react';
import { CEO_PROFILE, FOUNDER_PROFILE } from '../constants';
import MotionReveal from '../components/motion/MotionReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useDonate } from '../components/DonateContext';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Compassion',
    desc: 'We meet patients and families with respect, patience, and dignity at every step.',
    icon: Heart,
  },
  {
    title: 'Transparency',
    desc: 'Clear reporting and honest communication with donors, patients, and the community.',
    icon: FileText,
  },
  {
    title: 'Excellence',
    desc: 'Evidence-based care, safe pathways, and teams that keep improving.',
    icon: Sparkles,
  },
  {
    title: 'Trust',
    desc: 'A promise to do what we say, show our work, and protect patient privacy.',
    icon: ShieldCheck,
  },
];

export default function About() {
  const donate = useDonate();

  return (
    <>
      <Helmet>
        <title>About | FAT Hospital</title>
        <meta
          name="description"
          content="Learn about FAT Hospital: our mission, founder leadership, and commitment to accessible healthcare and transparent charity."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2,6,23,0.72), rgba(2,6,23,0.45), rgba(248,250,252,1)), url('/images/hospital-building.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(60rem_45rem_at_15%_20%,rgba(2,132,199,0.28),transparent_60%),radial-gradient(55rem_35rem_at_85%_25%,rgba(16,185,129,0.18),transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-12 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="lg:col-span-8">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  About FAT Hospital & Foundation
                </div>
              </MotionReveal>

              <MotionReveal delay={0.06}>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  A mission built on faith,
                  <span className="block text-white/90">service, and real care.</span>
                </h1>
              </MotionReveal>

              <MotionReveal delay={0.12}>
                <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/85 max-w-3xl">
                  We serve communities through healthcare and welfare work, guided by dignity, responsibility, and transparent giving.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.16}>
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto"
                    onClick={() => donate.open('about-hero')}
                  >
                    <Heart className="h-5 w-5 fill-white" />
                    Donate
                  </Button>

                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full w-full bg-white/45 text-slate-900 border-white/60 shadow-sm backdrop-blur hover:bg-white/60 hover:text-slate-900 hover:border-white/80"
                    >
                      Contact us <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="lg:col-span-4">
              <MotionReveal delay={0.18}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Mission</p>
                    <p className="mt-4 text-lg font-semibold text-slate-900 leading-relaxed">
                      “To make quality healthcare and education accessible to everyone, regardless of socio-economic status.”
                    </p>
                    <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/60">
                      <p className="text-sm text-slate-600">
                        We keep systems simple: clear care pathways, responsible spending, and monthly reporting available on request.
                      </p>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <MotionReveal>
            <SectionHeading
              eyebrow="Values"
              title="What guides every decision"
              description="These principles keep our care calm, our charity transparent, and our teams aligned."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <MotionReveal key={v.title} delay={0.05 * idx}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 p-6 sm:p-7 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-b from-medical-400/20 to-trust-400/10 blur-3xl" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-medical-50 to-white text-medical-700 ring-1 ring-slate-200/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <v.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{v.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <SectionHeading
              eyebrow="Founder"
              title="A teacher of teachers, serving humanity"
              description="Qari Fayyaz ur Rehman Alvi is recognized across Pakistan for Qur’an education, discipline, and long-term community service."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <MotionReveal className="lg:col-span-5 h-full" delay={0.06}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
                <img
                  src={FOUNDER_PROFILE.image}
                  alt={FOUNDER_PROFILE.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-lg font-bold text-white">{FOUNDER_PROFILE.name}</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{FOUNDER_PROFILE.title}</p>
                  <p className="mt-1 text-xs text-white/70">{FOUNDER_PROFILE.designation}</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal className="lg:col-span-7 h-full" delay={0.1}>
              <Card className="overflow-hidden h-full">
                <div className="p-6 sm:p-7 md:p-10">
                  <div className="relative">
                    <Quote className="absolute -left-2 -top-6 h-12 w-12 text-slate-200" />
                    <p className="relative text-slate-700 text-lg leading-relaxed">
                      {FOUNDER_PROFILE.message}
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-bold text-slate-900">Core work</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      He founded Markazi Darul Qurra Namak Mandi (Peshawar) and has trained generations of Huffaz and Qaris. His mission expanded into
                      girls’ education, modern online learning, clean water programs, and healthcare support for underserved families.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Training & focus</p>
                      <ul className="mt-3 space-y-2">
                        {FOUNDER_PROFILE.education.map((e) => (
                          <li key={e} className="text-sm text-slate-600">• {e}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Initiatives</p>
                      <ul className="mt-3 space-y-2">
                        {FOUNDER_PROFILE.experience.map((e) => (
                          <li key={e} className="text-sm text-slate-600">• {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <Button className="rounded-full w-full sm:w-auto" onClick={() => donate.open('about-founder')}>
                      <Heart className="h-5 w-5 fill-white" />
                      Donate
                    </Button>
                    <Link to="/projects" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full w-full sm:w-auto">
                        Explore projects <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <SectionHeading
              eyebrow="CEO"
              title="Hospital leadership & accountability"
              description="Operational leadership focused on patient dignity, donor trust, and long-term sustainability."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <MotionReveal className="lg:col-span-5 h-full" delay={0.06}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
                <img
                  src={CEO_PROFILE.image}
                  alt={CEO_PROFILE.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-lg font-bold text-white">{CEO_PROFILE.name}</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{CEO_PROFILE.title}</p>
                  <p className="mt-1 text-xs text-white/70">{CEO_PROFILE.designation}</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal className="lg:col-span-7 h-full" delay={0.1}>
              <Card className="overflow-hidden h-full">
                <div className="p-6 sm:p-7 md:p-10">
                  <div className="relative">
                    <Quote className="absolute -left-2 -top-6 h-12 w-12 text-slate-200" />
                    <p className="relative text-slate-700 text-lg leading-relaxed">
                      {CEO_PROFILE.message}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Education</p>
                      <ul className="mt-3 space-y-2">
                        {CEO_PROFILE.education.map((e) => (
                          <li key={e} className="text-sm text-slate-600">• {e}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Experience</p>
                      <ul className="mt-3 space-y-2">
                        {CEO_PROFILE.experience.map((e) => (
                          <li key={e} className="text-sm text-slate-600">• {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <Button className="rounded-full w-full sm:w-auto" onClick={() => donate.open('about-ceo')}>
                      <Heart className="h-5 w-5 fill-white" />
                      Donate
                    </Button>
                    <Link to="/projects" className="w-full sm:w-auto">
                      <Button variant="outline" className="rounded-full w-full sm:w-auto">
                        Explore projects <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_35px_120px_-95px_rgba(2,132,199,0.35)] backdrop-blur">
              <div className="relative p-6 sm:p-8 md:p-12">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-medical-500/15 blur-3xl" />
                <div className="absolute -right-28 -bottom-24 h-80 w-80 rounded-full bg-trust-500/15 blur-3xl" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className="lg:col-span-8">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Join us</p>
                    <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                      Support care that reaches everyone
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                      Donations directly strengthen hospital services and community projects. We keep reporting simple, honest, and available.
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    <Button size="lg" className="rounded-full w-full" onClick={() => donate.open('about-final-cta')}>
                      <Heart className="h-5 w-5 fill-white" />
                      Donate now
                    </Button>
                    <Link to="/contact" className="w-full">
                      <Button size="lg" variant="outline" className="rounded-full w-full">
                        Contact us <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}