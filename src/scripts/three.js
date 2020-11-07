import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fox from '../assets/Fox.gltf'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas})

init()
console.log('savaloiii');

// start here 
const loader = new GLTFLoader()
let foxMesh;

loader.load( fox, function ( gltf ) {
  foxMesh = gltf.scene
  scene.add(foxMesh)
  })
  

const geo = new THREE.BoxGeometry(1,1,1)
const mat = new THREE.MeshPhongMaterial('#fb00ff')
const mesh = new THREE.Mesh(geo, mat)
mesh.position.set(0, 0, 0)
mesh.scale.set(100,100,100)
scene.add(mesh)











// and end here 

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor('#e5e5e5')
    camera.position.z = 10;
    // giving the lookat a reference point
    camera.up.set(0, 1, 0);
    camera.lookAt(0, 0, 0);
    animate()
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}