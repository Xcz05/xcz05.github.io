import { useMemo, useState } from "react";
import {
  Download, Mail, Send, ArrowRight, Github, Linkedin, Instagram,
  Search, GraduationCap, Award, Briefcase, Sparkles, MapPin, Phone, Trophy,
} from "lucide-react";
import profileImg from "@/assets/profil3.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import { projects, skills, experiences, certificates, achievements, type Project } from "@/lib/portfolio-data";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const CATEGORIES = ["All", "UI/UX", "Software Engineering", "Documentation", "Data Analysis", "Academic Project"] as const;

export default function App() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_1u6uh87", // ganti Service ID
      "template_dvuwekk", // ganti Template ID
      formRef.current,
      "qc0LlPDFkquTRnOS6" // ganti Public Key
    )
    .then(() => {
  setSuccess(true);
  formRef.current?.reset();

  setTimeout(() => {
    setSuccess(false);
  }, 5000);
})
    .catch((error) => {
  console.error("FULL ERROR:", error);
  alert(`Status: ${error.status} | ${error.text}`);
    });
};
  const filtered = useMemo(() => projects.filter(p => {
    const matchCat = active === "All" || p.category === active;
    const q = query.trim().toLowerCase();
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
    return matchCat && matchQ;
  }), [active, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-[0.12] dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl -z-10" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-navy/20 blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
                Open to opportunities
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Hi, I'm <span className="text-gradient">Muhammad Raffi Fahrezi</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium">
                UI/UX Designer • Software Engineer • Digital Product Enthusiast
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              I bridge the gap between users, business goals, and technology by transforming ideas into impactful digital products. Experienced in UI/UX Design, Software Engineering, and Product Development, I strive to create intuitive experiences and scalable solutions that deliver meaningful value.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-medium shadow-glow hover:opacity-95 hover:scale-[1.02] transition">
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </a>
                <a
              href="/Muhammad_Raffi_Fahrezi_CV_ATS.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >Download CV <Download className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent transition">
                  Contact Me <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { n: "9+", l: "Projects" },
                  { n: "6+", l: "Certifications" },
                  { n: "3.90", l: "GPA" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                    <div className="text-2xl font-bold text-gradient">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto lg:mx-0 animate-fade-up">
              <div className="absolute -inset-6 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
              <div className="relative w-[280px] sm:w-[340px] aspect-square rounded-[2rem] overflow-hidden border-4 border-background shadow-elevated animate-float">
                <img src={profileImg} alt="Muhammad Raffi Fahrezi" className="h-full w-full object-cover" width={768} height={768} />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Cumlaude · GPA 3.90</span>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">DKI Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About Me" title="Bridging Design, Business, Technology and life long learner.">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
With a background in Information Technology and experience across UI/UX Design, Software Engineering, Technical Documentation and Product Development, I enjoy turning ideas into user-centered digital solutions.
            </p>
            <p>
              From conducting research and designing interfaces to developing systems and collaborating with stakeholders, I focus on creating products that are intuitive, functional, and aligned with real business needs.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <InfoCard icon={<GraduationCap className="h-5 w-5" />} title="Education" sub="IT - Universitas Brawijaya" />
              <InfoCard icon={<Trophy className="h-5 w-5" />} title="Honors" sub="Cumlaude · GPA 3.90" />
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-card hover:border-primary hover:text-primary transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="A timeline of roles and contributions.">
        <div className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
          {experiences.map((e, i) => (
            <div key={e.org} className="relative pb-8 last:pb-0 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="absolute -left-[18px] sm:-left-[22px] top-2 grid h-4 w-4 place-items-center rounded-full bg-background border-2 border-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{e.role}</p>
                    <h3 className="text-lg font-display font-semibold mt-0.5">{e.org}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {e.tech.map((t) => <span key={t} className="text-xs rounded-full bg-accent text-accent-foreground px-2.5 py-1">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="portfolio" eyebrow="Portfolio" title="Selected projects.">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, keywords…"
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-2.5 text-sm shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition border ${active === c ? "bg-navy text-navy-foreground border-navy shadow-card" : "bg-card border-border hover:border-primary hover:text-primary"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article key={p.id} className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur text-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.slice(0, 3).map((t) => <span key={t} className="text-[10px] rounded-full bg-accent text-accent-foreground px-2 py-0.5">{t}</span>)}
                </div>
                <button onClick={() => setOpen(p)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all">
                  View Details <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-muted-foreground">No projects match your search.</div>
          )}
        </div>
      </Section>

      <Section id="certificates" eyebrow="Certifications" title="Credentials and certifications.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((c, i) => (
            <div key={c.name} className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="relative aspect-[16/10] overflow-hidden">

  <img
    src={c.images[0]}
    alt={c.name}
    className="w-full h-full object-cover blur-sm group-hover:blur-none transition duration-500"/>

  <div className="absolute inset-0 bg-black/20"></div>

  <span className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1">
    {c.year}
  </span>

</div>
              <div className="p-5">
                <h3 className="font-display font-semibold leading-tight">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                
<button
  onClick={() => {
    setSelectedCertificate(c);
    setCurrentImage(0);
  }}
  className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-all"
>
  View Certificate
  <ArrowRight className="h-4 w-4" />
</button>              
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic background.">
        <div className="rounded-3xl bg-gradient-hero text-white p-8 sm:p-12 shadow-elevated relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-medium">
                <GraduationCap className="h-3.5 w-3.5" /> 2022 – 2025
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Universitas Brawijaya</h3>
              <p className="mt-1 text-white/80">Associate Degree in Information Technology</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Stat label="GPA" value="3.90" />
                <Stat label="Honors" value="Cumlaude" />
                <Stat label="Focus" value="UI/UX · Software Engineering" />
              </div>
            </div>
            <Trophy className="h-24 w-24 text-white/40 hidden sm:block" />
          </div>
        </div>
      </Section>

      <Section id="achievements" eyebrow="Achievements & Activities" title="Beyond the classroom.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow mb-4">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="contact" eyebrow="Contact" title="Let's build something together.">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Have a project, role, or collaboration in mind? Send a note — I read every message and reply within a day.
            </p>
            <div className="space-y-3">
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="raffifahrezi95@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raffifahrezi95@gmail.com&su=Hello%20Raffi"/>             
          <ContactRow
            icon={<Phone className="h-4 w-4" />}
            label="WhatsApp"
            value="+62 812 9592 9282"
            href="https://wa.me/6281295929282"/>              
          <ContactRow
            icon={<Linkedin className="h-4 w-4" />}
            label="LinkedIn"
            value="linkedin.com/in/muhammadraffifahrezi"
            href="https://www.linkedin.com/in/muhammadraffifahrezi"/>              
          <ContactRow
            icon={<Github className="h-4 w-4" />}
            label="GitHub"
            value="github.com/xcz05"
            href="https://github.com/xcz05"/>              
          <ContactRow
            icon={<Instagram className="h-4 w-4" />}
            label="Instagram"
            value="@zziicxz"
            href="https://instagram.com/zziicxz"/>             
          <ContactRow
            icon={<Instagram className="h-4 w-4" />}
            label="Instagram"
            value="@farezzii"
            href="https://instagram.com/farezzii"/>            
          </div>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-4">            
          <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"/>            
            </div>
            {success && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Thank you! Your message has been sent successfully.
            </div>
              )}
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-medium shadow-glow hover:opacity-95 transition">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground">Ezi</span>
              Muhammad Raffi Fahrezi
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">UI/UX Designer & Software Engineering Enthusiast based in DKI Jakarta, Indonesia.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["about", "experience", "portfolio", "certificates", "contact"].map(l => (
                <li key={l}><a href={`#${l}`} className="text-muted-foreground hover:text-foreground transition-colors capitalize">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Social</p>
              <div className="flex gap-2">
              {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/muhammadraffifahrezi",
                label: "LinkedIn",
              },
              {
                Icon: Github,
                href: "https://github.com/xcz05",
                label: "GitHub",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com/zziicxz",
                label: "Instagram",
              },
              {
                Icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=raffifahrezi95@gmail.com&su=Hello%20Raffi",
                label: "Email",
              },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-accent hover:scale-110 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Muhammad Raffi Fahrezi. All rights reserved.</span>
            <span>Designed & built with passion.</span>
          </div>
        </div>
      </footer>

      {selectedCertificate && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

  <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white">


      <button
        onClick={() => setSelectedCertificate(null)}
        className="absolute top-5 right-5 text-3xl hover:text-red-500"
      >
        ✕
      </button>

      <div className="p-6 border-b">

        <h2 className="text-3xl font-bold">
          {selectedCertificate.name}
        </h2>

        <div className="flex items-center gap-3 mt-4">

  <img
  src={selectedCertificate.logo}
  alt={selectedCertificate.name}
  className="w-10 h-10 object-contain border"
  onError={() => console.log(selectedCertificate.logo)}
/>

  <div>

    <p className="font-semibold">
      {selectedCertificate.issuer}
    </p>

    <p className="text-sm text-gray-500">
      Official Certification
    </p>

  </div>

</div>

        {selectedCertificate.verified && (
          <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            🟢 Verified Credential
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-6 text-gray-500">
          <span>🏢 {selectedCertificate.issuer}</span>
          <span>📅 {selectedCertificate.year}</span>
          <span>🔖 {selectedCertificate.credentialId}</span>
        </div>

      </div>

      <div className="p-6">

        <img
          src={selectedCertificate.images[currentImage]}
          alt={selectedCertificate.name}
          className="w-full max-h-[65vh] object-contain rounded-2xl"
        />

      </div>

      <div className="border-t p-5">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                setCurrentImage(
                  (currentImage - 1 + selectedCertificate.images.length) %
                  selectedCertificate.images.length
                )
              }
              className="border px-4 py-2 rounded-xl"
            >
              ◀ Prev
            </button>

            <span>
              {currentImage + 1} / {selectedCertificate.images.length}
            </span>

            <button
              onClick={() =>
                setCurrentImage(
                  (currentImage + 1) %
                  selectedCertificate.images.length
                )
              }
              className="border px-4 py-2 rounded-xl"
            >
              Next ▶
            </button>

          </div>

          <div className="flex gap-3 flex-wrap">

            <a
              href={selectedCertificate.images[currentImage]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 text-white px-4 py-2 rounded-xl"
            >
              Fullscreen
            </a>

            <a
              href={selectedCertificate.pdf}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
              Download PDF
            </a>

            {selectedCertificate.verify && (
              <a
                href={selectedCertificate.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Verify Credential
              </a>
            )}

          </div>

        </div>

      </div>

    </div>

  </div>
)}
      
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground mb-3">{icon}</div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur px-4 py-3">
      <div className="text-xs text-white/70">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
        {icon}
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input required name={name} type={type} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
    </div>
  );
}
