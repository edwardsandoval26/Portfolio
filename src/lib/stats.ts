import fs from "fs";
import path from "path";
import { siteConfig } from "@/data/siteConfig";

/**
 * Dynamically computes portfolio stats at build/request time (server-only).
 * - projects:      number of files in src/content/projects
 * - technologies:  unique count across all skill categories
 * - publications:  length of siteConfig.publications
 */
export function getStats() {
    // Count project files
    const projectsDir = path.join(process.cwd(), "src/content/projects");
    let projects = 0;
    try {
        const files = fs.readdirSync(projectsDir);
        projects = files.filter((f) => !f.startsWith(".")).length;
    } catch {
        projects = 0;
    }

    // Count unique technologies from skills
    const allTechs = new Set<string>();
    for (const techs of Object.values(siteConfig.skills)) {
        for (const t of techs) {
            allTechs.add(t);
        }
    }
    const technologies = allTechs.size;

    // Count publications
    const publications = siteConfig.publications.length;

    return { projects, technologies, publications };
}
