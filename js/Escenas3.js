const scene = new THREE.Scene();
scene.background= new THREE.Color(0x800ad9);

let loader = new THREE.TextureLoader() 
loader.load('../img/Oess.jpg',function(texture){
 scene.background= texture
})  

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria
const material = new THREE.MeshStandardMaterial()


material.color.set("#00FA15")
material.metalness = 1;
material.roughness = 0;

const ambientalight = new THREE.AmbientLight(0xF7285D, 10000);
scene.add(ambientalight)

const pointlight = new THREE.PointLight(0xF7285D, 5000,10000)
scene.add(pointlight)
pointlight.position.set(5, 5, 5)

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16, 9, 5);

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );




/* camera.position.x = -10;
camera.position.y = 1; */
camera.position.z = 30;

//funcion 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate();


