import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './components/three'
import { Html } from '@react-three/drei'

function App() {

  return (
    <Canvas className='three-canvas-container' shadows>
      <Suspense fallback={<>Loading...</>}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App
