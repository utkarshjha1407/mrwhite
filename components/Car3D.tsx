"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Car3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)

    // Enhanced lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    // Camera position - adjusted for left-to-right view
    camera.position.z = 15

    // Load Tesla Cybertruck GLTF model
    let model: THREE.Group | null = null

    // Dynamic import to avoid TypeScript issues
    // @ts-ignore
    import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
      const loader = new GLTFLoader()
      
      loader.load(
        '/images/scene.gltf',
        (gltf: any) => {
          model = gltf.scene
          if (model) {
            // Make the Cybertruck aligned from left to right across the screen
            model.scale.set(10, 10, 10) // Larger scale to span the screen
            model.position.set(0, 0, -3) // Centered horizontally, at ground level, closer to camera
            // Rotate to face right (left to right alignment)
            model.rotation.y = 0 // Facing right (0 degrees)
            model.rotation.x = 0 // No tilt - perfectly horizontal
            model.rotation.z = 0 // No roll - perfectly level
            
            // Enable shadows for the model
            model.traverse((child: any) => {
              if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
              }
            })
            
            // Add the model to the scene
            scene.add(model)
            
            // Add enhanced headlight effects after model is loaded
            addHeadlights(scene, model)
            
            console.log('Tesla Cybertruck loaded successfully!')
          }
        },
        (progress: any) => {
          console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%')
        },
        (error: any) => {
          console.error('Error loading Tesla Cybertruck:', error)
        }
      )
    }).catch((error) => {
      console.error('Error importing GLTFLoader:', error)
    })

    // Function to add enhanced headlight effects with shadows
    const addHeadlights = (scene: THREE.Scene, carModel: THREE.Group) => {
      // Left headlight spotlight - focused on tagline
      const leftHeadlight = new THREE.SpotLight(0xffffff, 1.5, 15, Math.PI / 8, 0.3, 1)
      leftHeadlight.position.set(-1.5, 0.8, 1.5)
      leftHeadlight.target.position.set(-2, 1, 6) // Focus on left side of tagline
      leftHeadlight.castShadow = true
      leftHeadlight.shadow.mapSize.width = 1024
      leftHeadlight.shadow.mapSize.height = 1024
      leftHeadlight.shadow.camera.near = 0.1
      leftHeadlight.shadow.camera.far = 20
      scene.add(leftHeadlight)
      scene.add(leftHeadlight.target)
      
      // Right headlight spotlight - focused on tagline
      const rightHeadlight = new THREE.SpotLight(0xffffff, 1.5, 15, Math.PI / 8, 0.3, 1)
      rightHeadlight.position.set(1.5, 0.8, 1.5)
      rightHeadlight.target.position.set(2, 1, 6) // Focus on right side of tagline
      rightHeadlight.castShadow = true
      rightHeadlight.shadow.mapSize.width = 1024
      rightHeadlight.shadow.mapSize.height = 1024
      rightHeadlight.shadow.camera.near = 0.1
      rightHeadlight.shadow.camera.far = 20
      scene.add(rightHeadlight)
      scene.add(rightHeadlight.target)
      
      // Center headlight for main focus on tagline
      const centerHeadlight = new THREE.SpotLight(0xffffff, 2, 20, Math.PI / 10, 0.2, 1)
      centerHeadlight.position.set(0, 1.2, 1.5)
      centerHeadlight.target.position.set(0, 1.5, 8) // Focus directly on tagline
      centerHeadlight.castShadow = true
      centerHeadlight.shadow.mapSize.width = 1024
      centerHeadlight.shadow.mapSize.height = 1024
      centerHeadlight.shadow.camera.near = 0.1
      centerHeadlight.shadow.camera.far = 20
      scene.add(centerHeadlight)
      scene.add(centerHeadlight.target)
      
      // Add subtle glow around headlights for realism
      const headlightGlow1 = new THREE.PointLight(0xffffff, 0.6, 3)
      headlightGlow1.position.set(-1.5, 0.8, 1.5)
      scene.add(headlightGlow1)
      
      const headlightGlow2 = new THREE.PointLight(0xffffff, 0.6, 3)
      headlightGlow2.position.set(1.5, 0.8, 1.5)
      scene.add(headlightGlow2)
      
      const headlightGlow3 = new THREE.PointLight(0xffffff, 0.8, 4)
      headlightGlow3.position.set(0, 1.2, 1.5)
      scene.add(headlightGlow3)
    }

    // Animation loop - static (no movement)
    const animate = () => {
      requestAnimationFrame(animate)
      
      // No animation - completely static
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }} 
    />
  )
} 