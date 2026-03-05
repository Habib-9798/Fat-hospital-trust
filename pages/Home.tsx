import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Clock,
  HeartPulse,
  Pill,
  Ambulance,
  HandHeart,
  GraduationCap,
  Droplets,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import MotionReveal from '../components/motion/MotionReveal';
import { HOSPITAL_STATS, PROJECTS, HOSPITAL_SERVICES, CONTACT_INFO } from '../constants';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import HeroBackdrop from '../components/hero/HeroBackdrop';
import SmartImage from '../components/ui/SmartImage';
import { useDonate } from '../components/DonateContext';

const testimonials = [
  {
    name: 'Ayesha R.',
    role: 'Patient',
    quote:
      'The staff treated my family with so much respect. We felt safe, listened to, and cared for from the first visit.',
  },
  {
    name: 'Imran K.',
    role: 'Donor',
    quote:
      'I appreciate the transparency. Seeing the impact reports made me confident that my donation reached real people.',
  },
  {
    name: 'Sadia M.',
    role: 'Mother',
    quote:
      'The pediatric team was kind and thorough. My child recovered quickly and we were guided at every step.',
  },
];

const impact = [
  {
    title: 'Support for flood & earthquake affected families',
    description: 'Your donation helps patients from disaster-affected areas receive timely medical care and support.',
    icon: HandHeart,
  },
  {
    title: 'Limited hospitals in the region',
    description:
      'Many people must travel far for proper treatment. Your support strengthens local healthcare in Mansehra and surrounding areas.',
    icon: MapPin,
  },
  {
    title: 'Free indoor treatment',
    description: 'We provide completely free indoor treatment for admitted patients, reducing the biggest burden for families.',
    icon: HeartPulse,
  },
  {
    title: '50% off medicines for everyone',
    description: 'We provide medicines at 50% discount for all patients to make treatment affordable for the whole community.',
    icon: Pill,
  },
  {
    title: 'Emergency & basic life-saving care (BLS)',
    description: 'We support urgent care and basic life-saving treatment for emergencies, accidents, and critical patients.',
    icon: Ambulance,
  },
  {
    title: 'Essential facilities & diagnostics',
    description: 'Donations help maintain key services like ECG, ultrasound, X-ray, and other patient facilities.',
    icon: Stethoscope,
  },
  {
    title: 'Emergency readiness',
    description: 'Maintain 24/7 emergency supplies, oxygen, and rapid response capacity.',
    icon: Stethoscope,
  },
  {
    title: 'Girls education support',
    description: 'We support school education and Islamic education for girls, helping families build a better future.',
    icon: GraduationCap,
  },
  {
    title: 'Clean water projects',
    description: 'We install water pumps and wells in water-scarce areas, helping communities in drought-hit regions.',
    icon: Droplets,
  },
];

