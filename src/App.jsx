import { useEffect } from "react";
import * as THREE from "three";
import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const canvas3d = new SceneInit("threeJsCanvas");
    canvas3d.initialize();
    canvas3d.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    canvas3d.scene.add(boxMesh);
  }, []);

  return (
    <div>
      <canvas id="threeJsCanvas" />
    </div>
  );
}

export default App;
