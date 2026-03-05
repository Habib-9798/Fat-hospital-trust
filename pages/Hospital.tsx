import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { CONTACT_INFO, DOCTORS, HOSPITAL_SERVICES, HOSPITAL_STATS } from '../constants';
import MotionReveal from '../components/motion/MotionReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import StatsCard from '../components/StatsCard';
import { useDonate } from '../components/DonateContext';

const facilities = [
  'X-ray',
  'Ultrasound',
  'ECG',
  'Waiting Areas',
  'Cafeteria',
  '24/7 Ambulance Service',
  '24/7 In-house Pharmacy',
  'Indoor treatment is completely free',
];

function InfoStrip() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Emergency */}
      <a
        href={`tel:${CONTACT_INFO.emergency}`}
        className={
          // ✅ Mobile: whiter cards like Home
          // ✅ sm+: keep your glass feel
          'group rounded-2xl p-5 hover:-translate-y-0.5 transition-transform ' +
          'border border-slate-200/60 bg-white/75 backdrop-blur shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] ' +
          'sm:border-white/35 sm:bg-white/30 sm:backdrop-blur-md sm:shadow-[0_18px_45px_-35px_rgba(15,23,42,0.65)]'
        }
      >
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-600">
              Emergency
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {CONTACT_INFO.emergency}
            </p>
          </div>
        </div>
      </a>

      {/* OPD Hours */}
      <div
        className={
          'group rounded-2xl p-5 hover:-translate-y-0.5 transition-transform ' +
          'border border-slate-200/60 bg-white/75 backdrop-blur shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] ' +
          'sm:border-white/35 sm:bg-white/30 sm:backdrop-blur-md sm:shadow-[0_18px_45px_-35px_rgba(15,23,42,0.65)]'
        }
      >
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-medical-50 text-medical-700 ring-1 ring-medical-100">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-600">
              OPD Hours
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">
              Mon–Sat · 8am–8pm
            </p>
          </div>
        </div>
      </div>

      {/* Location */}
      <div
        className={
          'group rounded-2xl p-5 hover:-translate-y-0.5 transition-transform ' +
          'border border-slate-200/60 bg-white/75 backdrop-blur shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] ' +
          'sm:border-white/35 sm:bg-white/30 sm:backdrop-blur-md sm:shadow-[0_18px_45px_-35px_rgba(15,23,42,0.65)]'
        }
      >
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-600">
              Location
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-900 truncate">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hospital() {
  const donate = useDonate();

  return (
    <>
      <Helmet>
        <title>Hospital | FAT Hospital</title>
        <meta
          name="description"
          content="Explore departments, doctors, and facilities at FAT Hospital. Emergency support, diagnostics, and everyday care delivered with empathy."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2,6,23,0.80), rgba(2,6,23,0.55), rgba(248,250,252,1)), url('https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=2200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(60rem_45rem_at_15%_20%,rgba(2,132,199,0.35),transparent_60%),radial-gradient(55rem_35rem_at_85%_25%,rgba(16,185,129,0.22),transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-10 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="lg:col-span-7">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  Hospital facilities
                </div>
              </MotionReveal>

              <MotionReveal delay={0.05}>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  Departments, doctors,
                  <span className="block text-white/90">and care pathways.</span>
                </h1>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/85 max-w-2xl">
                  A calm environment, modern diagnostics, and clear communication. We focus on safe outcomes and respectful care.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.15}>
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto"
                    onClick={() => donate.open('hospital-hero')}
                  >
                    <Heart className="h-5 w-5 fill-white" />
                    Donate
                  </Button>
                </div>
              </MotionReveal>

              <div className="mt-8 md:mt-10">
                <InfoStrip />
              </div>
            </div>

            <div className="lg:col-span-5">
              <MotionReveal delay={0.2}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">What we prioritize</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">Safe, consistent care</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      From triage to discharge, our teams coordinate around patient needs with clear steps and minimal delays.
                    </p>

                    <div className="mt-6 grid gap-3">
                      {[
                        { title: 'Fast triage', desc: 'Clear guidance from arrival to consultation.' },
                        { title: 'Modern diagnostics', desc: 'Lab and imaging support for quicker decisions.' },
                        { title: 'Coordinated teams', desc: 'Specialists collaborate around each case.' },
                      ].map((i) => (
                        <div
                          key={i.title}
                          className="rounded-2xl border border-slate-200/60 bg-slate-50 p-4"
                        >
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
              eyebrow="Capacity"
              title="Built to support everyday care and emergencies"
              description="These numbers reflect our growth in people, beds, and daily patient support."
              align="center"
            />
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOSPITAL_STATS.map((s, idx) => (
              <MotionReveal key={s.label} delay={0.05 * idx}>
                <StatsCard {...s} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments + sidebar */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <MotionReveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <SectionHeading
                    eyebrow="Departments"
                    title="Core services and specialty clinics"
                    description="Each department follows clinical protocols, with escalation pathways for complex cases."
                  />
                </div>
              </MotionReveal>

              <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {HOSPITAL_SERVICES.map((service, idx) => (
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

              {/* Doctors */}
              <div className="mt-14 md:mt-16">
                <MotionReveal>
                  <SectionHeading
                    eyebrow="Doctors"
                    title="Specialists available for OPD"
                    description="A focused team committed to evidence-based treatment and clear communication."
                  />
                </MotionReveal>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {DOCTORS.map((doc, idx) => (
                    <MotionReveal key={doc.id} delay={0.04 * idx}>
                      <div className="group overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_25px_70px_-55px_rgba(15,23,42,0.8)] transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex flex-col sm:flex-row">
                          {/* ✅ Taller on mobile so face doesn't cut */}
                          <div className="sm:w-44 h-80 sm:h-44 md:h-52 bg-slate-100 relative overflow-hidden sm:flex-shrink-0">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <div className="p-5 sm:p-6 flex-1">
                            <p className="text-base font-bold text-slate-900">{doc.name}</p>
                            <p className="mt-1 text-sm font-semibold text-medical-700">{doc.specialization}</p>
                            <p className="mt-2 text-xs text-slate-600">{doc.qualification}</p>
                            {doc.availability ? (
                              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                                <Calendar className="h-4 w-4 text-medical-600" />
                                {doc.availability}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </MotionReveal>
                  ))}
                </div>

                <div className="mt-8 md:mt-10 flex gap-3 flex-col sm:flex-row">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="w-full sm:w-auto">
                    <Button variant="ghost" className="rounded-full w-full sm:w-auto">
                      <Phone className="h-4 w-4" />
                      Call support
                    </Button>
                  </a>
                </div>
              </div>

              {/* Facilities */}
              <div className="mt-14 md:mt-16">
                <MotionReveal>
                  <Card className="overflow-hidden">
                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Facilities</p>
                          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">Patient comfort and safety</h3>
                          <p className="mt-2 text-sm text-slate-600">
                            Designed to support families during OPD visits, admissions, and recovery.
                          </p>
                        </div>
                        <div className="hidden sm:grid h-12 w-12 place-items-center rounded-2xl bg-medical-50 text-medical-700 ring-1 ring-medical-100">
                          <Stethoscope className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {facilities.map((f) => (
                          <div key={f} className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/70 p-4">
                            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-trust-50 text-trust-700 ring-1 ring-trust-100">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <p className="text-sm font-semibold text-slate-800">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </MotionReveal>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <MotionReveal delay={0.05}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">OPD schedule</p>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Clinic timings</h3>
                    <p className="mt-2 text-sm text-slate-600">For any urgent issue, call emergency services.</p>

                    <div className="mt-6 grid gap-2">
                      {[
                        { label: 'Mon–Sat', value: '8:00 AM – 8:00 PM' },
                        { label: 'Emergency', value: '24/7', emergency: true },
                      ].map((r) => (
                        <div
                          key={r.label}
                          className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-4"
                        >
                          <span className="text-sm font-semibold text-slate-700">{r.label}</span>
                          <span className={`text-sm font-bold ${r.emergency ? 'text-red-600' : 'text-slate-900'}`}>
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                      <p className="text-sm font-semibold">Need help right now?</p>
                      <p className="mt-1 text-xs text-white/75">Our team can guide you on arrival, triage, and what to bring.</p>
                      <div className="mt-4 grid grid-cols-1 gap-3">
                        <a href={`tel:${CONTACT_INFO.emergency}`} className="block">
                          <Button className="w-full rounded-xl bg-gradient-to-b from-red-500 to-red-600 shadow-[0_18px_40px_-25px_rgba(239,68,68,0.85)]">
                            <Phone className="h-4 w-4" />
                            Call emergency
                          </Button>
                        </a>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="block">
                          <Button variant="outline" className="w-full rounded-xl bg-white/10 text-white border-white/15 hover:bg-white/15">
                            <Phone className="h-4 w-4" />
                            Call support
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}