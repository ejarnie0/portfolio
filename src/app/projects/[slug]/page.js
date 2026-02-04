import { notFound } from "next/navigation";

// import your existing “individual project page” components
import GotIt from "../projectpages/gotIt.js";
import DayBreak from "../projectpages/dayBreak.js";
import SailingBrochure from "../projectpages/sailingBrochure.js";
import SkiingPosters from "../projectpages/skiingPosters.js";
import RealismDrawing from "../projectpages/realismDrawing.js";

// map slugs → components (and any metadata you want)
const PROJECTS = {
    "got-it": { title: "Got It", Component: GotIt },
    "daybreak": { title: "DayBreak", Component: DayBreak },
    "sailing-brochure": { title: "Sailing Brochure", Component: SailingBrochure },
    "skiing-posters": { title: "Skiing Posters", Component: SkiingPosters },
    "realism-drawing": { title: "Realism Drawing", Component: RealismDrawing },
};

// Prebuild these routes
export function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

// Dynamic metadata per project tab title
export function generateMetadata({ params }) {
    const project = PROJECTS[params.slug];
    if (!project) return { title: "Project Not Found" };
    return { title: `${project.title} | Emma Jennings` };
}

export default function ProjectPage({ params }) {
    const project = PROJECTS[params.slug];
    if (!project) notFound();

    const { Component } = project;
    return <Component />;
}
