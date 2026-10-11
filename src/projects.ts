export type Category =
  | "Full Stack"
  | "Frontend"
  | "E-commerce"
  | "Web App"
  | "Landing Page";
export type Project = {
  id: number;
  title: string;
  category: Category;
  description: string;
  stack: string[];
  url: string;
  featured?: boolean;
  color: string;
};
// Demo portfolio entries: replace names, descriptions, and example.com links with real projects.
export const projects: Project[] = [
  {
    id: 1,
    title: "Andromeda Forum",
    category: "Full Stack",
    description:
      "Community discussion platform with authentication and moderation.",
    stack: ["React", "Supabase", "Go"],
    color: "cyan",
    url: "https://pitron-halomot.org/",
    featured: true,
  },
];
// export const projects: Project[] = examples.map((project, index) => ({
//   ...project,
//   id: index + 1,
//   url: "https://example.com",
//   featured: index < 6,
// }));
