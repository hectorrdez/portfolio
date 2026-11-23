import { expect, test } from '@playwright/test';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../src/data/projects.data';

test('project data satisfies the catalogue requirements', () => {
  expect(PROJECTS_DATA.length).toBeGreaterThanOrEqual(12);
  expect(new Set(PROJECTS_DATA.map((project) => project.slug)).size).toBe(PROJECTS_DATA.length);

  for (const project of PROJECTS_DATA) {
    expect(PROJECT_CATEGORIES, project.slug).toContain(project.categoria);

    if (project.repoUrl !== undefined) {
      expect(project.repoUrl, project.slug).toMatch(/^https:\/\/github\.com\/hectorrdez\//);
    } else {
      expect(project.caseStudy, project.slug).toBeDefined();
      for (const field of ['problema', 'solucion', 'resultado'] as const) {
        expect(project.caseStudy?.[field]?.trim(), `${project.slug}: ${field}`).toBeTruthy();
      }
    }

    const text = JSON.stringify(project);
    expect(text, project.slug).not.toMatch(/api[_-]?key|password|bearer|secret|\btoken\s*[:=]/i);
    expect(text, project.slug).not.toMatch(/DXC/i);
    expect(text, project.slug).not.toMatch(/http:\/\//i);
  }

  for (const category of ['ia', 'testing'] as const) {
    expect(PROJECTS_DATA.some((project) => project.categoria === category && project.destacado), category).toBe(true);
  }
});