// ✅ Mobile: one-by-one (clean white cards + smaller height)
// ✅ Desktop/tablet: keep current 3-card grid
function QuickActionsMobile({ onDonate }: { onDonate: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden">
      {/* Donate (full width) - smaller height */}
      <button type="button" onClick={onDonate} className="w-full">
        <Button
          size="md"
          className="w-full rounded-2xl bg-gradient-to-b from-medical-600 to-medical-700 shadow-[0_18px_40px_-25px_rgba(2,132,199,0.85)]"
        >
          <Heart className="h-5 w-5 fill-white" />
          Donate
        </Button>
      </button>

      {/* Emergency */}
      <a
        href={`tel:${CONTACT_INFO.emergency}`}
        className="group rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)] hover:-translate-y-0.5 transition-transform"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">Emergency</p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">{CONTACT_INFO.emergency}</p>
          </div>
        </div>
      </a>

      {/* Call */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="group rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)] hover:-translate-y-0.5 transition-transform"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">Call</p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">{CONTACT_INFO.phone}</p>
          </div>
        </div>
      </a>

      {/* OPD Hours */}
      <div className="group rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)]">
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-medical-50 text-medical-700 ring-1 ring-medical-100">
            <Clock className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">OPD Hours</p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">Mon–Sat · 8am–8pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Desktop/tablet: 3 cards (same as before)
function QuickActionsDesktop() {
  return (
    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <a
        href={`tel:${CONTACT_INFO.emergency}`}
        className="group rounded-2xl border border-slate-200/60 bg-white/75 backdrop-blur p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] hover:-translate-y-0.5 transition-transform"
      >
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">Emergency</p>
            <p className="mt-1 text-sm font-bold text-slate-900">{CONTACT_INFO.emergency}</p>
          </div>
        </div>
      </a>

      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="group rounded-2xl border border-slate-200/60 bg-white/75 backdrop-blur p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] hover:-translate-y-0.5 transition-transform"
      >
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">Call</p>
            <p className="mt-1 text-sm font-bold text-slate-900">{CONTACT_INFO.phone}</p>
          </div>
        </div>
      </a>

      <div className="group rounded-2xl border border-slate-200/60 bg-white/75 backdrop-blur p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)]">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-trust-50 text-trust-700 ring-1 ring-trust-100">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">OPD Hours</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Mon–Sat · 8am–8pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const donate = useDonate();

  return (
    <>
      <Helmet>
        <title>FAT Hospital | Compassionate Care, Advanced Medicine</title>
        <meta
          name="description"
          content="FAT Hospital provides quality medical care with a mission to serve humanity. Explore our departments, doctors, and charitable projects."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <HeroBackdrop imageSrc="/images/hospital-building.png" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-10 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="lg:col-span-7">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  Trusted healthcare provider
                </div>
              </MotionReveal>

              <MotionReveal delay={0.05}>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]">
                  Compassionate care,
                  <span className="block text-white/95">advanced medicine.</span>
                </h1>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/90 max-w-2xl drop-shadow-[0_12px_25px_rgba(0,0,0,0.35)]">
                  Fayyaz Ur Rehman Alvi Trust Hospital delivers modern treatment with a promise: care that is respectful,
                  transparent, and accessible.
                </p>
              </MotionReveal>

              {/* Desktop donate button (unchanged) */}
              <MotionReveal delay={0.15}>
                <div className="mt-7 md:mt-8 hidden sm:flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="rounded-full w-full sm:w-auto" onClick={() => donate.open('home-hero')}>
                    <Heart className="h-5 w-5 fill-white" />
                    Donate
                  </Button>
                </div>
              </MotionReveal>

              {/* ✅ Mobile one-by-one + Desktop 3 cards */}
              <div className="mt-8 md:mt-10">
                <QuickActionsMobile onDonate={() => donate.open('home-hero')} />
                <QuickActionsDesktop />
              </div>
            </div>

            <div className="lg:col-span-5">
              <MotionReveal delay={0.2}>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <SmartImage
                      src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=80"
                      fallbackSrc="/images/fallback-card.svg"
                      alt="Hospital care"
                      className="h-52 sm:h-56 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-2">{CONTACT_INFO.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-sm font-semibold text-slate-900">What patients can expect</p>
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      {[
                        { title: 'Fast triage', desc: 'Clear guidance from arrival to consultation.' },
                        { title: 'Modern diagnostics', desc: 'Lab and imaging support for quick decisions.' },
                        { title: 'Respectful care', desc: 'A calm, private, and patient-first environment.' },
                      ].map((i) => (
                        <div key={i.title} className="rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                          <p className="text-sm font-bold text-slate-900">{i.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-16">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <MotionReveal>
            <SectionHeading
              eyebrow="Trusted by the community"
              title="Care at scale, delivered with empathy"
              description="We continuously invest in staff, facilities, and systems so patients receive consistent, safe care."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOSPITAL_STATS.map((stat, idx) => (
              <MotionReveal key={idx} delay={0.05 * idx}>
                <StatsCard {...stat} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                eyebrow="Departments"
                title="Medical excellence across core specialties"
                description="Emergency support, safe procedures, and everyday care. Our departments work as one team around the patient."
              />
              <Link to="/hospital" className="shrink-0">
                <Button variant="outline" className="rounded-full w-full sm:w-auto">
                  View all departments <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOSPITAL_SERVICES.slice(0, 6).map((service, idx) => (
              <MotionReveal key={service.title} delay={0.04 * idx}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 p-6 sm:p-7 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.8)] backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-b from-medical-400/20 to-trust-400/10 blur-3xl" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-medical-50 to-white text-medical-700 ring-1 ring-slate-200/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <SectionHeading
                eyebrow="Foundation"
                title="Projects built for long-term impact"
                description="Healthcare is our core, but our work extends into education, water access, and welfare support."
              />
              <Link to="/projects" className="shrink-0">
                <Button variant="outline" className="rounded-full w-full sm:w-auto">
                  View all projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project, idx) => (
              <MotionReveal key={project.id} delay={0.04 * idx}>
                <Link
                  to={`/projects/${project.id}`}
                  className="group block overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-medical-700">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{project.summary}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why donate */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_15%,rgba(2,132,199,0.35),transparent_60%),radial-gradient(60rem_40rem_at_85%_30%,rgba(20,184,166,0.25),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <MotionReveal>
            <SectionHeading
              eyebrow="Why donate"
              title="Your donation becomes direct care"
              description="We prioritize essential needs: emergency support, medicines, and subsidized services for families in hardship."
              tone="dark"
              className="max-w-3xl"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {impact.map((item, idx) => (
              <MotionReveal key={item.title} delay={0.05 * idx}>
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-7 backdrop-blur">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                  <item.icon className="h-7 w-7 text-white" />
                  <h3 className="mt-4 sm:mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full w-full sm:w-auto" onClick={() => donate.open('why-donate')}>
              <Heart className="h-5 w-5 fill-white" />
              Donate now
            </Button>
            <Link to="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-full bg-white/5 text-white border-white/15 hover:bg-white/10"
              >
                Explore projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <SectionHeading
              eyebrow="Voices"
              title="What people say about FAT"
              description="Trust is earned through consistency. Here is what patients and donors share after working with us."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <MotionReveal key={t.name} delay={0.05 * idx}>
                <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 sm:p-7 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] backdrop-blur">
                  <p className="text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                    <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_35px_120px_-95px_rgba(2,132,199,0.9)] backdrop-blur">
            <div className="relative p-6 sm:p-8 md:p-12">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-medical-500/15 blur-3xl" />
              <div className="absolute -right-28 -bottom-24 h-80 w-80 rounded-full bg-trust-500/10 blur-3xl" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Donate</p>
                  <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    Give hope. Strengthen care.
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Your support keeps emergency services ready, medicines available, and treatment accessible for families in need.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Button size="lg" className="rounded-full w-full" onClick={() => donate.open('final-cta')}>
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
        </div>
      </section>
    </>
  );
}