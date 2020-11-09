import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fox from '../assets/fox.glb'


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas})
let foxMesh = false


init()

{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.PointLight(color, intensity);
  light.position.set(1, 1, 1);
  scene.add(light);
}


// code starts here 
const loader = new GLTFLoader()

loader.load( fox, function ( gltf ) {
  foxMesh = gltf.scene
  foxMesh.position.set(5,-5,0)
  foxMesh.scale.set(3,3,3)


  scene.add(foxMesh)
  

  const size = 10;
  const divisions = 1;

  const gridHelper = new THREE.GridHelper( size, divisions );
  foxMesh.add( gridHelper );
  })
  


// and end here 

function init() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    console.log('wid',window.innerWidth);
    console.log('height',window.innerHeight);

    renderer.setClearColor('#e5e5e5')
    camera.position.z = 12;
    
    // giving the lookat a reference point
    camera.up.set(0, 1, 0);
    camera.lookAt(0, 0, 0);
    animate()
}
function animate() {
    if(foxMesh){
    foxMesh.rotation.y = 11.8
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}