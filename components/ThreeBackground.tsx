'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Particles
    const particleCount = 1000
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80
      positions[i + 1] = (Math.random() - 0.5) * 80
      positions[i + 2] = (Math.random() - 0.5) * 80

      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      })
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 1.5,
      transparent: true,
      opacity: 0.3,
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Geometric shapes
    const geometries = [
      new THREE.TorusGeometry(8, 2, 16, 100),
      new THREE.OctahedronGeometry(6),
      new THREE.IcosahedronGeometry(5),
    ]

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    })

    const meshes: THREE.Mesh[] = []
    geometries.forEach((geometry) => {
      const mesh = new THREE.Mesh(geometry, wireMaterial)
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      )
      scene.add(mesh)
      meshes.push(mesh)
    })

    camera.position.z = 40

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Animate particles
      const positions = particles.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] += velocities[i].x
        positions[i3 + 1] += velocities[i].y
        positions[i3 + 2] += velocities[i].z

        if (Math.abs(positions[i3]) > 40) velocities[i].x *= -1
        if (Math.abs(positions[i3 + 1]) > 40) velocities[i].y *= -1
        if (Math.abs(positions[i3 + 2]) > 40) velocities[i].z *= -1
      }
      particles.attributes.position.needsUpdate = true

      particleSystem.rotation.y += 0.0005

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.002 * (index + 1)
        mesh.rotation.y += 0.001 * (index + 1)
      })

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

export default ThreeBackground
