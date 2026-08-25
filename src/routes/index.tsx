import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Camera, Cat, Compass, Dumbbell, Footprints, GraduationCap, PenLine, Phone, Waves } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Gallery } from "@/components/portfolio/Gallery";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "บัลลังก์ ประคองศรี (วิว) — พอร์ตโฟลิโอส่วนตัว" },
      {
        name: "description",
        content:
          "พอร์ตโฟลิโอของบัลลังก์ ประคองศรี นักศึกษามหาวิทยาลัยราชภัฏเทพสตรี ผู้รักการอ่าน การเขียน การถ่ายภาพ และทะเล",
      },
      { property: "og:title", content: "บัลลังก์ ประคองศรี (วิว) — พอร์ตโฟลิโอส่วนตัว" },
      {
        property: "og:description",
        content: "แนะนำตัวตน ผลงานถ่ายภาพ งานเขียน และช่องทางติดต่อของวิว จากลพบุรี",
      },
    ],
  }),
  component: Index,
});

const interests = [
  { icon: BookOpen, title: "อ่านหนังสือ", text: "อ่านได้ทั้งวรรณกรรมและสารคดี ชอบเก็บประโยคที่ชอบไว้ในสมุด" },
  { icon: PenLine, title: "เขียนหนังสือ", text: "เขียนเรื่องสั้นและบันทึกความคิดเป็นประจำ" },
  { icon: Waves, title: "เที่ยวทะเล", text: "ทะเลคือที่ที่ทำให้หัวโล่งที่สุด ไปทีไรก็ได้ไอเดียกลับมา" },
  { icon: Camera, title: "ถ่ายรูป", text: "ชอบถ่ายแสงธรรมชาติ ผู้คน และบรรยากาศของเมืองเล็ก ๆ" },
  { icon: Cat, title: "เลี้ยงแมว", text: "มีเจ้าเหมียวเป็นเพื่อนคู่โต๊ะเขียนงานเสมอ" },
  { icon: Footprints, title: "เดินเล่น & ออกกำลังกาย", text: "เดินและออกกำลังกายเพื่อจัดระเบียบความคิด" },
];

const posts = [
  {
    title: "เสียงคลื่นกับหน้ากระดาษเปล่า",
    date: "บันทึกจากทริปทะเล",
    text: "ทุกครั้งที่ไม่รู้จะเขียนอะไร ผมจะกลับไปหาทะเล เพราะเสียงคลื่นสอนให้รู้ว่าเรื่องเล่าไม่จำเป็นต้องสมบูรณ์ตั้งแต่ประโยคแรก",
  },
  {
    title: "อ่านวันละนิด เปลี่ยนวิธีคิดทั้งปี",
    date: "ว่าด้วยนิสัยการอ่าน",
    text: "จากคนที่อ่านจบปีละเล่ม กลายเป็นคนที่พกหนังสือติดกระเป๋าเสมอ — สิ่งที่เปลี่ยนไม่ใช่ความขยัน แต่เป็นการเลือกหนังสือที่อยากอ่านจริง ๆ",
  },
  {
    title: "ถ่ายรูปคือการเขียนด้วยแสง",
    date: "บันทึกช่างภาพมือใหม่",
    text: "กล้องกับปากกาทำงานคล้ายกันมาก ทั้งคู่บังคับให้เรามองสิ่งธรรมดารอบตัวให้ช้าลงกว่าเดิมสักหน่อย",
  },
];

