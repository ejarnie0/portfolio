import { notFound } from "next/navigation";

import { PROJECTS } from "../projectData";
import ProjectTemplate from "../components/projectTemplate";

export function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    const project = PROJECTS[params.slug];
    if (!project) return { title: "Project Not Found" };
    return { title: `${project.title} | Emma Jennings` };
}

export default function ProjectPage({ params }) {
    const project = PROJECTS[params.slug];
    if (!project) notFound();

    return <ProjectTemplate project={project} />;
}
