import React from 'react';
import {
  ArrowRight,
  ExternalLink,
  Images,
  Play,
} from 'lucide-react';

import MotionReveal from './motion/MotionReveal';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

import {
  TIKTOK_PROFILE_URL,
  TIKTOK_VIDEOS,
} from '../constants';

type TikTokPost = {
  id: number;
  type: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

function TikTokCard({ post }: { post: TikTokPost }) {
  const isPhoto = post.type === 'photo';

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${post.title} on TikTok`}
      className="group block h-full"
    >
      <article className="h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_25px_70px_-50px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-45px_rgba(2,132,199,0.55)]">

        {/* Thumbnail */}
        <div className="relative aspect-[9/14] overflow-hidden bg-slate-900">
          <img
            src={post.thumbnail}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-slate-950/20" />

          {/* TikTok badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <span className="text-sm font-black">♪</span>
            TikTok
          </div>

          {/* Main center button */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/95 text-slate-950 shadow-2xl transition-all duration-300 group-hover:scale-110">
              {isPhoto ? (
                <Images className="h-7 w-7" />
              ) : (
                <Play className="ml-1 h-7 w-7 fill-current" />
              )}
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {isPhoto ? 'View on TikTok' : 'Watch on TikTok'}
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-medical-700">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {post.description}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-medical-700">
            {isPhoto ? 'View post' : 'Watch video'}

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </a>
  );
}

export default function TikTokVideos() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-medical-500/10 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-trust-500/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">

        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <SectionHeading
              eyebrow="Follow our journey"
              title="Latest from FAIT Hospital"
              description="See hospital activities, healthcare updates, community work, and our latest stories on our official TikTok account."
            />

            <a
              href={TIKTOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button
                variant="outline"
                className="w-full rounded-full sm:w-auto"
              >
                Visit our TikTok
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>

          </div>
        </MotionReveal>

        {/* Mobile horizontal slider */}
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:hidden">
          {TIKTOK_VIDEOS.map((post, index) => (
            <div
              key={post.id}
              className="min-w-[82%] snap-center"
            >
              <MotionReveal delay={index * 0.05}>
                <TikTokCard post={post} />
              </MotionReveal>
            </div>
          ))}
        </div>

        {/* Tablet + Desktop */}
        <div className="mt-10 hidden grid-cols-2 gap-6 sm:grid lg:grid-cols-3">
          {TIKTOK_VIDEOS.map((post, index) => (
            <MotionReveal
              key={post.id}
              delay={index * 0.05}
            >
              <TikTokCard post={post} />
            </MotionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionReveal delay={0.15}>
          <div className="mt-9 flex justify-center">
            <a
              href={TIKTOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-medical-700 transition-colors hover:text-medical-800"
            >
              See more on our TikTok

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}