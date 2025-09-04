import React, { Suspense, useMemo, useState, useEffect } from "react";
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

const Earth = ({ useKTX2 }) => {
  const renderer = useThree((s) => s.gl);

  const ktx2 = useMemo(() => {
    if (!useKTX2) return null;
    return new KTX2Loader()
      .setTranscoderPath('https://unpkg.com/three@0.149.0/examples/jsm/libs/basis/')
      .detectSupport(renderer);
  }, [renderer, useKTX2]);

  const url = useKTX2 ? "./planet/scene.ktx2.glb" : "./planet/scene.glb";

  const gltf = useLoader(GLTFLoader, url, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
    if (ktx2) loader.setKTX2Loader(ktx2);
  });

  return (
    <primitive object={gltf.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [useKTX2, setUseKTX2] = useState(false);

  useEffect(() => {
    (async () => {
      const exists = await urlExists("./planet/scene.ktx2.glb");
      setUseKTX2(exists);
    })();
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 1]}
      gl={{ preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth useKTX2={useKTX2} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
