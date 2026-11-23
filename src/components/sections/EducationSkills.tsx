import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";
import { GraduationCap, Terminal } from "lucide-react";

type EducationEntry = {
  shortName: string;
  program: string;
  school: string;
  period: string;
};

const EDUCATION: EducationEntry[] = [
  {
    shortName: "DAW",
    program: "Desarrollo de Aplicaciones Web",
    school: "IES Doctor Balmis (Alicante)",
    period: "2025 – 2026",
  },
  {
    shortName: "DAM",
    program: "Desarrollo de Aplicaciones Multiplataforma",
    school: "IES Doctor Balmis (Alicante)",
    period: "2022 – 2024",
  },
  {
    shortName: "FP Mantenimiento",
    program: "Mantenimiento Electrónico",
    school: "IES Cavanilles (Alicante)",
    period: "2018 – 2020",
  },
];

type SkillGroup = {
  label: string;
  dotColor: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Front",
    dotColor: "bg-primary",
    skills: ["TypeScript", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    label: "Back y datos",
    dotColor: "bg-secondary",
    skills: ["Node.js", "Express", "REST APIs", "MySQL", "Java", "Kotlin"],
  },
  {
    label: "IA",
    dotColor: "bg-tertiary",
    skills: [
      "Claude Code",
      "Codex",
      "Agentes y skills",
      "Prompt engineering",
      "Modelos locales",
    ],
  },
  {
    label: "Testing",
    dotColor: "bg-primary",
    skills: [
      "Playwright",
      "Selenium",
      "Appium",
      "Cucumber",
      "Bruno",
      "Axe-core",
      "WCAG",
    ],
  },
  {
    label: "DevOps",
    dotColor: "bg-secondary",
    skills: ["Docker", "Dokploy", "Jenkins", "GitLab", "SonarQube", "Git", "Jira"],
  },
];

export default function EducationSkills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="formacion"
      className="min-h-screen px-4 sm:px-8 py-24 flex items-center"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal w-full max-w-6xl mx-auto flex flex-col gap-6",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-code-sm uppercase tracking-widest text-primary">
            04 // Capacitación &amp; Skills
          </span>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Formación académica y arsenal técnico
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 bg-surface-container p-6 rounded-xl">
            <div className="flex items-center gap-2">
              <GraduationCap
                size={22}
                className="text-primary"
                aria-hidden
              />
              <h3 className="text-headline-md text-on-surface">
                Educación Oficial
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {EDUCATION.map((entry) => (
                <div
                  key={entry.period}
                  className="p-3 bg-surface-container-high rounded-lg flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-headline-sm text-on-surface">
                      {entry.shortName}
                    </span>
                    <span className="font-mono text-code-sm text-secondary">
                      {entry.period}
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface">
                    {entry.program}
                  </p>
                  <span className="text-body-sm text-outline">
                    {entry.school}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 bg-surface-container p-6 rounded-xl">
            <div className="flex items-center gap-2">
              <Terminal size={22} className="text-secondary" aria-hidden />
              <h3 className="text-headline-md text-on-surface">
                Matriz de Habilidades Técnicas
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col gap-1.5">
                  <h4 className="font-mono text-code-md text-on-surface flex items-center gap-1.5">
                    <span
                      className={StringUtils.JoinClassName(
                        "w-2 h-2 rounded-full",
                        group.dotColor,
                      )}
                      aria-hidden
                    />
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-surface-container-high text-on-surface font-mono text-code-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
