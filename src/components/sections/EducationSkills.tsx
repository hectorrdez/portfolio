import Card from "@components/cards/Card";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";

type EducationEntry = {
  school: string;
  program: string;
  period: string;
};

const EDUCATION: EducationEntry[] = [
  {
    school: "IES Doctor Balmis",
    program: "Desarrollo de Aplicaciones Web (DAW)",
    period: "2025-2026",
  },
  {
    school: "IES Doctor Balmis",
    program: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    period: "2022-2024",
  },
  {
    school: "IES Cavanilles",
    program: "Mantenimiento Electrónico",
    period: "2018-2020",
  },
];

const SKILLS = [
  "Java",
  "Selenium",
  "Cucumber",
  "Appium",
  "Jenkins",
  "Docker",
  "Git",
  "GitLab",
  "SonarQube",
  "Jira",
  "REST APIs",
  "Axe",
  "WCAG",
  "TypeScript",
  "React",
  "Tailwind CSS",
];

export default function EducationSkills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="formacion"
      className="min-h-screen px-6 py-24 flex flex-col items-center gap-12"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal w-full max-w-3xl flex flex-col gap-12",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text">
            Formación
          </h2>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((entry) => (
              <Card
                key={entry.period}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {entry.program}
                  </h3>
                  <p className="text-text-muted">{entry.school}</p>
                </div>
                <span className="text-sm text-text-muted whitespace-nowrap">
                  {entry.period}
                </span>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text">
            Skills técnicos
          </h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm text-text-muted bg-surface-alt border border-border rounded-full px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
