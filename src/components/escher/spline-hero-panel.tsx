"use client";

import { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

const SCENE_URL = "https://prod.spline.design/5f4mZhX5Kg-Qpwk5/scene.splinecode";
const LOAD_TIMEOUT_MS = 7000;
const EXIT_DURATION_MS = 760;

export function SplineHeroPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [loaderState, setLoaderState] = useState<"visible" | "exiting" | "hidden">("visible");

  useEffect(() => {
    let active = true;
    let app: Application | undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      if (!active) return;
      setLoaderState("exiting");
      window.setTimeout(() => active && setLoaderState("hidden"), reducedMotion ? 0 : EXIT_DURATION_MS);
    };

    const timeout = window.setTimeout(finish, reducedMotion ? 100 : LOAD_TIMEOUT_MS);

    if (!reducedMotion && canvasRef.current) {
      app = new Application(canvasRef.current);
      app.load(SCENE_URL)
        .then(() => {
          if (!active) return;
          setSceneReady(true);
          window.clearTimeout(timeout);
          finish();
        })
        .catch(() => {
          window.clearTimeout(timeout);
          finish();
        });
    }

    return () => {
      active = false;
      window.clearTimeout(timeout);
      app?.dispose();
    };
  }, []);

  return (
    <>
      {loaderState !== "hidden" && (
        <div
          className={`site-loader ${loaderState === "exiting" ? "is-exiting" : ""}`}
          role="status"
          aria-live="polite"
          aria-label="Loading the Escherbridge interactive scene"
        >
          <div className="loader-mark" aria-hidden="true">
            <span className="loader-bridge" />
          </div>
          <div className="loader-type"><b>ESCHER</b><b>BRIDGE</b></div>
          <p>Constructing the impossible / please stand by</p>
        </div>
      )}

      <div className={`spline-panel ${sceneReady ? "is-ready" : ""}`}>
        <div className="spline-tile-field" aria-hidden="true" />
        <canvas ref={canvasRef} className="spline-canvas" aria-label="Interactive Escherbridge spatial sculpture" />
      </div>
    </>
  );
}