const timeline = [
  { year: "2547", title: "เกิดที่จังหวัดลพบุรี", text: "9 พฤษภาคม 2547 — เติบโตในครอบครัวที่สนับสนุนการอ่าน" },
  { year: "ปัจจุบัน", title: "มหาวิทยาลัยราชภัฏเทพสตรี", text: "กำลังศึกษาอยู่ และตั้งใจนำความรู้ไปพัฒนาตนเองสู่การทำงานจริง" },
  { year: "ถัดไป", title: "มองหางาน / ฝึกงาน", text: "อยากทำงานที่ได้ใช้ทั้งงานเขียน ความคิดสร้างสรรค์ และการถ่ายภาพ" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About */}
      <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              About me
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              สวัสดีครับ
              <br />
              ผมชื่อ <span className="text-gold-gradient">วิว</span>
            </h2>
            <div className="dot-pattern mt-8 h-16 w-32 opacity-60" aria-hidden />
          </Reveal>

          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-paper-50/85">
            <p>
              ผมชื่อ บัลลังก์ ประคองศรี ชื่อเล่นว่า “วิว” ปัจจุบันอายุ 22 ปี อาศัยอยู่ที่จังหวัดลพบุรี
              และกำลังศึกษาอยู่ที่มหาวิทยาลัยราชภัฏเทพสตรี
            </p>
            <p>
              สิ่งที่อยู่กับผมมาตลอดคือหนังสือกับปากกา ผมชอบอ่านเพราะมันพาไปเจอมุมมองที่ไม่เคยคิดถึง
              และชอบเขียนเพราะมันช่วยเรียบเรียงสิ่งที่อยู่ในหัวให้เป็นรูปเป็นร่าง เวลาว่างผมมักออกไปเดินเล่น
              ถ่ายรูป หรือหาโอกาสไปทะเลสักครั้ง
            </p>
            <p>
              ผมหวังเป็นอย่างยิ่งว่าจะได้นำความรู้และประสบการณ์จากการศึกษาไปพัฒนาตนเอง
              รวมถึงเรียนรู้สิ่งใหม่ ๆ เพื่อเตรียมความพร้อมสำหรับการทำงานในอนาคต
            </p>
            <dl className="grid grid-cols-2 gap-4 pt-2 font-label text-sm">
              <div className="card-glass rounded-2xl p-4">
                <dt className="text-xs text-muted-foreground">วัน-เดือน-ปีเกิด</dt>
                <dd className="mt-1 font-semibold">09 พฤษภาคม 2547</dd>
              </div>
              <div className="card-glass rounded-2xl p-4">
                <dt className="text-xs text-muted-foreground">ที่อยู่</dt>
                <dd className="mt-1 font-semibold">จังหวัดลพบุรี</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="relative overflow-hidden bg-navy-900/50 py-24">
        <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              Interests
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">สิ่งที่ผมชอบ</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((it, i) => (
              <Reveal key={it.title} delay={i * 70}>
                <article className="card-glass h-full rounded-3xl p-6 transition-transform hover:-translate-y-1">
                  <it.icon className="size-8 text-gold-400" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-xl font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Writing */}
      <section id="writing" className="relative overflow-hidden bg-navy-900/50 py-24">
        <div
          className="glow-blob absolute -right-20 top-10 size-72 bg-blue-500"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              Writing corner
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">มุมงานเขียน</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              บันทึกและบทความสั้น ๆ ที่ผมเขียนไว้ระหว่างทาง
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="card-glass flex h-full flex-col rounded-3xl border-l-2 border-l-gold-400 p-6">
                  <p className="font-label text-xs uppercase tracking-widest text-gold-300">{p.date}</p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            Education
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">เส้นทางของผม</h2>
        </Reveal>

        <ol className="mt-10 space-y-6 border-l border-border pl-6">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <li className="relative">
                <span className="absolute -left-[1.95rem] top-1.5 flex size-4 items-center justify-center rounded-full bg-gold-400">
                  <GraduationCap className="size-2.5 text-navy-950" />
                </span>
                <p className="font-label text-xs uppercase tracking-widest text-gold-300">{t.year}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-hero-gradient py-24">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="dot-pattern absolute bottom-10 left-8 hidden size-28 opacity-60 md:block" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">คุยกันได้เลยครับ</h2>
            <p className="mt-4 max-w-md text-paper-50/85">
              สนใจร่วมงาน อยากชวนเขียน หรืออยากคุยเรื่องหนังสือกับทะเล ทักมาได้เสมอ
            </p>
            <a
              href="tel:0842788403"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-gold-400/10 px-5 py-4 font-display text-lg font-bold text-gold-300"
            >
              <Phone className="size-5" /> 084-278-8403
            </a>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <Compass className="spin-slow size-6 text-gold-400" strokeWidth={1.6} />
          <p className="font-display text-sm font-semibold">บัลลังก์ ประคองศรี (วิว)</p>
          <p className="font-label text-xs text-muted-foreground">
            © {new Date().getFullYear()} — พอร์ตโฟลิโอส่วนตัว · จังหวัดลพบุรี
          </p>
        </div>
      </footer>
    </main>
  );
}
