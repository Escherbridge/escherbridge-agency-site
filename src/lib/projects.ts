import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  url?: string;
  image?: string;
  highlights?: string[];
  featured?: boolean;
  date: string;
  content: string;
}

export function getProjectSlugs(): string[] {
  try {
    return fs
      .readdirSync(projectsDirectory)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      tagline: data.tagline || "",
      description: data.description || "",
      technologies: data.technologies || [],
      url: data.url || undefined,
      image: data.image || undefined,
      highlights: data.highlights || undefined,
      featured: data.featured || false,
      date: data.date || "",
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      // Featured projects first, then by date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return projects;
}
