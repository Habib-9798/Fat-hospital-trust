import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, Heart, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useDonate } from '../components/DonateContext';
import MotionReveal from '../components/motion/MotionReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';

function impactPoints(category: string) {
  switch (category.toLowerCase()) {
    case 'education':
      return [
        'Scholarships and learning materials for students',
        'Teacher support and classroom resources',
        'Long-term access through digital or local campuses',
      ];
    case 'infrastructure':
      return [
        'Clean water access with maintenance planning',
        'Site selection based on community need',
        'Local follow-up for repairs and upkeep',
      ];
    case 'welfare':
      return [
        'Food and ration support for families in hardship',
        'Orphan sponsorship with consistent follow-up',
        'Emergency relief during seasonal crises',
      ];
    default:
      return [
        'Direct benefit for under-served families',
        'Transparent use of funds with documentation',
        'Sustainable planning and follow-up',
      ];
  }
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const donate = useDonate();
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const impact = impactPoints(project.category);

  return (
    <>
      <Helmet>
        <title>{project.title} | FAT Projects</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.85), rgba(2,6,23,0.55), rgba(248,250,252,1)), url('${project.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(60rem_45rem_at_15%_20%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(55rem_35rem_at_85%_25%,rgba(2,132,199,0.26),transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-10 md:pt-24">
          <MotionReveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </MotionReveal>

          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="lg:col-span-8">
              <MotionReveal delay={0.06}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  {project.category}
                </div>
              </MotionReveal>

              <MotionReveal delay={0.12}>
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">{project.title}</h1>
              </MotionReveal>

              <MotionReveal delay={0.16}>
                <p className="mt-5 md:mt-6 text-base md:text-xl leading-relaxed text-white/85 max-w-3xl">
                  {project.summary}
                </p>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="rounded-full w-full sm:w-auto"
                    onClick={() => donate.open(`project:${project.id}`)}
                  >
                    <Heart className="h-5 w-5 fill-white" />
                    Donate to this project
                  </Button>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full w-full bg-white/10 text-white border-white/20 hover:bg-white/15"
                    >
                      Ask a question <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </MotionReveal>
            </div>

            <div className="lg:col-span-4">
              <MotionReveal delay={0.24}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-medical-700">Impact focus</p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">Key outcomes we track</h3>
                    <div className="mt-5 grid gap-3">
                      {impact.map((p) => (
                        <div
                          key={p}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-slate-50 p-4"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-trust-50 text-trust-700 ring-1 ring-trust-100">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-slate-800">{p}</p>
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

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <MotionReveal>
                <SectionHeading
                  eyebrow="Overview"
                  title="What this project delivers"
                  description={project.description}
                />
              </MotionReveal>

              <div className="mt-8 md:mt-10 grid gap-6">
                <MotionReveal delay={0.05}>
                  <Card className="overflow-hidden">
                    <div className="p-6 sm:p-7">
                      <p className="text-sm font-semibold text-slate-900">How funds are used</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        Donations are allocated to core project costs (materials, labor, services) and essential follow-up (maintenance and reporting). We document key purchases and outcomes to keep donors informed.
                      </p>
                    </div>
                  </Card>
                </MotionReveal>

                <MotionReveal delay={0.08}>
                  <Card className="overflow-hidden">
                    <div className="p-6 sm:p-7">
                      <p className="text-sm font-semibold text-slate-900">What happens after delivery</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        We follow up with the local team and beneficiaries to ensure the project continues to work as intended. Where needed, we schedule maintenance and provide support to keep services running.
                      </p>
                    </div>
                  </Card>
                </MotionReveal>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <MotionReveal delay={0.08}>
                <Card className="overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">Support</p>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Help us keep it moving</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Every contribution helps fund materials, staffing, and follow-up reporting.
                    </p>

                    <div className="mt-6 grid gap-3">
                      <Button
                        size="lg"
                        className="rounded-full w-full"
                        onClick={() => donate.open(`project:${project.id}:sidebar`)}
                      >
                        <Heart className="h-5 w-5 fill-white" />
                        Donate now
                      </Button>
                      <Link to="/contact" className="w-full">
                        <Button size="lg" variant="outline" className="rounded-full w-full">
                          Contact our team <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                      <p className="text-sm font-semibold">Transparency note</p>
                      <p className="mt-1 text-xs text-white/75">
                        We can share a simple monthly report of progress and expenses on request.
                      </p>
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