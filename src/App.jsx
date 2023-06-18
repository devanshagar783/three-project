import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './components/three'

function App() {

  return (
    <Canvas className='three-canvas-container' shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App
