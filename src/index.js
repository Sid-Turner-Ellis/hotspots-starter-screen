import * as THREE from 'three';


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas})

init()

const geo = new THREE.BoxGeometry(1,1,1)
const mat = new THREE.MeshPhongMaterial('#fb00ff')
const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh)











function init() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor('#e5e5e5')
    camera.position.z = 2;
    animate()
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}