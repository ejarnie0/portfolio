import { notFound } from "next/navigation";
import { PROJECTS } from "../projectData";
import ProjectTemplate from "../components/projectTemplate";

export function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    return (async () => {
        const { slug } = await params;
        const project = PROJECTS[slug];
        return { title: project ? `${project.title} | Emma Jennings` : "Project Not Found" };
    })();
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    const project = PROJECTS[slug];
    if (!project) notFound();

    return <ProjectTemplate project={project} />;
}
