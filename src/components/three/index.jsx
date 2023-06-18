import React, { useEffect, useRef } from 'react'
import {angleToRadians} from "../../utils/angle"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Three = () => {

    // console.log(angleToRadians(90))
    // console.log(angleToRadians)

    const orbitRef = useRef(null)

    useFrame((state)=>{
        // console.log("satte",state)
        // if(!!orbitRef.current){
        //     const {x,y} = state.mouse;
        //     orbitRef.current.setAzimuthalAngle(-x * angleToRadians(45));
        //     orbitRef.current.update()
        // }
    })

    useEffect(()=>{
        console.log("orbiut", orbitRef.current)
    },[])

  return (
    <>

        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls ref={orbitRef}/>

        {/* Ball */}
        <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={"#ffffff"} />
        </mesh>

        {/* Floor */}
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0,0,0]} receiveShadow>
            <planeGeometry args={[7,7]} />
            <meshPhongMaterial color="#1ea3d8" />
        </mesh>
    
        {/* Ambient light */}
        <ambientLight args={["#ffffff", 0.5]} />

        {/* Directional Light */}
        <spotLight args={["#ffffff", 3, 5, angleToRadians(50), 0.55, 0.5]} position={[-4, 1, 0]} castShadow/>
    
    </>
  )
}

export default Three
