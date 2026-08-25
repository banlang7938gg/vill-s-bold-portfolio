import { ArrowDown, MapPin, Phone, Star } from "lucide-react";
import profile from "@/assets/wiew-profile.jpg.asset.json";

const tags = ["อ่านหนังสือ", "เขียนหนังสือ", "ทะเล", "ถ่ายรูป", "แมว"];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero-gradient">
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="glow-blob absolute -left-24 top-10 size-80 bg-violet-400"
        aria-hidden
      />
      <div
        className="glow-blob absolute -right-16 bottom-0 size-72 bg-gold-400"
        aria-hidden
      />
      <div
        className="dot-pattern absolute right-8 top-28 hidden size-28 opacity-70 md:block"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 font-label text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <Star className="size-3.5 fill-current" /> 2004 — Lopburi
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-black tracking-tight sm:text-7xl">
            PORTF
            <span className="relative mx-0.5 inline-flex size-[0.9em] translate-y-[0.08em] items-center justify-center overflow-hidden rounded-full border-2 border-gold-400 align-middle">
              <img
                src={profile.url}
                alt="บัลลังก์ ประคองศรี (วิว)"
                width={160}
                height={160}
                className="size-full scale-125 object-cover object-top"
              />
            </span>
            LIO
          </h1>

          <p className="mt-3 font-display text-2xl font-semibold text-gold-300 sm:text-3xl">
            บัลลังก์ ประคองศรี · “วิว”
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-50/80">
            นักศึกษามหาวิทยาลัยราชภัฏเทพสตรี วัย 22 ปี ที่โตมากับหนังสือ ปากกา และเสียงคลื่น
            ชอบเก็บเรื่องราวรอบตัวด้วยการเขียนและการถ่ายภาพ
            พร้อมเรียนรู้สิ่งใหม่เพื่อเตรียมความพร้อมสู่การทำงานจริง
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-secondary px-3.5 py-1.5 font-label text-xs font-medium text-paper-50/90"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-label text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" /> ติดต่อผม
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-label text-sm font-semibold text-paper-50 transition-colors hover:bg-secondary"
            >
              <ArrowDown className="size-4" /> รู้จักผมเพิ่ม
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="dot-pattern absolute -left-6 -top-6 size-24 opacity-60" aria-hidden />
          <div className="float-soft relative overflow-hidden rounded-[2rem] border border-gold-400/40 shadow-[var(--shadow-glow)]">
            <img
              src={profile.url}
              alt="ภาพถ่ายของบัลลังก์ ประคองศรี"
              width={588}
              height={974}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="card-glass absolute -bottom-5 -right-3 rounded-2xl px-4 py-3">
            <p className="flex items-center gap-2 font-label text-xs font-semibold text-gold-300">
              <MapPin className="size-3.5" /> จังหวัดลพบุรี
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
