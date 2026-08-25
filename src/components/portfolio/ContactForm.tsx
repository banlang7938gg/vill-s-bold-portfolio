import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "กรุณากรอกชื่อ").max(100, "ชื่อยาวเกินไป"),
  email: z.string().trim().email("อีเมลไม่ถูกต้อง").max(255, "อีเมลยาวเกินไป"),
  message: z.string().trim().min(5, "ข้อความสั้นเกินไป").max(1000, "ข้อความยาวเกินไป"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    toast.success("ส่งข้อความเรียบร้อย", {
      description: "ขอบคุณที่ติดต่อมา เดี๋ยววิวจะรีบตอบกลับครับ",
    });
  }

  const field =
    "w-full rounded-xl border border-input bg-secondary px-4 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold-400";

  return (
    <form onSubmit={onSubmit} noValidate className="card-glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-label text-xs font-semibold text-gold-300">
            ชื่อของคุณ
          </label>
          <input id="name" name="name" maxLength={100} className={`mt-2 ${field}`} placeholder="ชื่อ-สกุล" />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="font-label text-xs font-semibold text-gold-300">
            อีเมล
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            className={`mt-2 ${field}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="font-label text-xs font-semibold text-gold-300">
          ข้อความ
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          className={`mt-2 ${field} resize-none`}
          placeholder="อยากคุยเรื่องอะไรดีครับ..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-label text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
      >
        <Send className="size-4" /> ส่งข้อความ
      </button>

      {sent && (
        <p className="mt-4 font-label text-xs text-muted-foreground">
          หมายเหตุ: ตอนนี้ฟอร์มยังเป็นแบบตรวจสอบข้อมูลอย่างเดียว หากต้องการให้ส่งอีเมลจริง
          บอกผมได้เลย เดี๋ยวเชื่อมระบบหลังบ้านให้
        </p>
      )}
    </form>
  );
}
