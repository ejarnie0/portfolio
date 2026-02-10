"use client";
import Image from 'next/image'
import styles from "./page.module.css";
import Link from 'next/link';

// React Flow imports
import { useState, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ProjectNode from "./components/ProjectNode";
import { Tooltip } from "@mui/material";

import IconNode from "./components/IconNode";

const nodeTypes = {
  project: ProjectNode,
  icon: IconNode,
};

const initialNodes = [
  {
    id: "p1",
    type: "project",
    position: { x: 100, y: 70 },
    data: {
      label: "Got It",
      subtitle: "Website",
      bgUrl: "/paper1.png",
      href: "/projects/got-it",
      iconUrl: "/projects/gotItLogo.png",
    },
  },
  {
    id: "p2",
    type: "project",
    position: { x: 520, y: 50 },
    data: {
      label: "DayBreak",
      subtitle: `Web-Browser Game`,
      bgUrl: "/paper2.png",
      href: "/projects/daybreak",
      iconUrl: "/projects/daybreakLogo.png",
    },
  },
  {
    id: "p3",
    type: "project",
    position: { x: 900, y: 70 },
    data: {
      label: `Sailing Brochure`,
      subtitle: `InDesign & Photoshop`,
      bgUrl: "/paper3.png",
      href: "/projects/sailing-brochure",
      iconUrl: "/projects/2X/sailingLogo.png",
    },
  },
  {
    id: "p4",
    type: "project",
    position: { x: 100, y: 300 },
    data: {
      label: `Skiing Posters`,
      subtitle: `Illustrator & Photoshop`,
      bgUrl: "/paper2.png",
      href: "/projects/skiing-posters",
      iconUrl: "/projects/skiingPosterLogo.png",
    },
  },

// {
//     id: "p5",
//     type: "project",
//     position: { x: 500, y: 300 },
//     data: {
//       label: `Realism Drawing`,
//       subtitle: `Photoshop`,
//       bgUrl: "/paper3.png",
//       href: "/projects", // change url later!!
//       iconUrl: "/icons/gotit.png", // change url later!!
//     },
//   },
  {
    id: "p6",
    type: "icon",
    position: { x: 940, y: 75 },
    data: {
      iconUrl: "/yellow_line.png",
    },
  },
  {
    id: "p7",
    type: "icon",
    position: { x: 400, y: 340 },
    data: {
      iconUrl: "/blue_x.png",
    },
  },
  // {
  //   id: "p8",
  //   type: "icon",
  //   position: { x: 700, y: 300 },
  //   data: {
  //     iconUrl: "/star2.png",
  //   },
  // },
  {
    id: "p9",
    type: "icon",
    position: { x: 100, y: 65 },
    data: {
      iconUrl: "/light_blue_line.png",
    },
  },
  {
    id: "p10",
    type: "icon",
    origin: [0.5, 0.5],
    position: { x: 700, y: 70 },
    data: {
      iconUrl: "/blueberry.png",
    },
  },
];

const initialEdges = [{ id: "p1-p2", source: "p1", target: "p2" }];

export default function Home() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((ns) => applyNodeChanges(changes, ns)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((es) => applyEdgeChanges(changes, es)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((es) => addEdge(params, es)),
    []
  );

// Calculate node extent based on container size
  const flowWrapRef = useRef(null);

// Your node size (match your CSS)
const NODE_W = 300;
const NODE_H = 300;

const [nodeExtent, setNodeExtent] = useState([[0, 0], [0, 0]]);

useEffect(() => {
  const el = flowWrapRef.current;
  if (!el) return;

  const update = () => {
    const current = flowWrapRef.current;
    if (!current) return;

    const rect = current.getBoundingClientRect();
    const maxX = Math.max(0, rect.width - NODE_W);
    const maxY = Math.max(0, rect.height - NODE_H);
    setNodeExtent([[0, 0], [maxX, maxY]]);
  };

  // wait for layout
  requestAnimationFrame(update);

  const ro = new ResizeObserver(() => requestAnimationFrame(update));
  ro.observe(el);

  return () => ro.disconnect();
}, []);



  return (
    <div className={styles.page}>
          <h3 className={styles.h3}>
            I'm a Web Developer and Graphic Designer
          </h3>
      <main className={styles.main}>
        <div className={styles.description}>
          <h2 className={styles.h2}>
            Do you think I'm coming off as cool and goofy 
            while keeping my professional demeanor?
          </h2>
          <p>
            I really hope that's coming across well!
            <br />
            <br />
            I love the study of art and design, I find it fascinating how humans
            interact with art, not only in our day to day lives, but how we make
            it a part of ourselves.
          </p>
        </div>
          
        <div className={styles.stickersLarge}>
          <div 
            className={styles.stickerWrap}
            style={{
                  position: "absolute",
                  top: "1rem",
                  right: "52rem",
                  transform: "rotate(-20deg)",
                  zIndex: 2,
            }}
          >
            <Image
                src="/star1.png"
                width={90}
                height={90}
                alt="Star Illustration"
                
              />
          </div>
        </div>
        <div className={styles.stickersSmall}>
          <Image
              src="/orange2.png"
              width={250}
              height={250}
              alt="Orange Illustration"
              style={{
                position: "absolute",
                top: "-2rem",
                right: "7rem",
                zIndex: 2,
              }}
            />
            <Image
              src="/blueberry.png"
              width={80}
              height={80}
              alt="Blueberry Illustration"
              style={{
                position: "absolute",
                top: "7.5rem",
                right: "17rem",
                zIndex: 2,
              }}
            />
            <Image
              src="/blue_heart.png"
              width={150}
              height={150}
              alt="Blue Heart Illustration"
              style={{
                position: "absolute",
                top: "18rem",
                right: "12rem",
                zIndex: 2,
              }}
            />
            <Image
              src="/star2.png"
              width={60}
              height={60}
              alt="Star Illustration"
              style={{
                position: "absolute",
                top: "24rem",
                right: "10rem",
                transform: "rotate(10deg)",
                zIndex: 2,
              }}
            />
        </div>
        <div className={styles.stickersMedium}>
            
            <Image
              src="/star2.png"
              width={60}
              height={60}
              alt="Star Illustration"
              style={{
                position: "absolute",
                top: "18rem",
                right: "28rem",
                transform: "rotate(-15deg)",
                zIndex: 2,
              }}
            />
            <Image
              src="/red_heart.png"
              width={200}
              height={200}
              alt="Red Heart Illustration"
              style={{
                position: "absolute",
                top: "20rem",
                right: "30rem",
                zIndex: 2,
              }}
            />
          </div>


        <div className={styles.reactFlowContainer} data-no-spark>
          <h2>Check out some of my work!</h2>
            <Tooltip
              title="Try Rearranging Things!"
              arrow
              placement="top-end"
              enterDelay={250}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "rgba(92, 130, 185, 0.95)", // or your color
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 600,
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.7rem",
                    border: "2px solid rgba(45, 88, 114, 0.35)",
                    boxShadow: "0 10px 20px rgba(45, 88, 114, 0.25)",
                  },
                },
                arrow: {
                  sx: {
                    color: "rgba(92, 130, 185, 0.95)",
                  },
                },
              }}
              >

              <div ref={flowWrapRef} className={styles.flowStage}>
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  nodeTypes={nodeTypes}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                  panOnDrag={false}
                  panOnScroll={false}
                  zoomOnScroll={false}
                  zoomOnPinch={false}
                  zoomOnDoubleClick={false}
                  autoPanOnNodeDrag={false}
                  preventScrolling={false}
                  // nodeExtent={nodeExtent} -- disable for free movement
                  />
            </div>
          </Tooltip>
        </div>

        <div className={styles.phoneProjects}>
          <div className={styles.description}>
            <Link href={"/projects"}>
              <h2 className={styles.h2}>
                Check out my Projects <span style={{ color:"var(--text-tertiary)" }}>here!</span>
              </h2>
            </Link>
              <Image
                src="/orange2.png"
                width={250}
                height={250}
                alt="Orange Illustration"
                style={{
                  position: "absolute",
                  top: "32.5rem",
                  right: "1rem",
                  zIndex: 2,
                }}
              />
              <Image
                src="/star2.png"
                width={60}
                height={60}
                alt="Star Illustration"
                style={{
                  position: "absolute",
                  top: "27rem",
                  right: "31rem",
                  transform: "rotate(-15deg)",
                  zIndex: 2,
                }}
              />
          </div>
        </div>
        

      </main>
    </div>
  );
}
