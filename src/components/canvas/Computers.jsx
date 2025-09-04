import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader, KTX2Loader } from "three-stdlib";
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

import CanvasLoader from "../Loader";

async function urlExists(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

const Computers = ({ isMobile, useKTX2 }) => {
  const renderer = useThree((s) => s.gl);

  const ktx2 = useMemo(() => {
    if (!useKTX2) return null;
    return new KTX2Loader()
      .setTranscoderPath('https://unpkg.com/three@0.149.0/examples/jsm/libs/basis/')
      .detectSupport(renderer);
  }, [renderer, useKTX2]);

  const url = useKTX2 ? "./desktop_pc/scene.ktx2.glb" : "./desktop_pc/scene.glb";

  const gltf = useLoader(GLTFLoader, url, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
    if (ktx2) loader.setKTX2Loader(ktx2);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.6, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [useKTX2, setUseKTX2] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    (async () => {
      const exists = await urlExists("./desktop_pc/scene.ktx2.glb");
      setUseKTX2(exists);
    })();
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 1]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} useKTX2={useKTX2} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
