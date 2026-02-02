"use client";
import styles from "./page.module.css";
import Footer from "./components/footer";

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

const nodeTypes = { project: ProjectNode };

const initialNodes = [
  {
    id: "p1",
    type: "project",
    position: { x: 100, y: 100 },
    data: {
      label: "Got It",
      subtitle: "Website",
      bgUrl: "/paper1.png",
      href: "/projects", // change url later!!
    },
  },
  {
    id: "p2",
    type: "project",
    position: { x: 360, y: 20 },
    data: {
      label: "DayBreak",
      subtitle: `Web-Browser Game`,
      bgUrl: "/paper2.png",
      href: "/projects", // change url later!!
    },
  },
  {
    id: "p3",
    type: "project",
    position: { x: 700, y: 20 },
    data: {
      label: `Sailing Brochure`,
      subtitle: `InDesign & Photoshop`,
      bgUrl: "/paper3.png",
      href: "/projects", // change url later!!
    },
  },
  {
    id: "p4",
    type: "project",
    position: { x: 20, y: 360 },
    data: {
      label: `Skiing Posters`,
      subtitle: `Illustrator & Photoshop`,
      bgUrl: "/paper2.png",
      href: "/projects", // change url later!!
    },
  },
{
    id: "p5",
    type: "project",
    position: { x: 360, y: 360 },
    data: {
      label: `Realism Drawing`,
      subtitle: `Photoshop`,
      bgUrl: "/paper3.png",
      href: "/projects", // change url later!!
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

        <div className={styles.reactFlowContainer}>
          <h2>Double Click to Check out a Project!</h2>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
