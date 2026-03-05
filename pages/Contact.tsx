import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Clock, Heart, ArrowRight, Siren } from 'lucide-react';
import MotionReveal from '../components/motion/MotionReveal';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { CONTACT_INFO } from '../constants';
import { useDonate } from '../components/DonateContext';

const info = [
  {
    title: 'Emergency (24/7)',
    value: CONTACT_INFO.emergency,
    href: `tel:${CONTACT_INFO.emergency}`,
    icon: Siren,
    tone: 'from-red-500/15 to-red-500/0 ring-red-100 text-red-600',
  },
  {
    title: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    icon: Phone,
    tone: 'from-medical-500/15 to-medical-500/0 ring-medical-100 text-medical-700',
  },
  {
    title: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
    tone: 'from-slate-500/15 to-slate-500/0 ring-slate-200 text-slate-700',
  },
  {
    title: 'OPD Hours',
    value: 'Mon–Sat · 8:00am–8:00pm',
    icon: Clock,
    tone: 'from-trust-500/15 to-trust-500/0 ring-trust-100 text-trust-700',
  },
];

export default function Contact() {
  const donate = useDonate();

  return (
    <>
      <Helmet>
        <title>Contact | FAT Hospital</title>
        <meta
          name="description"
          content="Contact FAT Hospital for appointments, emergency help, or donations. Find our phone numbers, address, and location map."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2,6,23,0.78), rgba(2,6,23,0.52), rgba(248,250,252,1)), url('/images/hospital-building.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(55rem_40rem_at_15%_15%,rgba(2,132,199,0.28),transparent_60%),radial-gradient(55rem_40rem_at_85%_25%,rgba(16,185,129,0.18),transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-10 md:pt-24">
          <MotionReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">Contact</p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Reach the right team, fast
              </h1>
              <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/85">
                Appointments, questions, or donation support. We respond with clarity and care.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`tel:${CONTACT_INFO.emergency}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-b from-red-500 to-red-600 shadow-[0_18px_40px_-25px_rgba(239,68,68,0.85)]"
                >
                  <Siren className="h-5 w-5" />
                  Emergency call
                </Button>
              </a>

              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-gradient-to-b from-medical-600 to-medical-700 shadow-[0_18px_40px_-25px_rgba(2,132,199,0.85)]"
                onClick={() => donate.open('contact-hero')}
              >
                <Heart className="h-5 w-5 fill-white" />
                Donate
              </Button>
            </div>
          </MotionReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {info.map((item, idx) => (
              <MotionReveal key={item.title} delay={0.05 * idx}>
                <a
                  href={item.href}
                  className="group block rounded-2xl border border-slate-200/60 bg-white/75 p-4 backdrop-blur-md shadow-[0_18px_45px_-35px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-transform"
                >
                  <div className="flex items-start gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-b ${item.tone}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">{item.title}</p>
                      <p className="mt-1 text-sm font-extrabold text-slate-900 truncate">{item.value}</p>
                    </div>
                  </div>
                </a>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 md:py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <MotionReveal>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Message</p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Send us a note</h2>
                    <p className="mt-2 text-sm md:text-base text-slate-600">
                      Share your request and we will guide you to the right department.
                    </p>

                    <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">First name</label>
                          <Input placeholder="Ayesha" autoComplete="given-name" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Last name</label>
                          <Input placeholder="Khan" autoComplete="family-name" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                          <Input type="email" placeholder="name@example.com" autoComplete="email" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                          <Input type="tel" placeholder="+92..." autoComplete="tel" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <Textarea rows={5} placeholder="How can we help you?" />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                        <p className="text-xs text-slate-500">
                          For emergencies, please call the 24/7 line instead of submitting this form.
                        </p>
                        <Button size="lg" className="rounded-full w-full sm:w-auto shrink-0">
                          Send message <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </Card>
              </MotionReveal>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <MotionReveal delay={0.05}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">Visit</p>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Find us in Mansehra</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      If you are coming for OPD, arrive a little earlier for registration.
                    </p>

                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
                        <div className="flex items-start gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-medical-50 text-medical-700 ring-1 ring-medical-100">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Address</p>
                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
                        <div className="flex items-start gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900">Emergency (24/7)</p>
                            <a
                              href={`tel:${CONTACT_INFO.emergency}`}
                              className="mt-1 block text-sm font-bold text-slate-900 hover:text-red-600"
                            >
                              {CONTACT_INFO.emergency}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
                        <div className="flex items-start gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900">Email</p>
                            <a
                              href={`mailto:${CONTACT_INFO.email}`}
                              className="mt-1 block text-sm text-slate-600 hover:text-slate-900"
                            >
                              {CONTACT_INFO.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-900 p-5 text-white">
                        <p className="text-sm font-semibold">Need appointment help?</p>
                        <p className="mt-1 text-xs text-white/75">
                          Call our team and we will guide you to the right clinic and timing.
                        </p>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="mt-4 block">
                          <Button className="w-full rounded-xl">
                            <Phone className="h-4 w-4" />
                            Call now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 md:mt-12">
            <MotionReveal>
              <Card className="overflow-hidden">
                <div className="p-5 border-b border-slate-200/60">
                  <p className="text-sm font-semibold text-slate-900">Location map</p>
                  <p className="mt-1 text-xs text-slate-600">Use the map for directions and nearby landmarks.</p>
                </div>
                <div className="h-[320px] sm:h-[420px] bg-slate-100">
                  <iframe
                    src={CONTACT_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Hospital Location"
                  />
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}