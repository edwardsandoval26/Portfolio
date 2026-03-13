import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export function getContentBySlug<T>(
    folder: string,
    slug: string
): { frontmatter: T; content: string } {
    const filePath = path.join(contentDirectory, folder, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);
    return { frontmatter: data as T, content };
}

export function getAllContent<T>(
    folder: string
): { slug: string; frontmatter: T }[] {
    const dir = path.join(contentDirectory, folder);

    if (!fs.existsSync(dir)) {
        return [];
    }

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

    const items = files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(dir, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);
        return { slug, frontmatter: data as T };
    });

    // Sort by date descending
    items.sort((a, b) => {
        const dateA = new Date((a.frontmatter as Record<string, string>).date || 0);
        const dateB = new Date((b.frontmatter as Record<string, string>).date || 0);
        return dateB.getTime() - dateA.getTime();
    });

    return items;
}

export function getAllSlugs(folder: string): string[] {
    const dir = path.join(contentDirectory, folder);

    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}
