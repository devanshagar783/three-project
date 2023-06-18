import React, { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Three = () => {
    // console.log(angleToRadians(90))
    // console.log(angleToRadians)

    const orbitRef = useRef(null);

    useFrame((state) => {
        // console.log("satte",state)
        // if(!!orbitRef.current){
        //     const {x,y} = state.mouse;
        //     orbitRef.current.setAzimuthalAngle(-x * angleToRadians(45));
        //     orbitRef.current.update()
        // }
    });

    useEffect(() => {
        // console.log("orbiut", orbitRef.current)
    }, []);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitRef} />

            {/* Ball */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color={"#ffffff"}
                    metalness={0.6}
                    roughness={0.5}
                />
            </mesh>

            {/* Floor */}
            <mesh
                rotation={[-angleToRadians(90), 0, 0]}
                position={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1ea3d8" />
                {/* <meshPhongMaterial side={THREE.BackSide} color="#1ea3d8" /> */}
            </mesh>

            {/* Ambient light */}
            <ambientLight args={["#ffffff", 0.5]} />

            {/* Spot Light */}
            <spotLight
                args={["#ffffff", 1.5, 7, angleToRadians(45), 0.55, 0.5]}
                position={[-3, 1, 0]}
                castShadow
            />

            {/* Environment */}
            <Environment background={true}>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial
                        side={THREE.BackSide}
                        color={"#2266cc"}
                    />
                </mesh>
            </Environment>
        </>
    );
};

export default Three;
