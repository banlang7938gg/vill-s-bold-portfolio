import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import sea from "@/assets/gallery-sea.jpg";
import books from "@/assets/gallery-books.jpg";
import cat from "@/assets/gallery-cat.jpg";
import street from "@/assets/gallery-street.jpg";
import walk from "@/assets/gallery-walk.jpg";

const photos = [
  { src: sea, caption: "ทะเลตอนพระอาทิตย์ลับขอบฟ้า" },
  { src: books, caption: "มุมอ่าน-เขียนประจำวัน" },
  { src: street, caption: "แสงไฟริมถนนยามค่ำ" },
  { src: cat, caption: "เจ้าเหมียวข้างหน้าต่าง" },
  { src: walk, caption: "เดินเล่นเช้าวันหยุด" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const current = active === null ? null : photos[active];

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
          Gallery
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">ภาพที่ผมถ่าย</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          ภาพส่วนใหญ่มาจากการเดินเล่นและทริปทะเล — คลิกที่ภาพเพื่อดูขนาดเต็ม
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <Reveal key={p.caption} delay={i * 70} className={i === 0 ? "lg:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-navy-950/70 p-3 text-left font-label text-xs text-paper-50 opacity-0 transition-opacity group-hover:opacity-100">
                {p.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="ปิด"
            className="absolute right-5 top-5 rounded-full border border-border p-2"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-3xl">
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center font-label text-sm text-gold-300">
              {current.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
