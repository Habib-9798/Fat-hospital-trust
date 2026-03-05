import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import MotionReveal from '../components/motion/MotionReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useDonate } from '../components/DonateContext';

function uniqueCategories() {
  const set = new Set<string>();
  PROJECTS.forEach((p) => set.add(p.category));
  return ['All', ...Array.from(set)];
}

export default function Projects() {
  const donate = useDonate();
  const categories = React.useMemo(() => uniqueCategories(), []);
  const [active, setActive] = React.useState('All');

  const filtered = React.useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <Helmet>
        <title>Projects | FAT Foundation</title>
        <meta
          name="description"
          content="Explore charitable projects by Fayyaz Ur Rehman Alvi Trust: education, clean water, welfare support, and community programs."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2,6,23,0.82), rgba(2,6,23,0.55), rgba(248,250,252,1)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(60rem_45rem_at_15%_20%,rgba(16,185,129,0.24),transparent_60%),radial-gradient(55rem_35rem_at_85%_25%,rgba(2,132,199,0.28),transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-10 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="lg:col-span-8">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <Layers className="h-4 w-4" />
                  Foundation projects
                </div>
              </MotionReveal>

              <MotionReveal delay={0.06}>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  Work that lasts,
                  <span className="block text-white/90">built with transparency.</span>
                </h1>
              </MotionReveal>

              <MotionReveal delay={0.12}>
                <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/85 max-w-3xl">
                  We support communities through education, water access, welfare programs, and healthcare assistance. Every project is documented and delivered with accountability.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.16}>
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto"
                    onClick={() => donate.open('projects-hero')}
                  >
                    <Heart className="h-5 w-5 fill-white" />
                    Donate
                  </Button>

                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full w-full bg-white text-slate-900 border-white/70 hover:bg-white shadow-sm"
                    >
                      Talk to us <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="lg:col-span-4">
              <MotionReveal delay={0.18}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">How we report</p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">Monthly impact notes</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      We keep a simple reporting rhythm so donors can see what is funded, purchased, and delivered.
                    </p>
                    <div className="mt-5 grid gap-3">
                      {[
                        { t: 'Evidence', d: 'Photos, receipts, and beneficiary summaries.' },
                        { t: 'Clarity', d: 'Clear budgets and milestones.' },
                        { t: 'Follow-up', d: 'Maintenance and aftercare checks.' },
                      ].map((i) => (
                        <div key={i.t} className="rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                          <p className="text-sm font-bold text-slate-900">{i.t}</p>
                          <p className="mt-1 text-sm text-slate-600">{i.d}</p>
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

      {/* Grid */}
      <section className="py-16 md:py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="flex flex-col items-center text-center gap-6">
              <SectionHeading
                eyebrow="Explore"
                title="Browse projects by focus area"
                description="Select a category to quickly find the programs you care about."
                align="center"
              />

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((c) => {
                  const activeChip = c === active;
                  return (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={
                        'rounded-full px-4 py-2 text-sm font-semibold transition-all ' +
                        (activeChip
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-white/70 text-slate-700 border border-slate-200/60 hover:bg-white')
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </MotionReveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filtered.map((project, idx) => (
              <MotionReveal key={project.id} delay={0.04 * idx}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_25px_70px_-55px_rgba(15,23,42,0.85)] transition-transform duration-300 hover:-translate-y-1">
                  <Link to={`/projects/${project.id}`} className="block">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-medical-700">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-3">{project.summary}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                        View details <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>

                  {/* Visible on mobile, hover-only on desktop */}
                  <div className="absolute bottom-5 right-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="rounded-full"
                      onClick={() => donate.open(`project:${project.id}`)}
                    >
                      <Heart className="h-4 w-4 fill-white" />
                      Donate
                    </Button>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-12 md:mt-14">
            <MotionReveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_35px_120px_-95px_rgba(16,185,129,0.4)] backdrop-blur">
                <div className="relative p-6 sm:p-8 md:p-12">
                  <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-trust-500/15 blur-3xl" />
                  <div className="absolute -right-28 -bottom-24 h-80 w-80 rounded-full bg-medical-500/15 blur-3xl" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className="lg:col-span-8">
                      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-trust-700">Support</p>
                      <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        Fund a project, see the impact
                      </h3>
                      <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Your donation helps us deliver essentials faster and maintain programs for the long term.
                      </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-3">
                      <Button size="lg" className="rounded-full w-full" onClick={() => donate.open('projects-final-cta')}>
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
        </div>
      </section>
    </>
  );
}