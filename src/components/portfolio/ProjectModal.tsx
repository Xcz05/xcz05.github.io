import type { Project } from "@/lib/portfolio-data";
import { X, ExternalLink, Check } from "lucide-react";
import { useEffect } from "react";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;
  const d = project.details;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up">
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card text-card-foreground shadow-elevated">
        <button onClick={onClose} className="sticky float-right top-4 right-4 mr-4 mt-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-accent">
          <X className="h-4 w-4" />
        </button>
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block rounded-full bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 mb-3">{project.category}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <Block label="Problem">{d.problem}</Block>
            <Block label="Solution">{d.solution}</Block>
            <Block label="My Role">{d.role}</Block>
            <Block label="Tools Used">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {d.tools.map((t) => <span key={t} className="text-xs rounded-full bg-accent text-accent-foreground px-2.5 py-1">{t}</span>)}
              </div>
            </Block>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {d.achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>{a}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Competencies Gained</h4>
            <div className="flex flex-wrap gap-2">
              {d.competencies.map((c) => <span key={c} className="text-xs rounded-full border border-border px-3 py-1.5">{c}</span>)}
            </div>
          </div>
          {d.link && (
            <a href={d.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-5 py-2.5 text-sm font-medium shadow-glow hover:opacity-90 transition">
              View Documentation <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">{label}</p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
