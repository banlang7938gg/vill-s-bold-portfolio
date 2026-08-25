# Vill's Bold Portfolio

ช่วยสร้างเว็ปไซต์ตามcontextนี้: เว็บไซต์พอร์ตโฟลิโอส่วนตัว

เจ้าของเว็บไซต์: บัลลังก์ ประคองศรี (ชื่อเล่น "วิว") เทคโนโลยี: HTML + Tailwind CSS + JavaScript อัปเดตล่าสุด: สรุปหลังตกลงทิศทางธีม (Bold Gradient Portfolio)

1. ภาพรวมโปรเจกต์

เว็บไซต์พอร์ตโฟลิโอส่วนตัวสำหรับแนะนำตัวตน ผลงาน และช่องทางติดต่อ เป้าหมายหลักคือใช้สมัครงาน/ฝึกงาน หรือแนบไปกับใบสมัคร โดยดึงบุคลิกจากตัวตนจริง (นักอ่าน นักเขียน คนรักทะเล) มาสื่อผ่านดีไซน์ที่ทันสมัย มีเอกลักษณ์ ไม่ใช่เทมเพลตทั่วไป

2. ข้อมูลตัวตน (Persona & Content Source)

หมวด รายละเอียด ชื่อ-สกุล บัลลังก์ ประคองศรี ชื่อเล่น วิว อายุ 22 ปี (เกิด 9 พ.ค. 2547) การศึกษา มหาวิทยาลัยราชภัฏเทพสตรี ที่อยู่ จังหวัดลพบุรี จุดเด่น ชอบอ่านหนังสือ, เขียนหนังสือ กิจกรรมที่ชอบ เที่ยวทะเล, ถ่ายรูป, อ่านหนังสือ งานอดิเรก เดินเล่น, ออกกำลังกาย, เลี้ยงแมว ติดต่อ 084-278-8403

⚠️ ข้อควรระวัง: ไม่นำเบอร์โทรของบิดา-มารดาขึ้นเว็บสาธารณะ ใส่เฉพาะช่องทางติดต่อของเจ้าของเว็บไซต์เท่านั้น

3. ทิศทางการออกแบบ (Design Direction)

คอนเซปต์: Bold Gradient Portfolio — อ้างอิงจากสไตล์ดีไซน์โปสเตอร์ portfolio cover ที่กำลังนิยม ผสมกับโทนสี navy/gold จากเรซูเม่เดิมของเจ้าของเว็บไซต์ เพื่อให้มีความต่อเนื่องของตัวตน

ลักษณะเด่น:

พื้นหลังไล่เฉด navy → blue → violet แนวทแยง

เส้นกริดบางๆ ซ้อนทับ (blueprint grid)

แสงเรืองแบบ blob เบลอมุมภาพ

ลายจุด (dot pattern) แบบเดียวกับในเรซูเม่เดิม — ใช้เป็นซิกเนเจอร์เชื่อมโยงตัวตน

ตัวอักษรหัวข้อใหญ่หนา สไตล์ poster

แบดจ์/พิลตกแต่งแบบเล่นสนุก (ปี, แท็กความสนใจ)

ไอคอนดาว/เข็มทิศสีทองหมุนช้าๆ เป็นโลโก้ส่วนตัว

ใช้รูปโปรไฟล์จริงแทนตัว "O" ในคำว่า PORTFOLIO (ครอปจากเรซูเม่เดิม)

ไฟล์ตัวอย่างที่ทำไว้แล้ว: portfolio-hero-theme.html (mockup ของ Hero Section ตามธีมนี้)

4. Design Tokens

สี (Color Palette)

ชื่อ Hex การใช้งาน Navy 950 #0A1230 พื้นหลังหลัก / ข้อความบนพื้นสว่าง Navy 900 #101B45 เฉดกลาง gradient Blue 700 #1D2E7A เฉดกลาง gradient Blue 500 #3350E0 เฉด gradient สว่างขึ้น Violet 400 #6C7CFA จุดสว่างสุดของ gradient Gold 400 #E8B54D สีเน้น (แบดจ์, ไอคอน, เส้นขอบ) Gold 300 #F3CC7A ข้อความเน้นบนพื้นเข้ม Paper 50 #F5F3EE ข้อความหลักบนพื้นเข้ม

ฟอนต์ (Typography)

Role ฟอนต์ น้ำหนัก Display (หัวข้อใหญ่) Kanit 800–900 Body (เนื้อหาไทย) Sarabun 400–600 Label/UI (ป้าย, เมนู, ตัวพิมพ์เล็ก tracked) Inter 500–600

Tailwind Config

tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {950:'#0A1230',900:'#101B45',800:'#162467'},
        blue: {700:'#1D2E7A',500:'#3350E0'},
        violet: {400:'#6C7CFA'},
        gold: {300:'#F3CC7A',400:'#E8B54D',500:'#D79F2E'},
        paper: {50:'#F5F3EE'},
      },
      fontFamily: {
        display: ['Kanit','sans-serif'],
        body: ['Sarabun','sans-serif'],
        label: ['Inter','sans-serif'],
      },
    }
  }
}


5. โครงสร้างเว็บไซต์ (Sections)

Navbar — โลโก้ (ไอคอนดาว/เข็มทิศ) + เมนู (หน้าแรก, เกี่ยวกับ, ผลงาน, ติดต่อ) + hamburger บนมือถือ

Hero Section — ตามธีม Bold Gradient ที่ทำ mockup ไว้แล้ว

About Me — เนื้อหาแนะนำตัวแบบเต็ม (ปรับจากเรซูเม่ให้เป็นธรรมชาติ)

Interests — การ์ดไอคอน: อ่านหนังสือ / เขียนหนังสือ / เที่ยวทะเล / ถ่ายรูป / เลี้ยงแมว

Gallery — รูปถ่ายผลงานการถ่ายภาพ

Blog / Writing Corner — งานเขียน/บทความ (ตอบโจทย์ที่ชอบเขียนหนังสือ)

Timeline การศึกษา — ราชภัฏเทพสตรี

Contact — ฟอร์มติดต่อ + เบอร์โทร + Social links

Footer

6. ฟีเจอร์ JavaScript

Mobile menu toggle

Smooth scroll ไปยัง section

Scroll reveal animation (IntersectionObserver)

Image lightbox สำหรับ gallery

Dark/Light mode toggle (เก็บค่าใน localStorage)

Contact form validation

Rotating badge / ambient motion (ตามที่ทำใน hero mockup)

7. โครงสร้างไฟล์แนะนำ

portfolio/
├── index.html
├── /css
│   └── style.css
├── /js
│   └── main.js
├── /assets
│   ├── /images
│   └── /icons
└── tailwind.config.js


8. Asset ที่เตรียมไว้แล้ว

รูปโปรไฟล์ครอปวงกลม (จากเรซูเม่เดิม) — ใช้แล้วใน hero mockup

Hero Section mockup พร้อมใช้งาน: portfolio-hero-theme.html

9. ขั้นตอนถัดไป

[ ] สร้างหน้าเว็บเต็มรูปแบบตามโครงสร้าง section ทั้งหมด

[ ] เขียนเนื้อหา About / Blog ฉบับเต็ม

[ ] รวบรวมรูปภาพสำหรับ Gallery

[ ] ทำฟอร์มติดต่อให้ใช้งานได้จริง (เชื่อม backend/email service)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/80ca59aa-e51c-44c7-8163-42bc63fc1780).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
